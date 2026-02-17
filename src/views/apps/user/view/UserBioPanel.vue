<script setup>
import { avatarText } from '@core/utils/formatters'

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['edit', 'update:photo'])

const refFileInput = ref()

const onPhotoUpload = event => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = e => {
    emit('update:photo', e.target.result)
  }
  reader.readAsDataURL(file)
}
</script>

<template>
  <VCard
    v-if="props.userData"
    class="h-100 d-flex flex-column"
  >
        <VCardText class="text-center pt-10 pb-4">
          <!-- 👉 Avatar (클릭하여 사진 업로드) -->
          <div
            class="avatar-upload-wrapper d-inline-block position-relative cursor-pointer"
            @click="refFileInput?.click()"
          >
            <VAvatar
              rounded="sm"
              :size="110"
              color="primary"
              variant="tonal"
            >
              <VImg
                v-if="props.userData.photo"
                :src="props.userData.photo"
              />
              <span
                v-else
                class="text-5xl font-weight-medium"
              >
                {{ avatarText(props.userData.fullName) }}
              </span>
            </VAvatar>

            <!-- 카메라 오버레이 -->
            <div class="avatar-upload-overlay d-flex align-center justify-center">
              <VIcon
                icon="mdi-camera"
                color="white"
                size="28"
              />
            </div>

            <input
              ref="refFileInput"
              type="file"
              accept="image/*"
              hidden
              @change="onPhotoUpload"
            >
          </div>

          <!-- 👉 이름 -->
          <h6 class="text-h6 mt-4">
            {{ props.userData.fullName }}
          </h6>

          <!-- 👉 교구/구역 chip -->
          <VChip
            label
            color="primary"
            size="small"
            class="mt-4"
          >
            {{ props.userData.district }} · {{ props.userData.zone }}
          </VChip>
        </VCardText>

        <VCardText class="d-flex justify-center flex-wrap py-4">
          <!-- 👉 교구 -->
          <div class="d-flex align-center me-8">
            <VAvatar
              :size="44"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="22"
                icon="mdi-church"
              />
            </VAvatar>

            <div>
              <h6 class="text-body-1 font-weight-medium">
                {{ props.userData.district }}
              </h6>
              <span class="text-sm">교구</span>
            </div>
          </div>

          <!-- 👉 구역 -->
          <div class="d-flex align-center">
            <VAvatar
              :size="44"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="22"
                icon="mdi-account-group-outline"
              />
            </VAvatar>

            <div>
              <h6 class="text-body-1 font-weight-medium">
                {{ props.userData.zone }}
              </h6>
              <span class="text-sm">구역</span>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Details -->
        <VCardText class="pt-2 pb-4">
          <h6 class="text-body-1 font-weight-bold">
            기본 정보
          </h6>

          <VDivider class="mt-4" />

          <!-- 👉 성도 상세 리스트 -->
          <VList
            class="card-list mt-3"
            density="compact"
          >
            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  이름:
                  <span class="text-body-2">
                    {{ props.userData.fullName }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  전화번호:
                  <span class="text-body-2">{{ props.userData.phone || '-' }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  성별:
                  <span class="text-body-2">{{ props.userData.gender || '-' }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  생년월일:
                  <span class="text-body-2">{{ props.userData.birthDate || '-' }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  구원일:
                  <span class="text-body-2">{{ props.userData.salvationDate || '-' }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  차량:
                  <span class="text-body-2">{{ props.userData.vehicle || '-' }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-sm font-weight-medium">
                  회:
                  <span class="text-body-2">{{ props.userData.group || '-' }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 수정 버튼 -->
        <VSpacer />
        <VCardText class="d-flex justify-center pt-2 pb-6">
          <VBtn
            variant="elevated"
            class="me-3"
            @click="emit('edit')"
          >
            수정
          </VBtn>
          <VBtn
            variant="tonal"
            color="secondary"
            :to="{ name: 'apps-user-list' }"
          >
            목록으로
          </VBtn>
        </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.5rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}

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
