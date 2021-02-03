import React from 'react'
import Form from './Form.template.js'
import FormButtons from '../FormButtons'
import FormGenerator from '../FormGenerator'
import Button from '@material-ui/core/Button'
import { useForm } from '../../hooks'
const metadata = {
  title: 'components/Form',
  component: Form,
  argsTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard']
      }
    },
    layout: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical', 'inline']
      }
    },
    form: {
      table: {
        disable: true
      }
    }
  }
}
export default metadata

const config = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
    rules: {
      required: 'true',
      pattern: {
        value: 'text'
      }
    }
  },
  {
    type: 'text',
    label: 'Surname',
    name: 'surname',
    placeholder: 'Enter your surname',
    rules: {
      required: 'true',
      pattern: {
        value: 'text'
      }
    }
  }
]

export const Basic = (args) => (
  <Form
    onSubmit={(data) => console.log('submit', data)}
    onSubmitFail={(error) => console.log('fail', error)}
    {...args}>
    <FormGenerator config={config} />
    <FormButtons Button={Button} />
  </Form>
)

Basic.args = {
  size: { size: 'small', margin: 'dense' },
  variant: 'standard',
  layout: 'vertical'
}
