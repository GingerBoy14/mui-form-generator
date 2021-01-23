import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const Input = (props) => {
  console.log(props)
  return (
    <TextField
      name={props.name}
      label={props.label}
      // error={!!errors.name}
      // helperText={errors.name ? errors.name.message : ' '}
      // inputRef={register({
      //   required: 'Required',
      //   pattern: {
      //     value: checkUnicode,
      //     message: 'Please enter correct name'
      //   }
      // })}
      size="medium"
      margin="dense"
      fullWidth
    />
  )
}

Input.propTypes = {}
Input.defaultProps = {}

export default Input
