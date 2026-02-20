<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import AppDatePicker from '@core/components/AppDatePicker.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import { avatarText } from '@core/utils/formatters'
import { requiredValidator } from '@validators'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const fullName = ref('')
const phone = ref('')
const gender = ref()
const birthDate = ref('')
const salvationDate = ref('')
const address1 = ref('')
const address2 = ref('')
const district = ref()
const zone = ref('')
const group = ref('')
const vehicleType = ref('')
const vehicleColor = ref('')
const vehicleNumber = ref('')
const family = ref([])
const memo = ref('')
const allUsers = ref([])

const userListStore = useUserListStore()

userListStore.fetchAllUsers().then(response => {
  allUsers.value = response.data.users
})
const photoPreview = ref('')
const refPhotoInput = ref()

const onPhotoUpload = event => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = e => {
    photoPreview.value = e.target.result
  }
  reader.readAsDataURL(file)
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
    family.value = []
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: 0,
        fullName: fullName.value,
        phone: phone.value,
        gender: gender.value,
        birthDate: birthDate.value,
        salvationDate: salvationDate.value,
        address1: address1.value,
        address2: address2.value,
        district: district.value,
        zone: zone.value,
        group: group.value,
        vehicleType: vehicleType.value,
        vehicleColor: vehicleColor.value,
        vehicleNumber: vehicleNumber.value,
        family: family.value,
        memo: memo.value,
        photo: photoPreview.value,
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
        photoPreview.value = ''
        family.value = []
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <div class="d-flex align-center bg-var-theme-background px-5 py-2">
      <h6 class="text-h6">
        성도 등록
      </h6>

      <VSpacer />

      <VBtn
        size="small"
        color="secondary"
        variant="text"
        icon="mdi-close"
        @click="closeNavigationDrawer"
      />
    </div>

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 사진 업로드 -->
              <VCol
                cols="12"
                class="d-flex justify-center"
              >
                <div
                  class="avatar-upload-wrapper d-inline-block position-relative cursor-pointer"
                  @click="refPhotoInput?.click()"
                >
                  <VAvatar
                    rounded="sm"
                    :size="100"
                    color="primary"
                    variant="tonal"
                  >
                    <VImg
                      v-if="photoPreview"
                      :src="photoPreview"
                    />
                    <span
                      v-else-if="fullName"
                      class="text-3xl font-weight-medium"
                    >
                      {{ avatarText(fullName) }}
                    </span>
                    <VIcon
                      v-else
                      icon="mdi-account-outline"
                      size="40"
                    />
                  </VAvatar>

                  <div class="avatar-upload-overlay d-flex align-center justify-center">
                    <VIcon
                      icon="mdi-camera"
                      color="white"
                      size="24"
                    />
                  </div>

                  <input
                    ref="refPhotoInput"
                    type="file"
                    accept="image/*"
                    hidden
                    @change="onPhotoUpload"
                  >
                </div>
              </VCol>

              <!-- 👉 이름 -->
              <VCol cols="12">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="이름"
                />
              </VCol>

              <!-- 👉 전화번호 -->
              <VCol cols="12">
                <VTextField
                  v-model="phone"
                  label="전화번호"
                  placeholder="010-0000-0000"
                />
              </VCol>

              <!-- 👉 성별 -->
              <VCol cols="12">
                <VSelect
                  v-model="gender"
                  label="성별"
                  :items="['남', '여']"
                />
              </VCol>

              <!-- 👉 생년월일 -->
              <VCol cols="12">
                <AppDatePicker
                  v-model="birthDate"
                  label="생년월일"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>

              <!-- 👉 구원일 -->
              <VCol cols="12">
                <AppDatePicker
                  v-model="salvationDate"
                  label="구원일"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>

              <!-- 👉 주소1 -->
              <VCol cols="12">
                <VTextField
                  v-model="address1"
                  label="주소1"
                />
              </VCol>

              <!-- 👉 주소2 -->
              <VCol cols="12">
                <VTextField
                  v-model="address2"
                  label="주소2 (상세주소)"
                />
              </VCol>

              <!-- 👉 교구 -->
              <VCol cols="12">
                <VSelect
                  v-model="district"
                  label="교구"
                  :items="['1교구', '2교구', '3교구']"
                />
              </VCol>

              <!-- 👉 구역 -->
              <VCol cols="12">
                <VSelect
                  v-model="zone"
                  label="구역"
                  :items="['1구역', '2구역', '3구역']"
                />
              </VCol>

              <!-- 👉 회 -->
              <VCol cols="12">
                <VSelect
                  v-model="group"
                  label="회"
                  :items="['은빛장년회', '어머니회', '봉사회', '청년회']"
                />
              </VCol>

              <!-- 👉 차종 -->
              <VCol cols="12">
                <VTextField
                  v-model="vehicleType"
                  label="차종"
                  placeholder="예: 쏘나타"
                />
              </VCol>

              <!-- 👉 차량색상 -->
              <VCol cols="12">
                <VTextField
                  v-model="vehicleColor"
                  label="차량색상"
                  placeholder="예: 흰색"
                />
              </VCol>

              <!-- 👉 차량번호 -->
              <VCol cols="12">
                <VTextField
                  v-model="vehicleNumber"
                  label="차량번호"
                  placeholder="예: 12가 3456"
                />
              </VCol>

              <!-- 👉 가족현황 -->
              <VCol cols="12">
                <VAutocomplete
                  v-model="family"
                  :items="allUsers"
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

              <!-- 👉 메모 -->
              <VCol cols="12">
                <VTextarea
                  v-model="memo"
                  label="메모"
                  rows="3"
                />
              </VCol>

              <!-- 👉 등록 / 취소 -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  등록
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="secondary"
                  @click="closeNavigationDrawer"
                >
                  취소
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.avatar-upload-wrapper {
  .avatar-upload-overlay {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .avatar-upload-overlay {
    opacity: 1;
  }
}
</style>
