import React from 'react';
import {Component, Fragment} from 'react';
import { Message } from './Message';

class MessageField extends Component {
  state = {
    messages: [
        {text: 'Hi there!', author: 'Derp', creation: new Date().toLocaleString()},
        {text: 'What a nice day!', author: 'Derp', creation: new Date().toLocaleString()},
    ],
  };

  addMessage = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: 'How are you mate?',
          author: 'Derp',
          creation: new Date().toLocaleString(),
        },
      ],
    });
  };

  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
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
      }, 2000);
    }
  }

  render() {
    const { messages = [] } = this.state;

    return (
        <Fragment>
          <div className='messages'>
            {messages.map((item, index) => (
                <Fragment>
                  <Message key={index} text={item.text} author={item.author} creation={item.creation} />
                  <br/>
                </Fragment>
            ))}
          </div>

          <button onClick={this.addMessage}>Send message</button>
        </Fragment>
    );
  }
}

export { MessageField };
