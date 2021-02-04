import React from 'react'
import PropTypes from 'prop-types'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Controller, useFormContext } from 'react-hook-form'

const DatePicker = (props) => {
  const { defaultValue, name, rules, type, inputProps, ...rest } = props
  const { formState, control, setError, clearErrors } = useFormContext()
  const { errors } = formState
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        control={control}
        name={name}
        rules={rules && rules}
        defaultValue={defaultValue}
        render={({ value, onChange }) => (
          <KeyboardDatePicker
            {...rest}
            format="MM/dd/yyyy"
            value={value}
            style={{ width: '100%' }}
            inputVariant={inputProps.variant}
            {...inputProps}
            helperText={errors[name]?.message ? errors[name].message : ' '}
            onChange={(data) => {
              if (isNaN(data)) {
                setError(name, {
                  type: 'manual',
                  message: data.toString()
                })
              } else if (
                data > new Date('2100-01-01') ||
                data < new Date('1900-01-01')
              ) {
                setError(name, {
                  type: 'manual',
                  message: 'Enter correct date.'
                })
              } else {
                clearErrors(name)
              }
              return data && onChange(data.getTime())
            }}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  )
}

DatePicker.propTypes = {
  defaultValue: PropTypes.number
}
DatePicker.defaultProps = {
  defaultValue: new Date('2001-11-21').getTime()
}

export default DatePicker
