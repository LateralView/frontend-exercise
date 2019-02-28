import React from 'react'
import PropTypes from 'prop-types'

import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import FormValidator from '../../../validators/FormValidator'
import { required, email } from '../../../validators/customValidations'

import style from './style.scss'

// Define form fields
const EMAIL_FIELD = 'email'
const PASSWORD_FIELD = 'password'
const formFieldsNames = [ EMAIL_FIELD, PASSWORD_FIELD ]

export default class LoginForm extends React.Component {
  static propTypes = {
    posting: PropTypes.bool,
    onSubmit: PropTypes.func,
    onRegisterPressed: PropTypes.func
  }

  static defaultProps = {
    posting: false
  }

  constructor() {
    super()

    // bindings
    this.handleInputChange = this.handleInputChange.bind(this)
    this.isValid = this.isValid.bind(this)
    this.submit = this.submit.bind(this)

    // set initial state
    this.state = {
      [EMAIL_FIELD]: { value: '' },
      [PASSWORD_FIELD]: { value: '' }
    }

    // validations
    this.validator = new FormValidator([
      ...email(EMAIL_FIELD),
      ...required(PASSWORD_FIELD)
    ])
  }

  /**
   * update state with fields information
   *
   * @param event {object} input event
   */
  handleInputChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: {
        value: event.target.value,
        dirty: true
      }
    })
  }

  /**
   * check if the form is in a valid state
   */
  isValid() {
    return this.validation.isValid && !this.props.posting
  }

  /**
   * submit email and password to login
   */
  submit() {
    if (this.isValid()) {
      this.props.onSubmit({
        email: this.state[EMAIL_FIELD].value,
        password: this.state[PASSWORD_FIELD].value
      })
    }
  }

  render() {
    // Get the form input values and statuses from state to validate.
    const formFields = {}
    formFieldsNames.forEach(fieldName => formFields[fieldName] = this.state[fieldName])
    this.validation = this.validator.validate(formFields)

    return (
      <section>
        <article>
          <TextField
            className={ style.textField }
            name={EMAIL_FIELD}
            label="Email"
            errorMessage={this.validation[EMAIL_FIELD].message}
            error={!this.validation[EMAIL_FIELD].isValid && this.state[EMAIL_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.onSubmit }
          />
          <TextField
            name={PASSWORD_FIELD}
            label="Password"
            errorMessage={this.validation[PASSWORD_FIELD].message}
            error={!this.validation[PASSWORD_FIELD].isValid && this.state[PASSWORD_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.onSubmit }
            type="password"
          />
        </article>
        <article className={style.buttonContainer}>
          <Button
            label="Register New Account"
            onClick={ this.props.onRegisterPressed }
          />
          <Button
            label="Log In"
            disabled={ !this.isValid() }
            onClick={ this.submit }
            primary
          />
        </article>
      </section>
    )
  }
}
