import * as R from 'ramda'
import { useState, useEffect } from 'react'
// material
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// api
import { getCurrencyRate } from '../../api/get-currency-rate'
//////////////////////////////////////////////////

const currencies = ['USD', 'EUR']

const Currency = ({ cc, rate }) => (
  <Box
    mr={3}
    display='flex'
    flexDirection='row'
    alignItems='center'
  >
    <Typography
      mr={1}
      color='white'
      fontSize={20}
      fontWeight={500}
    >
      {cc}
    </Typography>
    <Typography
      mr={1}
      color='white'
      fontSize={16}
      fontWeight={500}
    >
      {rate}
    </Typography>
  </Box>
)

const Header = () => {
  const [data, setData] = useState()

  const fetchData = async () => {
    try {
      const data = await getCurrencyRate()

      const selectedDate = R.filter(
        item => R.includes(item.cc, currencies),
        data,
      )

      setData(selectedDate)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppBar width='100%' height='60px'>
      <Toolbar
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {
          data?.map(({ cc, rate }, index) => <Currency cc={cc} rate={rate} key={index} />)
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
