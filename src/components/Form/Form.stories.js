import React from 'react'
import Form from './Form.template.js'
import FormButtons from '../FormButtons'
import FormGenerator from '../FormGenerator'
import Button from '@material-ui/core/Button'
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
  const { size, margin, ...rest } = args
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
    },
    {
      type: 'text',
      label: 'Surname',
      name: 'surname',
      placeholder: 'Enter your surname',
      rules: {
        required: 'Required',
        pattern: {
          value: 'word',
          message: 'Enter only surname'
        }
      }
    }
  ]
  return (
    <Form size={{ size, margin }} {...rest}>
      <FormGenerator config={config} />
      <FormButtons Button={Button} />
    </Form>
  )
}

Basic.args = {
  variant: 'standard',
  layout: 'vertical'
}
Basic.argTypes = {
  size: {
    control: { type: 'select', options: ['small', 'medium'] },
    defaultValue: 'small',
    table: {
      category: 'size',
      type: {
        summary: 'text'
      }
    }
  },
  margin: {
    control: { type: 'select', options: ['dense', 'normal', 'none'] },
    defaultValue: 'dense',
    table: {
      category: 'size',
      type: {
        summary: 'text'
      }
    }
  },
  form: {
    control: false,
    table: {
      type: {
        summary: 'Form Instance'
      }
    }
  }
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
          value: 'word'
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

export const InlineFields = (args) => {
  const config = [
    {
      inlineLayout: [
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
          label: 'Phone',
          name: 'phone',
          placeholder: 'Enter your name',
          rules: {
            required: 'Required',
            pattern: {
              value: 'phone'
            }
          }
        }
      ]
    },
    {
      inlineLayout: [
        {
          type: 'text',
          label: 'Name',
          name: 'name',
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
          label: 'Surname',
          name: 'surname',
          placeholder: 'Enter your name',
          rules: {
            required: 'Required',
            pattern: {
              value: 'word'
            }
          }
        }
      ]
    },

    {
      type: 'multiline',
      label: 'Description',
      name: 'description',
      placeholder: 'Enter your info'
    }
  ]
  return (
    <Form {...args}>
      <FormGenerator config={config} hide={args.hide} show={args.show} />
      <FormButtons />
    </Form>
  )
}

InlineFields.args = {
  hide: [''],
  show: ['description', 'email', 'phone']
}
InlineFields.argTypes = {
  size: { table: { disable: true } },
  variant: { table: { disable: true } },
  layout: { table: { disable: true } },
  form: { table: { disable: true } },
  onSubmit: { table: { disable: true } },
  onSubmitFail: { table: { disable: true } },
  rowStyles: { table: { disable: true } }
}

export const Watcher = (args) => {
  const config = [
    {
      inlineLayout: [
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
          },
          watch: 'email'
        }
      ]
    },
    {
      type: 'checkbox',
      label: 'Description',
      name: 'descriptionCheckbox'
    },
    {
      type: 'multiline',
      label: 'Description',
      name: 'description',
      placeholder: 'Enter your info',
      watch: 'descriptionCheckbox'
    }
  ]
  return (
    <Form {...args}>
      <FormGenerator config={config} />
      <FormButtons />
    </Form>
  )
}

Watcher.args = {}
Watcher.argTypes = {
  size: { table: { disable: true } },
  variant: { table: { disable: true } },
  layout: { table: { disable: true } },
  form: { table: { disable: true } },
  onSubmit: { table: { disable: true } },
  onSubmitFail: { table: { disable: true } },
  rowStyles: { table: { disable: true } }
}
