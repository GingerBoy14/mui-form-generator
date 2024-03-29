import React from 'react'
import { Form, FormGenerator, FormButtons } from '/src/components'
import { Input } from '/src/components/Inputs'
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
  value: 'word',
  message: 'Enter your name'
}
Name.argTypes = {
  value: {
    control: false,
    description: 'Unicode text without whitespaces.',
    table: {
      defaultValue: { summary: 'word' }
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
export const UnicodeWord = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [
    {
      type: 'text',
      name: 'Input',
      label: 'Word',
      rules: { pattern: rest }
    }
  ]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
    </Form>
  )
}

UnicodeWord.args = {
  value: 'word',
  message: 'Enter word'
}
UnicodeWord.argTypes = {
  value: {
    control: false,
    table: {
      defaultValue: { summary: 'word' }
    }
  }
}
export const UnicodeText = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [
    {
      type: 'multiline',
      name: 'Input',
      label: 'Description',
      rules: { pattern: rest }
    }
  ]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
      <FormButtons />
    </Form>
  )
}

UnicodeText.args = {
  value: 'text',
  message: 'Enter description'
}
UnicodeText.argTypes = {
  value: {
    control: false,
    table: {
      defaultValue: { summary: 'text' }
    }
  }
}
