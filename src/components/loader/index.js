// material
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
//////////////////////////////////////////////////

export const Loader = ({ loaderOpened }) => {

  return (
    <Backdrop
      open={loaderOpened}
      sx={{ color: 'background.white', zIndex: ({ zIndex }) => zIndex.drawer + 1000 }}
    >
      <CircularProgress size={40} color='primary' />
    </Backdrop>
  )
}
