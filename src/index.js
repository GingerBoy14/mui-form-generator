import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-grid-override.css'
import { useForm } from 'react-hook-form'
import { Form } from './components/Form'
import { FormGenerator } from './components/FormGenerator'

const App = () => {
  const form = useForm({
    defaultValues: {
      email: 'alalal'
    }
  })
  return (
    <>
      <Form
        form={form}
        onSubmit={() => console.log('submit')}
        onSubmitFail={() => console.log('fail')}>
        <FormGenerator />
      </Form>
      <button onClick={() => form.submit()}>adfad</button>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
