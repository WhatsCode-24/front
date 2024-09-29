import apiClient from './api'

const zonesServices = {
  // Método para fazer login
  async getAllZones() {
    return apiClient.get('/empresa-comodos')
  },
  async createZone(zone) {
    return apiClient.post('/empresa-comodos', zone)
  },
  async deleteZone(id) {
    return apiClient.delete(`/empresa-comodos/${id}`)
  },
  async updateZone(zone) {
    return apiClient.put(`/empresa-comodos/${zone.id_empresa_comodo}`, zone)
  },
}

export default zonesServices
