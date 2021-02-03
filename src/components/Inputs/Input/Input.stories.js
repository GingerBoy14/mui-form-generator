import React from 'react'
import Input from './Input.template'
import Form from '../../Form'
import { Button } from '@material-ui/core'
import { Row, Col, Container } from '@qonsoll/react-design'
const metadata = {
  title: 'components/Inputs/Input',
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
      <Container>
        <Row v="center">
          <Col mx={2}>
            <Input {...rest} fullWidth />
          </Col>

          <Col mx={2}>
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </Col>
        </Row>
      </Container>
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
