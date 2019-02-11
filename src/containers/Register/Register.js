import style from './style.scss'
import React from 'react'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'
import Card from '../../components/Card'
// import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'

export default class Register extends React.Component {
  static get propTypes() {
    return {
      onBack: PropTypes.func,
      onRegister: PropTypes.func,
      history: PropTypes.object.isRequired
    }
  }

  constructor() {
    super()
    this._goBack = this._goBack.bind(this)
  }

  _goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={style.parentView}>
        <Card title="Register" subtitle="Register a New Account">
          <RegisterForm onBack={this._goBack} onSubmit={this.props.onRegister} />
        </Card>
      </div>
    )
  }
}
