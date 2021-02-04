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
    },
    onSubmit: {
      action: 'submitted'
    },
    onSubmitFail: {
      action: 'failed'
    }
  }
}
export default metadata

export const Basic = (args) => {
  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Required',
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
        required: 'Required',
        pattern: {
          value: 'text'
        }
      }
    }
  ]
  return (
    <Form {...args}>
      <FormGenerator config={config} />
      <FormButtons Button={Button} />
    </Form>
  )
}

Basic.args = {
  size: { size: 'small', margin: 'dense' },
  variant: 'standard',
  layout: 'vertical'
}
export const DefaultValues = (args) => {
  const config = [
    {
      type: 'text',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      rules: {
        required: 'Required',
        pattern: {
          value: 'email',
          message: 'Enter correct email'
        }
      }
    },
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Required',
        pattern: {
          value: 'text'
        }
      }
    }
  ]
  const { email, name, ...rest } = args
  return (
    <Form defaultValues={{ email, name }} {...rest}>
      <FormGenerator config={config} />
      <FormButtons />
    </Form>
  )
}

DefaultValues.args = {
  email: 'example@example.com',
  name: 'Anonymous'
}
DefaultValues.argTypes = {
  email: {
    description: 'Field name in config.'
  },
  name: {
    description: 'Field name in config.'
  },
  size: { table: { disable: true } },
  variant: { table: { disable: true } },
  layout: { table: { disable: true } },
  form: { table: { disable: true } },
  onSubmit: { table: { disable: true } },
  onSubmitFail: { table: { disable: true } },
  rowStyles: { table: { disable: true } }
}

const SubmitFromOutsideComponent = (args) => {
  const { onSubmit, onSubmitFail } = args

  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Required',
        pattern: {
          value: 'text'
        }
      }
    }
  ]
  const form = useForm()
  return (
    <>
      <Form form={form} onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
        <FormGenerator config={config} />
      </Form>
      <Button onClick={() => form.submit()}>outside</Button>
    </>
  )
}

export const SubmitFromOutside = (args) => (
  <SubmitFromOutsideComponent {...args} />
)

SubmitFromOutside.args = {}
SubmitFromOutside.parameters = {
  docs: {
    source: {
      code: `const SubmitFromOutsideComponent = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args

  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Required',
        pattern: {
          value: 'text'
        }
      }
    }
  ]
  const form = useForm()
  return (
    <>
      <Form form={form} onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
        <FormGenerator config={config} />
      </Form>
      <Button onClick={() => form.submit()}>outside</Button>
    </>
  )
}`
    }
  }
}
SubmitFromOutside.argTypes = {
  size: { table: { disable: true } },
  variant: { table: { disable: true } },
  layout: { table: { disable: true } },
  form: { table: { disable: true } },
  onSubmit: { table: { disable: true } },
  onSubmitFail: { table: { disable: true } },
  rowStyles: { table: { disable: true } }
}
