import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { InputAdornment } from '@material-ui/core'
import { Search as IconSearch } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

const Search = (props) => {
  const { name, rules, inputProps, iconProps, Icon, ...rest } = props
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
        startAdornment: iconProps?.start && (
          <CustomIcon
            size={iconProps.size}
            visible={iconProps.visible}
            Icon={Icon}
          />
        ),
        endAdornment: iconProps?.end && (
          <CustomIcon
            size={iconProps.size}
            visible={iconProps.visible}
            Icon={Icon}
          />
        )
      }}
    />
  )
}
//todo create folder for this component
const CustomIcon = (props) => {
  const { size, visible, Icon } = props
  return (
    <>
      {visible && (
        <InputAdornment>
          {(Icon && <Icon />) || (
            <IconSearch fontSize={size ? size : 'default'} />
          )}
        </InputAdornment>
      )}
    </>
  )
}
Search.propTypes = {
  iconProps: PropTypes.shape({ start: PropTypes.bool })
}
Search.defaultProps = {
  iconProps: {
    start: true
  }
}
CustomIcon.defaultProps = {
  visible: true
}

export default Search
