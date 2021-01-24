import ReactDOM from 'react-dom'
import Box from '@material-ui/core/Box'
import { Form, FormGenerator } from './components'
import { useForm } from 'react-hook-form'
import { FormButtons } from './components/Lib/Button'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'

const config = [
  {
    inlineLayout: [
      {
        type: 'text',
        label: 'Email',
        name: 'email',
        placeholder: 'Enter your email',
        rules: {
          required: 'true',
          pattern: {
            value: 'email',
            domain: 'senseteq.io',
            message: 'Enter example@senseteq.io'
          }
        },
        horizontal: true,
        defaultValue: 'examle@famil.com'
      }
    ]
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
            variant="outlined"
            layout="inline">
            <FormGenerator config={config} />

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


ReactDOM.render(<App />, document.getElementById('root'))
