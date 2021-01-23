import {
  Textarea,
  Checkbox,
  DatePicker,
  Input,
  Select
} from '../components/Lib'

const DEFINE_COMPONENTS = {
  INPUT_TEXT: {
    component: Input,
    type: 'text'
  },
  INPUT_EMAIL: {
    component: Input,
    type: 'email'
  },
  INPUT_MULTILINE: {
    component: Textarea,
    type: 'multiline'
  },
  INPUT_SEARCH: {
    component: Input,
    type: 'search'
  },
  CHECKBOX: {
    component: Checkbox,
    type: 'checkbox',
    checked: false
  },
  DATE: {
    component: DatePicker,
    type: 'date'
  },
  SELECT: {
    component: Select,
    type: 'select'
  }
}

const DEFINE_COMPONENTS_VALUES = Object.values(DEFINE_COMPONENTS)
const DEFINE_COMPONENTS_KEYS = Object.keys(DEFINE_COMPONENTS)

export { DEFINE_COMPONENTS, DEFINE_COMPONENTS_VALUES, DEFINE_COMPONENTS_KEYS }
