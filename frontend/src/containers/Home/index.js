import React from 'react'

import style from './style.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div className={ style.homepage }>
        <h1>Authenticated home page</h1>
      </div>
    )
  }
}
