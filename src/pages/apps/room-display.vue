<script setup>
import axios from '@axios'

const rooms = ref([])
const events = ref([])
const selectedRoomId = ref(null)
const now = ref(new Date())
const currentTimeStr = ref('')
const isFullscreen = ref(false)
const displayContainer = ref(null)

const updateCurrentTime = () => {
  now.value = new Date()
  const h = String(now.value.getHours()).padStart(2, '0')
  const m = String(now.value.getMinutes()).padStart(2, '0')
  const s = String(now.value.getSeconds()).padStart(2, '0')

  currentTimeStr.value = `${h}:${m}:${s}`
}

const fetchData = async () => {
  try {
    const [roomsRes, eventsRes] = await Promise.all([
      axios.get('/apps/room-reservation/rooms'),
      axios.get('/apps/room-reservation/events', { params: { roomIds: '' } }),
    ])

    rooms.value = roomsRes.data
    events.value = eventsRes.data

    if (!selectedRoomId.value && rooms.value.length > 0)
      selectedRoomId.value = rooms.value[0].id
  }
  catch (e) {
    console.error('Error fetching room display data', e)
  }
}

const selectedRoom = computed(() => rooms.value.find(r => r.id === selectedRoomId.value))

const todayEvents = computed(() => {
  if (!selectedRoomId.value) return []
  const todayStart = new Date(now.value.getFullYear(), now.value.getMonth(), now.value.getDate())
  const todayEnd = new Date(now.value.getFullYear(), now.value.getMonth(), now.value.getDate(), 23, 59, 59)

  return events.value
    .filter(e =>
      e.extendedProps.resourceId === selectedRoomId.value
      && new Date(e.start) <= todayEnd
      && new Date(e.end) >= todayStart,
    )
    .sort((a, b) => new Date(a.start) - new Date(b.start))
})

const currentEvent = computed(() => {
  return todayEvents.value.find(e =>
    new Date(e.start) <= now.value && new Date(e.end) > now.value,
  ) || null
})

const nextEvent = computed(() => {
  return todayEvents.value.find(e => new Date(e.start) > now.value) || null
})

const isInUse = computed(() => currentEvent.value !== null)

const formatTime = dateStr => {
  const d = new Date(dateStr)

  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

const formatTimeRange = (start, end) => {
  return `${formatTime(start)} ~ ${formatTime(end)}`
}

// Fullscreen API
const toggleFullscreen = async () => {
  try {
    if (!document.fullscreenElement) {
      await displayContainer.value?.requestFullscreen()
      isFullscreen.value = true
    }
    else {
      await document.exitFullscreen()
      isFullscreen.value = false
    }
  }
  catch (e) {
    console.error('Fullscreen error:', e)
  }
}

const onFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

// Read room from URL query param
const route = useRoute()

let timeInterval = null
let dataInterval = null

onMounted(() => {
  updateCurrentTime()
  fetchData().then(() => {
    if (route.query.room)
      selectedRoomId.value = route.query.room
  })
  timeInterval = setInterval(updateCurrentTime, 1000)
  dataInterval = setInterval(fetchData, 30000)
  document.addEventListener('fullscreenchange', onFullscreenChange)
})

onBeforeUnmount(() => {
  if (timeInterval)
    clearInterval(timeInterval)
  if (dataInterval)
    clearInterval(dataInterval)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
})
</script>

<template>
  <div
    ref="displayContainer"
    class="room-display-wrapper"
    :class="{ 'room-display-fullscreen': isFullscreen }"
  >
    <!-- Top bar -->
    <VCard class="room-display-topbar mb-4" :flat="isFullscreen" :class="{ 'rounded-0': isFullscreen }">
      <VCardText class="d-flex align-center gap-4 flex-wrap py-3 px-4">
        <VSelect
          v-model="selectedRoomId"
          :items="rooms"
          item-value="id"
          :item-title="r => `${r.name} (${r.location}, ${r.capacity}명)`"
          label="회의실 선택"
          hide-details
          density="compact"
          class="room-selector"
        />
        <VSpacer />
        <span class="room-display-clock font-weight-bold">{{ currentTimeStr }}</span>
        <VBtn
          icon
          variant="text"
          size="small"
          @click="fetchData"
        >
          <VIcon icon="mdi-refresh" />
        </VBtn>
        <VBtn
          icon
          variant="text"
          size="small"
          @click="toggleFullscreen"
        >
          <VIcon :icon="isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'" />
        </VBtn>
      </VCardText>
    </VCard>

    <!-- Main content -->
    <div
      v-if="selectedRoom"
      class="room-display-content"
    >
      <VRow class="h-100 ma-0">
        <!-- Left: Current status -->
        <VCol
          cols="12"
          md="7"
          class="room-display-left pa-0 pa-md-2"
        >
          <VCard
            :style="`border-top: clamp(4px, 0.6vw, 8px) solid rgb(var(--v-theme-${isInUse ? 'error' : 'success'}))`"
            class="h-100 d-flex flex-column"
          >
            <VCardText class="d-flex flex-column align-center justify-center text-center flex-grow-1 room-status-panel">
              <!-- Room name -->
              <h1 class="room-name font-weight-bold mb-1">
                {{ selectedRoom.name }}
              </h1>
              <div class="room-meta text-medium-emphasis mb-4">
                {{ selectedRoom.location }} | {{ selectedRoom.capacity }}명
              </div>

              <!-- Status chip -->
              <VChip
                :color="isInUse ? 'error' : 'success'"
                label
                class="room-status-chip mb-6"
              >
                {{ isInUse ? '사용중' : '사용가능' }}
              </VChip>

              <!-- Current meeting info -->
              <template v-if="currentEvent">
                <h2 class="room-event-title font-weight-bold mb-2">
                  {{ currentEvent.title }}
                </h2>
                <div class="room-event-detail text-medium-emphasis mb-1">
                  {{ currentEvent.extendedProps.booker }}
                </div>
                <div class="room-event-detail mb-2">
                  {{ formatTimeRange(currentEvent.start, currentEvent.end) }}
                </div>
                <div
                  v-if="currentEvent.extendedProps.description"
                  class="room-event-sub text-medium-emphasis mt-1"
                >
                  {{ currentEvent.extendedProps.description }}
                </div>
              </template>

              <!-- Available + next meeting -->
              <template v-else-if="nextEvent">
                <div class="room-event-sub text-medium-emphasis mb-3">
                  다음 예약
                </div>
                <h2 class="room-event-title font-weight-bold mb-2">
                  {{ nextEvent.title }}
                </h2>
                <div class="room-event-detail text-medium-emphasis mb-1">
                  {{ nextEvent.extendedProps.booker }}
                </div>
                <div class="room-event-detail">
                  {{ formatTimeRange(nextEvent.start, nextEvent.end) }}
                </div>
              </template>

              <!-- No remaining events -->
              <template v-else>
                <div class="room-event-detail text-medium-emphasis">
                  오늘 남은 예약이 없습니다
                </div>
              </template>
            </VCardText>
          </VCard>
        </VCol>

        <!-- Right: Today's schedule -->
        <VCol
          cols="12"
          md="5"
          class="room-display-right pa-0 pa-md-2"
        >
          <VCard class="h-100 d-flex flex-column">
            <VCardTitle class="pa-4 pb-3">
              <div class="d-flex align-center justify-space-between">
                <span class="room-schedule-title">오늘 예약 현황</span>
                <VChip
                  size="small"
                  color="primary"
                  variant="tonal"
                >
                  {{ todayEvents.length }}건
                </VChip>
              </div>
            </VCardTitle>

            <VDivider />

            <VCardText
              v-if="todayEvents.length === 0"
              class="d-flex flex-column align-center justify-center flex-grow-1"
            >
              <VIcon
                icon="mdi-calendar-blank-outline"
                size="48"
                color="secondary"
                class="mb-4"
              />
              <div class="room-event-sub text-medium-emphasis">
                예약 없음
              </div>
            </VCardText>

            <div
              v-else
              class="room-schedule-list flex-grow-1"
              style="overflow-y: auto;"
            >
              <VList
                lines="three"
                class="py-0"
              >
                <template
                  v-for="(evt, index) in todayEvents"
                  :key="evt.id"
                >
                  <VListItem
                    :class="currentEvent && currentEvent.id === evt.id ? 'bg-light-primary' : ''"
                    class="room-schedule-item py-3"
                  >
                    <template #prepend>
                      <div class="d-flex flex-column align-center me-4 room-schedule-time">
                        <span class="font-weight-bold">{{ formatTime(evt.start) }}</span>
                        <span class="text-medium-emphasis room-schedule-time-sub">{{ formatTime(evt.end) }}</span>
                      </div>
                      <VDivider
                        vertical
                        class="me-4"
                      />
                    </template>

                    <VListItemTitle class="font-weight-medium room-schedule-event-title">
                      {{ evt.title }}
                    </VListItemTitle>
                    <VListItemSubtitle class="room-schedule-event-sub">
                      {{ evt.extendedProps.booker }}
                    </VListItemSubtitle>

                    <template #append>
                      <VChip
                        v-if="currentEvent && currentEvent.id === evt.id"
                        color="error"
                        size="small"
                        label
                      >
                        진행중
                      </VChip>
                    </template>
                  </VListItem>
                  <VDivider
                    v-if="index < todayEvents.length - 1"
                  />
                </template>
              </VList>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <!-- Loading fallback -->
    <VCard
      v-else-if="rooms.length === 0"
      class="pa-8 text-center"
    >
      <VProgressCircular
        indeterminate
        color="primary"
      />
      <div class="text-body-1 text-medium-emphasis mt-4">
        데이터를 불러오는 중...
      </div>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
// Room selector width
.room-selector {
  max-inline-size: min(300px, 50vw);
  min-inline-size: 180px;
}

// Clock responsive sizing
.room-display-clock {
  font-size: clamp(1rem, 2vw, 1.5rem);
}

// --- Left panel: status ---
.room-name {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
}

.room-meta {
  font-size: clamp(0.85rem, 1.5vw, 1.15rem);
}

.room-status-chip {
  font-size: clamp(1rem, 2vw, 1.5rem) !important;
  block-size: auto !important;
  padding-block: clamp(6px, 1vw, 14px);
  padding-inline: clamp(16px, 3vw, 40px);
}

.room-event-title {
  font-size: clamp(1.2rem, 3vw, 2.25rem);
  line-height: 1.3;
}

.room-event-detail {
  font-size: clamp(0.95rem, 1.8vw, 1.35rem);
}

.room-event-sub {
  font-size: clamp(0.85rem, 1.4vw, 1.1rem);
}

.room-status-panel {
  padding: clamp(16px, 3vw, 48px);
}

// --- Right panel: schedule ---
.room-schedule-title {
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  font-weight: 600;
}

.room-schedule-time {
  min-inline-size: clamp(40px, 6vw, 60px);

  span {
    font-size: clamp(0.8rem, 1.3vw, 1rem);
  }
}

.room-schedule-time-sub {
  font-size: clamp(0.7rem, 1vw, 0.85rem);
}

.room-schedule-event-title {
  font-size: clamp(0.85rem, 1.4vw, 1.1rem);
}

.room-schedule-event-sub {
  font-size: clamp(0.75rem, 1.2vw, 0.95rem);
}

// --- Fullscreen mode ---
.room-display-fullscreen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: rgb(var(--v-theme-surface));

  .room-display-topbar {
    flex-shrink: 0;
  }

  .room-display-content {
    display: flex;
    overflow: hidden;
    flex: 1;
    flex-direction: column;

    .v-row {
      flex: 1;
    }
  }

  // Bigger fonts in fullscreen
  .room-name {
    font-size: clamp(2rem, 5vw, 4rem);
  }

  .room-meta {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  .room-status-chip {
    font-size: clamp(1.2rem, 2.5vw, 2rem) !important;
    padding-block: clamp(10px, 1.5vw, 20px);
    padding-inline: clamp(24px, 4vw, 56px);
  }

  .room-event-title {
    font-size: clamp(1.5rem, 3.5vw, 3rem);
  }

  .room-event-detail {
    font-size: clamp(1.1rem, 2.2vw, 1.75rem);
  }

  .room-event-sub {
    font-size: clamp(1rem, 1.8vw, 1.4rem);
  }

  .room-schedule-title {
    font-size: clamp(1.1rem, 2vw, 1.6rem);
  }

  .room-schedule-time span {
    font-size: clamp(0.9rem, 1.5vw, 1.2rem);
  }

  .room-schedule-event-title {
    font-size: clamp(0.95rem, 1.6vw, 1.3rem);
  }

  .room-schedule-event-sub {
    font-size: clamp(0.85rem, 1.4vw, 1.1rem);
  }
}
</style>
