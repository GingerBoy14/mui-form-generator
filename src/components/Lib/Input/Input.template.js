import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'

const Input = (props) => {
  const { name, label, rules, type, inputProps } = props
  const { register, errors } = useFormContext()
  return (
    <TextField
      {...inputProps}
      type={type}
      name={name}
      label={label}
      error={!!errors[name]}
      helperText={errors[name]?.message ? errors[name].message : ' '}
      inputRef={register(rules)}
    />
  )
}

Input.propTypes = {
  inputProps: PropTypes.object
}
Input.defaultProps = {}

export default Input
