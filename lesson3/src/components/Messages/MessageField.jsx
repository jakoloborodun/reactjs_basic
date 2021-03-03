import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { Message } from './Message';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

class MessageField extends Component {
  state = {
    messages: [
        {text: 'Hi there!', author: 'Derp', creation: new Date().toLocaleString()},
        {text: 'What a nice day!', author: 'Derp', creation: new Date().toLocaleString()},
    ],
    input: '',
  };

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
        <div>
          <div className='messages'>
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
                id="outlined-basic"
                label="Message"
                fullWidth={true}
                variant="outlined"
                onChange={this.handleChange}
                onKeyUp={(event) => this.handleKeyDown(event, this.state.input)}
                value={this.state.input}
            />

            <Button
                onClick={() => this.handleClick(this.state.input)}
                color='primary'
                variant='contained'
                startIcon={<Icon>send</Icon>}
            >
              Send Message
            </Button>
          </div>
        </div>
    );
  }
}

export { MessageField };
