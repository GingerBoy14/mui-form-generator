import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { useFormContext } from 'react-hook-form'
import { defineComponents } from '../../constants'

const { DEFINE_COMPONENTS_VALUES } = defineComponents

const FormItem = (props) => {
  const { Component, formItemStyle, field } = props
  const { size } = useFormContext()
  console.log(field)
  if (field.rules?.pattern && typeof field.rules.pattern === 'string') {
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
