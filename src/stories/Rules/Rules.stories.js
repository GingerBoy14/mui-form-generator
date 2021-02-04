import React from 'react'
import { Form, FormGenerator, FormButtons } from '/src/components'
import { Input } from '/src/components/Inputs'
import Button from '@material-ui/core/Button'
import { useForm } from '../../hooks'
const metadata = {
  title: 'rules/rules',
  component: Input
}
export default metadata

export const Rules = (args) => {
  const config = [
    {
      type: 'text',
      name: 'Input',
      label: 'input',
      rules: { ...args }
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} />
    </Form>
  )
}

Rules.args = {}
Rules.argTypes = {
  inputProps: { table: { disable: true } },
  placeholder: { table: { disable: true } },
  label: { table: { disable: true } },
  name: { table: { disable: true } },
  rules: {
    description: 'Validation rules for single form field.',
    control: false
  },
  required: {
    type: { name: ['string', 'bool'] },
    table: {
      type: { summary: `'string' | 'boolean'` }
    }
  }
}
