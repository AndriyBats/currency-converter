// material
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
//////////////////////////////////////////////////

export const NumericTextField = ({ value, setValue }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value

    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue)
    }
  }

  return (
    <TextField
      value={value}
      variant='outlined'
      label='Enter numbers'
      onChange={handleChange}
      sx={{ m: 1, minWidth: 250 }}
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
    />
  )
}

const SelectField = ({ value, options, setValue }) => {
  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id='demo-simple-select-helper-label'>Currency</InputLabel>
        <Select
          value={value}
          label='Currency'
          sx={{ width: '100%' }}
          onChange={handleChange}
          id='demo-simple-select-helper'
          labelId='demo-simple-select-helper-label'
        >
          {
            options.map(({ txt, cc }, index) =>
              <MenuItem
                value={cc}
                key={index}
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'blue',
                  },
                  '&.Mui-selected': {
                    color: 'blue',
                    backgroundColor: 'grey',
                  },
                }}
              >
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {`${txt} (${cc})`}
                </Typography>
              </MenuItem>,
            )
          }
        </Select>
        <FormHelperText>Choose currency</FormHelperText>
      </FormControl>
    </Box>
  )
}

const ConversionItem = ({ options, inputValue, selectValue, setInputValue, setSelectValue }) => (
  <Box>
    <NumericTextField value={inputValue} setValue={setInputValue} />
    <SelectField options={options} value={selectValue} setValue={setSelectValue} />
  </Box>
)

export default ConversionItem
