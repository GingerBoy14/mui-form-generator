import React from 'react'
import Textarea from './Textarea.template'
import Form from '../../Form'

const metadata = {
  title: 'components/Inputs/Textarea',
  component: Textarea
}
export default metadata

const Template = (args) => (
  <Form>
    <Textarea {...args} />
  </Form>
)

export const TextareaStory = Template.bind({})

TextareaStory.args = {}
