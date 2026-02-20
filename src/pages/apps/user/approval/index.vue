<script setup>
import axios from '@axios'

// 👉 성도 등록 대기 목록
const pendingUsers = ref([])

const fetchPendingUsers = () => {
  axios.get('/apps/users/pending').then(res => {
    pendingUsers.value = res.data.registrations
  })
}

fetchPendingUsers()

// 👉 스낵바
const snackbar = ref({ show: false, message: '', color: 'primary' })

const showSnackbar = (message, color = 'primary') => {
  snackbar.value = { show: true, message, color }
}

// 👉 거절 확인 다이얼로그
const isRejectDialogOpen = ref(false)
const pendingRejectId = ref(null)

const confirmReject = id => {
  pendingRejectId.value = id
  isRejectDialogOpen.value = true
}

const executeReject = () => {
  axios.delete(`/apps/users/pending/${pendingRejectId.value}`).then(() => {
    fetchPendingUsers()
    isRejectDialogOpen.value = false
    showSnackbar('성도 등록 신청이 거절되었습니다.', 'error')
  })
}

// 👉 상세 보기 다이얼로그
const isDetailDialogOpen = ref(false)
const selectedUser = ref(null)

const openDetailDialog = user => {
  selectedUser.value = user
  isDetailDialogOpen.value = true
}

// 👉 승인
const approveUser = id => {
  axios.post(`/apps/users/pending/${id}/approve`).then(() => {
    fetchPendingUsers()
    showSnackbar('성도 등록이 승인되었습니다.')
  })
}

const genderColor = gender => gender === '남' ? 'info' : 'pink'
</script>

<template>
  <div>
    <!-- 👉 성도 등록 승인 대기 -->
    <VCard>
      <VCardText>
        <h6 class="text-h6">
          성도 등록 승인 대기
        </h6>
        <p class="text-body-2 text-medium-emphasis mb-0 mt-1">
          새로 접수된 성도 등록 신청을 검토하고 승인 또는 거절하세요.
        </p>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">연락처</th>
            <th scope="col">성별</th>
            <th scope="col">교구 / 구역</th>
            <th scope="col">회</th>
            <th scope="col">신청일</th>
            <th
              scope="col"
              class="text-center"
            >
              처리
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in pendingUsers"
            :key="user.id"
          >
            <td class="text-medium-emphasis">
              {{ index + 1 }}
            </td>
            <td>
              <span
                class="font-weight-medium text-primary cursor-pointer"
                @click="openDetailDialog(user)"
              >
                {{ user.fullName }}
              </span>
            </td>
            <td class="text-medium-emphasis">
              {{ user.phone || '-' }}
            </td>
            <td>
              <VChip
                v-if="user.gender"
                :color="genderColor(user.gender)"
                size="small"
                label
              >
                {{ user.gender }}
              </VChip>
              <span
                v-else
                class="text-medium-emphasis"
              >-</span>
            </td>
            <td class="text-medium-emphasis">
              {{ user.district || '-' }}
              <span v-if="user.zone"> / {{ user.zone }}</span>
            </td>
            <td class="text-medium-emphasis">
              {{ user.group || '-' }}
            </td>
            <td class="text-medium-emphasis">
              {{ user.requestedAt }}
            </td>
            <td class="text-center">
              <div class="d-flex align-center justify-center gap-2">
                <VBtn
                  size="small"
                  color="primary"
                  variant="tonal"
                  prepend-icon="mdi-check"
                  @click="approveUser(user.id)"
                >
                  승인
                </VBtn>
                <VBtn
                  size="small"
                  color="error"
                  variant="tonal"
                  prepend-icon="mdi-close"
                  @click="confirmReject(user.id)"
                >
                  거절
                </VBtn>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="!pendingUsers.length">
          <tr>
            <td
              colspan="8"
              class="text-center py-6 text-medium-emphasis"
            >
              대기 중인 성도 등록 신청이 없습니다.
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>

    <!-- 👉 상세 정보 다이얼로그 -->
    <VDialog
      v-model="isDetailDialogOpen"
      max-width="520"
      scrollable
    >
      <VCard
        v-if="selectedUser"
        :title="`${selectedUser.fullName} 등록 신청 상세`"
      >
        <VDivider />
        <VCardText>
          <VList density="compact">
            <VListItem
              prepend-icon="mdi-phone-outline"
              title="연락처"
              :subtitle="selectedUser.phone || '-'"
            />
            <VListItem
              prepend-icon="mdi-gender-male-female"
              title="성별"
              :subtitle="selectedUser.gender || '-'"
            />
            <VListItem
              prepend-icon="mdi-cake-variant-outline"
              title="생년월일"
              :subtitle="selectedUser.birthDate || '-'"
            />
            <VListItem
              prepend-icon="mdi-cross-outline"
              title="구원일"
              :subtitle="selectedUser.salvationDate || '-'"
            />
            <VListItem
              prepend-icon="mdi-map-marker-outline"
              title="주소"
              :subtitle="[selectedUser.address1, selectedUser.address2].filter(Boolean).join(' ') || '-'"
            />
            <VListItem
              prepend-icon="mdi-church"
              title="교구 / 구역"
              :subtitle="`${selectedUser.district || '-'} / ${selectedUser.zone || '-'}`"
            />
            <VListItem
              prepend-icon="mdi-account-group-outline"
              title="회"
              :subtitle="selectedUser.group || '-'"
            />
            <VListItem
              v-if="selectedUser.vehicleNumber"
              prepend-icon="mdi-car-outline"
              title="차량"
              :subtitle="`${selectedUser.vehicleType} ${selectedUser.vehicleColor} ${selectedUser.vehicleNumber}`"
            />
            <VListItem
              v-if="selectedUser.memo"
              prepend-icon="mdi-note-text-outline"
              title="메모"
              :subtitle="selectedUser.memo"
            />
            <VListItem
              prepend-icon="mdi-calendar-clock-outline"
              title="신청일"
              :subtitle="selectedUser.requestedAt"
            />
          </VList>
        </VCardText>
        <VDivider />
        <VCardActions class="gap-2 pa-4">
          <VBtn
            color="primary"
            variant="tonal"
            prepend-icon="mdi-check"
            @click="() => { isDetailDialogOpen = false; approveUser(selectedUser.id) }"
          >
            승인
          </VBtn>
          <VBtn
            color="error"
            variant="tonal"
            prepend-icon="mdi-close"
            @click="() => { isDetailDialogOpen = false; confirmReject(selectedUser.id) }"
          >
            거절
          </VBtn>
          <VSpacer />
          <VBtn
            variant="plain"
            @click="isDetailDialogOpen = false"
          >
            닫기
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- 👉 거절 확인 다이얼로그 -->
    <VDialog
      v-model="isRejectDialogOpen"
      max-width="400"
    >
      <VCard title="거절 확인">
        <VCardText>
          해당 성도 등록 신청을 거절하시겠습니까?
          <div class="text-caption text-medium-emphasis mt-2">
            이 작업은 되돌릴 수 없습니다.
          </div>
        </VCardText>
        <VCardActions class="justify-end gap-2 pb-4 px-4">
          <VBtn
            variant="tonal"
            color="secondary"
            @click="isRejectDialogOpen = false"
          >
            취소
          </VBtn>
          <VBtn
            color="error"
            @click="executeReject"
          >
            거절
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- 👉 스낵바 -->
    <VSnackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
      location="bottom end"
    >
      {{ snackbar.message }}
    </VSnackbar>
  </div>
</template>

<route lang="yaml">
meta:
  action: manage
  subject: AccountAdmin
</route>
