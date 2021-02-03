import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Col, Row } from '@qonsoll/react-design'
import { useFormContext } from 'react-hook-form'
import { checkPattern } from '../../utils'

const FormItem = (props) => {
  const { Component, field, formItemStyle, inlineLayout } = props
  const { setValue, formStyle } = useFormContext()
  const { label, inline, colProps, ...restField } = field
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

  const inlineColProps = (inlineLayout && {
    cw: 'auto',
    display: 'flex',
    style: { flex: 1 }
  }) || { cw: 12 }
  return (
    <>
      {!field.native ? (
        <>
          {field.horizontal && field.type !== 'checkbox' ? (
            <InlineFormItem {...props} />
          ) : (
            <Col v="baseline" {...inlineColProps} {...colProps}>
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
  const { label, horizontal, colProps, ...restFieldProps } = field
  return (
    <Col
      v="baseline"
      cw={inlineLayout ? 'auto' : 12}
      display="flex"
      style={{ alignItems: 'baseline' }}
      {...colProps}>
      {label && (
        <Typography
          component={Col}
          pr={2}
          cw={inlineLayout ? 'auto' : [3, 1]}
          height="100%">
          <Row h="right">
            <label htmlFor={field.name}>{label}:</label>
          </Row>
        </Typography>
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
  const { inputProps, colProps, ...restInputFields } = field
  const { register, errors } = useFormContext()
  return (
    <Col
      cw={inlineLayout ? 'auto' : 12}
      display="flex"
      v="center"
      {...colProps}>
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
