import ReactDOM from 'react-dom'
import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form'
import { Form, FormGenerator } from './components'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'

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
        message: 'error message'
      }
    }
  },
  { type: 'multiline', label: 'Birthday', name: 'birthday' }
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
ReactDOM.render(<App />, document.getElementById('root'))
