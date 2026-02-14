<script setup>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue3'
import {
  blankEvent,
  useRoomCalendar,
} from '@/views/apps/room-reservation/useRoomCalendar'
import { useRoomReservationStore } from '@/views/apps/room-reservation/useRoomReservationStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'
import RoomReservationHandler from '@/views/apps/room-reservation/RoomReservationHandler.vue'

const store = useRoomReservationStore()

// Fetch rooms on mount
store.fetchRooms()

const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)

watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, conflictError } = useRoomCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

// Snackbar for conflict errors
const showConflictSnackbar = ref(false)

watch(conflictError, val => {
  if (val)
    showConflictSnackbar.value = true
})

// Check all rooms
const checkAll = computed({
  get: () => store.selectedRoomIds.length === store.rooms.length,
  set: val => {
    if (val)
      store.selectedRoomIds = store.rooms.map(r => r.id)
    else if (store.selectedRoomIds.length === store.rooms.length)
      store.selectedRoomIds = []
  },
})
</script>

<template>
  <div>
    <VCard>
      <VLayout style="z-index: 0;">
        <!-- 좌측 사이드바 -->
        <VNavigationDrawer
          v-model="isLeftSidebarOpen"
          width="250"
          absolute
          touchless
          location="start"
          class="calendar-add-event-drawer"
          :temporary="$vuetify.display.mdAndDown"
        >
          <div class="pa-5 d-flex flex-column gap-y-8">
            <VBtn
              block
              @click="isEventHandlerSidebarActive = true"
            >
              예약 추가
            </VBtn>
            <div>
              <p class="text-sm text-uppercase text-medium-emphasis mb-3">
                회의실
              </p>

              <div class="d-flex flex-column calendars-checkbox">
                <VCheckbox
                  v-model="checkAll"
                  label="전체 보기"
                  color="secondary"
                  density="default"
                />
                <VCheckbox
                  v-for="room in store.rooms"
                  :key="room.id"
                  v-model="store.selectedRoomIds"
                  :value="room.id"
                  :color="room.color"
                  :label="`${room.name} (${room.capacity}명)`"
                  density="default"
                />
              </div>
            </div>
          </div>
        </VNavigationDrawer>
        <VMain>
          <VCard flat>
            <FullCalendar
              ref="refCalendar"
              :options="calendarOptions"
            />
          </VCard>
        </VMain>
      </VLayout>
    </VCard>
    <RoomReservationHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @add-event="addEvent"
      @update-event="updateEvent"
      @remove-event="removeEvent"
    />

    <!-- 중복예약 에러 스낵바 -->
    <VSnackbar
      v-model="showConflictSnackbar"
      color="error"
      location="top"
    >
      {{ conflictError }}
      <template #actions>
        <VBtn
          color="white"
          variant="text"
          @click="showConflictSnackbar = false"
        >
          닫기
        </VBtn>
      </template>
    </VSnackbar>
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
</style>

<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}
</style>
