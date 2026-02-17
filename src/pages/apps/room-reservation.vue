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
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, conflictError, refetchEvents } = useRoomCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

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

// ── 회의실 추가/삭제 ──
const colorOptions = ['primary', 'success', 'error', 'warning', 'info', 'secondary']
const showAddRoom = ref(false)
const newRoomName = ref('')
const newRoomLocation = ref('')
const newRoomCapacity = ref(4)
const newRoomColor = ref('primary')

const addRoom = async () => {
  const name = newRoomName.value.trim()
  if (!name) return
  await store.addRoom({
    name,
    location: newRoomLocation.value.trim() || '-',
    capacity: newRoomCapacity.value || 4,
    color: newRoomColor.value,
    amenities: [],
  })
  newRoomName.value = ''
  newRoomLocation.value = ''
  newRoomCapacity.value = 4
  newRoomColor.value = 'primary'
  showAddRoom.value = false
  refetchEvents()
}

const removeRoom = async roomId => {
  await store.removeRoom(roomId)
  refetchEvents()
}
</script>

<template>
  <div>
    <VCard>
      <VLayout style="z-index: 0;">
        <!-- 좌측 사이드바 -->
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
              예약 추가
            </VBtn>

            <div>
              <div class="d-flex align-center justify-space-between mb-3">
                <p class="text-sm text-uppercase text-medium-emphasis mb-0">
                  회의실
                </p>
                <VBtn
                  icon
                  variant="text"
                  size="x-small"
                  color="default"
                  @click="showAddRoom = !showAddRoom"
                >
                  <VIcon :icon="showAddRoom ? 'mdi-close' : 'mdi-plus'" size="18" />
                </VBtn>
              </div>

              <!-- 회의실 추가 폼 -->
              <div v-if="showAddRoom" class="mb-3 d-flex flex-column gap-y-2">
                <VTextField
                  v-model="newRoomName"
                  density="compact"
                  hide-details
                  placeholder="회의실명"
                  @keyup.enter="addRoom"
                />
                <div class="d-flex gap-2">
                  <VTextField
                    v-model="newRoomLocation"
                    density="compact"
                    hide-details
                    placeholder="위치"
                    style="flex: 1;"
                  />
                  <VTextField
                    v-model.number="newRoomCapacity"
                    density="compact"
                    hide-details
                    placeholder="인원"
                    type="number"
                    style="flex: 0 0 60px;"
                  />
                </div>
                <div class="d-flex align-center gap-2">
                  <VBadge
                    v-for="c in colorOptions"
                    :key="c"
                    :color="c"
                    inline
                    dot
                    class="cursor-pointer"
                    :style="newRoomColor === c ? 'outline: 2px solid currentColor; border-radius: 50%;' : ''"
                    @click="newRoomColor = c"
                  />
                  <VSpacer />
                  <VBtn size="small" @click="addRoom">
                    추가
                  </VBtn>
                </div>
              </div>

              <div class="d-flex flex-column calendars-checkbox">
                <VCheckbox
                  v-model="checkAll"
                  label="전체 보기"
                  color="secondary"
                  density="default"
                />
                <div
                  v-for="room in store.rooms"
                  :key="room.id"
                  class="d-flex align-center calendar-item"
                >
                  <VCheckbox
                    v-model="store.selectedRoomIds"
                    :value="room.id"
                    :color="room.color"
                    :label="`${room.name} (${room.capacity}명)`"
                    density="default"
                    class="flex-grow-1"
                  />
                  <VBtn
                    icon
                    variant="text"
                    size="x-small"
                    color="default"
                    class="calendar-item-delete"
                    @click="removeRoom(room.id)"
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
