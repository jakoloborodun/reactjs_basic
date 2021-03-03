import React from 'react';
import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Message } from './Message';

import './Message.css';

class MessageField extends Component {
  static propTypes = {
    currentChat: PropTypes.string,
  };

  state = {
    messages: [
        {text: 'Hi there!', author: 'Derp', creation: new Date().toLocaleString()},
        {text: 'What a nice day!', author: 'Derp', creation: new Date().toLocaleString()},
    ],
    input: '',
  };

  fieldRef = createRef();

  sendMessage = (message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: message,
          author: 'Derp',
          creation: new Date().toLocaleString(),
        },
      ],
      input: '',
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.messages.length < this.state.messages.length
        && this.state.messages[this.state.messages.length - 1].author === 'Derp') {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            {
              text: 'go away! I am just robot',
              author: 'Bot',
              creation: new Date().toLocaleString(),
            },
          ],
        });
      }, 1000);
    }

    this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
  }

  handleClick = (message) => {
    this.sendMessage(message);
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleKeyDown = (event, message) => {
    if (event.key === 'Enter') {
      this.sendMessage(message);
    }
  };

  render() {
    const { messages = [] } = this.state;

    return (
        <>
          <div className='messages' ref={this.fieldRef}>
            {messages.map((item, index) => (
                <Message key={index} text={item.text} author={item.author}
                         creation={item.creation}/>
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
    );
  }
}

export { MessageField };
