import apiClient from './api'

const authServices = {
  // Método para fazer login
  async login(credentials) {
    return await apiClient.post('/auth/login', credentials)
  },
}

export default authServices
