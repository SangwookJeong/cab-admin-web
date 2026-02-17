<script setup>
import { VForm } from 'vuetify/components'
import { useCalendarStore } from './useCalendarStore'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import {
  requiredValidator,
  urlValidator,
} from '@validators'

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

const store = useCalendarStore()
const refForm = ref()

// 👉 Event
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

  // Close drawer
  emit('update:isDrawerOpen', false)
}

const handleSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {

      // If id exist on id => Update event
      if ('id' in event.value)
        emit('updateEvent', event.value)

      // Else => add new event
      else
        emit('addEvent', event.value)

      // Close drawer
      emit('update:isDrawerOpen', false)
    }
  })
}

const guestsOptions = [
  {
    avatar: avatar1,
    name: 'Jane Foster',
  },
  {
    avatar: avatar3,
    name: 'Donna Frank',
  },
  {
    avatar: avatar5,
    name: 'Gabrielle Robertson',
  },
  {
    avatar: avatar7,
    name: 'Lori Spears',
  },
  {
    avatar: avatar6,
    name: 'Sandy Vega',
  },
  {
    avatar: avatar2,
    name: 'Cheryl May',
  },
]

// 👉 Form
const onCancel = () => {

  // Close drawer
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
      <!-- 👉 Header -->
      <VCardTitle class="d-flex align-center pa-4">
        <span class="text-h6">
          {{ event.id ? '일정 수정' : '일정 추가' }}
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
        <!-- SECTION Form -->
        <VForm
          ref="refForm"
          @submit.prevent="handleSubmit"
        >
          <VRow>
            <!-- 👉 Title -->
            <VCol
              cols="12"
              md="8"
            >
              <VTextField
                v-model="event.title"
                label="제목"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 👉 Calendar -->
            <VCol
              cols="12"
              md="4"
            >
              <VSelect
                v-model="event.extendedProps.calendar"
                label="카테고리"
                :rules="[requiredValidator]"
                :items="store.availableCalendars"
                :item-title="item => item.label"
                :item-value="item => item.label"
              >
                <template #selection="{ item }">
                  <div
                    v-show="event.extendedProps.calendar"
                    class="align-center"
                    :class="event.extendedProps.calendar ? 'd-flex' : ''"
                  >
                    <VBadge
                      :color="item.raw.color"
                      inline
                      dot
                      class="pa-1"
                    />
                    <span>{{ item.raw.label }}</span>
                  </div>
                </template>
              </VSelect>
            </VCol>

            <!-- 👉 Start date -->
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

            <!-- 👉 End date -->
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

            <!-- 👉 Event URL -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="event.url"
                label="URL"
                :rules="[urlValidator]"
                type="url"
              />
            </VCol>

            <!-- 👉 Location -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="event.extendedProps.location"
                label="장소"
              />
            </VCol>

            <!-- 👉 Guests -->
            <VCol cols="12">
              <VSelect
                v-model="event.extendedProps.guests"
                label="참석자"
                :items="guestsOptions"
                :item-title="item => item.name"
                :item-value="item => item.name"
                chips
                multiple
                eager
              />
            </VCol>

            <!-- 👉 Description -->
            <VCol cols="12">
              <VTextField
                v-model="event.extendedProps.description"
                label="설명"
              />
            </VCol>

            <!-- 👉 Form buttons -->
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
        <!-- !SECTION -->
      </VCardText>
    </VCard>
  </VDialog>
</template>
