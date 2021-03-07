import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
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

    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" className={ classes.title }>
              { this.props.title }
            </Typography>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button href={ "/profile" }>Profile</Button>
              <Button href={ "/" }>Chats</Button>
            </ButtonGroup>

          </Toolbar>
        </AppBar>
    )
  }
}

const Header = withStyles(styles)(_Header);

export { Header }
