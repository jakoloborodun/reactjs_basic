import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

class ChatList extends React.Component {

  state = {
    chats : [
      { name: 'chat 1', id: 1 },
      { name: 'chat 2', id: 2 },
      { name: 'bazinga', id: 3 },
    ]
  };

  render() {
    const { chats = [] } = this.state;

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Chat List
              </ListSubheader>
            }
        >
          {chats.map((chat, index) => (
              <Link key={ index } to={ `/chat/${ chat.id }` }
                    style={ { textDecoration: 'none' } }>
                <ListItem button>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={chat.name} />
                </ListItem>
              </Link>
          ))}

        </List>
    );
  }
}

export { ChatList };
