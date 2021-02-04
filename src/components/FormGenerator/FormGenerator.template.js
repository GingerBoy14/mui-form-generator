import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import FormItem from '../FormItem'
import { CustomComponent } from '../HOC'
import { formFieldTypes } from '../../constants'

const { FORM_FIELD_TYPES_VALUES } = formFieldTypes

const FormGenerator = (props) => {
  const { config, show } = props
  const { formStyle } = useFormContext()
  let form
  if (formStyle.layout === 'inline') {
    form = [{ inlineLayout: [...config] }]
  } else {
    form = config
  }
  if (show?.length) {
    return (
      <>
        {show.map((item) => {
          return form.map((configItem) => {
            if (item === configItem.name) {
              if (configItem.inlineLayout) {
                return (
                  <React.Fragment key={configItem.inlineLayout[0].name}>
                    {configItem.inlineLayout.map((layoutItem) => {
                      return (
                        <GenerateField
                          formItem={layoutItem}
                          inlineLayout
                          key={layoutItem.name}
                        />
                      )
                    })}
                    FormGenerator
                  </React.Fragment>
                )
              }
              return (
                <GenerateField
                  formItem={configItem}
                  key={`${configItem.type}_${configItem.name}`}
                />
              )
            }
          })
        })}
      </>
    )
  }

  return (
    <>
      {form.map((formItem) => {
        if (formItem.inlineLayout) {
          return (
            <React.Fragment key={formItem.inlineLayout[0].name}>
              {formItem.inlineLayout.map((layoutItem) => {
                return (
                  <GenerateField
                    formItem={layoutItem}
                    inlineLayout
                    key={layoutItem.name}
                  />
                )
              })}
            </React.Fragment>
          )
        }
        return (
          <GenerateField
            formItem={formItem}
            key={`${formItem.type}_${formItem.name}`}
          />
        )
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
      FORM_FIELD_TYPES_VALUES.map(
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
  return FORM_FIELD_TYPES_VALUES.map(
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
        name: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        inline: PropTypes.bool,
        Component: PropTypes.elementType,
        Icon: PropTypes.elementType,
        type: PropTypes.oneOf(FORM_FIELD_TYPES_VALUES.map(({ type }) => type)),
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
