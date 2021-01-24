import Input from './Input.template'
import { Form } from '../../Form'
import { Button, Box } from '@material-ui/core'

const metadata = {
  title: 'components/Lib/Input',
  component: Input,
  argTypes: {
    onSubmit: {
      table: {
        disable: true
      },
      action: 'submittedDone'
    },
    onSubmitFail: {
      table: {
        disable: true
      },
      action: 'submittedFailed'
    }
  }
}
export default metadata

const Template = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args

  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Input {...rest} fullWidth />

        <Box mx={2}>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </Form>
  )
}

export const InputStory = Template.bind({})

InputStory.args = {
  type: 'text',
  label: 'Email',
  name: 'email',
  placeholder: 'Enter your email',
  rules: {
    required: 'true',
    pattern: {
      value: 'email',
      domain: { sdf: 'sdf' },
      message: 'Enter example@senseteq.io'
    }
  }
}
