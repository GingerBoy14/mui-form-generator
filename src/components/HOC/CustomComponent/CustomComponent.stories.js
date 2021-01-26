import CustomComponent from './CustomComponent.template.js'

const metadata = {
  title: 'components/CustomComponent',
  component: CustomComponent
}
export default metadata

const Template = (args) => <CustomComponent {...args} />

export const CustomComponentStory = Template.bind({})

CustomComponentStory.args = {}
