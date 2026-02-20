<script setup>
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import { avatarText } from '@core/utils/formatters'
import { useAppAbility } from '@/plugins/casl/useAppAbility'

const { can } = useAppAbility()
const isAdmin = can('manage', 'AccountAdmin')

const userListStore = useUserListStore()
const searchQuery = ref('')
const selectedGender = ref()
const selectedDistrict = ref()
const selectedGroup = ref()
const selectedZone = ref()
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
    group: selectedGroup.value,
    zone: selectedZone.value,
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

// 👉 교구 변경 시 구역 초기화
watch(selectedDistrict, () => {
  selectedZone.value = undefined
})

// 👉 filter definitions
const districtItems = Array.from({ length: 14 }, (_, i) => `${i + 1}교구`)
const zoneItems = Array.from({ length: 5 }, (_, i) => `${i + 1}구역`)

const filterDefs = computed(() => [
  { key: 'gender', label: '성별', icon: 'mdi-gender-male-female', items: ['남', '여'], disabled: false },
  { key: 'district', label: '교구', icon: 'mdi-church', items: districtItems, disabled: false },
  { key: 'zone', label: '구역', icon: 'mdi-account-group-outline', items: zoneItems, disabled: !selectedDistrict.value },
  { key: 'group', label: '회', icon: 'mdi-account-multiple', items: ['은빛장년회', '어머니회', '봉사회', '청년회'], disabled: false },
])

const filterModels = { gender: selectedGender, district: selectedDistrict, zone: selectedZone, group: selectedGroup }

const activeFilters = computed(() =>
  filterDefs.value.filter(f => filterModels[f.key].value != null),
)

const clearFilter = key => {
  filterModels[key].value = undefined
}

const clearAllFilters = () => {
  Object.values(filterModels).forEach(m => { m.value = undefined })
}

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
  fetchUsers()
}

// 삭제 확인 다이얼로그
const isDeleteDialogOpen = ref(false)
const pendingDeleteId = ref(null)
const isBulkDelete = ref(false)

const confirmDelete = id => {
  pendingDeleteId.value = id
  isBulkDelete.value = false
  isDeleteDialogOpen.value = true
}

const confirmBulkDelete = () => {
  isBulkDelete.value = true
  isDeleteDialogOpen.value = true
}

const executeDelete = () => {
  if (isBulkDelete.value) {
    const ids = selectedRows.value.map(checkId => Number(checkId.replace('check', '')))

    Promise.all(ids.map(id => userListStore.deleteUser(id))).then(() => {
      selectedRows.value = []
      fetchUsers()
      isDeleteDialogOpen.value = false
      showSnackbar(`${ids.length}명의 성도가 삭제되었습니다.`)
    })
  } else {
    userListStore.deleteUser(pendingDeleteId.value).then(() => {
      fetchUsers()
      isDeleteDialogOpen.value = false
      showSnackbar('성도가 삭제되었습니다.')
    })
  }
}

// 스낵바
const snackbar = ref({ show: false, message: '', color: 'primary' })

const showSnackbar = (message, color = 'primary') => {
  snackbar.value = { show: true, message, color }
}

const addNewUserAndNotify = userData => {
  userListStore.addUser(userData)
  fetchUsers()
  showSnackbar('성도가 등록되었습니다.')
}
</script>

<template>
  <section>
    <VCard>
      <!-- 👉 검색바 + 필터 칩 + 버튼 -->
      <VCardText class="d-flex flex-wrap align-center gap-3">
        <VTextField
          v-model="searchQuery"
          placeholder="이름, 전화번호, 차량번호 검색"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          style="max-inline-size: 16rem;"
          hide-details
        />

        <VDivider
          vertical
          class="mx-1"
          style="block-size: 1.5rem;"
        />

        <!-- 👉 필터 칩 -->
        <template
          v-for="filter in filterDefs"
          :key="filter.key"
        >
          <!-- 선택된 필터 -->
          <VChip
            v-if="filterModels[filter.key].value"
            closable
            color="primary"
            size="small"
            @click:close="clearFilter(filter.key)"
          >
            <template #prepend>
              <VIcon
                :icon="filter.icon"
                size="16"
                class="me-1"
              />
            </template>
            {{ filter.label }}: {{ filterModels[filter.key].value }}
          </VChip>

          <!-- 미선택 필터 -->
          <VMenu
            v-else
            location="bottom start"
          >
            <template #activator="{ props: menuProps }">
              <VChip
                v-bind="menuProps"
                variant="outlined"
                size="small"
                :disabled="filter.disabled"
                :append-icon="filter.disabled ? undefined : 'mdi-chevron-down'"
              >
                <template #prepend>
                  <VIcon
                    :icon="filter.icon"
                    size="16"
                    class="me-1"
                  />
                </template>
                {{ filter.label }}
              </VChip>
            </template>

            <VList density="compact">
              <VListItem
                v-for="item in filter.items"
                :key="item"
                :title="item"
                @click="filterModels[filter.key].value = item"
              />
            </VList>
          </VMenu>
        </template>

        <!-- 전체 해제 -->
        <VChip
          v-if="activeFilters.length"
          variant="text"
          size="small"
          color="error"
          @click="clearAllFilters"
        >
          필터 초기화
        </VChip>

        <VSpacer />

        <VBtn
          v-if="selectedRows.length"
          variant="tonal"
          color="error"
          prepend-icon="mdi-delete-outline"
          @click="confirmBulkDelete"
        >
          선택 삭제 ({{ selectedRows.length }})
        </VBtn>

        <VBtn
          variant="tonal"
          color="secondary"
          prepend-icon="mdi-tray-arrow-up"
        >
          내보내기
        </VBtn>

        <VBtn
          v-if="isAdmin"
          @click="isAddNewUserDrawerVisible = true"
        >
          성도 등록
        </VBtn>
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
              회
            </th>
            <th scope="col">
              생년월일
            </th>
            <th scope="col">
              구원일
            </th>
            <th scope="col">
              차량정보
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

            <!-- 👉 회 -->
            <td>
              {{ user.group }}
            </td>

            <!-- 👉 생년월일 -->
            <td>
              {{ user.birthDate }}
            </td>

            <!-- 👉 구원일 -->
            <td>
              {{ user.salvationDate || '-' }}
            </td>

            <!-- 👉 차량정보 -->
            <td>
              <div
                v-if="user.vehicleNumber"
                class="d-flex flex-column"
              >
                <span class="text-sm font-weight-medium">{{ user.vehicleNumber }}</span>
                <span class="text-xs text-medium-emphasis">{{ [user.vehicleColor, user.vehicleType].filter(Boolean).join(' ') }}</span>
              </div>
              <span
                v-else
                class="text-disabled"
              >-</span>
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

                    <VListItem @click="confirmDelete(user.id)">
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
              colspan="10"
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
      @user-data="addNewUserAndNotify"
    />

    <!-- 👉 삭제 확인 다이얼로그 -->
    <VDialog
      v-model="isDeleteDialogOpen"
      max-width="400"
    >
      <VCard title="삭제 확인">
        <VCardText>
          <template v-if="isBulkDelete">
            선택한 <strong>{{ selectedRows.length }}명</strong>의 성도를 삭제하시겠습니까?
          </template>
          <template v-else>
            해당 성도를 삭제하시겠습니까?
          </template>
          <div class="text-caption text-medium-emphasis mt-2">
            이 작업은 되돌릴 수 없습니다.
          </div>
        </VCardText>
        <VCardActions class="justify-end gap-2 pb-4 px-4">
          <VBtn
            variant="tonal"
            color="secondary"
            @click="isDeleteDialogOpen = false"
          >
            취소
          </VBtn>
          <VBtn
            color="error"
            @click="executeDelete"
          >
            삭제
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
  </section>
</template>

<style lang="scss">
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
