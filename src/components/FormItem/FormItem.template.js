import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { useFormContext } from 'react-hook-form'
import { defineComponents } from '../../constants'
import { REGEX_TYPE_MAP_VALUES } from '../../constants/regex'
import { getEmailRegex } from '../../utils'

const { DEFINE_COMPONENTS_VALUES } = defineComponents

const FormItem = (props) => {
  const { Component, formItemStyle, field } = props
  const { size } = useFormContext()
  if (field.rules?.pattern && typeof field.rules.pattern.value === 'string') {
    REGEX_TYPE_MAP_VALUES.forEach((regex) => {
      if (regex.type === field.rules.pattern.value) {
        if (field.rules.pattern.value === 'email') {
          if (field.rules.pattern.domain) {
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
  field: PropTypes.exact({
    rules: PropTypes.shape({
      required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      pattern: PropTypes.oneOfType([
        PropTypes.exact({
          value: PropTypes.oneOfType([
            PropTypes.instanceOf(RegExp),
            PropTypes.string
          ]),
          domain: PropTypes.string,
          message: PropTypes.string
        }),
        PropTypes.instanceOf(RegExp)
      ])
    }),
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf(DEFINE_COMPONENTS_VALUES.map(({ type }) => type))
  }),
  Component: PropTypes.elementType.isRequired,
  formItemStyle: PropTypes.object
}
FormItem.defaultProps = {
  formItemStyle: {
    fullWidth: true
  }
}

export default FormItem
