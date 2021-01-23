import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'

const Form = (props) => {
  const { form, onSubmit, onSubmitFail, ...rest } = props

  const handleSubmit = () => form.handleSubmit(onSubmit, onSubmitFail)
  form.submit = () => handleSubmit()()
  console.log(rest, form)
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} {...rest} />
    </FormProvider>
  )
}

Form.propTypes = {}
Form.defaultProps = {}

export default Form
