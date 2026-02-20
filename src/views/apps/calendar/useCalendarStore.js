import axios from '@axios'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    availableCalendars: [
      { color: 'primary', label: '예배' },
      { color: 'info', label: '교육' },
      { color: 'warning', label: '행사' },
      { color: 'success', label: '공지' },
      { color: 'secondary', label: '기타' },
    ],
    selectedCalendars: ['예배', '교육', '행사', '공지', '기타'],
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
