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
  },
  {
    type: 'date',
    label: 'Birthday',
    name: 'birthday',
    placeholder: 'Enter your birthday',
    rules: {
      required: 'true'
    }
  },
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
    }
  },
  {
    type: 'phone',
    label: 'Phone',
    name: 'phone',
    placeholder: 'Enter your Phone',
    rules: {
      pattern: {
        value: 'phone',
        message: 'Enter correct phone number'
      }
    },
    horizontal: true
  }
]

const MemberAdvancedForm = (props) => {
  return (
    <Form
      onSubmit={(data) => console.log('submit', data)}
      onSubmitFail={(error) => console.log('fail', error)}
      {...props}>
      <FormGenerator config={config} show={['email', 'phone']} />
      <FormButtons Button={Button} />
    </Form>
  )
}
const Template = (args) => <MemberAdvancedForm {...args} />

export const FormStory = Template.bind({})

FormStory.args = {
  size: { size: 'small', margin: 'dense' },
  variant: 'standard',
  layout: 'vertical'
}
