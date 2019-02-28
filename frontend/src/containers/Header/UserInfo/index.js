import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

import Avatar from '@material-ui/core/Avatar'

export default class UserInfo extends React.Component {
  static get propTypes() {
    return { user: PropTypes.object }
  }

  static get defaultProps() {
    return { user: {} }
  }

  render() {
    return (
      <div className={style.parentContainer}>
        <div className={style.avatarContainer}>
          <Avatar>GC</Avatar>
          <div className={style.namesContainer}>
            <p className={style.name}>
              {this.props.user.firstname} {this.props.user.lastname}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
