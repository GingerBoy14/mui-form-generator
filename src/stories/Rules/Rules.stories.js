import React from 'react'
import { Form, FormGenerator, FormButtons } from '/src/components'
import { Input } from '/src/components/Inputs'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks'
const metadata = {
  title: 'rules/rules',
  component: Input,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Rules object get all rules options from React-Hook-Form library.
            Link: https://react-hook-form.com/api#register
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
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
  }
}
