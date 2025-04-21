import ProtectedRoute from '../components/Router/ProtectedRoute'
import HomeScreen from '../pages/HomeScreen/HomeScreen'
import Login from '../pages/Login/Login'

export const ROUTES = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomeScreen />
      </ProtectedRoute>
    ),
  },
  { path: '/login', element: <Login /> },
]
