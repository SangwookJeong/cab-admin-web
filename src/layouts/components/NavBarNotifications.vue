<script setup>
import Notifications from '@core/components/Notifications.vue'

const notifications = [
  {
    icon: 'mdi-account-plus-outline',
    color: 'primary',
    title: '새 성도 등록',
    subtitle: '박지수 성도가 새로 등록되었습니다',
    time: '방금 전',
  },
  {
    icon: 'mdi-car-outline',
    color: 'info',
    title: '차량 예약',
    subtitle: '3월 15일 교회버스 예약이 접수되었습니다',
    time: '10분 전',
  },
  {
    icon: 'mdi-calendar-plus-outline',
    color: 'success',
    title: '새 일정 등록',
    subtitle: '3월 20일 봄 수련회 일정이 등록되었습니다',
    time: '1시간 전',
  },
  {
    icon: 'mdi-door-open',
    color: 'warning',
    title: '상담실 예약',
    subtitle: '소상담실 A 3월 16일 14:00 예약이 접수되었습니다',
    time: '3시간 전',
  },
  {
    icon: 'mdi-account-remove-outline',
    color: 'error',
    title: '성도 삭제',
    subtitle: '이민호 성도 정보가 삭제되었습니다',
    time: '어제',
  },
].slice(0, 5)
</script>

<template>
  <Notifications :notifications="notifications" />
</template>
