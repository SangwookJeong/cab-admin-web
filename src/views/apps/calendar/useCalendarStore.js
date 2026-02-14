import axios from '@axios'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    availableCalendars: [
      { color: 'error', label: '개인' },
      { color: 'primary', label: '업무' },
      { color: 'warning', label: '가족' },
      { color: 'success', label: '휴일' },
      { color: 'info', label: '기타' },
    ],
    selectedCalendars: ['개인', '업무', '가족', '휴일', '기타'],
  }),
  actions: {
    addCalendarCategory(category) {
      this.availableCalendars.push(category)
      this.selectedCalendars.push(category.label)
    },
    removeCalendarCategory(label) {
      this.availableCalendars = this.availableCalendars.filter(c => c.label !== label)
      this.selectedCalendars = this.selectedCalendars.filter(c => c !== label)
    },
    async fetchEvents() {
      return axios.get('/apps/calendar/events', { params: { calendars: this.selectedCalendars.join(',') } })
    },
    async addEvent(event) {
      return axios.post('/apps/calendar/events', { event })
    },
    async updateEvent(event) {
      return axios.post(`/apps/calendar/events/${event.id}`, { event })
    },
    async removeEvent(eventId) {
      return axios.delete(`/apps/calendar/events/${eventId}`)
    },
  },
})
