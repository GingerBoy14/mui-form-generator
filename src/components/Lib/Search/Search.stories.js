import Search from './Search.template'

const metadata = {
  title: 'components/Lib/Search',
  component: Search
}
export default metadata

const Template = (args) => <Search {...args} />

export const SearchStory = Template.bind({})

SearchStory.args = {}
