import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Icon, IconButton
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { addChat } from '../../redux/actions/chatActions';

class _ChatList extends React.Component {

  static propTypes = {
    chats: PropTypes.array,
    addChat: PropTypes.func.isRequired,
  };

  state = {
    chatName: '',
  };

  addChat = () => {
    this.state.chatName && this.props.addChat(this.state.chatName);

    this.setState({
      chatName: '',
    });
  };

  render() {
    const { chats = [] } = this.props;

    return (
        <div className='chat-list'>
          <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Chat List
                </ListSubheader>
              }
          >
            { chats.map((chat, index) => (
                <Link key={ index } to={ `/chat/${ chat.id }` }
                      style={ { textDecoration: 'none' } }>
                  <ListItem button>
                    <ListItemIcon>
                      <SendIcon/>
                    </ListItemIcon>
                    <ListItemText primary={ chat.name }/>
                  </ListItem>
                </Link>
            )) }

          </List>
          <div className='new-chat'>
            <TextField
                value={ this.state.chatName }
                label='New chat'
                onChange={ (event) =>
                    this.setState({
                      chatName: event.target.value,
                    })
                }
                onKeyDown={ (event) => {
                  if (event.key === 'Enter') {
                    this.addChat();
                  }
                } }
            />
            <IconButton
                color='primary'
                variant='contained'
                onClick={ this.addChat }
            >
              <Icon>send</Icon>
            </IconButton>
          </div>

        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chats: state.chat.chats,
});

const ChatList = connect(mapStateToProps, { addChat })(_ChatList);

export { ChatList };
