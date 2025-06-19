import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setAuthentication] = useState(false)

  const toggleAuthentication = () => {
    setAuthentication(prev => !prev)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  )
}
