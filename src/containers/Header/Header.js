import React from 'react'
import PropTypes from 'prop-types'
import Appbar from '../../components/Appbar'

import UserInfo from './UserInfo'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import style from './style.scss'

export default class Header extends React.Component {
  static get propTypes() {
    return {
      user: PropTypes.object,
      loggedIn: PropTypes.bool,
      onEdit: PropTypes.func,
      onLogout: PropTypes.func
    }
  }

  constructor() {
    super()
    this.state = {
      drawer: {
        left: false
      }
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.editUser = this.editUser.bind(this)
    this.logout = this.logout.bind(this)
    this.drawerMenuClick = this.drawerMenuClick.bind(this)
  }

  toggleDrawer(open) {
    this.setState({
      drawer: {
        left: open
      }
    })
  }

  drawerMenuClick() {
    this.setState({
      drawer: {
        left: true
      }
    })
  }

  editUser() {
    this.toggleDrawer()
    // TODO: implement
    // this.props.onEdit()
  }

  logout() {
    this.toggleDrawer(false)
    this.props.onLogout()
  }

  render() {
    return (
      <div className={style.headerWrapper}>
        {
          this.props.loggedIn ? (
            <SwipeableDrawer
              open={ this.state.drawer.left }
              onOpen={ () => this.toggleDrawer(true) }
              onClose={ () => this.toggleDrawer(false) }
            >
              <div className={ style.drawerContent }>
                <UserInfo user={this.props.user} />
                <Divider />
                <List>
                  <ListItem button onClick={ this.logout }>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
          ) : null
        }

        <Appbar onMenuClick={ this.drawerMenuClick } loggedIn={ this.props.loggedIn }>
          <h2>React Skeleton</h2>
        </Appbar>
      </div>
    )
  }
}
