# mui-form-generator-fractal-band-2


[![NPM](https://img.shields.io/npm/v/mui-form-generator-fractal-band.svg)](https://www.npmjs.com/package/mui-form-generator-fractal-band) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-form-generator-fractal-band-2
```

## Usage

```jsx
import React from 'react'

import { Form, FormGenerator, FormButtons } from 'mui-form-generator-fractal-band-2'

const config = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    rules: {
    	required: 'Enter your name'
    }
  }
] 


const Component = (props) => {
	
  const onSubmit = (data) => {
	console.log(data)
  }
  const onSubmitFail = (errors) => {
	console.log(errors)
  }
	
  return (
    <Form onSubmit={onSubmit} onSubmitFail={onSubmitFail}>
      <FormGenerator config={config} />
      <FormButtons />
    </Form>
 )
}
```

## License

MIT © [GingerBoy14](https://github.com/GingerBoy14)
