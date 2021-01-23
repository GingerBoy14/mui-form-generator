import Form from './Form.template.js'

const metadata = {
  title: 'components/Form',
  component: Form
}
export default metadata

const Template = (args) => <Form {...args} />

export const FormStory = Template.bind({})

FormStory.args = {}
