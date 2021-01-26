import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'

const Textarea = (props) => {
  const { name, rules, inputProps, ...rest } = props
  const { register, errors } = useFormContext()
  return (
    <TextField
      {...inputProps}
      {...rest}
      multiline
      name={name}
      error={!!errors[name]}
      helperText={errors[name]?.message ? errors[name].message : ' '}
      inputRef={register(rules)}
    />
  )
}

Textarea.propTypes = {
  textAreaProps: PropTypes.object
}
Textarea.defaultProps = {}

export default Textarea
