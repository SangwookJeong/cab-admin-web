<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const isMenuOpen = ref(false)
const currentView = ref('day')

const today = new Date()
const viewYear = ref(today.getFullYear())
const viewMonth = ref(today.getMonth())

watch(() => props.modelValue, val => {
  if (val) {
    const parts = val.split('-')
    if (parts.length === 3) {
      viewYear.value = parseInt(parts[0])
      viewMonth.value = parseInt(parts[1]) - 1
    }
  }
}, { immediate: true })

watch(isMenuOpen, val => {
  if (val) {
    currentView.value = 'day'
    if (props.modelValue) {
      const parts = props.modelValue.split('-')
      if (parts.length === 3) {
        viewYear.value = parseInt(parts[0])
        viewMonth.value = parseInt(parts[1]) - 1
      }
    }
  }
})

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
const weekdays = ['일', '월', '화', '수', '목', '금', '토']

const headerText = computed(() => {
  if (currentView.value === 'year') {
    const start = Math.floor(viewYear.value / 12) * 12
    return `${start} - ${start + 11}`
  }
  if (currentView.value === 'month') return `${viewYear.value}년`
  return `${viewYear.value}년 ${viewMonth.value + 1}월`
})

const yearRange = computed(() => {
  const start = Math.floor(viewYear.value / 12) * 12
  return Array.from({ length: 12 }, (_, i) => start + i)
})

const calendarDays = computed(() => {
  const firstDay = new Date(viewYear.value, viewMonth.value, 1).getDay()
  const totalDays = new Date(viewYear.value, viewMonth.value + 1, 0).getDate()
  const days = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= totalDays; d++) days.push(d)
  return days
})

const prev = () => {
  if (currentView.value === 'day') {
    if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- }
    else viewMonth.value--
  } else if (currentView.value === 'month') {
    viewYear.value--
  } else {
    viewYear.value -= 12
  }
}

const next = () => {
  if (currentView.value === 'day') {
    if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ }
    else viewMonth.value++
  } else if (currentView.value === 'month') {
    viewYear.value++
  } else {
    viewYear.value += 12
  }
}

const headerClick = () => {
  if (currentView.value === 'day') currentView.value = 'month'
  else if (currentView.value === 'month') currentView.value = 'year'
}

const selectYear = year => {
  viewYear.value = year
  currentView.value = 'month'
}

const selectMonth = index => {
  viewMonth.value = index
  currentView.value = 'day'
}

const selectDay = day => {
  const m = String(viewMonth.value + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  emit('update:modelValue', `${viewYear.value}-${m}-${d}`)
  isMenuOpen.value = false
}

const formatDate = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

const isSelected = day => day && props.modelValue === formatDate(viewYear.value, viewMonth.value, day)
const isToday = day => day && viewYear.value === today.getFullYear() && viewMonth.value === today.getMonth() && day === today.getDate()
const isSelectedMonth = index => props.modelValue && parseInt(props.modelValue.split('-')[1]) - 1 === index && parseInt(props.modelValue.split('-')[0]) === viewYear.value
const isSelectedYear = year => props.modelValue && parseInt(props.modelValue.split('-')[0]) === year
</script>

<template>
  <VTextField
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    readonly
    append-inner-icon="mdi-calendar"
    @click="isMenuOpen = true"
  >
    <VMenu
      v-model="isMenuOpen"
      activator="parent"
      :close-on-content-click="false"
      location="bottom start"
    >
      <VCard
        class="date-picker-card"
        min-width="280"
        max-width="320"
      >
        <!-- 헤더: 이전/다음 + 현재 연월 -->
        <div class="d-flex align-center justify-space-between pa-2">
          <VBtn
            icon
            variant="text"
            size="small"
            @click="prev"
          >
            <VIcon icon="mdi-chevron-left" />
          </VBtn>

          <VBtn
            variant="text"
            size="small"
            class="text-body-1 font-weight-medium"
            :disabled="currentView === 'year'"
            @click="headerClick"
          >
            {{ headerText }}
          </VBtn>

          <VBtn
            icon
            variant="text"
            size="small"
            @click="next"
          >
            <VIcon icon="mdi-chevron-right" />
          </VBtn>
        </div>

        <VDivider />

        <div class="pa-2">
          <!-- 연도 선택 -->
          <div
            v-if="currentView === 'year'"
            class="date-picker-grid grid-4x3"
          >
            <VBtn
              v-for="year in yearRange"
              :key="year"
              variant="text"
              size="small"
              :color="isSelectedYear(year) ? 'primary' : undefined"
              :class="{ 'v-btn--active': isSelectedYear(year) }"
              class="grid-cell"
              @click="selectYear(year)"
            >
              {{ year }}
            </VBtn>
          </div>

          <!-- 월 선택 -->
          <div
            v-else-if="currentView === 'month'"
            class="date-picker-grid grid-4x3"
          >
            <VBtn
              v-for="(m, i) in months"
              :key="i"
              variant="text"
              size="small"
              :color="isSelectedMonth(i) ? 'primary' : undefined"
              :class="{ 'v-btn--active': isSelectedMonth(i) }"
              class="grid-cell"
              @click="selectMonth(i)"
            >
              {{ m }}
            </VBtn>
          </div>

          <!-- 일 선택 -->
          <div v-else>
            <div class="date-picker-grid grid-7">
              <span
                v-for="wd in weekdays"
                :key="wd"
                class="weekday-header text-caption text-medium-emphasis"
              >
                {{ wd }}
              </span>
            </div>

            <div class="date-picker-grid grid-7">
              <template
                v-for="(day, idx) in calendarDays"
                :key="idx"
              >
                <span
                  v-if="!day"
                  class="grid-cell"
                />
                <VBtn
                  v-else
                  :variant="isSelected(day) ? 'flat' : 'text'"
                  :color="isSelected(day) ? 'primary' : undefined"
                  size="small"
                  class="grid-cell day-cell"
                  :class="{ 'today-outline': isToday(day) && !isSelected(day) }"
                  @click="selectDay(day)"
                >
                  {{ day }}
                </VBtn>
              </template>
            </div>
          </div>
        </div>
      </VCard>
    </VMenu>
  </VTextField>
</template>

<style lang="scss" scoped>
.date-picker-card {
  user-select: none;
}

.date-picker-grid {
  display: grid;
  gap: 2px;
  place-items: center;

  &.grid-7 {
    grid-template-columns: repeat(7, 1fr);
  }

  &.grid-4x3 {
    grid-template-columns: repeat(4, 1fr);
  }
}

.weekday-header {
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 32px;
  font-weight: 500;
  inline-size: 100%;
}

.grid-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 36px;
  inline-size: 100%;
  min-inline-size: 36px;
}

.day-cell {
  border-radius: 50%;
  font-size: 0.875rem;
}

.today-outline {
  border: 1px solid rgb(var(--v-theme-primary));
}

.v-btn--active {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}
</style>
