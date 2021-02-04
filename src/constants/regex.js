import XRegExp from 'xregexp'

/*eslint no-useless-escape: "off"*/

const NUMBER_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
const CHECK_UNICODE_WORD = XRegExp('^\\pL+$')

/*
  if you want to use this obj you need create RegExp

  example new RegExp (EMAIL_REGEX.WITHOUT_DOMAIN_NAME)
*/
const EMAIL_REGEX = {
  FIRST_PART:
    '^(([^<>()\\[\\]\\.,;:\\s@"]+(.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@',
  WITHOUT_DOMAIN_NAME: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m
}

const REGEX_TYPE_MAP = {
  EMAIL: {
    type: 'email',
    regex: EMAIL_REGEX
  },
  PHONE: {
    type: 'phone',
    regex: NUMBER_REGEX
  },
  WORD: {
    type: 'word',
    regex: CHECK_UNICODE_WORD
  }
}

const REGEX_TYPE_MAP_VALUES = Object.values(REGEX_TYPE_MAP)
const REGEX_TYPE_MAP_KEYS = Object.values(REGEX_TYPE_MAP)

export {
  EMAIL_REGEX,
  NUMBER_REGEX,
  CHECK_UNICODE_WORD,
  REGEX_TYPE_MAP_VALUES,
  REGEX_TYPE_MAP_KEYS
}
