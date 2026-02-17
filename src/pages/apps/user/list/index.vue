<script setup>
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import { avatarText } from '@core/utils/formatters'

const userListStore = useUserListStore()
const searchQuery = ref('')
const selectedGender = ref()
const selectedDistrict = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])

// 👉 Fetching users
const fetchUsers = () => {
  userListStore.fetchUsers({
    q: searchQuery.value,
    gender: selectedGender.value,
    district: selectedDistrict.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
  }).then(response => {
    users.value = response.data.users
    totalPage.value = response.data.totalPage
    totalUsers.value = response.data.totalUsers
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchUsers)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 search filters
const genders = [
  { title: '남', value: '남' },
  { title: '여', value: '여' },
]

const districts = [
  { title: '1교구', value: '1교구' },
  { title: '2교구', value: '2교구' },
  { title: '3교구', value: '3교구' },
]

const isAddNewUserDrawerVisible = ref(false)

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = users.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = users.value.length + (currentPage.value - 1) * rowPerPage.value

  return `${ firstIndex }-${ lastIndex } / ${ totalUsers.value }`
})

// SECTION Checkbox toggle
const selectedRows = ref([])
const selectAllUser = ref(false)

const selectUnselectAll = () => {
  selectAllUser.value = !selectAllUser.value
  if (selectAllUser.value) {
    users.value.forEach(user => {
      if (!selectedRows.value.includes(`check${ user.id }`))
        selectedRows.value.push(`check${ user.id }`)
    })
  } else {
    selectedRows.value = []
  }
}

watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllUser.value = false
}, { deep: true })

const addRemoveIndividualCheckbox = checkID => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID)

    selectedRows.value.splice(index, 1)
  } else {
    selectedRows.value.push(checkID)
    selectAllUser.value = true
  }
}

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchUsers()
}

const deleteUser = id => {
  userListStore.deleteUser(id).then(() => {
    fetchUsers()
  })
}
</script>

<template>
  <section>
    <VCard
      title="필터"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 성별 필터 -->
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="selectedGender"
              label="성별"
              :items="genders"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>

          <!-- 👉 교구 필터 -->
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="selectedDistrict"
              label="교구"
              :items="districts"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VCardText class="d-flex flex-wrap gap-4">
        <!-- 👉 내보내기 버튼 -->
        <VBtn
          variant="tonal"
          color="secondary"
          prepend-icon="mdi-tray-arrow-up"
        >
          내보내기
        </VBtn>

        <VSpacer />

        <div class="app-user-search-filter d-flex align-center">
          <!-- 👉 검색 -->
          <VTextField
            v-model="searchQuery"
            placeholder="성도 검색"
            density="compact"
            class="me-3"
          />

          <!-- 👉 성도 등록 버튼 -->
          <VBtn @click="isAddNewUserDrawerVisible = true">
            성도 등록
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <!-- 👉 table head -->
        <thead>
          <tr>
            <th scope="col">
              <div style="width: 1.875rem;">
                <VCheckbox
                  :model-value="selectAllUser"
                  :indeterminate="(users.length !== selectedRows.length) && !!selectedRows.length"
                  @click="selectUnselectAll"
                />
              </div>
            </th>
            <th scope="col">
              이름
            </th>
            <th scope="col">
              전화번호
            </th>
            <th scope="col">
              교구
            </th>
            <th scope="col">
              구역
            </th>
            <th scope="col">
              생년월일
            </th>
            <th scope="col">
              관리
            </th>
          </tr>
        </thead>

        <!-- 👉 table body -->
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <!-- 👉 Checkbox -->
            <td>
              <div style="width: 1.875rem;">
                <VCheckbox
                  :id="`check${user.id}`"
                  :model-value="selectedRows.includes(`check${user.id}`)"
                  @click="addRemoveIndividualCheckbox(`check${user.id}`)"
                />
              </div>
            </td>

            <!-- 👉 이름 (+사진) -->
            <td>
              <div class="d-flex align-center">
                <VAvatar
                  variant="tonal"
                  color="primary"
                  class="me-3"
                  size="34"
                >
                  <VImg
                    v-if="user.photo"
                    :src="user.photo"
                  />
                  <span v-else>{{ avatarText(user.fullName) }}</span>
                </VAvatar>

                <div class="d-flex flex-column">
                  <h6 class="text-sm font-weight-medium">
                    <RouterLink
                      :to="{ name: 'apps-user-view-id', params: { id: user.id } }"
                      class="font-weight-medium user-list-name"
                    >
                      {{ user.fullName }}
                    </RouterLink>
                  </h6>
                  <span class="text-xs text-medium-emphasis">{{ user.gender }}</span>
                </div>
              </div>
            </td>

            <!-- 👉 전화번호 -->
            <td class="text-medium-emphasis">
              {{ user.phone }}
            </td>

            <!-- 👉 교구 -->
            <td>
              {{ user.district }}
            </td>

            <!-- 👉 구역 -->
            <td>
              {{ user.zone }}
            </td>

            <!-- 👉 생년월일 -->
            <td>
              {{ user.birthDate }}
            </td>

            <!-- 👉 관리 -->
            <td
              class="text-center"
              style="width: 5rem;"
            >
              <VBtn
                size="x-small"
                color="default"
                variant="plain"
                icon
              >
                <VIcon
                  size="24"
                  icon="mdi-dots-vertical"
                />

                <VMenu activator="parent">
                  <VList>
                    <VListItem :to="{ name: 'apps-user-view-id', params: { id: user.id } }">
                      <template #prepend>
                        <VIcon
                          icon="mdi-eye-outline"
                          :size="20"
                          class="me-3"
                        />
                      </template>

                      <VListItemTitle>상세보기</VListItemTitle>
                    </VListItem>

                    <VListItem @click="deleteUser(user.id)">
                      <template #prepend>
                        <VIcon
                          icon="mdi-delete-outline"
                          :size="20"
                          class="me-3"
                        />
                      </template>

                      <VListItemTitle>삭제</VListItemTitle>
                    </VListItem>
                  </VList>
                </VMenu>
              </VBtn>
            </td>
          </tr>
        </tbody>

        <!-- 👉 table footer -->
        <tfoot v-show="!users.length">
          <tr>
            <td
              colspan="7"
              class="text-center"
            >
              데이터가 없습니다
            </td>
          </tr>
        </tfoot>
      </VTable>

      <VDivider />

      <VCardText class="d-flex align-center flex-wrap justify-end gap-4 pa-2">
        <div
          class="d-flex align-center me-3"
          style="width: 171px;"
        >
          <span class="text-no-wrap me-3">페이지당 행:</span>

          <VSelect
            v-model="rowPerPage"
            density="compact"
            variant="plain"
            class="user-pagination-select"
            :items="[10, 20, 30, 50]"
          />
        </div>

        <div class="d-flex align-center">
          <h6 class="text-sm font-weight-regular">
            {{ paginationData }}
          </h6>

          <VPagination
            v-model="currentPage"
            size="small"
            :total-visible="1"
            :length="totalPage"
            @next="selectedRows = []"
            @prev="selectedRows = []"
          />
        </div>
      </VCardText>
    </VCard>

    <!-- 👉 성도 등록 -->
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      @user-data="addNewUser"
    />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 24.0625rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>

<style lang="scss" scope>
.user-pagination-select {
  .v-field__input,
  .v-field__append-inner {
    padding-block-start: 0.3rem;
  }
}
</style>
