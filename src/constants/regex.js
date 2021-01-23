import XRegExp from 'xregexp'

const NUMBER_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
const CHECK_UNICODE = XRegExp('^\\pL+$')
const EMAIL_REGEX = {
  FIRST_PART: '^(([^<>()\\[\\]\\.,;:s@"]+(.[^<>()\\[\\]\\.,;:s@"]+)*)|(".+"))@',
  WITHOUT_DOMAIN_NAME:
    '^(([^<>()\\[\\]\\.,;:s@"]+(.[^<>()\\[\\]\\.,;:s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
} // if you want to use this obj you need create RegExp
//example new RegExp (EMAIL_REGEX.WITHOUT_DOMAIN_NAME)

const REGEX_MAP = {
  EMAIL: {
    type: 'email',
    regex: EMAIL_REGEX
  },
  PHONE: {
    type: 'phone',
    regex: NUMBER_REGEX
  },
  TEXT: {
    type: 'text',
    regex: CHECK_UNICODE
  }
}

export { EMAIL_REGEX, NUMBER_REGEX, CHECK_UNICODE }
