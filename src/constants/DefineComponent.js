import {
  Textarea,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Search
} from '../components/Lib'

const DEFINE_COMPONENTS = {
  INPUT_TEXT: {
    Component: Input,
    type: 'text'
  },
  INPUT_EMAIL: {
    Component: Input,
    type: 'email'
  },
  INPUT_PHONE: {
    Component: Input,
    type: 'phone'
  },
  INPUT_NUMBER: {
    Component: Input,
    type: 'number'
  },
  INPUT_MULTILINE: {
    Component: Textarea,
    type: 'multiline'
  },
  INPUT_SEARCH: {
    Component: Search,
    type: 'search'
  },
  CHECKBOX: {
    Component: Checkbox,
    type: 'checkbox',
    checked: false
  },
  DATE: {
    Component: DatePicker,
    type: 'date'
  },
  SELECT: {
    Component: Select,
    type: 'select'
  }
}

const DEFINE_COMPONENTS_VALUES = Object.values(DEFINE_COMPONENTS)
const DEFINE_COMPONENTS_KEYS = Object.keys(DEFINE_COMPONENTS)

export { DEFINE_COMPONENTS, DEFINE_COMPONENTS_VALUES, DEFINE_COMPONENTS_KEYS }
