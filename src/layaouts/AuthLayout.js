import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Container, createTheme } from '@mui/system'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

const AuthLayout = () => {
    const { auth } = useAuth()
    const location = useLocation()
  
    const navigateTo = (path) => (
      <Navigate to={`${path}`} state={{ from: location }} replace />
    )
  
    return auth.token ? (
          <Outlet />
    ) : auth.token ? (
      navigateTo("/letters-corporate")
    ) : (
      navigateTo("/")
    )
  }
  export default AuthLayout;