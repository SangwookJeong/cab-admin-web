<script setup>
import { VForm } from 'vuetify/components'
import authV2MaskDark from '@images/pages/auth-v2-mask-dark.png'
import authV2MaskLight from '@images/pages/auth-v2-mask-light.png'
import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import tree2 from '@images/pages/tree-2.png'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { requiredValidator } from '@validators'

const refVForm = ref()
const email = ref('')
const fullName = ref('')
const phone = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const isSubmitted = ref(false)
const errorMsg = ref('')

const passwordMatchValidator = v => v === password.value || '비밀번호가 일치하지 않습니다'

const imageVariant = useGenerateImageVariant(
  authV2RegisterIllustrationLight,
  authV2RegisterIllustrationDark,
  authV2RegisterIllustrationBorderedLight,
  authV2RegisterIllustrationBorderedDark,
  true,
)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

const register = () => {
  errorMsg.value = ''
  axios.post('/auth/pending-registrations', {
    email: email.value,
    fullName: fullName.value,
    phone: phone.value,
    password: password.value,
  }).then(() => {
    isSubmitted.value = true
  }).catch(e => {
    errorMsg.value = e.response?.data?.message || '가입 신청 중 오류가 발생했습니다.'
  })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) register()
  })
}
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-start gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
    </div>

    <VRow
      no-gutters
      class="auth-wrapper"
    >
      <VCol
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <div class="d-flex align-center justify-center w-100 pa-10 pe-0">
          <VImg
            max-width="768px"
            :src="imageVariant"
            class="auth-illustration"
          />
        </div>
        <VImg
          :width="150"
          :src="tree2"
          class="auth-footer-start-tree"
        />
        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </VCol>

      <VCol
        cols="12"
        lg="4"
        class="auth-card-v2 d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <!-- 👉 신청 완료 상태 -->
          <template v-if="isSubmitted">
            <VCardText class="text-center py-10">
              <VIcon
                icon="mdi-check-circle-outline"
                color="success"
                size="64"
                class="mb-4"
              />
              <h5 class="text-h5 mb-3">
                가입 신청 완료
              </h5>
              <p class="text-medium-emphasis mb-6">
                관리자의 승인 후 로그인하실 수 있습니다.
              </p>
              <VBtn
                variant="tonal"
                :to="{ name: 'login' }"
              >
                로그인 페이지로
              </VBtn>
            </VCardText>
          </template>

          <!-- 👉 가입 신청 폼 -->
          <template v-else>
            <VCardText>
              <h5 class="text-h5 mb-1">
                회원가입 신청
              </h5>
              <p class="mb-0 text-medium-emphasis">
                관리자 승인 후 로그인이 가능합니다
              </p>
            </VCardText>

            <VCardText>
              <VAlert
                v-if="errorMsg"
                type="error"
                variant="tonal"
                class="mb-4"
              >
                {{ errorMsg }}
              </VAlert>

              <VForm
                ref="refVForm"
                @submit.prevent="onSubmit"
              >
                <VRow>
                  <!-- 계정 -->
                  <VCol cols="12">
                    <VTextField
                      v-model="email"
                      :rules="[requiredValidator]"
                      label="계정"
                    />
                  </VCol>

                  <!-- 이름 -->
                  <VCol cols="12">
                    <VTextField
                      v-model="fullName"
                      :rules="[requiredValidator]"
                      label="이름"
                    />
                  </VCol>

                  <!-- 연락처 -->
                  <VCol cols="12">
                    <VTextField
                      v-model="phone"
                      label="연락처"
                      placeholder="010-0000-0000"
                    />
                  </VCol>

                  <!-- 비밀번호 -->
                  <VCol cols="12">
                    <VTextField
                      v-model="password"
                      :rules="[requiredValidator]"
                      label="비밀번호"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <!-- 비밀번호 확인 -->
                  <VCol cols="12">
                    <VTextField
                      v-model="passwordConfirm"
                      :rules="[requiredValidator, passwordMatchValidator]"
                      label="비밀번호 확인"
                      :type="isPasswordConfirmVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                      @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
                    />
                  </VCol>

                  <!-- 버튼 -->
                  <VCol cols="12">
                    <VBtn
                      block
                      type="submit"
                    >
                      가입 신청
                    </VBtn>
                  </VCol>

                  <VCol
                    cols="12"
                    class="text-center text-base"
                  >
                    <span>이미 계정이 있으신가요?</span>
                    <RouterLink
                      class="text-primary ms-2"
                      :to="{ name: 'login' }"
                    >
                      로그인
                    </RouterLink>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </template>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
