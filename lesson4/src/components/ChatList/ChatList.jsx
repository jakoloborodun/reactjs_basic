import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import './ChatList.css';

const chats = ['chat 1', 'chat 2', 'chat 3'];
// const chats = [{ name: 'chat 1', id: 1, messageList: [3, 4, 8, 98] }];

const ChatList = () => {
    return (
        <div className='chat-list'>
            <List>
                {chats.map((chat, index) => (
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
        </div>
    );
};

export { ChatList };
