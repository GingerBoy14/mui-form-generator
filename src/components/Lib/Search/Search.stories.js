import Search from './Search.template'
import { Form } from '../../Form'

const metadata = {
  title: 'components/Lib/Search',
  component: Search,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard']
      }
    },
    onChange: {
      table: {
        disable: true
      },
      action: 'onChange'
    }
  }
}
export default metadata

const Template = (args) => {}
  <Form>
    <Search {...args} />
  </Form>
)

export const SearchStory = Template.bind({})

SearchStory.args = {
  type: 'search',
  name: 'Find User',
  variant: 'outlined',
  iconProps: {
    start: true
  }
}
