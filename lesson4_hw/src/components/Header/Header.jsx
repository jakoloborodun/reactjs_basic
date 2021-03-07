import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    flexGrow: 1,
  },
};

class _Header extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);

    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" className={ classes.title }>
              { this.props.title }
            </Typography>
            <Button href={ "/profile" } color="inherit">Profile</Button>
          </Toolbar>
        </AppBar>
    )
  }
}

const Header = withStyles(styles)(_Header);

export { Header }
