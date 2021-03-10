import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const styles = {
  title: {
    flexGrow: 1,
  },
};

class _Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" className={ classes.title }>
              { this.props.title }
            </Typography>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button component={ Link }
                      to={ "/profile" }>{ this.props.profile }</Button>
              <Button component={ Link } to={ "/" }>Chats</Button>
            </ButtonGroup>

          </Toolbar>
        </AppBar>
    )
  }
}

const Header = withStyles(styles)(_Header);

export { Header }
