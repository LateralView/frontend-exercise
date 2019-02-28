import validator from 'validator'

/**
 * Helper to validate a form. Validations must be defined before hand choosing their type
 * and passing the field name. Refer to customValidations.
 */
class FormValidator {
  constructor(validations) {
    this.validations = validations
  }

  /**
   * Validates the form fields against the defined rules.
   * @param {object} formFields
   * 
   * @returns {object} validation composed by an 'isValid' flag and the fields' status.
   */
  validate(formFields) {
    // Initialize validation object (starts as valid).
    let validation = this.createValidation()
    
    this.validations.forEach(rule => {
      // If the field isn't already marked invalid by an earlier rule
      if (validation[rule.fieldName].isValid) {
        // Determine the field value, the method to invoke and optional args from the rule definition.
        const fieldValue = formFields[rule.fieldName].value.toString()
        const args = rule.args || []
        const validationMethod = typeof rule.method === 'string' ? validator[rule.method] : rule.method
        
        // Verify if the rule has a field to compare against, if so, get the value and push it as the first arg.
        if (rule.fieldToCompare && formFields[rule.fieldToCompare] && formFields[rule.fieldToCompare].value) {
          const valueToCompare = formFields[rule.fieldToCompare].value.toString()
          args.unshift(valueToCompare)
        }

        /* Call the validationMethod with the current field value as the first argument, the
          additional arguments, and the formFields as a final argument. If the result doesn't
          match the rule.validWhen property, then modify the validation object for the field
          and set the isValid field to false */
        if (validationMethod(fieldValue, ...args, formFields) !== rule.validWhen) {
          validation[rule.fieldName] = {
            isValid: false,
            message: rule.message
          }
          validation.isValid = false
        }
      }
    })
    return validation
  }

  /**
   * Creates a validation object with everything 'valid'.
   * @returns {object} a validation object.
   */
  createValidation() {
    const validation = {}
    this.validations.forEach(rule => validation[rule.fieldName] = { isValid: true, message: '' })
    return { isValid: true, ...validation }
  }
}

export default FormValidator
