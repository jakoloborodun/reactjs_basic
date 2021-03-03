import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import {Header} from '../Header';
import {ChatList} from '../ChatList';
import {MessageField} from '../Messages';

import './Layout.css';

class _Layout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { match } = this.props;
    console.log(match);

    return (
        <div className="layout">
          <Header className="header" title='Test React GB'/>
          <div className="layout-inner" style={{width: '100%', height: '500px', display: 'flex'}}>
            <div className="layout-inner-left">
              <ChatList className="chat-list"/>
            </div>
            <div className="layout-inner-right">
              <MessageField currentChat={match.params.chatId} />
            </div>
          </div>
        </div>
    );
  }
}

const Layout = withRouter(_Layout);

export { Layout };
