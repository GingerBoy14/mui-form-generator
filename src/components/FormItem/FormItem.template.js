import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { checkPattern } from '../../utils'
import { Typography, Box } from '@material-ui/core'

const FormItem = (props) => {
  const { Component, formItemStyle, field } = props
  const { size, inlineFieldsLabel, variant, setValue } = useFormContext()
  const { label, inline, ...restField } = field
  checkPattern(field.rules)
  useEffect(() => {
    if (field.defaultValue) {
      setValue(field.name, field.defaultValue)
    }
  }, [])

  //need to override inline form style for single field
  if (inlineFieldsLabel) {
    field.inline = typeof inline === 'boolean' ? inline : inlineFieldsLabel
  }

  return (
    <>
      {field.inline && field.type !== 'checkbox' ? (
        <Box className="col-12" display="flex" alignItems="baseline">
          {field.label && (
            <Typography
              component={Box}
              pr={1}
              className="col-1"
              textAlign="end">
              {field.label}:
            </Typography>
          )}

          <Component
            {...restField}
            inputProps={{
              variant,
              ...formItemStyle,
              ...size,
              ...field.inputProps
            }}
          />
        </Box>
      ) : (
        <Box className="col-12">
          <Component
            {...restField}
            label={label}
            inputProps={{
              variant,
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
