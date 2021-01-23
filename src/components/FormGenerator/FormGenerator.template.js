import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { useFormContext } from 'react-hook-form'
import { DEFINE_COMPONENTS_VALUES } from '../../constants/DefineComponent'

const FormGenerator = (props) => {
  const { size } = useFormContext()
  const { config, formItemStyle } = props

  return (
    <>
      {config.map((formItem) => {
        return DEFINE_COMPONENTS_VALUES.map(
          ({ type, Component }) =>
            type === formItem.type && (
              <Box className="col-12" key={type}>
                <Component
                  {...formItem}
                  inputProps={{
                    ...formItemStyle,
                    ...size,
                    ...formItem.inputProps
                  }}
                />
              </Box>
            )
        )
      })}
    </>
  )
}

FormGenerator.propTypes = {}
FormGenerator.defaultProps = {
  formItemStyle: {
    fullWidth: true
  }
}

export default FormGenerator
