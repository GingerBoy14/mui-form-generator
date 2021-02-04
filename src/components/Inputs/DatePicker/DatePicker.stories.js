import React from 'react'
import DatePicker from './DatePicker.template'
import Form from '../../Form'
import FormGenerator from '../../FormGenerator'

const metadata = {
  title: 'components/Inputs/DatePicker',
  component: DatePicker
}
export default metadata

const Template = (args) => {
  const config = [
    {
      type: 'date',
      label: 'Date',
      name: 'date'
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} />
    </Form>
  )
}

export const DatePickerStory = Template.bind({})

DatePickerStory.args = {}
