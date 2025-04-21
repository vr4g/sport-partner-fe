import { BACKEND_BASE_URL, LOCALSTORAGE_TOKEN_KEY } from '../../utils/consts'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth()
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)

  useEffect(() => {
    if (!token) {
      setIsValid(false)
      return
    }
    if (!user) {
      return
    }

    const verifyToken = async () => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/user/verify`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        })
        const responseData = await response.json()
        if (responseData.status === 'error') {
          if (responseData.error === 'Token expired') {
            const respRefreshToken = await fetch(`${BACKEND_BASE_URL}/api/user/refreshToken`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user),
            })
            const { data } = await respRefreshToken.json()
            if (data) {
              localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, data)
              setIsValid(true)
              return
            }
          }

          setIsValid(false)
        } else {
          setIsValid(true)
        }
      } catch (error) {
        setIsValid(false)
      }
    }

    verifyToken()
  }, [token, user])

  if (isValid === null) {
    return <div>Loading...</div>
  }

  return isValid ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute
