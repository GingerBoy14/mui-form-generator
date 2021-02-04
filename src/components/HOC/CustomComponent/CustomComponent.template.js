import React from 'react'
import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'

const CustomComponent = (props) => {
  const { Component, name, defaultValue, rules, ...rest } = props
  const { control, formState } = useFormContext()
  const { errors } = formState
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ onChange, value }) => (
        <Component
          onChange={onChange}
          value={value}
          name={name}
          {...rest}
          error={!!errors[name]}
          errorText={errors[name]?.message ? errors[name].message : ' '}
        />
      )}
    />
  )
}

CustomComponent.propTypes = {
  Component: PropTypes.elementType,
  name: PropTypes.string.isRequired
}
CustomComponent.defaultProps = {}

export default CustomComponent
