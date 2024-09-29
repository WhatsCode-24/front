import apiClient from './api'

const acessosServices = {
  // Método para fazer login
  async getAllAcess() {
    return apiClient.get('/comodo-acesso')
  },
}

export default acessosServices
