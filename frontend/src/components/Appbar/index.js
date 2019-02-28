import React from 'react'
import PropTypes from 'prop-types'
import MUIAppbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import style from './style.scss'

class Appbar extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    onMenuClick: PropTypes.func
  }

  constructor() {
    super()

    // bindings
    this.menuClick = this.menuClick.bind(this)
  }

  menuClick() {
    this.props.onMenuClick()
  }

  render() {
    return (
      <div className={ style.appbarWrapper }>
        <MUIAppbar
          classes={{ root: style.appbar }}
          position="relative"
        >
          <Toolbar>
            {
              this.props.loggedIn ? (
                <IconButton color="inherit" aria-label="Menu" onClick={ this.menuClick }>
                  <MenuIcon />
                </IconButton>
              ) : null
            }
            <Typography variant="h6" color="inherit">
              React Skeleton
            </Typography>
          </Toolbar>
        </MUIAppbar>
      </div>
    )
  }
}

export default Appbar
