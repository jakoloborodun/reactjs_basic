import React from 'react';
import { Link } from 'react-router-dom';
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

class ChatList extends React.Component {

  state = {
    chats : [
      { name: 'chat 1', id: 1 },
      { name: 'chat 2', id: 2 },
      { name: 'bazinga', id: 3 },
    ],
    chatName: '',
  };

  addChat = () => {
    const { chats } = this.state;

    const lastChat = chats[chats.length - 1];
    const chatId = lastChat.id + 1;

    this.setState({
      chats: [...chats, { name: this.state.chatName, id: chatId }],
      chatName: '',
    });
  };

  render() {
    const { chats = [] } = this.state;

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

export { ChatList };
