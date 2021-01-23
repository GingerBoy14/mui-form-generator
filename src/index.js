import ReactDOM from 'react-dom'
import Box from '@material-ui/core/Box'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'
import { useForm } from 'react-hook-form'
import { Form } from './components/Form'
import { FormGenerator } from './components/FormGenerator'

const config = [
  {
    type: 'text',
    label: 'Email',
    name: 'email',

    rules: {
      required: 'true',
      pattern: {
        value: /\d/,
        domain: 'senseteq.io',
        message: 'Enter example@senseteq.io'
      }
    }
  },
  { type: 'date', label: 'Birthday', name: 'birthday' },
  { type: 'multiline', label: 'Birthday', name: 'birthday' }
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
