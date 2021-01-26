import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Col } from '@qonsoll/react-design'
import { useFormContext } from 'react-hook-form'
import { checkPattern } from '../../utils'

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
      {!field.native ? (
        <>
          {field.horizontal && field.type !== 'checkbox' ? (
            <InlineFormItem {...props} />
          ) : (
            <Col cw={inlineLayout ?? 12}>
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
            </Col>
          )}
        </>
      ) : (
        <NativeInput {...props} />
      )}
    </>
  )
}

const InlineFormItem = (props) => {
  const { Component, field, formItemStyle, inlineLayout } = props
  const { formStyle } = useFormContext()
  const { label, horizontal, ...restFieldProps } = field
  return (
    <Col cw={inlineLayout ?? 12} display="flex" v="baseline">
      {label && (
        <label htmlFor={field.name}>
          <Typography
            component={Box}
            pr={1}
            className={`${inlineLayout ? 'col' : 'col-1'}`}
            textAlign="end">
            {label}:
          </Typography>
        </label>
      )}

      <Component
        id={field.name}
        {...restFieldProps}
        inputProps={{
          ...formItemStyle,
          variant: formStyle.variant,
          ...formStyle.size,
          ...restFieldProps.inputProps
        }}
      />
    </Col>
  )
}

const NativeInput = (props) => {
  const { field, inlineLayout } = props
  const { inputProps, ...restInputFields } = field
  const { register, errors } = useFormContext()
  return (
    <Col cw={inlineLayout ?? 12} display="flex" v="center">
      <label htmlFor={field.name}>{field.label}</label>
      <input id={field.name} {...restInputFields} ref={register(field.rules)} />
      <p>{errors[field.name]?.message ? errors[field.name]?.message : ' '}</p>
    </Col>
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
