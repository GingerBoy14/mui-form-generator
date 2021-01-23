import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

const FormGenerator = (props) => {
  const { register, errors } = useFormContext()
  return (
    <>
      <input
        type="text"
        name="email"
        ref={register({ required: 'required' })}
      />
      {errors.email && <p>{errors.email.message}</p>}
    </>
  )
}

FormGenerator.propTypes = {}
FormGenerator.defaultProps = {}

export default FormGenerator
