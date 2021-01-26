import React from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox as MUICheckbox } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'

const Checkbox = (props) => {
  const { label, name, rules, defaultValue, inputProps } = props
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      defaultValue={defaultValue}
      render={({ value, onChange, ref }) => (
        <FormControlLabel
          control={
            <MUICheckbox
              color="primary"
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
              inputRef={ref}
              {...inputProps}
            />
          }
          label={label?.text || label}
          labelPlacement={label?.placement || 'start'}
        />
      )}
    />
  )
}
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      text: PropTypes.string,
      placement: PropTypes.oneOf(['bottom', 'end', 'start', 'top'])
    })
  ])
}
Checkbox.defaultProps = {
  defaultValue: false
}

export default Checkbox
