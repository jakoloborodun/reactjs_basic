import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { MessageField } from '../Messages';

import './Layout.css';

class _Layout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    chats: PropTypes.array,
    profileName: PropTypes.string,
  };

  render() {
    const { match, chats, chatId = 1 } = this.props;
    let currentChatId = match.params.chatId
        ? parseInt(match.params.chatId, 10)
        : chatId;
    let currentChat = chats.find(chat => {
      return chat.id === currentChatId
    });

    return (
        <div className="layout">
          <Header className="header" title={ currentChat.name } profile={ this.props.profileName } />
          <div className="layout-inner"
               style={ { width: '100%', height: '500px', display: 'flex' } }>
            <div className="layout-inner-left">
              <ChatList className="chat-list"/>
            </div>
            <div className="layout-inner-right">
              <MessageField currentChat={ currentChat.id }/>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chats: state.chat.chats,
  profileName: state.profile.profileName,
});

const Layout = compose(
    withRouter,
    connect(mapStateToProps, {}),
)(_Layout);

export { Layout };
