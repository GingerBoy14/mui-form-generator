import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import FormItem from '../FormItem'
import { CustomComponent } from '../HOC'
import { Row, Col } from '@qonsoll/react-design'
import { formFieldTypes } from '../../constants'

const { FORM_FIELD_TYPES_VALUES } = formFieldTypes

const FormGenerator = (props) => {
  const { config, show, hide, fieldProps } = props
  const { formStyle } = useFormContext()
  let formConfig = config
  if (formStyle.layout === 'inline') {
    formConfig = [{ inlineLayout: [...config] }]
  }
  if (show?.length) {
    let inlineShow = []
    return (
      <>
        {show.map((item, index, arr) => {
          if (inlineShow.includes(item)) {
            return null
          }
          return (
            !hide?.includes(item) &&
            formConfig.map((formItem) => {
              if (item === formItem?.name) {
                return (
                  <GenerateField
                    formItem={formItem}
                    fieldProps={fieldProps && fieldProps[formItem.name]}
                    key={`${formItem.type}_${formItem.name}`}
                  />
                )
              }
              if (
                formItem.inlineLayout &&
                formItem.inlineLayout.some((test) => test.name === item)
              ) {
                return (
                  <Col px={0} cw={12} key={formItem.inlineLayout[0].name}>
                    <Row>
                      {formItem.inlineLayout.map((layoutItem) => {
                        if (
                          (item === layoutItem.name ||
                            arr[++index] === layoutItem.name) &&
                          !hide?.includes(layoutItem.name)
                        ) {
                          inlineShow.push(layoutItem.name)
                          return (
                            <GenerateField
                              fieldProps={
                                fieldProps && fieldProps[layoutItem.name]
                              }
                              formItem={layoutItem}
                              inlineLayout
                              key={layoutItem.name}
                            />
                          )
                        }
                      })}
                    </Row>
                  </Col>
                )
              }
            })
          )
        })}
      </>
    )
  }

  return (
    <>
      {formConfig.map((formItem) => {
        if (formItem.inlineLayout) {
          return (
            <Col px={0} cw={12} key={formItem.inlineLayout[0].name}>
              <Row>
                {formItem.inlineLayout.map((layoutItem) => {
                  return (
                    !hide?.includes(layoutItem.name) && (
                      <GenerateField
                        fieldProps={fieldProps && fieldProps[layoutItem.name]}
                        formItem={layoutItem}
                        inlineLayout
                        key={layoutItem.name}
                      />
                    )
                  )
                })}
              </Row>
            </Col>
          )
        }
        return (
          !hide?.includes(formItem.name) && (
            <GenerateField
              formItem={formItem}
              fieldProps={fieldProps && fieldProps[formItem.name]}
              key={`${formItem.type}_${formItem.name}`}
            />
          )
        )
      })}
    </>
  )
}
const GenerateField = (props) => {
  const { formItem, inlineLayout, fieldProps } = props
  const { watch, ...formItemRest } = formItem
  const formInstance = useFormContext()
  if (formItemRest.Component) {
    return (
      <FormItem
        Component={CustomComponent}
        field={formItemRest}
        inlineLayout={inlineLayout}
        fieldProps={fieldProps}
      />
    )
  }
  if (watch) {
    const input = formInstance.watch(watch)
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
              fieldProps={fieldProps}
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
          fieldProps={fieldProps}
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
        watch: PropTypes.string
      })
    ),
    PropTypes.array
  ]),
  fieldProps: PropTypes.object,
  show: PropTypes.arrayOf(PropTypes.string)
}
FormGenerator.defaultProps = {}

export default FormGenerator
