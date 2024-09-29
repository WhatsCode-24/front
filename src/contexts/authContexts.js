import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types' // Importa PropTypes

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    localStorage.setItem('token', userData.data.token)

    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

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
