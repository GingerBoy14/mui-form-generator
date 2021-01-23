import ReactDOM from 'react-dom'
import Box from '@material-ui/core/Box'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'
import { useForm } from 'react-hook-form'
import { Form } from './components/Form'
import { FormGenerator } from './components/FormGenerator'

const config = [
  { type: 'text', label: 'Email', name: 'email', rules: { required: 'Maxim' } },
  { type: 'date', label: 'Birthday', name: 'birthday' }
]

const App = () => {
  const form = useForm()

  return (
    <Box className="container-fluid">
      <Box className="col-12">
        <Form
          form={form}
          onSubmit={() => console.log('submit')}
          onSubmitFail={() => console.log('fail')}>
          <FormGenerator config={config} />
        </Form>
      </Box>
      <button onClick={() => form.submit()}>adfad</button>
    </Box>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
