<script setup>
import axios from '@axios'

const stats = ref({ totalMembers: 0 })
const districtStats = ref([])
const groupStats = ref([])
const upcomingEvents = ref([])
const upcomingVehicles = ref([])
const upcomingRooms = ref([])
const pendingCount = ref(0)
const resetCount = ref(0)
const thisMonthEventCount = ref(0)

const categoryColors = {
  '예배': 'primary',
  '교육': 'info',
  '행사': 'warning',
  '공지': 'success',
  '기타': 'secondary',
}

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토']

const formatEventDate = isoStr => {
  const d = new Date(isoStr)
  const month = d.getMonth() + 1
  const day = d.getDate()
  const dayName = DAY_NAMES[d.getDay()]
  const h = d.getHours().toString().padStart(2, '0')
  const min = d.getMinutes().toString().padStart(2, '0')

  return `${month}/${day} (${dayName}) ${h}:${min}`
}

onMounted(async () => {
  const [statsRes, eventsRes, vehicleRes, roomRes, pendingRes, resetRes] = await Promise.all([
    axios.get('/apps/dashboard/stats'),
    axios.get('/apps/calendar/events', { params: { calendars: '예배,교육,행사,공지,기타' } }),
    axios.get('/apps/vehicle-reservation/events'),
    axios.get('/apps/room-reservation/events'),
    axios.get('/auth/pending-registrations'),
    axios.get('/auth/password-reset-requests'),
  ])

  stats.value = statsRes.data.stats
  districtStats.value = statsRes.data.districtStats
  groupStats.value = statsRes.data.groupStats

  const now = new Date()
  const thisMonth = now.getMonth()
  const thisYear = now.getFullYear()

  const threeDaysLater = new Date(now)

  threeDaysLater.setDate(threeDaysLater.getDate() + 3)
  threeDaysLater.setHours(23, 59, 59, 999)

  const isWithin3Days = e => {
    const start = new Date(e.start)

    return start >= now && start <= threeDaysLater
  }

  const allEvents = eventsRes.data

  thisMonthEventCount.value = allEvents.filter(e => {
    const d = new Date(e.start)

    return d.getFullYear() === thisYear && d.getMonth() === thisMonth
  }).length

  upcomingEvents.value = allEvents
    .filter(isWithin3Days)
    .sort((a, b) => new Date(a.start) - new Date(b.start))

  upcomingVehicles.value = vehicleRes.data
    .filter(isWithin3Days)
    .sort((a, b) => new Date(a.start) - new Date(b.start))

  upcomingRooms.value = roomRes.data
    .filter(isWithin3Days)
    .sort((a, b) => new Date(a.start) - new Date(b.start))

  pendingCount.value = pendingRes.data.registrations.length
  resetCount.value = resetRes.data.requests.length
})
</script>

<template>
  <VRow>
    <!-- 통계 카드 -->
    <VCol
      cols="12"
      sm="6"
      md="3"
    >
      <VCard>
        <VCardText class="d-flex align-center gap-4 py-5">
          <VAvatar
            color="primary"
            size="52"
            rounded
          >
            <VIcon
              icon="mdi-account-group"
              size="30"
            />
          </VAvatar>
          <div>
            <div class="text-h4 font-weight-bold">
              {{ stats.totalMembers }}
            </div>
            <div class="text-body-2 text-medium-emphasis mt-1">
              전체 성도
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      sm="6"
      md="3"
    >
      <VCard>
        <VCardText class="d-flex align-center gap-4 py-5">
          <VAvatar
            color="info"
            size="52"
            rounded
          >
            <VIcon
              icon="mdi-calendar-month"
              size="30"
            />
          </VAvatar>
          <div>
            <div class="text-h4 font-weight-bold">
              {{ thisMonthEventCount }}
            </div>
            <div class="text-body-2 text-medium-emphasis mt-1">
              이번달 일정
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      sm="6"
      md="3"
    >
      <VCard>
        <VCardText class="d-flex align-center gap-4 py-5">
          <VAvatar
            color="warning"
            size="52"
            rounded
          >
            <VIcon
              icon="mdi-account-clock"
              size="30"
            />
          </VAvatar>
          <div>
            <div class="text-h4 font-weight-bold">
              {{ pendingCount }}
            </div>
            <div class="text-body-2 text-medium-emphasis mt-1">
              가입 승인 대기
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      sm="6"
      md="3"
    >
      <VCard>
        <VCardText class="d-flex align-center gap-4 py-5">
          <VAvatar
            color="error"
            size="52"
            rounded
          >
            <VIcon
              icon="mdi-lock-reset"
              size="30"
            />
          </VAvatar>
          <div>
            <div class="text-h4 font-weight-bold">
              {{ resetCount }}
            </div>
            <div class="text-body-2 text-medium-emphasis mt-1">
              비밀번호 재설정 요청
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 일정 / 차량예약 / 상담실예약 -->
    <VCol
      cols="12"
      md="4"
    >
      <VCard
        title="다가오는 일정"
        class="h-100"
      >
        <template #append>
          <VIcon
            icon="mdi-calendar-blank-outline"
            color="primary"
          />
        </template>
        <VCardText class="pb-0">
          <VList lines="two">
            <template
              v-for="(event, index) in upcomingEvents"
              :key="event.id"
            >
              <VListItem class="px-0">
                <template #prepend>
                  <VChip
                    :color="categoryColors[event.extendedProps.calendar] || 'secondary'"
                    size="small"
                    class="me-3"
                    style="min-width: 44px; justify-content: center;"
                  >
                    {{ event.extendedProps.calendar }}
                  </VChip>
                </template>
                <VListItemTitle class="font-weight-medium text-body-2">
                  {{ event.title }}
                </VListItemTitle>
                <VListItemSubtitle class="text-caption">
                  {{ formatEventDate(event.start) }}
                  <span
                    v-if="event.extendedProps.location"
                    class="ms-1"
                  >· {{ event.extendedProps.location }}</span>
                </VListItemSubtitle>
              </VListItem>
              <VDivider
                v-if="index < upcomingEvents.length - 1"
                class="my-1"
              />
            </template>
            <VListItem
              v-if="!upcomingEvents.length"
              class="px-0"
            >
              <VListItemTitle class="text-medium-emphasis text-body-2">
                예정된 일정이 없습니다
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>
        <VCardActions>
          <VBtn
            variant="text"
            color="primary"
            size="small"
            :to="{ name: 'apps-calendar' }"
          >
            전체 보기
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        title="차량 예약"
        class="h-100"
      >
        <template #append>
          <VIcon
            icon="mdi-car-outline"
            color="info"
          />
        </template>
        <VCardText class="pb-0">
          <VList lines="two">
            <template
              v-for="(event, index) in upcomingVehicles"
              :key="event.id"
            >
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar
                    color="info"
                    size="32"
                    rounded
                    variant="tonal"
                    class="me-3"
                  >
                    <VIcon
                      icon="mdi-car"
                      size="18"
                    />
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-medium text-body-2">
                  {{ event.title }}
                </VListItemTitle>
                <VListItemSubtitle class="text-caption">
                  {{ formatEventDate(event.start) }}
                  <span
                    v-if="event.extendedProps.booker"
                    class="ms-1"
                  >· {{ event.extendedProps.booker }}</span>
                </VListItemSubtitle>
              </VListItem>
              <VDivider
                v-if="index < upcomingVehicles.length - 1"
                class="my-1"
              />
            </template>
            <VListItem
              v-if="!upcomingVehicles.length"
              class="px-0"
            >
              <VListItemTitle class="text-medium-emphasis text-body-2">
                예정된 차량 예약이 없습니다
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>
        <VCardActions>
          <VBtn
            variant="text"
            color="info"
            size="small"
            :to="{ name: 'apps-vehicle-reservation' }"
          >
            전체 보기
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        title="상담실 예약"
        class="h-100"
      >
        <template #append>
          <VIcon
            icon="mdi-door-open"
            color="warning"
          />
        </template>
        <VCardText class="pb-0">
          <VList lines="two">
            <template
              v-for="(event, index) in upcomingRooms"
              :key="event.id"
            >
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar
                    color="warning"
                    size="32"
                    rounded
                    variant="tonal"
                    class="me-3"
                  >
                    <VIcon
                      icon="mdi-door"
                      size="18"
                    />
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-medium text-body-2">
                  {{ event.title }}
                </VListItemTitle>
                <VListItemSubtitle class="text-caption">
                  {{ formatEventDate(event.start) }}
                  <span
                    v-if="event.extendedProps.booker"
                    class="ms-1"
                  >· {{ event.extendedProps.booker }}</span>
                </VListItemSubtitle>
              </VListItem>
              <VDivider
                v-if="index < upcomingRooms.length - 1"
                class="my-1"
              />
            </template>
            <VListItem
              v-if="!upcomingRooms.length"
              class="px-0"
            >
              <VListItemTitle class="text-medium-emphasis text-body-2">
                예정된 상담실 예약이 없습니다
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>
        <VCardActions>
          <VBtn
            variant="text"
            color="warning"
            size="small"
            :to="{ name: 'apps-room-reservation' }"
          >
            전체 보기
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <!-- 소그룹별 현황 -->
    <VCol
      cols="12"
      md="4"
    >
      <VCard
        title="소그룹별 성도 현황"
        class="h-100"
      >
        <VCardText>
          <div
            v-for="item in groupStats"
            :key="item.name"
            class="mb-4"
          >
            <div class="d-flex justify-space-between mb-1">
              <span class="text-body-2">{{ item.name }}</span>
              <span class="text-body-2 font-weight-medium">{{ item.count }}명</span>
            </div>
            <VProgressLinear
              :model-value="stats.totalMembers ? (item.count / stats.totalMembers) * 100 : 0"
              color="primary"
              rounded
              height="8"
              bg-color="primary"
              bg-opacity="0.12"
            />
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 교구별 성도 현황 -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard
        title="교구별 성도 현황"
        class="h-100"
      >
        <VCardText>
          <VRow>
            <VCol
              v-for="item in districtStats"
              :key="item.name"
              cols="4"
              sm="3"
              md="3"
            >
              <div
                class="d-flex flex-column align-center pa-3 rounded text-center"
                style="border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));"
              >
                <div class="text-h5 font-weight-bold text-primary mb-1">
                  {{ item.count }}
                </div>
                <div class="text-caption text-medium-emphasis">
                  {{ item.name }}
                </div>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
