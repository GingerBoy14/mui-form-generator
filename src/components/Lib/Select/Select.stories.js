import Select from './Select.template'
import { Form } from '../../Form'

const metadata = {
  title: 'components/Lib/Select',
  component: Select
}
export default metadata

const Template = (args) => (
  <Form>
    <Select {...args} />
  </Form>
)

export const SelectStory = Template.bind({})

SelectStory.args = {}
