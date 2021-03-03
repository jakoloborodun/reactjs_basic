import React, {Component} from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

class Header extends Component {
  render() {
    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6">
              {this.props.title}
            </Typography>

          </Toolbar>
        </AppBar>
    )
  }
}

export {Header}
