import DatePicker from './DatePicker.template'
import { Form } from '../../Form'

const metadata = {
  title: 'components/Lib/DatePicker',
  component: DatePicker
}
export default metadata

const Template = (args) => (
  <Form>
    <DatePicker {...args} />
  </Form>
)

export const DatePickerStory = Template.bind({})

DatePickerStory.args = {}
