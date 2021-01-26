import React from 'react'
import MUIButton from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { StylesProvider } from '@material-ui/core/styles'
import { useFormContext } from 'react-hook-form'

const FormButtons = (props) => {
  const {
    cancelText,
    okText,
    visible,
    visibleOk,
    visibleCancel,
    onClickOk,
    onClickCancel,
    flexLayout,
    buttonPropsCancel,
    buttonPropsOk
  } = props
  const { formStyle } = useFormContext()
  //if u want to add styles in button u need to write
  //buttonProps:{
  // ...props
  // styles
  // }
  return (
    <StylesProvider injectFirst>
      {visible && (
        <Box
          display="flex"
          className={`${formStyle.layout === 'inline' ? 'col-auto' : 'col-12'}`}
          justifyContent="flex-end"
          {...flexLayout}>
          {visibleCancel && (
            <Box mx={1}>
              <MUIButton
                onClick={onClickCancel}
                variant="contained"
                {...buttonPropsCancel}>
                {cancelText}
              </MUIButton>
            </Box>
          )}
          {visibleOk && (
            <Box mx={1}>
              <MUIButton
                onClick={onClickOk}
                variant="contained"
                color="primary"
                {...buttonPropsOk}
                type="submit">
                {okText}
              </MUIButton>
            </Box>
          )}
        </Box>
      )}
    </StylesProvider>
  )
}
FormButtons.propTypes = {}
FormButtons.defaultProps = {
  visibleOk: true,
  visibleCancel: true,
  visible: true
}
export default FormButtons
