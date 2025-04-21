import { createContext, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { LOCALSTORAGE_TOKEN_KEY } from '../utils/consts'

type User = {
  id: number
  email: string
}
interface AuthContextType {
  permissions: string[]
  user: User | null
  hasPermission: (permission: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [permissions, setPermissions] = useState<string[]>([])
  const [user, setUser] = useState<User>({ id: 0, email: '' })

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const resp = await fetch(`http://localhost:8302/api/permissions`)
        const data = await resp.json()

        setPermissions(data.map((perm: { id: number; name: string }) => perm.name))
      } catch (error) {
        console.error('Failed to fetch permissions', error)
      }
    }

    const loadUserFromToken = async () => {
      const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)
      if (token) {
        try {
          const decoded: { id: number; email: string } = jwtDecode(token)
          setUser({ id: decoded.id, email: decoded.email })
        } catch (error) {
          console.error('Invalid token', error)
          setUser({ id: 0, email: '' })
        }
      }
    }

    loadUserFromToken()
    fetchPermissions()
  }, [])

  const hasPermission = (permission: string) => permissions.includes(permission)

  return (
    <AuthContext.Provider value={{ permissions, user, hasPermission }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('Context is missing in useAuth!')
  }
  return context
}
