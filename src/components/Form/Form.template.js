import React from 'react'
import PropTypes from 'prop-types'
import { Row } from '@qonsoll/react-design'
import { FormProvider, useForm } from 'react-hook-form'

const Form = (props) => {
  const {
    form,
    onSubmit,
    onSubmitFail,
    size,
    variant,
    layout,
    rowStyles,
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
        <Row {...rowStyles}>{children}</Row>
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
  onSubmitFail: PropTypes.func,
  rowStyles: PropTypes.object
}
Form.defaultProps = {
  size: { size: 'small', margin: 'dense' },
  variant: 'standard',
  layout: 'vertical'
}

export default Form
