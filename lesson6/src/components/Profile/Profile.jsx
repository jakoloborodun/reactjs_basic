import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import { setName } from '../../actions/profileActions';
import './Profile.css';

class _Profile extends React.Component {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        setName: PropTypes.func.isRequired,
    };

    state = {
        inputName: '',
    };

    handleChange = (e) => {
        this.setState({ inputName: e.target.value });
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.setName(this.state.inputName);
            this.setState({
                inputName: '',
            });
        }
    };

    render() {
        const { inputName } = this.state;
        const { userName } = this.props;

        return (
            <div className='profile'>
                <h1>Hello from Profile</h1>
                <h2>{userName ? `Имя: ${userName}` : 'Имя не задано'}</h2>
                <div>
                    <TextField
                        label='Задать имя'
                        value={inputName}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKey}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userName: state.profile.userName,
});

const Profile = connect(mapStateToProps, { setName })(_Profile);

export { Profile };
