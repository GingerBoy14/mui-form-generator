import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { checkPattern } from '../../utils'
import { Typography, Box } from '@material-ui/core'

const FormItem = (props) => {
  const { Component, field, formItemStyle, inlineLayout } = props
  const { setValue, formStyle } = useFormContext()
  const { label, inline, ...restField } = field
  checkPattern(field.rules)
  useEffect(() => {
    if (field.defaultValue) {
      setValue(field.name, field.defaultValue)
    }
  }, [])

  //need to override inline form style for single field
  if (formStyle.layout === 'horizontal' || field.horizontal) {
    field.horizontal = typeof inline === 'boolean' ? inline : true
  } else {
    field.horizontal = false
  }
  return (
    <>
      {field.horizontal && field.type !== 'checkbox' ? (
        <InlineFormItem {...props} />
      ) : (
        <Box className={`${inlineLayout ? 'col' : 'col-12'}`}>
          <Component
            {...restField}
            label={label}
            inputProps={{
              ...formItemStyle,
              variant: formStyle.variant,
              ...formStyle.size,
              ...field.inputProps
            }}
          />
        </Box>
      )}
    </>
  )
}

const InlineFormItem = (props) => {
  const { Component, field, formItemStyle, inlineLayout } = props
  const { formStyle } = useFormContext()
  const { label, horizontal, ...restFieldProps } = field
  return (
    <Box
      className={`${inlineLayout ? 'col' : 'col-12'}`}
      display="flex"
      alignItems="baseline">
      {label && (
        <Typography
          component={Box}
          pr={1}
          className={`${inlineLayout ? 'col' : 'col-1'}`}
          textAlign="end">
          {label}:
        </Typography>
      )}

      <Component
        {...restFieldProps}
        inputProps={{
          ...formItemStyle,
          variant: formStyle.variant,
          ...formStyle.size,
          ...restFieldProps.inputProps
        }}
      />
    </Box>
  )
}

FormItem.propTypes = {
  Component: PropTypes.elementType.isRequired,
  formItemStyle: PropTypes.object
}
FormItem.defaultProps = {
  formItemStyle: {
    fullWidth: true
  }
}

export default FormItem
