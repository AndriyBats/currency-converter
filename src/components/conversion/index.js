import * as R from 'ramda'
import { useState, useEffect } from 'react'
// material
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// helpers
import * as H from '../../helpers'
// api
import { getCurrencyRate } from '../../api/get-currency-rate'
// components
import ConversionItem from './item'
//////////////////////////////////////////////////

const getRate = (cc, data) => R.prop('rate', R.find(R.propEq(cc, 'cc'), data))

const Conversion = () => {
  const [data, setData] = useState([])
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [firstSelect, setFirstSelect] = useState('')
  const [secondSelect, setSecondSelect] = useState('')

  const fetchData = async () => {
    try {
      const data = await getCurrencyRate()

      const newObject = { cc: 'UAH', rate: 1, txt: 'Українська гривня' }

      const newData = R.sortBy(R.prop('txt'), R.append(newObject, data))

      setData(newData)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (H.isAllTrue(
      H.isNotNilAndNotEmpty(firstValue),
      H.isNotNilAndNotEmpty(firstSelect),
      H.isNotNilAndNotEmpty(secondSelect),
    )) {
      const calculatedValue = R.divide(R.multiply(firstValue, getRate(firstSelect, data)), getRate(secondSelect, data))

      setSecondValue(calculatedValue)
    }
  }, [firstValue, firstSelect, secondSelect]) // eslint-disable-line

  useEffect(() => {
    if (H.isAllTrue(
      H.isNotNilAndNotEmpty(secondValue),
      H.isNotNilAndNotEmpty(firstSelect),
      H.isNotNilAndNotEmpty(secondSelect),
    )) {
      const calculatedValue = R.divide(R.multiply(secondValue, getRate(secondSelect, data)), getRate(firstSelect, data))

      setFirstValue(calculatedValue)
    }
  }, [secondValue, firstSelect, secondSelect]) // eslint-disable-line

  return (
    <Box
      mt='60px'
      width='100%'
      display='flex'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      height='calc(100vh - 60px)'
    >
      <Typography
        mb={4}
        fontSize={30}
        fontWeight={600}
      >
        Currency converter
      </Typography>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <ConversionItem
          options={data}
          inputValue={firstValue}
          selectValue={firstSelect}
          setInputValue={setFirstValue}
          setSelectValue={setFirstSelect}
        />
        <ConversionItem
          options={data}
          inputValue={secondValue}
          selectValue={secondSelect}
          setInputValue={setSecondValue}
          setSelectValue={setSecondSelect}
        />
      </Box>
    </Box>
  )
}

export default Conversion
