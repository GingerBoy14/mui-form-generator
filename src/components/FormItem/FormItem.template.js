import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { useFormContext } from 'react-hook-form'
import { REGEX_TYPE_MAP_VALUES } from '../../constants/regex'
import { getEmailRegex } from '../../utils'

const FormItem = (props) => {
  const { Component, formItemStyle, field } = props
  const { size } = useFormContext()

  if (field.rules?.pattern && typeof field.rules.pattern.value === 'string') {
    REGEX_TYPE_MAP_VALUES.forEach((regex) => {
      if (regex.type === field.rules.pattern.value) {
        if (field.rules.pattern.value === 'email') {
          if (typeof field.rules.pattern.domain === 'string') {
            field.rules.pattern.value = getEmailRegex(
              field.rules.pattern.domain
            )
            delete field.rules.pattern.domain
          } else {
            field.rules.pattern.value = regex.regex.WITHOUT_DOMAIN_NAME
          }
        } else {
          field.rules.pattern.value = regex.regex
        }
      }
    })
  }
  console.log(field)
  return (
    <Box className="col-12">
      <Component
        {...field}
        inputProps={{
          ...formItemStyle,
          ...size,
          ...field.inputProps
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
