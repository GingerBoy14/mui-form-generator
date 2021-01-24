import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'
import Box from '@material-ui/core/Box'

const Form = (props) => {
  const {
    form,
    onSubmit,
    onSubmitFail,
    size,
    variant,
    inlineFieldsLabel,
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
      inlineFieldsLabel={inlineFieldsLabel}
      variant={variant}>
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
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func
}
Form.defaultProps = {
  size: { size: 'medium', margin: 'dense' },
  variant: 'standard'
}

export default Form
