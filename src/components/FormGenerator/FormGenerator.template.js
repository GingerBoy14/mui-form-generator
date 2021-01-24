import PropTypes from 'prop-types'
import { defineComponents } from '../../constants'
import { FormItem } from '../FormItem'
import { CustomComponent } from '../CustomComponent'
import { useFormContext } from 'react-hook-form'

const { DEFINE_COMPONENTS_VALUES } = defineComponents

const FormGenerator = (props) => {
  const { config, ...rest } = props
  const { watch } = useFormContext()
  return (
    <>
      {config.map((formItem) => {
        const { showIfChecked, ...formItemRest } = formItem
        if (formItemRest.Component) {
          return (
            <FormItem
              Component={CustomComponent}
              field={formItemRest}
              {...rest}
              key={formItem.type}
            />
          )
        }
        if (showIfChecked) {
          const input = watch(showIfChecked)
          return (
            input &&
            DEFINE_COMPONENTS_VALUES.map(
              ({ type, Component }) =>
                type === formItem.type && (
                  <FormItem
                    Component={Component}
                    field={formItemRest}
                    {...rest}
                    key={type}
                  />
                )
            )
          )
        }
        return DEFINE_COMPONENTS_VALUES.map(
          ({ type, Component }) =>
            type === formItem.type && (
              <FormItem
                Component={Component}
                field={formItemRest}
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
      placeholder: PropTypes.string,
      inline: PropTypes.bool,
      Component: PropTypes.elementType,
      Icon: PropTypes.elementType,
      type: PropTypes.oneOf(DEFINE_COMPONENTS_VALUES.map(({ type }) => type)),
      inputProps: PropTypes.object,
      defaultValue: PropTypes.any,
      showIfChecked: PropTypes.string
    })
  )
}
FormGenerator.defaultProps = {}

export default FormGenerator
