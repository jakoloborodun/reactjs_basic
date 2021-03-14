import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon, IconButton, TextField } from "@material-ui/core";

import { Header } from "../Header";
import { changeName } from "../../actions/profileActions";

import './Profile.css';

class _Profile extends Component {
  static propTypes = {
    profileName: PropTypes.string,
    changeName: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.profileName,
  };

  changeName = () => {
    this.state.name && this.props.changeName(this.state.name);
  };

  render() {
    return (
        <div className='layout'>
          <Header className="header"
                  title={ this.props.profileName + '\'s Profile' }
                  profile={ this.props.profileName } />
          <div className='profile'>
            <h1>Hello from { this.props.profileName + '\'s Profile' }</h1>

            <div className='profile-change'>
              <TextField
                  value={ this.state.name }
                  label='Change Profile name'
                  onChange={ (event) =>
                      this.setState({
                        name: event.target.value,
                      })
                  }
                  onKeyDown={ (event) => {
                    if (event.key === 'Enter') {
                      this.changeName();
                    }
                  } }
              />
              <IconButton
                  color='primary'
                  variant='contained'
                  onClick={ this.changeName }
              >
                <Icon>save</Icon>
              </IconButton>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileName: state.profile.profileName,
});

const Profile = connect(mapStateToProps, { changeName })(_Profile);

export { Profile };
