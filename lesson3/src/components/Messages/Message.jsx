import React from 'react';
import { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import './Message.css';

class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string,
    creation: PropTypes.string,
  };

  render() {
    const { text, author = '', creation } = this.props;

    return <div className="message-item" style={ { backgroundColor: this.props.author === 'Bot' ?
          '#4caf50' : '#1976d2' } }>
      <div className='message-left'>
        <Avatar variant="rounded">
          { author.charAt(0) }
        </Avatar>
      </div>
      <div className='message-right'>
        <span className="message-sender"><b>{ author }</b>{' '}</span>
        <span className="message-timestamp">{ creation }</span><br />
        <div className="message-content">{ text }</div>
      </div>
    </div>
  }

}

export { Message };
