import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from '@qonsoll/react-design'
import { useFormContext } from 'react-hook-form'

const FormButtons = (props) => {
  const {
    cancelText,
    submitText,
    visible,
    visibleSubmit,
    visibleCancel,
    onClickSubmit,
    onClickCancel,
    layout,
    buttonPropsCancel,
    buttonPropsSubmit,
    Button
  } = props
  const { formStyle, getValues } = useFormContext()
  //if u want to add styles in button u need to write
  //buttonProps:{
  // ...props
  // styles
  // }
  return (
    <>
      {visible && (
        <Col
          cw={formStyle.layout === 'inline' ? 'auto' : 12}
          ml={formStyle.layout === 'inline' ? 3 : 0}
          v="baseline">
          <Row h="right" mx={-2} {...layout}>
            {visibleCancel && (
              <Col cw="auto" px={2}>
                {Button ? (
                  <Button
                    onClick={() => onClickCancel(getValues())}
                    variant="contained"
                    {...buttonPropsCancel}>
                    {cancelText}
                  </Button>
                ) : (
                  <button
                    onClick={() => onClickCancel(getValues())}
                    {...buttonPropsCancel}>
                    {cancelText}
                  </button>
                )}
              </Col>
            )}
            {visibleSubmit && (
              <Col cw="auto" px={2}>
                {Button ? (
                  <Button
                    onClick={() => onClickSubmit(getValues())}
                    variant="contained"
                    color="primary"
                    type="submit"
                    {...buttonPropsSubmit}>
                    {submitText}
                  </Button>
                ) : (
                  <button
                    onClick={() => onClickSubmit(getValues())}
                    {...buttonPropsSubmit}
                    type="submit">
                    {submitText}
                  </button>
                )}
              </Col>
            )}
          </Row>
        </Col>
      )}
    </>
  )
}
FormButtons.propTypes = {
  visibleSubmit: PropTypes.bool,
  visibleCancel: PropTypes.bool,
  visible: PropTypes.bool,
  cancelText: PropTypes.string,
  submitText: PropTypes.string,
  onClickSubmit: PropTypes.func,
  onClickCancel: PropTypes.func,
  layout: PropTypes.object,
  buttonPropsCancel: PropTypes.object,
  buttonPropsSubmit: PropTypes.object,
  Button: PropTypes.elementType
}
FormButtons.defaultProps = {
  visibleSubmit: true,
  visibleCancel: true,
  visible: true,
  cancelText: 'cancel',
  submitText: 'submit'
}
export default FormButtons
