<script setup>
import axios from '@axios'
import { requiredValidator } from '@validators'

// 👉 회원가입 승인 대기
const registrations = ref([])

const fetchRegistrations = () => {
  axios.get('/auth/pending-registrations').then(res => {
    registrations.value = res.data.registrations
  })
}

fetchRegistrations()

// 스낵바
const snackbar = ref({ show: false, message: '', color: 'primary' })

const showSnackbar = (message, color = 'primary') => {
  snackbar.value = { show: true, message, color }
}

// 거절 확인 다이얼로그
const isRejectDialogOpen = ref(false)
const pendingRejectId = ref(null)
const rejectType = ref('registration') // 'registration' | 'reset'

const confirmReject = (id, type) => {
  pendingRejectId.value = id
  rejectType.value = type
  isRejectDialogOpen.value = true
}

const executeReject = () => {
  if (rejectType.value === 'registration') {
    axios.delete(`/auth/pending-registrations/${pendingRejectId.value}`).then(() => {
      fetchRegistrations()
      isRejectDialogOpen.value = false
      showSnackbar('가입 신청이 거절되었습니다.')
    })
  } else {
    axios.delete(`/auth/password-reset-requests/${pendingRejectId.value}`).then(() => {
      fetchResetRequests()
      isRejectDialogOpen.value = false
      showSnackbar('비밀번호 재설정 요청이 거절되었습니다.')
    })
  }
}

const approveRegistration = id => {
  axios.post(`/auth/pending-registrations/${id}/approve`).then(() => {
    fetchRegistrations()
    showSnackbar('가입이 승인되었습니다.')
  })
}

// 👉 비밀번호 재설정 요청
const resetRequests = ref([])
const isPasswordDialogOpen = ref(false)
const selectedResetId = ref(null)
const newPassword = ref('')
const refPasswordForm = ref()
const isPasswordVisible = ref(false)

const fetchResetRequests = () => {
  axios.get('/auth/password-reset-requests').then(res => {
    resetRequests.value = res.data.requests
  })
}

fetchResetRequests()

const openPasswordDialog = id => {
  selectedResetId.value = id
  newPassword.value = ''
  isPasswordDialogOpen.value = true
}

const approveReset = () => {
  refPasswordForm.value?.validate().then(({ valid }) => {
    if (!valid) return
    axios.post(`/auth/password-reset-requests/${selectedResetId.value}/approve`, {
      newPassword: newPassword.value,
    }).then(() => {
      isPasswordDialogOpen.value = false
      fetchResetRequests()
      showSnackbar('비밀번호가 재설정되었습니다.')
    })
  })
}
</script>

<template>
  <div>
    <!-- 👉 회원가입 승인 대기 -->
    <VCard class="mb-6">
      <VCardText>
        <h6 class="text-h6">
          회원가입 승인 대기
        </h6>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">계정</th>
            <th scope="col">이름</th>
            <th scope="col">연락처</th>
            <th scope="col">신청일</th>
            <th scope="col" class="text-center">처리</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(reg, index) in registrations"
            :key="reg.id"
          >
            <td class="text-medium-emphasis">{{ index + 1 }}</td>
            <td class="text-medium-emphasis">{{ reg.email }}</td>
            <td class="font-weight-medium">{{ reg.fullName }}</td>
            <td class="text-medium-emphasis">{{ reg.phone || '-' }}</td>
            <td class="text-medium-emphasis">{{ reg.requestedAt }}</td>
            <td class="text-center">
              <div class="d-flex align-center justify-center gap-2">
                <VBtn
                  size="small"
                  color="primary"
                  variant="tonal"
                  prepend-icon="mdi-check"
                  @click="approveRegistration(reg.id)"
                >
                  승인
                </VBtn>
                <VBtn
                  size="small"
                  color="error"
                  variant="tonal"
                  prepend-icon="mdi-close"
                  @click="confirmReject(reg.id, 'registration')"
                >
                  거절
                </VBtn>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="!registrations.length">
          <tr>
            <td
              colspan="6"
              class="text-center"
            >
              대기 중인 가입 신청이 없습니다
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>

    <!-- 👉 비밀번호 재설정 요청 -->
    <VCard>
      <VCardText>
        <h6 class="text-h6">
          비밀번호 재설정 요청
        </h6>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">계정</th>
            <th scope="col">이름</th>
            <th scope="col">요청일</th>
            <th scope="col" class="text-center">처리</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(req, index) in resetRequests"
            :key="req.id"
          >
            <td class="text-medium-emphasis">{{ index + 1 }}</td>
            <td class="text-medium-emphasis">{{ req.account }}</td>
            <td class="font-weight-medium">{{ req.fullName }}</td>
            <td class="text-medium-emphasis">{{ req.requestedAt }}</td>
            <td class="text-center">
              <div class="d-flex align-center justify-center gap-2">
                <VBtn
                  size="small"
                  color="primary"
                  variant="tonal"
                  prepend-icon="mdi-lock-reset"
                  @click="openPasswordDialog(req.id)"
                >
                  승인
                </VBtn>
                <VBtn
                  size="small"
                  color="error"
                  variant="tonal"
                  prepend-icon="mdi-close"
                  @click="confirmReject(req.id, 'reset')"
                >
                  거절
                </VBtn>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot v-show="!resetRequests.length">
          <tr>
            <td
              colspan="5"
              class="text-center"
            >
              비밀번호 재설정 요청이 없습니다
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>

    <!-- 👉 거절 확인 다이얼로그 -->
    <VDialog
      v-model="isRejectDialogOpen"
      max-width="400"
    >
      <VCard title="거절 확인">
        <VCardText>
          <template v-if="rejectType === 'registration'">
            해당 가입 신청을 거절하시겠습니까?
          </template>
          <template v-else>
            해당 비밀번호 재설정 요청을 거절하시겠습니까?
          </template>
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

    <!-- 👉 새 비밀번호 설정 다이얼로그 -->
    <VDialog
      v-model="isPasswordDialogOpen"
      max-width="420"
    >
      <VCard title="새 비밀번호 설정">
        <VCardText>
          <VForm
            ref="refPasswordForm"
            @submit.prevent="approveReset"
          >
            <VTextField
              v-model="newPassword"
              label="새 비밀번호"
              :type="isPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
              :rules="[requiredValidator]"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
            />
          </VForm>
        </VCardText>

        <VCardActions class="justify-end gap-2 pb-4 px-4">
          <VBtn
            variant="tonal"
            color="secondary"
            @click="isPasswordDialogOpen = false"
          >
            취소
          </VBtn>
          <VBtn
            color="primary"
            @click="approveReset"
          >
            재설정 완료
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
