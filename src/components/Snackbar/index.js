import React from 'react'
import MUISnackbar from '@material-ui/core/Snackbar'

class Snackbar extends React.Component {
  render() {
    return (
      <MUISnackbar { ...this.props } />
    )
  }
}

export default Snackbar
