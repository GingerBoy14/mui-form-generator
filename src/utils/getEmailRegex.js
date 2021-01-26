import { EMAIL_REGEX } from '../constants/regex'
const getEmailRegex = (domain) =>
  new RegExp(`${EMAIL_REGEX.FIRST_PART}${domain.split('.').join('\\.')}+$`, 'm')

export default getEmailRegex
