<script setup>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue3'
import { useCalendar } from '@/views/apps/calendar/useCalendar'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'
import { useRoomReservationStore } from '@/views/apps/room-reservation/useRoomReservationStore'
import { useVehicleReservationStore } from '@/views/apps/vehicle-reservation/useVehicleReservationStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'
import CalendarEventHandler from '@/views/apps/calendar/CalendarEventHandler.vue'
import RoomReservationHandler from '@/views/apps/room-reservation/RoomReservationHandler.vue'
import VehicleReservationHandler from '@/views/apps/vehicle-reservation/VehicleReservationHandler.vue'

const calendarStore = useCalendarStore()
const roomStore = useRoomReservationStore()
const vehicleStore = useVehicleReservationStore()

// Initialize room and vehicle data
roomStore.fetchRooms()
vehicleStore.fetchVehicles()

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()

const {
  refCalendar,
  calendarOptions,
  calendarEvent,
  roomEvent,
  vehicleEvent,
  isCalendarHandlerActive,
  isRoomHandlerActive,
  isVehicleHandlerActive,
  conflictError,
  addCalendarEvent,
  updateCalendarEvent,
  removeCalendarEvent,
  addRoomEvent,
  updateRoomEvent,
  removeRoomEvent,
  addVehicleEvent,
  updateVehicleEvent,
  removeVehicleEvent,
  refetchEvents,
} = useCalendar(isLeftSidebarOpen)

// flatpickr 마우스 벗어나면 자동 닫기
const onFlatpickrMouseOut = e => {
  const calendar = e.target.closest('.flatpickr-calendar')
  if (calendar && !calendar.contains(e.relatedTarget)) {
    document.querySelectorAll('.flatpickr-input').forEach(input => {
      input._flatpickr?.close()
    })
  }
}

onMounted(() => {
  document.addEventListener('mouseout', onFlatpickrMouseOut, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseout', onFlatpickrMouseOut, true)
})

// Conflict error snackbar
const showConflictSnackbar = ref(false)

watch(conflictError, val => {
  if (val)
    showConflictSnackbar.value = true
})

// Check-all helpers
const checkAllCalendars = computed({
  get: () => calendarStore.selectedCalendars.length === calendarStore.availableCalendars.length,
  set: val => {
    if (val)
      calendarStore.selectedCalendars = calendarStore.availableCalendars.map(i => i.label)
    else if (calendarStore.selectedCalendars.length === calendarStore.availableCalendars.length)
      calendarStore.selectedCalendars = []
  },
})

const checkAllRooms = computed({
  get: () => roomStore.selectedRoomIds.length === roomStore.rooms.length,
  set: val => {
    if (val)
      roomStore.selectedRoomIds = roomStore.rooms.map(r => r.id)
    else if (roomStore.selectedRoomIds.length === roomStore.rooms.length)
      roomStore.selectedRoomIds = []
  },
})

const checkAllVehicles = computed({
  get: () => vehicleStore.selectedVehicleIds.length === vehicleStore.vehicles.length,
  set: val => {
    if (val)
      vehicleStore.selectedVehicleIds = vehicleStore.vehicles.map(v => v.id)
    else if (vehicleStore.selectedVehicleIds.length === vehicleStore.vehicles.length)
      vehicleStore.selectedVehicleIds = []
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

// ── 회의실 추가/삭제 ──
const showAddRoom = ref(false)
const newRoomName = ref('')
const newRoomLocation = ref('')
const newRoomCapacity = ref(4)
const newRoomColor = ref('primary')

const addRoom = async () => {
  const name = newRoomName.value.trim()
  if (!name) return
  await roomStore.addRoom({
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
  await roomStore.removeRoom(roomId)
  refetchEvents()
}

// ── 차량 추가/삭제 ──
const showAddVehicle = ref(false)
const newVehicleName = ref('')
const newVehiclePlate = ref('')
const newVehicleColor = ref('primary')

const addVehicle = async () => {
  const name = newVehicleName.value.trim()
  if (!name) return
  await vehicleStore.addVehicle({
    name,
    type: '',
    licensePlate: newVehiclePlate.value.trim() || '-',
    color: newVehicleColor.value,
  })
  newVehicleName.value = ''
  newVehiclePlate.value = ''
  newVehicleColor.value = 'primary'
  showAddVehicle.value = false
  refetchEvents()
}

const removeVehicle = async vehicleId => {
  await vehicleStore.removeVehicle(vehicleId)
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
            <!-- Add buttons -->
            <div class="d-flex flex-column gap-y-2">
              <VBtn
                block
                @click="isCalendarHandlerActive = true"
              >
                일정 추가
              </VBtn>
              <VBtn
                block
                color="info"
                variant="tonal"
                @click="isRoomHandlerActive = true"
              >
                회의실 예약
              </VBtn>
              <VBtn
                block
                color="warning"
                variant="tonal"
                @click="isVehicleHandlerActive = true"
              >
                차량 예약
              </VBtn>
            </div>

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

            <!-- ── 회의실 filters ── -->
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
                  v-model="checkAllRooms"
                  label="전체 보기"
                  color="secondary"
                  density="default"
                />
                <div
                  v-for="room in roomStore.rooms"
                  :key="room.id"
                  class="d-flex align-center calendar-item"
                >
                  <VCheckbox
                    v-model="roomStore.selectedRoomIds"
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

            <!-- ── 차량 filters ── -->
            <div>
              <div class="d-flex align-center justify-space-between mb-3">
                <p class="text-sm text-uppercase text-medium-emphasis mb-0">
                  차량
                </p>
                <VBtn
                  icon
                  variant="text"
                  size="x-small"
                  color="default"
                  @click="showAddVehicle = !showAddVehicle"
                >
                  <VIcon :icon="showAddVehicle ? 'mdi-close' : 'mdi-plus'" size="18" />
                </VBtn>
              </div>

              <!-- 차량 추가 폼 -->
              <div v-if="showAddVehicle" class="mb-3 d-flex flex-column gap-y-2">
                <VTextField
                  v-model="newVehicleName"
                  density="compact"
                  hide-details
                  placeholder="차량명"
                  @keyup.enter="addVehicle"
                />
                <VTextField
                  v-model="newVehiclePlate"
                  density="compact"
                  hide-details
                  placeholder="차량번호"
                />
                <div class="d-flex align-center gap-2">
                  <VBadge
                    v-for="c in colorOptions"
                    :key="c"
                    :color="c"
                    inline
                    dot
                    class="cursor-pointer"
                    :style="newVehicleColor === c ? 'outline: 2px solid currentColor; border-radius: 50%;' : ''"
                    @click="newVehicleColor = c"
                  />
                  <VSpacer />
                  <VBtn size="small" @click="addVehicle">
                    추가
                  </VBtn>
                </div>
              </div>

              <div class="d-flex flex-column calendars-checkbox">
                <VCheckbox
                  v-model="checkAllVehicles"
                  label="전체 보기"
                  color="secondary"
                  density="default"
                />
                <div
                  v-for="vehicle in vehicleStore.vehicles"
                  :key="vehicle.id"
                  class="d-flex align-center calendar-item"
                >
                  <VCheckbox
                    v-model="vehicleStore.selectedVehicleIds"
                    :value="vehicle.id"
                    :color="vehicle.color"
                    :label="vehicle.name"
                    density="default"
                    class="flex-grow-1"
                  />
                  <VBtn
                    icon
                    variant="text"
                    size="x-small"
                    color="default"
                    class="calendar-item-delete"
                    @click="removeVehicle(vehicle.id)"
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

    <!-- Event Handlers -->
    <CalendarEventHandler
      v-model:isDrawerOpen="isCalendarHandlerActive"
      :event="calendarEvent"
      @add-event="addCalendarEvent"
      @update-event="updateCalendarEvent"
      @remove-event="removeCalendarEvent"
    />

    <RoomReservationHandler
      v-model:isDrawerOpen="isRoomHandlerActive"
      :event="roomEvent"
      @add-event="addRoomEvent"
      @update-event="updateRoomEvent"
      @remove-event="removeRoomEvent"
    />

    <VehicleReservationHandler
      v-model:isDrawerOpen="isVehicleHandlerActive"
      :event="vehicleEvent"
      @add-event="addVehicleEvent"
      @update-event="updateVehicleEvent"
      @remove-event="removeVehicleEvent"
    />

    <!-- Conflict error snackbar -->
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
