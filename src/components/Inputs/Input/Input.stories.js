import React from 'react'
import Input from './Input.template'
import Form from '../../Form'
import FormGenerator from '../../FormGenerator'
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
    },
    name: {
      description: 'Using to identify form item.'
    }
  }
}
export default metadata

export const Basic = (args) => {
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

Basic.args = {
  type: 'text',
  label: 'Email',
  name: 'email',
  placeholder: 'Enter your email',
  horizontal: false,
  rules: {
    required: 'true',
    pattern: {
      value: 'email',
      domain: { sdf: 'sdf' },
      message: 'Enter example@senseteq.io'
    }
  }
}

export const Types = (args) => {
  const { onSubmit, onSubmitFail, ...rest } = args
  const config = [rest]
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
    </Form>
  )
}

Types.args = {
  type: 'text',
  label: 'Input',
  name: 'input',
  horizontal: false
}
Types.argTypes = {
  type: {
    control: { type: 'select', options: ['text', 'number'] }
  }
}
