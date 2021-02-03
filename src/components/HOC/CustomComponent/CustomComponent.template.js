import React from 'react'
import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'

const CustomComponent = (props) => {
  const { Component, name, defaultValue, rules, ...rest } = props
  const { control, errors } = useFormContext()
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
          error={errors[name]}
          errorText={errors[name]?.message ? errors[name].message : ' '}
        />
      )}
    />
  )
}

CustomComponent.propTypes = {}
CustomComponent.defaultProps = {}

export default CustomComponent
