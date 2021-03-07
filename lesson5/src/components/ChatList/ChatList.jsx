import { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './ChatList.css';

class ChatList extends Component {
    state = {
        chats: ['chat 1', 'chat 2', 'chat 3'],
        chatName: '',
    };

    addChat = () => {
        this.setState({
            chats: [...this.state.chats, this.state.chatName],
            chatName: '',
        });
    };

    render() {
        return (
            <div className='chat-list'>
                <List>
                    {this.state.chats.map((chat, index) => (
                        <Link key={index} to={`/chat/${index}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Send />
                                </ListItemIcon>
                                <ListItemText primary={chat} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <div className='new-chat'>
                    <TextField
                        value={this.state.chatName}
                        label='New chat'
                        onChange={(event) =>
                            this.setState({
                                chatName: event.target.value,
                            })
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                this.addChat();
                            }
                        }}
                    />
                    <IconButton
                        color='primary'
                        variant='contained'
                        onClick={this.addChat}
                    >
                        <Icon>send</Icon>
                    </IconButton>
                </div>
            </div>
        );
    }
}

export { ChatList };
