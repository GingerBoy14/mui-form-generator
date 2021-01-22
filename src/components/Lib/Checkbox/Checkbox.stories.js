import Checkbox from './Checkbox.template'

const metadata = {
  title: 'components/Lib/Checkbox',
  component: Checkbox
}
export default metadata

const Template = (args) => <Checkbox {...args} />

export const CheckboxStory = Template.bind({})

CheckboxStory.args = {}
