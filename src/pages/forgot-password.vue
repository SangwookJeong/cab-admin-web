<script setup>
import { VForm } from 'vuetify/components'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import tree from '@images/pages/tree.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { requiredValidator } from '@validators'
import authV2ForgotPasswordIllustrationBorderedDark from '@images/pages/auth-v2-forgot-password-illustration-bordered-dark.png'
import authV2ForgotPasswordIllustrationBorderedLight from '@images/pages/auth-v2-forgot-password-illustration-bordered-light.png'
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-forgot-password-illustration-dark.png'
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-forgot-password-illustration-light.png'
import authV2MaskDark from '@images/pages/auth-v2-mask-dark.png'
import authV2MaskLight from '@images/pages/auth-v2-mask-light.png'
import axios from '@axios'

const refVForm = ref()
const account = ref('')
const isSubmitted = ref(false)
const errorMsg = ref('')

const authThemeImg = useGenerateImageVariant(
  authV2ForgotPasswordIllustrationLight,
  authV2ForgotPasswordIllustrationDark,
  authV2ForgotPasswordIllustrationBorderedLight,
  authV2ForgotPasswordIllustrationBorderedDark,
  true,
)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (!valid) return
    errorMsg.value = ''
    axios.post('/auth/password-reset-requests', { account: account.value })
      .then(() => { isSubmitted.value = true })
      .catch(e => { errorMsg.value = e.response?.data?.message || '요청 중 오류가 발생했습니다.' })
  })
}
</script>

<template>
  <div>
    <div class="auth-logo d-flex align-start gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
    </div>

    <VRow
      class="auth-wrapper"
      no-gutters
    >
      <VCol
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <VImg
          max-width="768px"
          :src="authThemeImg"
          class="auth-illustration"
        />
        <VImg
          :width="276"
          :src="tree"
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
          <!-- 👉 제출 완료 -->
          <template v-if="isSubmitted">
            <VCardText class="text-center py-10">
              <VIcon
                icon="mdi-lock-reset"
                color="primary"
                size="64"
                class="mb-4"
              />
              <h5 class="text-h5 mb-3">
                재설정 요청 완료
              </h5>
              <p class="text-medium-emphasis mb-6">
                관리자가 비밀번호를 재설정하면 안내를 받으실 수 있습니다.
              </p>
              <VBtn
                variant="tonal"
                :to="{ name: 'login' }"
              >
                로그인으로 돌아가기
              </VBtn>
            </VCardText>
          </template>

          <!-- 👉 요청 폼 -->
          <template v-else>
            <VCardText>
              <h5 class="text-h5 mb-1">
                비밀번호를 잊었습니까? 🔒
              </h5>
              <p class="mb-0 text-medium-emphasis">
                계정을 입력하면 관리자에게 재설정 요청이 전달됩니다
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
                  <VCol cols="12">
                    <VTextField
                      v-model="account"
                      label="계정"
                      :rules="[requiredValidator]"
                    />
                  </VCol>

                  <VCol cols="12">
                    <VBtn
                      block
                      type="submit"
                    >
                      재설정 요청
                    </VBtn>
                  </VCol>

                  <VCol
                    cols="12"
                    class="text-center"
                  >
                    <RouterLink
                      class="text-primary ms-2"
                      :to="{ name: 'login' }"
                    >
                      <VIcon
                        class="flip-in-rtl"
                        icon="mdi-chevron-left"
                      />
                      <span>로그인으로 돌아가기</span>
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
