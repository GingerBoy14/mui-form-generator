import FormButtons from './FormButtons.template'

const metadata = {
  title: 'components/Lib/Button',
  component: FormButtons
}
export default metadata

const Template = (args) => <FormButtons {...args} />

export const ButtonStory = Template.bind({})

ButtonStory.args = {}
