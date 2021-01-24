import PropTypes from 'prop-types'
import { DEFINE_COMPONENTS_VALUES } from '../../constants/DefineComponent'
import { FormItem } from '../FormItem'

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

FormGenerator.propTypes = {}
FormGenerator.defaultProps = {}

export default FormGenerator
