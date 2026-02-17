<script setup>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue3'
import {
  blankEvent,
  useVehicleCalendar,
} from '@/views/apps/vehicle-reservation/useVehicleCalendar'
import { useVehicleReservationStore } from '@/views/apps/vehicle-reservation/useVehicleReservationStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'
import VehicleReservationHandler from '@/views/apps/vehicle-reservation/VehicleReservationHandler.vue'

const store = useVehicleReservationStore()

// Fetch vehicles on mount
store.fetchVehicles()

const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)

watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, conflictError, refetchEvents } = useVehicleCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

// Snackbar for conflict errors
const showConflictSnackbar = ref(false)

watch(conflictError, val => {
  if (val)
    showConflictSnackbar.value = true
})

// Check all vehicles
const checkAll = computed({
  get: () => store.selectedVehicleIds.length === store.vehicles.length,
  set: val => {
    if (val)
      store.selectedVehicleIds = store.vehicles.map(v => v.id)
    else if (store.selectedVehicleIds.length === store.vehicles.length)
      store.selectedVehicleIds = []
  },
})

// ── 차량 추가/삭제 ──
const colorOptions = ['primary', 'success', 'error', 'warning', 'info', 'secondary']
const showAddVehicle = ref(false)
const newVehicleColor2 = ref('')
const newVehicleType = ref('')
const newVehiclePlate = ref('')
const newVehicleBadgeColor = ref('primary')

const addVehicle = async () => {
  const plate = newVehiclePlate.value.trim()
  if (!plate) return
  await store.addVehicle({
    vehicleColor: newVehicleColor2.value.trim() || '-',
    type: newVehicleType.value.trim() || '-',
    licensePlate: plate,
    color: newVehicleBadgeColor.value,
  })
  newVehicleColor2.value = ''
  newVehicleType.value = ''
  newVehiclePlate.value = ''
  newVehicleBadgeColor.value = 'primary'
  showAddVehicle.value = false
  refetchEvents()
}

const removeVehicle = async vehicleId => {
  await store.removeVehicle(vehicleId)
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
                  v-model="newVehicleColor2"
                  density="compact"
                  hide-details
                  placeholder="색상 (예: 흰색)"
                />
                <VTextField
                  v-model="newVehicleType"
                  density="compact"
                  hide-details
                  placeholder="차종 (예: 세단)"
                />
                <VTextField
                  v-model="newVehiclePlate"
                  density="compact"
                  hide-details
                  placeholder="차번호 (예: 12가 3456)"
                  @keyup.enter="addVehicle"
                />
                <div class="d-flex align-center gap-2">
                  <VBadge
                    v-for="c in colorOptions"
                    :key="c"
                    :color="c"
                    inline
                    dot
                    class="cursor-pointer"
                    :style="newVehicleBadgeColor === c ? 'outline: 2px solid currentColor; border-radius: 50%;' : ''"
                    @click="newVehicleBadgeColor = c"
                  />
                  <VSpacer />
                  <VBtn size="small" @click="addVehicle">
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
                  v-for="vehicle in store.vehicles"
                  :key="vehicle.id"
                  class="d-flex align-center calendar-item"
                >
                  <VCheckbox
                    v-model="store.selectedVehicleIds"
                    :value="vehicle.id"
                    :color="vehicle.color"
                    :label="`${vehicle.vehicleColor} ${vehicle.type} ${vehicle.licensePlate}`"
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
    <VehicleReservationHandler
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
