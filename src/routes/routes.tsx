import ProtectedRoute from '../components/Router/ProtectedRoute'
import HomeScreen from '../pages/HomeScreen/HomeScreen'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

export const ROUTES = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomeScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  { path: '/login', element: <Login /> },
]
