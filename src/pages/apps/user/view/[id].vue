<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'
import { avatarText } from '@core/utils/formatters'

const router = useRouter()
const userListStore = useUserListStore()
const route = useRoute()
const userData = ref()
const isEditing = ref(false)
const editForm = ref({})
const allUsers = ref([])

const loadUser = () => {
  userListStore.fetchUser(Number(route.params.id)).then(response => {
    userData.value = response.data.user
    isEditing.value = false
  })
}

loadUser()

// 가족 클릭으로 같은 라우트에서 id만 바뀔 때 데이터 다시 로드
watch(() => route.params.id, () => {
  loadUser()
})

// 전체 성도 목록 (가족 선택용)
userListStore.fetchAllUsers().then(response => {
  allUsers.value = response.data.users
})

// 현재 성도 본인을 제외한 선택 가능 목록
const selectableUsers = computed(() => {
  if (!userData.value) return allUsers.value

  return allUsers.value.filter(u => u.id !== userData.value.id)
})

const startEdit = () => {
  editForm.value = {
    ...userData.value,
    family: [...(userData.value.family || [])],
  }
  isEditing.value = true
}

const cancelEdit = () => {
  isEditing.value = false
}

const saveEdit = () => {
  // familyMembers를 다시 resolve
  const familyMembers = editForm.value.family
    .map(id => allUsers.value.find(u => u.id === id))
    .filter(Boolean)

  userData.value = { ...editForm.value, familyMembers }
  isEditing.value = false
  showSnackbar('성도 정보가 수정되었습니다.')
}

const updatePhoto = photoData => {
  userData.value = { ...userData.value, photo: photoData }
}

// 스낵바
const snackbar = ref({ show: false, message: '', color: 'primary' })

const showSnackbar = (message, color = 'primary') => {
  snackbar.value = { show: true, message, color }
}
</script>

<template>
  <section v-if="userData">
    <!-- 👉 뒤로가기 버튼 -->
    <div class="mb-4">
      <VBtn
        variant="text"
        color="secondary"
        size="small"
        prepend-icon="mdi-arrow-left"
        @click="router.back()"
      >
        뒤로가기
      </VBtn>
    </div>

    <VRow class="match-height">
      <!-- 👉 좌측: 기본 정보 패널 -->
      <VCol
        cols="12"
        md="5"
        lg="4"
      >
        <UserBioPanel
          :user-data="userData"
          @edit="startEdit"
          @update:photo="updatePhoto"
        />
      </VCol>

      <!-- 👉 우측: 상세 정보 / 수정 폼 -->
      <VCol
        cols="12"
        md="7"
        lg="8"
      >
      <!-- 보기 모드 -->
      <VCard
        v-if="!isEditing"
        title="상세 정보"
        class="h-100"
      >
        <VCardText class="py-4">
          <VRow dense>
            <!-- 주소 정보 -->
            <VCol cols="12">
              <h6 class="text-body-1 font-weight-bold mb-3">
                주소 정보
              </h6>
              <VDivider class="mb-4" />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">주소1</span>
                <p class="text-body-2 mb-0">
                  {{ userData.address1 || '-' }}
                </p>
              </div>
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">주소2 (상세주소)</span>
                <p class="text-body-2 mb-0">
                  {{ userData.address2 || '-' }}
                </p>
              </div>
            </VCol>

            <!-- 소속 정보 -->
            <VCol cols="12">
              <h6 class="text-body-1 font-weight-bold mb-3 mt-2">
                소속 정보
              </h6>
              <VDivider class="mb-4" />
            </VCol>

            <VCol
              cols="12"
              sm="4"
            >
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">교구</span>
                <p class="text-body-2 mb-0">
                  {{ userData.district || '-' }}
                </p>
              </div>
            </VCol>

            <VCol
              cols="12"
              sm="4"
            >
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">구역</span>
                <p class="text-body-2 mb-0">
                  {{ userData.zone || '-' }}
                </p>
              </div>
            </VCol>

            <VCol
              cols="12"
              sm="4"
            >
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">회</span>
                <p class="text-body-2 mb-0">
                  {{ userData.group || '-' }}
                </p>
              </div>
            </VCol>

            <!-- 기타 정보 -->
            <VCol cols="12">
              <h6 class="text-body-1 font-weight-bold mb-3 mt-2">
                기타 정보
              </h6>
              <VDivider class="mb-4" />
            </VCol>

            <VCol cols="12">
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">가족현황</span>

                <div
                  v-if="userData.familyMembers && userData.familyMembers.length"
                  class="d-flex flex-wrap gap-4 mt-3"
                >
                  <VCard
                    v-for="member in userData.familyMembers"
                    :key="member.id"
                    variant="outlined"
                    class="pa-3 cursor-pointer family-card"
                    @click="router.push({ name: 'apps-user-view-id', params: { id: member.id } })"
                  >
                    <div class="d-flex align-center gap-3">
                      <VAvatar
                        size="40"
                        color="primary"
                        variant="tonal"
                      >
                        <VImg
                          v-if="member.photo"
                          :src="member.photo"
                        />
                        <span v-else class="text-xs">{{ avatarText(member.fullName) }}</span>
                      </VAvatar>

                      <div>
                        <span class="text-body-2 font-weight-medium text-high-emphasis">
                          {{ member.fullName }}
                        </span>
                        <p class="text-xs text-medium-emphasis mb-0">
                          {{ member.phone }}
                        </p>
                      </div>
                    </div>
                  </VCard>
                </div>

                <p
                  v-else
                  class="text-body-2 mb-0 mt-1"
                >
                  -
                </p>
              </div>
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">차량</span>
                <p class="text-body-2 mb-0">
                  {{ userData.vehicle || '-' }}
                </p>
              </div>
            </VCol>

            <VCol cols="12">
              <div class="mb-4">
                <span class="text-sm text-medium-emphasis">메모</span>
                <p class="text-body-2 mb-0">
                  {{ userData.memo || '-' }}
                </p>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>

      <!-- 수정 모드 -->
      <VCard
        v-else
        title="성도 정보 수정"
      >
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="editForm.fullName"
                label="이름"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="editForm.phone"
                label="전화번호"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                v-model="editForm.gender"
                label="성별"
                :items="['남', '여']"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="editForm.birthDate"
                label="생년월일"
                placeholder="YYYY-MM-DD"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="editForm.salvationDate"
                label="구원일"
                placeholder="YYYY-MM-DD"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                v-model="editForm.district"
                label="교구"
                :items="Array.from({ length: 14 }, (_, i) => `${i + 1}교구`)"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="editForm.address1"
                label="주소1"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="editForm.address2"
                label="주소2 (상세주소)"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="editForm.zone"
                label="구역"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VTextField
                v-model="editForm.group"
                label="회"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                v-model="editForm.vehicle"
                label="차량"
                :items="['있음', '없음']"
              />
            </VCol>

            <VCol cols="12">
              <VAutocomplete
                v-model="editForm.family"
                :items="selectableUsers"
                item-title="fullName"
                item-value="id"
                label="가족현황"
                multiple
                chips
                closable-chips
                placeholder="성도를 검색하세요"
              >
                <template #item="{ props: itemProps, item }">
                  <VListItem v-bind="itemProps">
                    <template #prepend>
                      <VAvatar
                        size="32"
                        color="primary"
                        variant="tonal"
                        class="me-2"
                      >
                        <VImg
                          v-if="item.raw.photo"
                          :src="item.raw.photo"
                        />
                        <span v-else>{{ avatarText(item.raw.fullName) }}</span>
                      </VAvatar>
                    </template>
                    <template #subtitle>
                      {{ item.raw.phone }}
                    </template>
                  </VListItem>
                </template>
              </VAutocomplete>
            </VCol>

            <VCol cols="12">
              <VTextarea
                v-model="editForm.memo"
                label="메모"
                rows="3"
              />
            </VCol>

            <VCol cols="12">
              <VBtn
                class="me-3"
                @click="saveEdit"
              >
                저장
              </VBtn>
              <VBtn
                variant="tonal"
                color="secondary"
                @click="cancelEdit"
              >
                취소
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
    <!-- 👉 스낵바 -->
    <VSnackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
      location="bottom end"
    >
      {{ snackbar.message }}
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
.match-height {
  > [class*='v-col'] {
    display: flex;
    flex-direction: column;

    > * {
      flex: 1;
    }
  }
}

.family-card {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: 0 2px 8px rgba(var(--v-theme-primary), 0.15);
  }
}
</style>
