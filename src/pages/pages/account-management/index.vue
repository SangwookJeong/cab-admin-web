<script setup>
import axios from '@axios'
import { avatarText } from '@core/utils/formatters'
import { requiredValidator } from '@validators'

const accounts = ref([])
const isDrawerOpen = ref(false)
const isAddMode = ref(false)
const refForm = ref()

const selectedAccount = ref(null)
const form = ref({
  fullName: '',
  phone: '',
  password: '',
  passwordConfirm: '',
  role: 'client',
})

const passwordMatchValidator = v => v === form.value.password || '비밀번호가 일치하지 않습니다'
const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)

const roleItems = [
  { title: '관리자', value: 'admin' },
  { title: '일반', value: 'client' },
]

const fetchAccounts = () => {
  axios.get('/auth/accounts').then(res => {
    accounts.value = res.data.accounts
  })
}

fetchAccounts()

const openEdit = account => {
  isAddMode.value = false
  selectedAccount.value = account
  form.value = {
    email: account.email,
    fullName: account.fullName,
    phone: account.phone || '',
    password: '',
    passwordConfirm: '',
    role: account.role,
  }
  isDrawerOpen.value = true
}

const openAdd = () => {
  isAddMode.value = true
  selectedAccount.value = null
  form.value = { email: '', fullName: '', phone: '', password: '', passwordConfirm: '', role: 'client' }
  isDrawerOpen.value = true
}

const closeDrawer = () => {
  isDrawerOpen.value = false
  refForm.value?.reset()
  refForm.value?.resetValidation()
}

const saveAccount = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (!valid) return
    if (isAddMode.value) {
      axios.post('/auth/accounts', form.value).then(() => {
        fetchAccounts()
        closeDrawer()
        showSnackbar('계정이 추가되었습니다.')
      })
    } else {
      axios.put(`/auth/accounts/${selectedAccount.value.id}`, form.value).then(() => {
        fetchAccounts()
        closeDrawer()
        showSnackbar('계정이 수정되었습니다.')
      })
    }
  })
}

// 삭제 확인 다이얼로그
const isDeleteDialogOpen = ref(false)
const pendingDeleteId = ref(null)

const confirmDelete = id => {
  pendingDeleteId.value = id
  isDeleteDialogOpen.value = true
}

const executeDelete = () => {
  axios.delete(`/auth/accounts/${pendingDeleteId.value}`).then(() => {
    fetchAccounts()
    isDeleteDialogOpen.value = false
    showSnackbar('계정이 삭제되었습니다.')
  })
}

// 스낵바
const snackbar = ref({ show: false, message: '', color: 'primary' })

const showSnackbar = (message, color = 'primary') => {
  snackbar.value = { show: true, message, color }
}

const roleColor = role => role === 'admin' ? 'primary' : 'secondary'
const roleLabel = role => role === 'admin' ? '관리자' : '일반'
</script>

<template>
  <div>
    <VCard>
      <VCardText class="d-flex align-center justify-space-between">
        <h6 class="text-h6">
          회원 목록
        </h6>
        <VBtn
          prepend-icon="mdi-plus"
          @click="openAdd"
        >
          계정 추가
        </VBtn>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">계정</th>
            <th scope="col">이름</th>
            <th scope="col">연락처</th>
            <th scope="col">권한</th>
            <th scope="col" class="text-center">관리</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(account, index) in accounts"
            :key="account.id"
            class="cursor-pointer"
            @click="openEdit(account)"
          >
            <td class="text-medium-emphasis">{{ index + 1 }}</td>
            <td>
              <div class="d-flex align-center gap-3">
                <VAvatar
                  size="34"
                  color="primary"
                  variant="tonal"
                >
                  <VImg
                    v-if="account.avatar"
                    :src="account.avatar"
                  />
                  <span v-else>{{ avatarText(account.fullName || account.email) }}</span>
                </VAvatar>
                <span class="font-weight-medium">{{ account.email }}</span>
              </div>
            </td>
            <td>{{ account.fullName || '-' }}</td>
            <td class="text-medium-emphasis">{{ account.phone || '-' }}</td>
            <td>
              <VChip
                :color="roleColor(account.role)"
                size="small"
                label
              >
                {{ roleLabel(account.role) }}
              </VChip>
            </td>
            <td
              class="text-center"
              @click.stop
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
                    <VListItem @click="openEdit(account)">
                      <template #prepend>
                        <VIcon icon="mdi-pencil-outline" size="20" class="me-3" />
                      </template>
                      <VListItemTitle>수정</VListItemTitle>
                    </VListItem>
                    <VListItem @click="confirmDelete(account.id)">
                      <template #prepend>
                        <VIcon icon="mdi-delete-outline" size="20" class="me-3" />
                      </template>
                      <VListItemTitle>삭제</VListItemTitle>
                    </VListItem>
                  </VList>
                </VMenu>
              </VBtn>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="!accounts.length">
          <tr>
            <td colspan="6" class="text-center">데이터가 없습니다</td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>

    <!-- 👉 계정 등록/수정 드로어 -->
    <VNavigationDrawer
      v-model="isDrawerOpen"
      temporary
      :width="400"
      location="end"
    >
      <div class="d-flex align-center bg-var-theme-background px-5 py-2">
        <h6 class="text-h6">
          {{ isAddMode ? '계정 추가' : '계정 수정' }}
        </h6>
        <VSpacer />
        <VBtn
          size="small"
          color="secondary"
          variant="text"
          icon="mdi-close"
          @click="closeDrawer"
        />
      </div>

      <VDivider />

      <VCardText class="pt-5">
        <VForm
          ref="refForm"
          @submit.prevent="saveAccount"
        >
          <VRow>
            <!-- 계정 -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="계정"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 이름 -->
            <VCol cols="12">
              <VTextField
                v-model="form.fullName"
                label="이름"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 연락처 -->
            <VCol cols="12">
              <VTextField
                v-model="form.phone"
                label="연락처"
                placeholder="010-0000-0000"
              />
            </VCol>

            <!-- 비밀번호 -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="비밀번호"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                :rules="isAddMode ? [requiredValidator] : []"
                :placeholder="isAddMode ? '' : '변경 시에만 입력'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>

            <!-- 비밀번호 확인 -->
            <VCol cols="12">
              <VTextField
                v-model="form.passwordConfirm"
                label="비밀번호 확인"
                :type="isPasswordConfirmVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                :rules="isAddMode || form.password ? [requiredValidator, passwordMatchValidator] : []"
                :placeholder="isAddMode ? '' : '변경 시에만 입력'"
                @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
              />
            </VCol>

            <!-- 권한 -->
            <VCol cols="12">
              <VSelect
                v-model="form.role"
                label="권한"
                :items="roleItems"
                item-title="title"
                item-value="value"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-3"
            >
              <VBtn type="submit">
                {{ isAddMode ? '추가' : '저장' }}
              </VBtn>
              <VBtn
                variant="tonal"
                color="secondary"
                @click="closeDrawer"
              >
                취소
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VNavigationDrawer>
    <!-- 👉 삭제 확인 다이얼로그 -->
    <VDialog
      v-model="isDeleteDialogOpen"
      max-width="400"
    >
      <VCard title="계정 삭제 확인">
        <VCardText>
          해당 계정을 삭제하시겠습니까?
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
  </div>
</template>

<route lang="yaml">
meta:
  action: manage
  subject: AccountAdmin
</route>
