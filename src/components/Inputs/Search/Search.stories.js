import React from 'react'
import Search from './Search.template'
import Form from '../../Form'
import FormGenerator from '../../FormGenerator'

const metadata = {
  title: 'components/Inputs/Search',
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

const Template = (args) => {
  const config = [
    {
      type: 'search',
      placeholder: 'Search',
      name: 'search'
    }
  ]
  return (
    <Form>
      <FormGenerator config={config} />
    </Form>
  )
}

export const SearchStory = Template.bind({})

SearchStory.args = {
  type: 'search',
  name: 'Find User',
  variant: 'outlined',
  iconProps: {
    start: true
  }
}
