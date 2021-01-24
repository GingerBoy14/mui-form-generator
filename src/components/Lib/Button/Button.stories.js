import Button from './Button.template'
import { Form } from '../../Form'

const metadata = {
  title: 'components/Lib/Button',
  component: Button
}
export default metadata

const Template = (args) => (
  <Form>
    <Button {...args} />
  </Form>
)

export const ButtonStory = Template.bind({})

ButtonStory.args = {}
