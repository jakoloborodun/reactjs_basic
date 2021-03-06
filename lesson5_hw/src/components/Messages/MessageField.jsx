import React from 'react';
import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Message } from './Message';

import './Message.css';
import { sendMessage } from "../../redux/actions/messageActions";

class _MessageField extends Component {
  static propTypes = {
    currentChat: PropTypes.number,
    messages: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    profileName: PropTypes.string,
  };

  state = {
    input: '',
  };

  fieldRef = createRef();

  sendMessage = (message, author) => {
    const currentChat = this.props.currentChat;
    const currentAuthor = author.length ? author : this.props.profileName;

    (this.state.input || currentAuthor !== this.props.profileName)
    && this.props.sendMessage(message, currentAuthor, new Date().toLocaleString(), currentChat);

    this.setState({
      input: '',
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const currentChat = this.props.currentChat;
    const author = this.props.profileName;

    let prevLength = prevProps.messages[currentChat]?.length
        ? prevProps.messages[currentChat].length
        : 0;
    let curLength = this.props.messages[currentChat]?.length
        ? this.props.messages[currentChat].length
        : 0;

    if (
        (prevLength < curLength) && curLength > 0
        && this.props.messages[currentChat][curLength - 1].author === author) {
      setTimeout(() => {
        this.sendMessage('go away! I am just robot', 'Bot');
      }, 1000);
    }

    this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
  }

  handleClick = (message) => {
    this.sendMessage(message, this.props.profileName);
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleKeyDown = (event, message) => {
    if (event.key === 'Enter') {
      this.sendMessage(message, this.props.profileName);
    }
  };

  render() {
    const { messages = {}, currentChat } = this.props;

    return (
        <>
          {currentChat && (
              <>
                <div className='messages' ref={this.fieldRef}>
                  {messages[currentChat] &&
                  messages[currentChat].map((item, index) => (
                      <Message key={index} {...item} />
                  ))}
                </div>

                <div className='send-area' style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  display: 'flex',
                  padding: '1rem'
                }}>
                  <TextField
                      className='text-field'
                      value={this.state.input}
                      fullWidth={true}
                      label='New message'
                      onChange={this.handleChange}
                      onKeyUp={(event) => this.handleKeyDown(event, this.state.input)}
                  />
                  <IconButton
                      color='primary'
                      variant='contained'
                      onClick={() => this.handleClick(this.state.input)}
                  >
                    <Icon>send</Icon>
                  </IconButton>
                </div>
              </>
          )}
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  profileName: state.profile.profileName,
});

const MessageField = connect(mapStateToProps, { sendMessage })(_MessageField);

export { MessageField };
