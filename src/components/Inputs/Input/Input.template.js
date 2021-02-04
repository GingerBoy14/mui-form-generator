import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'

const Input = (props) => {
  const { name, rules, inputProps, ...rest } = props
  const { register, formState } = useFormContext()
  const { errors } = formState
  return (
    <TextField
      {...inputProps}
      {...rest}
      name={name}
      error={!!errors[name]}
      helperText={errors[name]?.message ? errors[name].message : ' '}
      inputRef={register(rules)}
    />
  )
}

Input.propTypes = {
  inputProps: PropTypes.object,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
Input.defaultProps = {}

export default Input
