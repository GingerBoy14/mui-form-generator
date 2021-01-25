import ReactDOM from 'react-dom'
import { useState } from 'react'
import Box from '@material-ui/core/Box'
import { MenuItem, TextField } from '@material-ui/core'
import { Form, FormGenerator } from './components'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'
import { useForm } from 'react-hook-form'
import { AccountBalance } from '@material-ui/icons'
import { FormButtons } from './components/Lib/Button'
import { DatePicker } from './components/Lib/DatePicker'

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
        message: 'Enter example@senseteq.io'
      }
    },
    inputProps: {
      variant: 'outlined'
    }
    defaultValue: 'examle@famil.com',
    showIfChecked: 'reminder'
  },
  {
    type: 'date',
    label: 'Birthday',
    name: 'birthday'
  },

  {
    type: 'phone',
    label: 'Phone',
    placeholder: 'Enter your phone',
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
    name: 'role',
    label: 'Role',
    defaultValue: 'user',
    Component: RoleSingleSelect
  },

  { type: 'checkbox', name: 'reminder', label: 'Reminder' },

  {
    type: 'multiline',
    placeholder: 'Enter your comment',
    label: 'Comment',
    name: 'TextArea',
    inputProps: {
      rowsMax: 10
    }
  },
  {
    type: 'search',
    name: 'Find User',
    Icon: AccountBalance
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
            size={{ size: 'small', margin: 'normal' }}
            variant="outlined"
            inlineFieldsLabel>
            <FormGenerator config={config} />

            <FormButtons okText="accept" cancelText="cancel" />
            <button type="submit">sadfasdf</button>
            <FormButtons
              okText="accept"
              cancelText="cancel"
              visibleCancel={false}
            />

          </Form>
        </Box>

        <button onClick={() => form.submit()}>outside</button>
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
  const { menuItemProps, onChange, value, inputProps } = props
  const [currencySign, setCurrencySign] = useState(value)

  const handleSelect = (event) => {
    const selectedRole = event.target.value
    setCurrencySign(selectedRole)
    onChange && onChange(event, ROLE[selectedRole])
  }
  return (
    <TextField
      select
      value={currencySign}
      style={{ minWidth: 100, textTransform: 'capitalize' }}
      defaultValue={currencySign}
      helperText=" "
      onChange={handleSelect}
      {...inputProps}>
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
