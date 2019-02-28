import React from 'react'
import PropTypes from 'prop-types'

import style from './TextField.scss'

class TextField extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onEnterPress: PropTypes.func
  }

  constructor() {
    super()
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    if (this.props.onEnterPress && event.key === 'Enter') {
      this.props.onEnterPress(event)
    }
  }

  render() {
    const errorClass = this.props.error ? style.textfieldError : ''
    let fieldType = this.props.type || 'text'
    if (fieldType === 'currency') {
      fieldType = 'text'
    }

    return (
      <div className={`${style.textfieldWrapper} ${errorClass} ${this.props.className}`} >
        <div className={ style.textfieldErrorMsg }>{ this.props.errorMessage }</div>
        <div className={ `${style.textfieldInputWrapper} ${this.props.type || ''}` }>
          <input
            type={ fieldType }
            name={ this.props.name }
            onChange={ this.props.onChange }
            onBlur={ this.props.onChange }
            onKeyPress={ this.handleKeyPress }
            className={ this.props.type }
          />
          <label>{this.props.label}</label>
        </div>
      </div>
    )
  }
}

export default TextField
