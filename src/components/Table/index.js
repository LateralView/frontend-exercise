import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

class Table extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.array
    }
  }

  render() {
    return (
      <table>{ this.props.children }</table>
    )
  }
}

export default Table
