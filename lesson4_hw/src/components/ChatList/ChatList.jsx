import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

const chats = ['chat 1', 'chat2', 'chat3'];
// const chats = [{name: 'chat 1', id: 1}];

const ChatList = () => {

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
            <ListItem button key={index}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={chat} />
            </ListItem>
        ))}


      </List>
  );

};

export { ChatList };
