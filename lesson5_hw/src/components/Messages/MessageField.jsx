import React from 'react';
import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Message } from './Message';

import './Message.css';

class MessageField extends Component {
  static propTypes = {
    currentChat: PropTypes.number,
    author: PropTypes.string,
  };

  static defaultProps = {
    author: 'Derp',
  };

  state = {
    messages: {
      1: [
        {
          text: 'Hi there!',
          author: this.props.author,
          creation: new Date().toLocaleString()
        },
        {
          text: 'What a nice day!',
          author: this.props.author,
          creation: new Date().toLocaleString()
        },
      ],
      2: [],
      3: [{
        text: 'Hello from bazinga chat',
        author: this.props.author,
        creation: new Date().toLocaleString()
      }],
    },
    input: '',
  };

  fieldRef = createRef();

  sendMessage = (message, author) => {
    const { currentChat } = this.props;
    const prevMessages = this.state.messages[currentChat] || [];

    this.setState({
      messages: {
        ...this.state.messages,
        [currentChat]: [
          ...prevMessages,
          {
            text: message,
            author: author,
            creation: new Date().toLocaleString(),
          },
        ],
      },
      input: '',
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { currentChat } = this.props;
    if (prevState.messages[currentChat]?.length < this.state.messages[currentChat]?.length
        && this.state.messages[currentChat][this.state.messages[currentChat]?.length - 1].author === 'Derp') {
      setTimeout(() => {
        this.sendMessage('go away! I am just robot', 'Bot');
      }, 1000);
    }

    this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
  }

  handleClick = (message) => {
    this.sendMessage(message, this.props.author);
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleKeyDown = (event, message) => {
    if (event.key === 'Enter') {
      this.sendMessage(message, this.props.author);
    }
  };

  render() {
    const { messages = [] } = this.state;
    const { currentChat } = this.props;

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

export { MessageField };
