import Input from './Input.template'

const metadata = {
  title: 'components/Lib/Input',
  component: Input
}
export default metadata

const Template = (args) => <Input {...args} />

export const InputStory = Template.bind({})

InputStory.args = {}
