import FormGenerator from './FormGenerator.template'

const metadata = {
  title: 'components/FormGenerator',
  component: FormGenerator
}
export default metadata

const Template = (args) => <FormGenerator {...args} />

export const FormGeneratorStory = Template.bind({})

FormGeneratorStory.args = {}
