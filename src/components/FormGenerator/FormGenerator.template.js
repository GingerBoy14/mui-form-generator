import PropTypes from 'prop-types'
import { defineComponents } from '../../constants'
import { FormItem } from '../FormItem'

const { DEFINE_COMPONENTS_VALUES } = defineComponents

const FormGenerator = (props) => {
  const { config, ...rest } = props

  return (
    <>
      {config.map((formItem) => {
        return DEFINE_COMPONENTS_VALUES.map(
          ({ type, Component }) =>
            type === formItem.type && (
              <FormItem
                Component={Component}
                field={formItem}
                {...rest}
                key={type}
              />
            )
        )
      })}
    </>
  )
}

FormGenerator.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  )
}
FormGenerator.defaultProps = {}

export default FormGenerator
