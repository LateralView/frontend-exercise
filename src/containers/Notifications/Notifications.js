import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '../../components/Snackbar'

export default class Notifications extends React.Component {
  static get propTypes() {
    return {
      Notifications: PropTypes.array,
      OnNotificationTimeout: PropTypes.func,
      OnActionTap: PropTypes.func
    }
  }

  render() {
    return (
      <div>
        {this.props.Notifications.map(notif => (
          <Snackbar
            key={notif._id}
            open={notif._open}
            message={ <span>{notif.message}</span> }
            action={notif.actionMessage || null}
            autoHideDuration={notif.autoHide}
            onClick={() => this.props.OnActionTap(notif._id)}
            onClose={() => this.props.OnNotificationTimeout(notif._id)}
          />
        ))}
      </div>
    )
  }
}
