import { REGEX_TYPE_MAP_VALUES } from '../constants/regex'
import getEmailRegex from './getEmailRegex'

const checkPattern = (rules) => {
  if (rules?.pattern && typeof rules.pattern.value === 'string') {
    REGEX_TYPE_MAP_VALUES.forEach((regex) => {
      if (regex.type === rules.pattern.value) {
        if (rules.pattern.value === 'email') {
          if (
            rules.pattern.domain &&
            typeof rules.pattern.domain === 'string'
          ) {
            rules.pattern.value = getEmailRegex(rules.pattern.domain)
            delete rules.pattern.domain
          } else {
            rules.pattern.value = regex.regex.WITHOUT_DOMAIN_NAME
          }
        } else {
          rules.pattern.value = regex.regex
        }
      }
    })
  }
}

export default checkPattern
