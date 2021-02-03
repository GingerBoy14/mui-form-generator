import {
  Textarea,
  Checkbox,
  DatePicker,
  Input,
  Search
} from '../components/Inputs'

const FORM_FIELD_TYPES = {
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
  }
}

const FORM_FIELD_TYPES_VALUES = Object.values(FORM_FIELD_TYPES)
const FORM_FIELD_TYPES_KEYS = Object.keys(FORM_FIELD_TYPES)

export { FORM_FIELD_TYPES, FORM_FIELD_TYPES_VALUES, FORM_FIELD_TYPES_KEYS }
