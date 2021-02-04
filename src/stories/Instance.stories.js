import React from 'react'
import { Form, FormGenerator, FormButtons } from '../index'
import Button from '@material-ui/core/Button'
import { useForm } from '../hooks'
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Title
} from '@storybook/addon-docs/blocks'
const metadata = {
  title: 'components/Form/Form Instance',
  component: Form,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            useForm hook returns form instance it also takes optional arguments.
            Link: https://react-hook-form.com/api#useForm
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  },
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

const DefaultValuesComponent = (args) => {
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
          value: 'word',
          message: 'Enter only name'
        }
      }
    }
  ]
  const { email, name, ...rest } = args
  const form = useForm({ defaultValues: { email, name } })
  return (
    <Form form={form} {...rest}>
      <FormGenerator config={config} />
      <FormButtons />
    </Form>
  )
}

export const DefaultValues = (args) => <DefaultValuesComponent {...args} />

DefaultValues.args = {
  email: 'instance@example.com',
  name: 'Instance'
}
DefaultValues.parameters = {
  docs: {
    source: {
      code: `const DefaultValuesComponent = (args) => {
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
          value: 'word'
        }
      }
    }
  ]
  const { email, name, ...rest } = args
  const form = useForm({ defaultValues: { email, name } })
  return (
    <Form form={form} {...rest}>
      <FormGenerator config={config} />
      <FormButtons />
    </Form>
  )
}`
    }
  }
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
  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Required',
        pattern: {
          value: 'word',
          message: 'Enter only name'
        }
      }
    }
  ]
  const form = useForm()
  return (
    <>
      <Form form={form} {...args}>
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
          value: 'word'
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
