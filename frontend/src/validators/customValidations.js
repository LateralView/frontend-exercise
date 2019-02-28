const _email = (fieldName) => [
  {
    fieldName,
    method: 'isEmail',
    validWhen: true,
    message: 'Invalid email address'
  }
]

// Phone reg exp matches against strings with the following format `555-555-5555`.
const phoneRegExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/
const _phone = (fieldName) => [
  {
    fieldName,
    method: 'matches',
    args: [ phoneRegExp ],
    validWhen: true,
    message: 'Please use US phone number format: 555-555-5555'
  }
]

// Float reg exp allows numbers with (or without) decimals separated by a dot. E.g `63.58`
const floatRegExp = /^(\d+(\.\d)?\d*)?$/
const _numeric = (fieldName) => [
  {
    fieldName,
    method: 'matches',
    args: [ floatRegExp ],
    validWhen: true,
    message: 'Only numbers allowed: 63.58'
  }
]

/* Password reg exp verifies that the password string contains a minimum of 8 chars,
   at least one number and one letter */
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
const _password = (fieldName) => [
  {
    fieldName,
    method: 'matches',
    args: [ passwordRegExp ],
    validWhen: true,
    message: 'Password must have at least 8 characters, one number and one letter'
  },
]

export const required = (fieldName) => [
  {
    fieldName,
    method: 'isEmpty',
    validWhen: false,
    message: 'This field is required'
  }
]

const _matchingFields = (fieldName, fieldToCompare, errorMessage) => [
  {
    fieldName,
    fieldToCompare,
    method: 'equals',
    validWhen: true,
    message: errorMessage ? errorMessage : `${fieldName} and ${fieldToCompare} should match.`
  }
]

/**
 * Validates that the email has the expected format. Required by default.
 * @param {string} fieldName 
 * @param {boolean} isRequired 
 */
export const email = (fieldName, isRequired = true) => isRequired ? [
  ...required(fieldName),
  ..._email(fieldName)
] : [ ..._email(fieldName) ]

/**
 * Validates that the phone follows the expected pattern. Required by default.
 * @param {string} fieldName 
 * @param {boolean} isRequired 
 */
export const phone = (fieldName, isRequired = true) => isRequired ? [
  ...required(fieldName),
  ..._phone(fieldName)
] : [ ..._phone(fieldName) ]

/**
 * Validates that the password matches the stablished rules. Required by default.
 * @param {string} fieldName 
 * @param {boolean} isRequired 
 */
export const password = (fieldName, isRequired = true) => isRequired ? [
  ...required(fieldName),
  ..._password(fieldName)
] : [ ..._password(fieldName) ]

/**
 * Validates if a string is a number. Required by default.
 * @param {string} fieldName 
 * @param {boolean} isRequired 
 */
export const numeric = (fieldName, isRequired = true) => isRequired ? [
  ...required(fieldName),
  ..._numeric(fieldName)
] : [ ..._numeric(fieldName) ]

/**
 * Tries to match the given field with the field to compare. Alternatively an error message can be provided.
 *
 * @param {string} fieldName
 * @param {string} fieldCompare 
 * @param {string} errorMessage 
 * @param {boolean} isRequired 
 */
export const matchingFields = (fieldName, fieldCompare, errorMessage, isRequired = true) => isRequired ? [
  ...required(fieldName),
  ..._matchingFields(fieldName, fieldCompare, errorMessage)
] : [ ..._matchingFields(fieldName, fieldCompare, errorMessage) ]