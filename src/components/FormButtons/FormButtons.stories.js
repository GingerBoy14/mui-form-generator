import FormButtons from './FormButtons.template'
import Form from '../Form'

const metadata = {
  title: 'components/FormButtons',
  component: FormButtons
}
export default metadata

const Template = (args) => (
  <Form>
    <FormButtons {...args} />
  </Form>
)

export const FormButtonsStory = Template.bind({})

FormButtonsStory.args = {}
