import FormItem from './FormItem.template'

const metadata = {
  title: 'components/FormItem',
  component: FormItem
}
export default metadata

const Template = (args) => <FormItem {...args} />

export const FormItemStory = Template.bind({})

FormItemStory.args = {}
