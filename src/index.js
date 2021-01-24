import ReactDOM from 'react-dom'
import { useState } from 'react'
import Box from '@material-ui/core/Box'
import { MenuItem, TextField } from '@material-ui/core'
import { Form, FormGenerator } from './components'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'
import { useForm } from 'react-hook-form'
import { AccountBalance } from '@material-ui/icons'

const config = [
  {
    type: 'text',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    rules: {
      required: 'true',
      pattern: {
        value: 'email',
        domain: { sdf: 'sdf' },
        message: 'Enter example@senseteq.io'
      }
    },
    inputProps: {
      variant: 'outlined'
    },
    defaultValue: 'asdfasdf'
  },
  {
    type: 'date',
    label: 'Birthday',
    name: 'birthday'
  },

  {
    type: 'phone',
    label: 'Phone',
    name: 'phone',
    rules: {
      required: 'true',
      pattern: {
        value: 'phone',
        message: 'Enter correct number'
      }
    }
  },
  {
    type: 'number',
    label: 'Price',
    name: 'price',
    rules: {
      required: 'true',
      valueAsNumber: true,
      min: {
        value: 0,
        message: 'error message'
      }
    }
  },
  {
    type: 'select',
    label: 'Birthday',
    name: 'birthday',
    defaultValue: 'user',
    Component: RoleSingleSelect
  },
  {
    type: 'multiline',
    placeholder: 'Enter your comment',
    name: 'TextArea',
    inputProps: {
      rowsMax: 10,
      fullWidth: false,
      variant: 'filled',
      InputProps: { shrink: true }
    }
  },
  {
    type: 'search',
    name: 'Find User',
    variant: 'outlined',

    Icon: <AccountBalance />
  }
]

const App = () => {
  const form = useForm()

  return (
    <Box className="container-fluid">
      <Box className="row">
        <Box className="col-12">
          <Form
            form={form}
            onSubmit={(data) => console.log('submit', data)}
            onSubmitFail={(error) => console.log('fail', error)}
            size={{ size: 'medium', margin: 'dense' }}
            inlineFields>
            <FormGenerator config={config} />
            <Box>
              <button type="submit">sadfasdf</button>
            </Box>
          </Form>
        </Box>

        <button onClick={() => form.submit()}>adfad</button>
      </Box>
    </Box>
  )
}

const ROLE = {
  ADMIN: 'admin',
  USER: 'user',
  OBSERVER: 'observer'
}

const ROLE_VALUES = Object.values(ROLE)
function RoleSingleSelect(props) {
  const { menuItemProps, onChange, value, ...rest } = props
  const [currencySign, setCurrencySign] = useState(value)

  const handleSelect = (event) => {
    const selectedRole = event.target.value
    setCurrencySign(selectedRole)
    onChange && onChange(event, ROLE[selectedRole])
  }

  return (
    <TextField
      select
      label="Role"
      value={currencySign}
      style={{ minWidth: 100, textTransform: 'capitalize' }}
      defaultValue={currencySign}
      onChange={handleSelect}
      {...rest}>
      {ROLE_VALUES.map((item) => (
        <MenuItem
          {...menuItemProps}
          value={item}
          key={item}
          style={{ textTransform: 'capitalize' }}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
