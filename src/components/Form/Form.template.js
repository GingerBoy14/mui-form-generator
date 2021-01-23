import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'

const Form = (props) => {
  const { form, onSubmit, onSubmitFail, size, ...rest } = props

  const handleSubmit = () => form.handleSubmit(onSubmit, onSubmitFail)
  form.submit = () => handleSubmit()()
  return (
    <FormProvider {...form} size={size}>
      <form onSubmit={handleSubmit} {...rest} />
    </FormProvider>
  )
}

Form.propTypes = {
  size: PropTypes.shape({
    size: PropTypes.oneOf(['small', 'medium']),
    margin: PropTypes.oneOf(['dense', 'none', 'normal'])
  })
}
Form.defaultProps = {
  size: { size: 'medium', margin: 'dense' }
}

export default Form
