import React from 'react'
import { render } from '@testing-library/react'
import CustomComponent from '../CustomComponent.template.js'

test('Render CustomComponent test.', () => {
  render(<CustomComponent />)
})
