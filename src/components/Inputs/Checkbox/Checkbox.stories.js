import Checkbox from './Checkbox.template'
import Form from '../../Form'

const metadata = {
  title: 'components/Inputs/Checkbox',
  component: Checkbox
}
export default metadata

const Template = (args) => (
  <Form>
    <Checkbox {...args} />
  </Form>
)

export const CheckboxStory = Template.bind({})

CheckboxStory.args = {}
