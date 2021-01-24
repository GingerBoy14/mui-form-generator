import PropTypes from 'prop-types'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Box from '@material-ui/core/Box'
import { Controller, useFormContext } from 'react-hook-form'

const DatePicker = (props) => {
  const { date, ...rest } = props
  console.log(date)
  const {
    formState: { errors },
    control,
    setError,
    clearErrors
  } = useFormContext()
  return (
    <Box className="col-12">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          control={control}
          name="date"
          render={({ value, onChange }) => (
            <KeyboardDatePicker
              {...rest}
              margin="dense"
              name="date"
              label="Birthday"
              format="MM/dd/yyyy"
              value={value}
              style={{ width: '100%' }}
              helperText={errors.date ? errors.date.message : ' '}
              onChange={(data) => {
                if (isNaN(data)) {
                  setError('date', {
                    type: 'manual',
                    message: data.toString()
                  })
                } else if (
                  data > new Date('2100-01-01') ||
                  data < new Date('1900-01-01')
                ) {
                  setError('date', {
                    type: 'manual',
                    message: 'Enter correct date.'
                  })
                } else {
                  clearErrors('date')
                }
                return data && onChange(data)
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          )}
        />
      </MuiPickersUtilsProvider>
    </Box>
  )
}

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date)
}
DatePicker.defaultProps = {
  date: new Date('2001-11-21')
}

export default DatePicker
