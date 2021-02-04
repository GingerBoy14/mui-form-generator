import React from 'react'
import FormButtons from './FormButtons.template'
import Form from '../Form'
import MUIButton from '@material-ui/core/Button'

const metadata = {
  title: 'components/FormButtons',
  component: FormButtons,
  argTypes: {
    Button: {
      description: `Button component which you want to use.`
    },
    layout: {
      description: 'All properties from @qonsoll/react-design Row component.'
    }
  }
}
export default metadata

export const Native = (args) => (
  <Form onSubmit={() => ({})}>
    <FormButtons {...args} />
  </Form>
)

Native.args = {}
Native.argTypes = {
  buttonPropsCancel: {
    description: `All possible properties for cancel button tag.`
  },
  buttonPropsSubmit: {
    description: `All possible properties for submit button tag.`
  }
}

export const MaterialUI = (args) => (
  <Form onSubmit={() => ({})}>
    <FormButtons {...args} Button={MUIButton} />
  </Form>
)

MaterialUI.args = {}
MaterialUI.argTypes = {
  buttonPropsCancel: {
    description: `All possible properties for cancel button component.`,
    defaultValue: { variant: 'contained' },
    table: { defaultValue: { summary: `{ variant: 'contained' }` } }
  },
  buttonPropsSubmit: {
    description: `All possible properties for submit button component.`,
    defaultValue: { variant: 'contained', color: 'primary', type: 'submit' },
    table: {
      defaultValue: {
        summary: `{ variant: 'contained', color: 'primary', type: 'submit' }`
      }
    }
  }
}

export const Layout = (args) => {
  const { h } = args
  return (
    <Form onSubmit={() => ({})}>
      <FormButtons {...args} layout={{ h }} Button={MUIButton} />
    </Form>
  )
}

Layout.args = {
  h: 'right'
}
Layout.argTypes = {
  h: {
    table: { defaultValue: { summary: 'right' } },
    description: 'layout property',
    control: {
      type: 'select',
      options: ['left', 'right', 'center', 'between', 'around', 'evenly']
    }
  },

  Button: { table: { disable: true } },
  onClickSubmit: { table: { disable: true } },
  onClickCancel: { table: { disable: true } }
}
