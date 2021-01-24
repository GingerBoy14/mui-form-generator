import PropTypes from 'prop-types'
import { defineComponents } from '../../constants'
import { FormItem } from '../FormItem'
import { CustomComponent } from '../CustomComponent'
import { useFormContext } from 'react-hook-form'

const { DEFINE_COMPONENTS_VALUES } = defineComponents

const FormGenerator = (props) => {
  const { config } = props

  return (
    <>
      {config.map((formItem) => {
        if (formItem.inlineLayout) {
          return (
            <>
              {formItem.inlineLayout.map((formItem) => (
                <GenerateField
                  formItem={formItem}
                  inlineLayout
                  key={formItem.type}
                />
              ))}
            </>
          )
        }
        return <GenerateField formItem={formItem} key={formItem.type} />
      })}
    </>
  )
}

const GenerateField = (props) => {
  const { formItem, inlineLayout } = props
  const { showIfChecked, ...formItemRest } = formItem
  const { watch } = useFormContext()
  if (formItemRest.Component) {
    return (
      <FormItem
        Component={CustomComponent}
        field={formItemRest}
        inlineLayout={inlineLayout}
      />
    )
  }
  if (showIfChecked) {
    const input = watch(showIfChecked)
    return (
      (input || null) &&
      DEFINE_COMPONENTS_VALUES.map(
        ({ type, Component }) =>
          type === formItem.type && (
            <FormItem
              Component={Component}
              field={formItemRest}
              key={formItem.name}
              inlineLayout={inlineLayout}
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
          key={formItem.name}
          inlineLayout={inlineLayout}
        />
      )
  )
}

FormGenerator.propTypes = {
  config: PropTypes.oneOfType([
    PropTypes.arrayOf(
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
    ),
    PropTypes.array
  ])
}
FormGenerator.defaultProps = {}

export default FormGenerator
