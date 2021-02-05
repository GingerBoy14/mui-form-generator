import React from 'react'
import Checkbox from './Checkbox.template'
import Form from '../../Form'
import FormGenerator from '../../FormGenerator'

const metadata = {
  title: 'components/Inputs/Checkbox',
  component: Checkbox
}
export default metadata

export const Basic = (args) => {
  const config = [
    {
      type: 'checkbox',
      name: 'checkbox',
      ...args
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} />
    </Form>
  )
}

Basic.args = {
  label: 'Checkbox',
  name: 'checkbox',
  defaultValue: false
}
Basic.argTypes = {}

export const Label = (args) => {
  const { label, text, placement } = args
  const config = [
    {
      type: 'checkbox',
      name: 'checkbox',
      label: label || { text, placement }
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} />
    </Form>
  )
}

Label.args = {
  label: 'Checkbox',
  defaultValue: false
}
Label.argTypes = {
  name: {
    table: {
      disable: true
    }
  },
  defaultValue: {
    table: {
      disable: true
    }
  },
  text: {
    control: 'text',
    table: {
      category: 'label'
    }
  },
  placement: {
    table: {
      category: 'label',
      defaultValue: { summary: 'start' }
    },
    defaultValue: 'start',
    control: {
      type: 'select',
      options: ['bottom', 'end', 'start', 'top']
    }
  }
}
