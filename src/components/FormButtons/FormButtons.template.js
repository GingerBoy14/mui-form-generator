import React from 'react'
import PropTypes from 'prop-types'
import { Box, Col, Row } from '@qonsoll/react-design'
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
    flexLayout,
    buttonPropsCancel,
    buttonPropsSubmit,
    Button
  } = props
  const { formStyle } = useFormContext()
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
          ml={formStyle.layout === 'inline' ? 3 : 0}>
          <Row h="right" {...flexLayout}>
            {visibleCancel && (
              <Box mx={2}>
                {Button ? (
                  <Button
                    onClick={onClickCancel}
                    variant="contained"
                    {...buttonPropsCancel}>
                    {cancelText}
                  </Button>
                ) : (
                  <button onClick={onClickCancel} {...buttonPropsCancel}>
                    {cancelText}
                  </button>
                )}
              </Box>
            )}
            {visibleSubmit && (
              <Box>
                {Button ? (
                  <Button
                    onClick={onClickSubmit}
                    variant="contained"
                    color="primary"
                    {...buttonPropsSubmit}
                    type="submit">
                    {submitText}
                  </Button>
                ) : (
                  <button
                    onClick={onClickSubmit}
                    {...buttonPropsSubmit}
                    type="submit">
                    {submitText}
                  </button>
                )}
              </Box>
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
  flexLayout: PropTypes.object,
  buttonPropsCancel: PropTypes.object,
  buttonPropsSubmit: PropTypes.object,
  Button: PropTypes.elementType.isRequired
}
FormButtons.defaultProps = {
  visibleSubmit: true,
  visibleCancel: true,
  visible: true,
  cancelText: 'cancel',
  submitText: 'submit'
}
export default FormButtons
