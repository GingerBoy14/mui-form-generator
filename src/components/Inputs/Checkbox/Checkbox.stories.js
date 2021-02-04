import React from 'react'
import Checkbox from './Checkbox.template'
import Form from '../../Form'
import FormGenerator from '../../FormGenerator'

const metadata = {
  title: 'components/Inputs/Checkbox',
  component: Checkbox
}
export default metadata

const Template = (args) => {
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
export const CheckboxStory = Template.bind({})

CheckboxStory.args = {
  label: 'Checkbox'
}
