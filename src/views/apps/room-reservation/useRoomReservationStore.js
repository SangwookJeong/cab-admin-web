import axios from '@axios'

export const useRoomReservationStore = defineStore('room-reservation', {
  state: () => ({
    rooms: [],
    selectedRoomIds: [],
  }),
  actions: {
    async fetchRooms() {
      const response = await axios.get('/apps/room-reservation/rooms')

      this.rooms = response.data
      if (this.selectedRoomIds.length === 0)
        this.selectedRoomIds = this.rooms.map(r => r.id)

      return response
    },
    async addRoom(room) {
      const response = await axios.post('/apps/room-reservation/rooms', { room })

      await this.fetchRooms()

      return response
    },
    async removeRoom(roomId) {
      const response = await axios.delete(`/apps/room-reservation/rooms/${roomId}`)

      this.rooms = this.rooms.filter(r => r.id !== roomId)
      this.selectedRoomIds = this.selectedRoomIds.filter(id => id !== roomId)

      return response
    },
    async fetchEvents() {
      return axios.get('/apps/room-reservation/events', { params: { roomIds: this.selectedRoomIds.join(',') } })
    },
    async addEvent(event) {
      return axios.post('/apps/room-reservation/events', { event })
    },
    async updateEvent(event) {
      return axios.post(`/apps/room-reservation/events/${event.id}`, { event })
    },
    async removeEvent(eventId) {
      return axios.delete(`/apps/room-reservation/events/${eventId}`)
    },
  },
})
