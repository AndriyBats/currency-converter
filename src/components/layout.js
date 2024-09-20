import { Outlet } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
// components
import Header from './header'
//////////////////////////////////////////////////

export const Layout = () => (
  <Box
    width='100vw'
    height='100vh'
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Header />
    <Outlet />
  </Box>
)
