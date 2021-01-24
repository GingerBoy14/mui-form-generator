import ReactDOM from 'react-dom'
import Box from '@material-ui/core/Box'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'
import { useForm } from 'react-hook-form'
import { Form } from './components/Form'
import { FormGenerator } from './components/FormGenerator'
import { Search } from '@material-ui/icons'

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
    }
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
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }
    }
  },
  {
    type: 'multiline',
    label: 'Enter your comment',
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
    iconProps: {
      startAdornment: true,
      Icon: <Search />
    }
  }
]

const App = () => {
  const form = useForm()

  return (
    <Box className="container-fluid">
      <Box className="col-12">
        <Form
          form={form}
          onSubmit={(data) => console.log('submit', data)}
          onSubmitFail={(error) => console.log('fail', error)}
          size={{ size: 'medium', margin: 'dense' }}>
          <FormGenerator config={config} />
        </Form>
      </Box>
      <button onClick={() => form.submit()}>adfad</button>
    </Box>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
