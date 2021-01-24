import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'
import Box from '@material-ui/core/Box'

const Form = (props) => {
  const {
    form,
    onSubmit,
    onSubmitFail,
    size,
    inlineFields,
    children,
    ...rest
  } = props
  const formMethods = useForm()
  const handleSubmit = (e) => {
    if (form) return form.handleSubmit(onSubmit, onSubmitFail)(e)
    return formMethods.handleSubmit(onSubmit, onSubmitFail)(e)
  }

  if (form) {
    form.submit = () => handleSubmit()
  }
  return (
    <FormProvider
      {...(form || formMethods)}
      size={size}
      inlineFields={inlineFields}>
      <form onSubmit={handleSubmit} {...rest}>
        <Box className="row">{children}</Box>
      </form>
    </FormProvider>
  )
}

Form.propTypes = {
  size: PropTypes.shape({
    size: PropTypes.oneOf(['small', 'medium']),
    margin: PropTypes.oneOf(['dense', 'none', 'normal'])
  }),
  form: PropTypes.object
}
Form.defaultProps = {
  size: { size: 'medium', margin: 'dense' }
}

export default Form
