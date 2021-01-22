import Select from './Select.template'

const metadata = {
  title: 'components/Lib/Select',
  component: Select
}
export default metadata

const Template = (args) => <Select {...args} />

export const SelectStory = Template.bind({})

SelectStory.args = {}
