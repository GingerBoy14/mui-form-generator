import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { InputAdornment } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

const Search = (props) => {
  const { name, rules, inputProps, iconProps, ...rest } = props
  const { register, errors } = useFormContext()
  const classes = useStyles()
  return (
    <TextField
      className={classes.margin}
      {...inputProps}
      {...rest}
      name={name}
      error={!!errors[name]}
      helperText={errors[name]?.message ? errors[name].message : ' '}
      inputRef={register(rules)}
      InputProps={{
        startAdornment: iconProps.startAdornment && (
          <Icon
            size={iconProps.size}
            visible={iconProps.visible}
            Icon={iconProps.Icon}
          />
        ),
        endAdornment: iconProps.endAdornment && (
          <Icon
            size={iconProps.size}
            visible={iconProps.visible}
            Icon={iconProps.Icon}
          />
        )
      }}
    />
  )
}
//todo create folder for this component
const Icon = (props) => {
  const { size, visible, Icon } = props
  return (
    <>
      {visible && (
        <InputAdornment>
          {Icon || <AccountCircle fontSize={size ? size : 'default'} />}
        </InputAdornment>
      )}
    </>
  )
}
Search.propTypes = {
  SearchAreaProps: PropTypes.object
}
Search.defaultProps = {}
Icon.defaultProps = {
  visible: true
}

export default Search
