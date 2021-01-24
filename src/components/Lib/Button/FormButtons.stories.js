import FormButtons from './FormButtons.template'

const metadata = {
  title: 'components/Lib/FormButtons',
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
