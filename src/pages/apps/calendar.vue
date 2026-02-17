<script setup>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue3'
import {
  blankEvent,
  useScheduleCalendar,
} from '@/views/apps/calendar/useScheduleCalendar'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'
import CalendarEventHandler from '@/views/apps/calendar/CalendarEventHandler.vue'

const calendarStore = useCalendarStore()

const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)

watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, refetchEvents } = useScheduleCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

// Check-all helper
const checkAllCalendars = computed({
  get: () => calendarStore.selectedCalendars.length === calendarStore.availableCalendars.length,
  set: val => {
    if (val)
      calendarStore.selectedCalendars = calendarStore.availableCalendars.map(i => i.label)
    else if (calendarStore.selectedCalendars.length === calendarStore.availableCalendars.length)
      calendarStore.selectedCalendars = []
  },
})

// ── 일정 카테고리 추가/삭제 ──
const colorOptions = ['primary', 'success', 'error', 'warning', 'info', 'secondary']
const showAddCalendar = ref(false)
const newCalendarLabel = ref('')
const newCalendarColor = ref('primary')

const addCategory = () => {
  const label = newCalendarLabel.value.trim()
  if (!label) return
  if (calendarStore.availableCalendars.some(c => c.label === label)) return
  calendarStore.addCalendarCategory({ label, color: newCalendarColor.value })
  newCalendarLabel.value = ''
  newCalendarColor.value = 'primary'
  showAddCalendar.value = false
  refetchEvents()
}

const removeCategory = label => {
  calendarStore.removeCalendarCategory(label)
  refetchEvents()
}
</script>

<template>
  <div>
    <VCard>
      <!-- `z-index: 0` Allows overlapping vertical nav on calendar -->
      <VLayout style="z-index: 0;">
        <!-- Sidebar -->
        <VNavigationDrawer
          v-model="isLeftSidebarOpen"
          width="280"
          absolute
          touchless
          location="start"
          class="calendar-add-event-drawer"
          :temporary="$vuetify.display.mdAndDown"
        >
          <div class="pa-5 d-flex flex-column gap-y-6">
            <VBtn
              block
              @click="isEventHandlerSidebarActive = true"
            >
              일정 추가
            </VBtn>

            <!-- ── 일정 filters ── -->
            <div>
              <div class="d-flex align-center justify-space-between mb-3">
                <p class="text-sm text-uppercase text-medium-emphasis mb-0">
                  일정
                </p>
                <VBtn
                  icon
                  variant="text"
                  size="x-small"
                  color="default"
                  @click="showAddCalendar = !showAddCalendar"
                >
                  <VIcon :icon="showAddCalendar ? 'mdi-close' : 'mdi-plus'" size="18" />
                </VBtn>
              </div>

              <!-- 일정 카테고리 추가 폼 -->
              <div v-if="showAddCalendar" class="mb-3 d-flex flex-column gap-y-2">
                <VTextField
                  v-model="newCalendarLabel"
                  density="compact"
                  hide-details
                  placeholder="카테고리명"
                  @keyup.enter="addCategory"
                />
                <div class="d-flex align-center gap-2">
                  <VBadge
                    v-for="c in colorOptions"
                    :key="c"
                    :color="c"
                    inline
                    dot
                    class="cursor-pointer"
                    :style="newCalendarColor === c ? 'outline: 2px solid currentColor; border-radius: 50%;' : ''"
                    @click="newCalendarColor = c"
                  />
                  <VSpacer />
                  <VBtn size="small" @click="addCategory">
                    추가
                  </VBtn>
                </div>
              </div>

              <div class="d-flex flex-column calendars-checkbox">
                <VCheckbox
                  v-model="checkAllCalendars"
                  label="전체 보기"
                  color="secondary"
                  density="default"
                />
                <div
                  v-for="calendar in calendarStore.availableCalendars"
                  :key="calendar.label"
                  class="d-flex align-center calendar-item"
                >
                  <VCheckbox
                    v-model="calendarStore.selectedCalendars"
                    :value="calendar.label"
                    :color="calendar.color"
                    :label="calendar.label"
                    density="default"
                    class="flex-grow-1"
                  />
                  <VBtn
                    icon
                    variant="text"
                    size="x-small"
                    color="default"
                    class="calendar-item-delete"
                    @click="removeCategory(calendar.label)"
                  >
                    <VIcon icon="mdi-close" size="14" />
                  </VBtn>
                </div>
              </div>
            </div>
          </div>
        </VNavigationDrawer>

        <VMain>
          <!-- Sidebar toggle button -->
          <VBtn
            icon
            variant="text"
            size="small"
            class="sidebar-toggler d-none d-lg-flex"
            @click="isLeftSidebarOpen = !isLeftSidebarOpen"
          >
            <VIcon :icon="isLeftSidebarOpen ? 'mdi-chevron-left' : 'mdi-chevron-right'" />
          </VBtn>

          <VCard flat>
            <FullCalendar
              ref="refCalendar"
              :options="calendarOptions"
            />
          </VCard>
        </VMain>
      </VLayout>
    </VCard>

    <!-- Event Handler -->
    <CalendarEventHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @add-event="addEvent"
      @update-event="updateEvent"
      @remove-event="removeEvent"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/full-calendar";

.calendars-checkbox {
  .v-label {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    opacity: var(--v-high-emphasis-opacity);
  }
}

.calendar-add-event-drawer {
  &.v-navigation-drawer {
    border-end-start-radius: 0.375rem;
    border-start-start-radius: 0.375rem;
  }
}

.dialog-top {
  align-self: flex-start !important;
  margin-block-start: 2rem !important;
}

// flatpickr dropdown이 VDialog 뒤에 가려지지 않도록 z-index 최상단 설정
.flatpickr-calendar {
  z-index: 2501 !important;
}

// 이벤트가 셀 밖으로 넘어가지 않도록 처리
.fc-daygrid-event {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fc-daygrid-event .fc-event-main,
.fc-daygrid-event .fc-event-main-frame,
.fc-daygrid-event .fc-event-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}

.sidebar-toggler {
  position: absolute;
  z-index: 1;
  inset-block-start: 10px;
  inset-inline-start: 4px;
}

// 삭제 버튼은 hover 시에만 표시
.calendar-item {
  .calendar-item-delete {
    opacity: 0;
    transition: opacity 0.15s;
  }

  &:hover .calendar-item-delete {
    opacity: 1;
  }
}

.cursor-pointer {
  cursor: pointer;
}
</style>
