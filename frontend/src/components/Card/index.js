import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any
  }
  render() {
    return (
      <div className={ style.card }>
        <h2>{ this.props.title }</h2>
        <p>{ this.props.subtitle }</p>
        <div className={ style.body }>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Card
