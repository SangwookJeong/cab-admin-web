import axios from '@axios'

export const useVehicleReservationStore = defineStore('vehicle-reservation', {
  state: () => ({
    vehicles: [],
    selectedVehicleIds: [],
  }),
  actions: {
    async fetchVehicles() {
      const response = await axios.get('/apps/vehicle-reservation/vehicles')

      this.vehicles = response.data
      if (this.selectedVehicleIds.length === 0)
        this.selectedVehicleIds = this.vehicles.map(v => v.id)

      return response
    },
    async addVehicle(vehicle) {
      const response = await axios.post('/apps/vehicle-reservation/vehicles', { vehicle })

      await this.fetchVehicles()

      return response
    },
    async removeVehicle(vehicleId) {
      const response = await axios.delete(`/apps/vehicle-reservation/vehicles/${vehicleId}`)

      this.vehicles = this.vehicles.filter(v => v.id !== vehicleId)
      this.selectedVehicleIds = this.selectedVehicleIds.filter(id => id !== vehicleId)

      return response
    },
    async fetchEvents() {
      return axios.get('/apps/vehicle-reservation/events', { params: { vehicleIds: this.selectedVehicleIds.join(',') } })
    },
    async addEvent(event) {
      return axios.post('/apps/vehicle-reservation/events', { event })
    },
    async updateEvent(event) {
      return axios.post(`/apps/vehicle-reservation/events/${event.id}`, { event })
    },
    async removeEvent(eventId) {
      return axios.delete(`/apps/vehicle-reservation/events/${eventId}`)
    },
  },
})
