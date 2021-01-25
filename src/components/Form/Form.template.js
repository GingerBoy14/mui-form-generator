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
    layout,
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
  if (layout === 'inline') {
    size.margin = 'none'
  }
  return (
    <FormProvider
      {...(form || formMethods)}
      formStyle={{
        size,
        variant,
        layout
      }}>
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
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func
}
Form.defaultProps = {
  size: { size: 'small', margin: 'dense' },
  variant: 'standard',
  layout: 'vertical'
}

export default Form
