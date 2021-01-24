import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'
import { Box } from '@material-ui/core'

const CustomComponent = (props) => {
  const { Component, name, defaultValue } = props
  const { control, inlineFields } = useFormContext()
  return (
    <Box className={`${inlineFields ? 'col-12' : 'col'}`}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={(values, validation) => (
          <Component {...validation} {...values} />
        )}
      />
    </Box>
  )
}

CustomComponent.propTypes = {}
CustomComponent.defaultProps = {}

export default CustomComponent
