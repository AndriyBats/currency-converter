import './App.css'
import { lazy, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
// components
import { Layout } from './components/layout'
import { Loader } from './components/loader'
//////////////////////////////////////////////////

const LoadingFallback = () => (
  <Box
    width='100vw'
    display='flex'
    height='100vh'
    alignItems='center'
    justifyContent='center'
    backgroundColor='background.default'
  >
    <Loader loaderOpened={true} />
  </Box>
)

// routes
const Conversion = lazy(() => import('./components/conversion'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Conversion />} />
          </Route>Route
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
