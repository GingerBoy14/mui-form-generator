import Textarea from './Textarea.template'

const metadata = {
  title: 'components/Lib/Textarea',
  component: Textarea
}
export default metadata

const Template = (args) => <Textarea {...args} />

export const TextareaStory = Template.bind({})

TextareaStory.args = {}
