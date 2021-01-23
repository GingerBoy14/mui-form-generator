import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { DEFINE_COMPONENTS_VALUES } from '../../constants/DefineComponent'

const FormGenerator = (props) => {
  const { config } = props
  return (
    <>
      {config.map((formItem) => {
        return DEFINE_COMPONENTS_VALUES.map(
          ({ type, Component }) =>
            type === formItem.type && <Component {...formItem} />
        )
      })}
    </>
  )
}

FormGenerator.propTypes = {}
FormGenerator.defaultProps = {}

export default FormGenerator
