import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string,
  };

  render() {
    const { text, author, creation } = this.props;

    return <div className="message-item">
      <span className="message-sender"><b>{ author }</b>{' '}</span>
      <span className="message-timestamp">{ creation }</span><br />
      <div className="message-content">{ text }</div>
    </div>
  }

}

export {Message};
