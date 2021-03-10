import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Icon, IconButton, withStyles
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { addChat } from '../../redux/actions/chatActions';

import './ChatList.css';

const styles = {
  active: {
    backgroundColor: 'rgb(226, 226, 226)',
  },
};

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
    const { chats = [], classes } = this.props;

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
                <ListItem button key={ index } to={ `/chat/${ chat.id }` }
                          component={ NavLink }
                          activeClassName={ classes.active }>
                  <ListItemIcon>
                    <SendIcon/>
                  </ListItemIcon>
                  <ListItemText primary={ chat.name }/>
                </ListItem>
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

const ChatList = compose(
    withStyles(styles),
    connect(mapStateToProps, { addChat }),
)(_ChatList);

export { ChatList };
