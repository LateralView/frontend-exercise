import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import FormValidator from '../../../validators/FormValidator'
import {
  required,
  email,
  password,
  matchingFields
} from '../../../validators/customValidations'

import style from './style.scss'

// Define form fields
const EMAIL_FIELD = 'email'
const PASSWORD_FIELD = 'password'
const REPEAT_PASSWORD_FIELD = 'repeat-password'
const FIRST_NAME_FIELD = 'firstname'
const LAST_NAME_FIELD = 'lastname'
const formFieldsNames = [ EMAIL_FIELD, PASSWORD_FIELD, REPEAT_PASSWORD_FIELD, FIRST_NAME_FIELD, LAST_NAME_FIELD ]


class RegisterForm extends React.Component {
  static get propTypes() {
    return {
      posting: PropTypes.bool,
      history: PropTypes.object,
      onSubmit: PropTypes.func
    }
  }

  constructor() {
    super()

    // bindings
    this.handleInputChange = this.handleInputChange.bind(this)
    this.isValid = this.isValid.bind(this)
    this.submit = this.submit.bind(this)
    this.gotoLogin = this.gotoLogin.bind(this)

    // validations
    this.validator = new FormValidator([
      ...email(EMAIL_FIELD),
      ...password(PASSWORD_FIELD),
      ...matchingFields(REPEAT_PASSWORD_FIELD, PASSWORD_FIELD, 'Passwords must match'),
      ...required(FIRST_NAME_FIELD),
      ...required(LAST_NAME_FIELD)
    ])

    // initial state
    this.state = {
      [EMAIL_FIELD]: { value: '' },
      [PASSWORD_FIELD]: { value: '' },
      [REPEAT_PASSWORD_FIELD]: { value: '' },
      [FIRST_NAME_FIELD]: { value: '' },
      [LAST_NAME_FIELD]: { value: '' }
    }
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
   * submit form
   * pass the state fields to onSubmit prop if it's valid
   */
  submit() {
    if (this.isValid()) {
      this.props.onSubmit({
        email: this.state[EMAIL_FIELD].value,
        password: this.state[PASSWORD_FIELD].value,
        firstname: this.state[FIRST_NAME_FIELD].value,
        lastname: this.state[LAST_NAME_FIELD].value
      })
    }
  }

  /**
   * redirect to login page
   */
  gotoLogin() {
    this.props.history.push('/login')
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
            name={EMAIL_FIELD}
            label="Email"
            errorMessage={this.validation[EMAIL_FIELD].message}
            error={!this.validation[EMAIL_FIELD].isValid && this.state[EMAIL_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.submit }
            className={ style.textField }
          />

          <TextField
            name={PASSWORD_FIELD}
            label="Password"
            errorMessage={this.validation[PASSWORD_FIELD].message}
            error={!this.validation[PASSWORD_FIELD].isValid && this.state[PASSWORD_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.submit }
            className={ style.textField }
            type="password"
          />

          <TextField
            name={REPEAT_PASSWORD_FIELD}
            label="Repeat password"
            errorMessage={this.validation[REPEAT_PASSWORD_FIELD].message}
            error={!this.validation[REPEAT_PASSWORD_FIELD].isValid && this.state[REPEAT_PASSWORD_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.submit }
            className={ style.textField }
            type="password"
          />

          <TextField
            name={FIRST_NAME_FIELD}
            label="First Name"
            errorMessage={this.validation[FIRST_NAME_FIELD].message}
            error={!this.validation[FIRST_NAME_FIELD].isValid && this.state[FIRST_NAME_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.submit }
            className={ style.textField }
          />

          <TextField
            name={LAST_NAME_FIELD}
            label="Last Name"
            errorMessage={this.validation[LAST_NAME_FIELD].message}
            error={!this.validation[LAST_NAME_FIELD].isValid && this.state[LAST_NAME_FIELD].dirty}
            onChange={this.handleInputChange}
            onEnterPress={ this.submit }
            className={ style.textField }
          />
        </article>

        <article className={ style.buttonContainer }>
          <Button
            label="Back to Log In"
            onClick={ this.gotoLogin }
          />
          <Button
            label="Register Account"
            disabled={ !this.isValid() }
            onClick={ this.submit }
            primary
          />
        </article>
      </section>
    )
  }
}

export default withRouter(RegisterForm)
