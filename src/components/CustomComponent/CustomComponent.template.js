import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'

const CustomComponent = (props) => {
  const { Component, name, defaultValue, rules, ...rest } = props
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ onChange, value }) => (
        <Component onChange={onChange} value={value} {...rest} />
      )}
    />
  )
}

CustomComponent.propTypes = {}
CustomComponent.defaultProps = {}

export default CustomComponent
