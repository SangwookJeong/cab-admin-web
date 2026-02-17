<script setup>
import { VForm } from 'vuetify/components'
import { useVehicleReservationStore } from './useVehicleReservationStore'
import { requiredValidator } from '@validators'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  event: {
    type: null,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'addEvent',
  'updateEvent',
  'removeEvent',
])

const store = useVehicleReservationStore()
const refForm = ref()

const event = ref(JSON.parse(JSON.stringify(props.event)))

const resetEvent = () => {
  event.value = JSON.parse(JSON.stringify(props.event))
  nextTick(() => {
    refForm.value?.resetValidation()
  })
}

watch(() => props.isDrawerOpen, resetEvent)

const removeEvent = () => {
  emit('removeEvent', event.value.id)
  emit('update:isDrawerOpen', false)
}

const handleSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      if ('id' in event.value)
        emit('updateEvent', event.value)
      else
        emit('addEvent', event.value)
      emit('update:isDrawerOpen', false)
    }
  })
}

const onCancel = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    resetEvent()
    refForm.value?.resetValidation()
  })
}

const startDateTimePickerConfig = computed(() => {
  const config = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  }

  if (event.value.end)
    config.maxDate = event.value.end

  return config
})

const endDateTimePickerConfig = computed(() => {
  const config = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  }

  if (event.value.start)
    config.minDate = event.value.start

  return config
})
</script>

<template>
  <VDialog
    :model-value="props.isDrawerOpen"
    max-width="700"
    content-class="dialog-top"
    @update:model-value="(val) => $emit('update:isDrawerOpen', val)"
  >
    <VCard>
      <VCardTitle class="d-flex align-center pa-4">
        <span class="text-h6">
          {{ event.id ? '차량 예약 수정' : '차량 예약' }}
        </span>
        <VSpacer />
        <VBtn
          v-show="event.id"
          icon
          variant="text"
          size="small"
          color="default"
          @click="removeEvent"
        >
          <VIcon icon="mdi-trash-can-outline" />
        </VBtn>
        <VBtn
          variant="text"
          color="default"
          icon
          size="small"
          @click="$emit('update:isDrawerOpen', false)"
        >
          <VIcon icon="mdi-close" />
        </VBtn>
      </VCardTitle>

      <VDivider />

      <VCardText>
        <VForm
          ref="refForm"
          @submit.prevent="handleSubmit"
        >
          <VRow>
            <!-- 목적 + 차량 -->
            <VCol
              cols="12"
              md="7"
            >
              <VTextField
                v-model="event.title"
                label="목적"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol
              cols="12"
              md="5"
            >
              <VSelect
                v-model="event.extendedProps.resourceId"
                label="차량"
                :rules="[requiredValidator]"
                :items="store.vehicles"
                item-value="id"
                :item-title="item => `${item.vehicleColor} ${item.type} ${item.licensePlate}`"
              >
                <template #selection="{ item }">
                  <div
                    v-show="event.extendedProps.resourceId"
                    class="align-center"
                    :class="event.extendedProps.resourceId ? 'd-flex' : ''"
                  >
                    <VBadge
                      :color="item.raw.color"
                      inline
                      dot
                      class="pa-1"
                    />
                    <span>{{ item.raw.vehicleColor }} {{ item.raw.type }} {{ item.raw.licensePlate }}</span>
                  </div>
                </template>
                <template #item="{ props: itemProps, item }">
                  <VListItem v-bind="itemProps">
                    <template #prepend>
                      <VBadge
                        :color="item.raw.color"
                        inline
                        dot
                        class="me-2"
                      />
                    </template>
                  </VListItem>
                </template>
              </VSelect>
            </VCol>

            <!-- 시작/종료 -->
            <VCol
              cols="12"
              md="6"
            >
              <AppDateTimePicker
                :key="JSON.stringify(startDateTimePickerConfig)"
                v-model="event.start"
                :rules="[requiredValidator]"
                label="시작일시"
                :config="startDateTimePickerConfig"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <AppDateTimePicker
                :key="JSON.stringify(endDateTimePickerConfig)"
                v-model="event.end"
                :rules="[requiredValidator]"
                label="종료일시"
                :config="endDateTimePickerConfig"
              />
            </VCol>

            <!-- 예약자 + 목적지 -->
            <VCol
              cols="12"
              md="4"
            >
              <VTextField
                v-model="event.extendedProps.booker"
                label="예약자"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol
              cols="12"
              md="8"
            >
              <VTextField
                v-model="event.extendedProps.destination"
                label="목적지"
              />
            </VCol>

            <!-- 비고 -->
            <VCol cols="12">
              <VTextField
                v-model="event.extendedProps.description"
                label="비고"
              />
            </VCol>

            <!-- 버튼 -->
            <VCol cols="12">
              <VBtn
                type="submit"
                class="me-3"
              >
                저장
              </VBtn>
              <VBtn
                variant="tonal"
                color="secondary"
                @click="onCancel"
              >
                취소
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
