import Form from '../Form'
import FormGenerator from './FormGenerator.template'
import FormButtons from '../FormButtons'
import React from 'react'
const metadata = {
  title: 'components/FormGenerator',
  component: FormGenerator,
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

export const SeparateFields = (args) => {
  const { show, ...rest } = args
  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Enter your name',
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
        required: 'Enter your surname',
        pattern: {
          value: 'text'
        }
      }
    },
    {
      type: 'date',
      label: 'Birthday',
      name: 'dateInSeconds',
      placeholder: 'Enter your birthday',
      rules: {
        required: 'Enter your birthday'
      }
    },
    {
      type: 'text',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      rules: {
        required: 'Enter your email',
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
      }
    }
  ]
  return (
    <Form {...rest}>
      <FormGenerator config={config} show={show} />
      <FormButtons />
    </Form>
  )
}

SeparateFields.args = {
  show: ['surname', 'email', 'phone']
}

SeparateFields.parameters = {
  docs: {
    description: {
      story: `You can create one config and after that pass to your form component \`show\` property to use only fields
         that you need.  
         <span style="color:red">*</span>**Order is important.**  
         If you don't pass this property it'll show all fields.  
         Example config fields name: name, surname, email, date, phone`
    }
  }
}

SeparateFields.argTypes = {
  show: { description: 'Array of fields name' },
  config: { table: { disable: true } },
  fieldProps: { table: { disable: true } }
}

export const DynamicProps = (args) => {
  const { fieldProps, ...rest } = args
  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Enter your name',
        pattern: {
          value: 'text'
        }
      }
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} fieldProps={fieldProps} {...rest} />
      <FormButtons />
    </Form>
  )
}

DynamicProps.args = {
  fieldProps: { name: { inputProps: { variant: 'outlined' } } }
}

DynamicProps.parameters = {
  docs: {
    description: {
      story: `Set properties what your component need dynamically passing in to  \`fieldProps\` property.  
      \`fieldProps: { key: value }\` Where \`key\` - fieldName, \`value\` - properties`
    }
  }
}

DynamicProps.argTypes = {
  show: { table: { disable: true } },
  config: { table: { disable: true } },
  fieldProps: { description: 'Array of fields props' }
}

export const StaticProps = (args) => {
  const { props, ...rest } = args
  const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      rules: {
        required: 'Enter your name',
        pattern: {
          value: 'text'
        }
      },
      props: props.name
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} {...rest} />
      <FormButtons />
    </Form>
  )
}

StaticProps.args = {
  props: { name: { inputProps: { variant: 'outlined' } } }
}

StaticProps.parameters = {
  docs: {
    description: {
      story: `Set properties what your component need in \`config\``
    }
  }
}

StaticProps.argTypes = {
  show: { table: { disable: true } },
  config: { table: { disable: true } },
  fieldProps: { table: { disable: true } },
  props: {
    table: {
      group: 'config'
    }
  }
}
