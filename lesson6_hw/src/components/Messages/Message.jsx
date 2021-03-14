import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string,
    creation: PropTypes.string,
    profile: PropTypes.string,
  };

  render() {
    const { text, author = '', creation, profile } = this.props;
    let messageColorClass = author !== profile
        ? 'message-item-bot'
        : 'message-item-owner';

    return <div className={'message-item ' + messageColorClass }>
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
