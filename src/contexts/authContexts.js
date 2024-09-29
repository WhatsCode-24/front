import React, { createContext, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types' // Importa PropTypes
import authServices from '../services/authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const { data } = await authServices.me(token)
        setUser(data)
      } catch (error) {
        console.error('Erro ao buscar usuário:', error)
        logout() // Logout em caso de erro
      }
    }
  }
  const login = async (userData, navigate) => {
    localStorage.setItem('token', userData.data.token)
    const { data } = await authServices.me(userData.data.token)
    setUser(data)
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  // Verifica o estado de autenticação ao carregar o componente
  useEffect(() => {
    checkAuth()
  }, []) // Executa apenas uma vez ao montar o componente

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

// Validação de props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que 'children' é requerido
}

// Hook para usar o contexto
export const useAuth = () => {
  return useContext(AuthContext)
}
