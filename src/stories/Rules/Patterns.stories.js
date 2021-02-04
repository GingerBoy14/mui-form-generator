import React from 'react'
import { Form, FormGenerator, FormButtons } from '/src/components'
import { Input } from '/src/components/Inputs'
import Button from '@material-ui/core/Button'
import { useForm } from '../../hooks'
const metadata = {
  title: 'rules/patterns',
  component: Input,
  argTypes: {
    inputProps: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    label: { table: { disable: true } },
    name: { table: { disable: true } },

    rules: { table: { disable: true } },
    pattern: {
      table: {
        type: {
          summary: '{value: string, message:  string | React.ReactElement}'
        }
      }
    },
    onSubmit: {
      table: {
        disable: true
      },
      action: 'submittedDone'
    },
    onSubmitFail: {
      table: {
        disable: true
      },
      action: 'submittedFailed'
    }
  }
}
export default metadata

export const Basic = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [
    {
      type: 'text',
      name: 'Input',
      label: 'input',
      rules: {
        pattern: {
          value: new RegExp(rest.value),
          message: rest.message
        }
      }
    }
  ]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
    </Form>
  )
}

Basic.args = {
  value: '[a - zA - Z]',
  message: 'Pattern message.'
}
Basic.argTypes = {
  pattern: {
    table: {
      type: {
        summary: '{value: RegExp, message: string | React.ReactElement}'
      }
    }
  },
  value: {
    description: 'String for RegExp'
  }
}

export const Email = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [
    {
      type: 'text',
      name: 'Input',
      label: 'Email',
      rules: { pattern: rest }
    }
  ]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
    </Form>
  )
}

Email.args = {
  value: 'email',
  message: 'Enter your email',
  domain: 'gmail.com'
}
Email.argTypes = {
  pattern: {
    table: {
      type: {
        summary:
          '{value: string, message: string | React.ReactElement, domain: string}'
      }
    }
  },
  value: {
    control: false,
    table: {
      defaultValue: { summary: 'email' }
    }
  },
  domain: {
    control: 'text',
    table: {
      type: { summary: 'optional' }
    }
  }
}

export const Name = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [
    {
      type: 'text',
      name: 'Input',
      label: 'Name',
      rules: { pattern: rest }
    }
  ]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
    </Form>
  )
}

Name.args = {
  value: 'text',
  message: 'Enter your name'
}
Name.argTypes = {
  value: {
    control: false,
    description: 'Unicode text without whitespaces.',
    table: {
      defaultValue: { summary: 'text' }
    }
  }
}
export const Phone = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [
    {
      type: 'text',
      name: 'Input',
      label: 'Phone',
      rules: { pattern: rest }
    }
  ]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
    </Form>
  )
}

Phone.args = {
  value: 'phone',
  message: 'Enter your phone'
}
Phone.argTypes = {
  value: {
    control: false,
    table: {
      defaultValue: { summary: 'phone' }
    }
  }
}
