import Button from './Button.template'

const metadata = {
  title: 'components/Lib/Button',
  component: Button
}
export default metadata

const Template = (args) => <Button {...args} />

export const ButtonStory = Template.bind({})

ButtonStory.args = {}
