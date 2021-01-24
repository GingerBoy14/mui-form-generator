import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { checkPattern } from '../../utils'
import { Typography, Box } from '@material-ui/core'

const FormItem = (props) => {
  const { Component, formItemStyle, field } = props
  const { size, inlineFields, setValue } = useFormContext()
  const { label, ...restField } = field
  checkPattern(field.rules)
  if (field.defaultValue) {
    setValue(field.name, field.defaultValue)
  }
  console.log(field)
  return (
    <>
      {inlineFields ? (
        <Box className="col-12" display="flex" alignItems="baseline">
          {label && (
            <Typography component={Box} pr={1}>
              {label}:
            </Typography>
          )}

          <Component
            {...restField}
            inputProps={{
              ...formItemStyle,
              ...size,
              ...field.inputProps
            }}
          />
        </Box>
      ) : (
        <Box className="col">
          <Component
            {...field}
            inputProps={{
              ...formItemStyle,
              ...size,
              ...field.inputProps
            }}
          />
        </Box>
      )}
    </>
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