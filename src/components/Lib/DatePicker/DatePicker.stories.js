import DatePicker from './DatePicker.template'

const metadata = {
  title: 'components/Lib/DatePicker',
  component: DatePicker
}
export default metadata

const Template = (args) => <DatePicker {...args} />

export const DatePickerStory = Template.bind({})

DatePickerStory.args = {}
