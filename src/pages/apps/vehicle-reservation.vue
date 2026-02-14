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
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, conflictError } = useVehicleCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

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
                차량
              </p>

              <div class="d-flex flex-column calendars-checkbox">
                <VCheckbox
                  v-model="checkAll"
                  label="전체 보기"
                  color="secondary"
                  density="default"
                />
                <VCheckbox
                  v-for="vehicle in store.vehicles"
                  :key="vehicle.id"
                  v-model="store.selectedVehicleIds"
                  :value="vehicle.id"
                  :color="vehicle.color"
                  :label="`${vehicle.name} (${vehicle.licensePlate})`"
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
</style>

<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}
</style>
