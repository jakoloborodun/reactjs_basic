import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT, TOGGLE_UNREAD } from '../actions/chatActions';

const initialState = {
    chats : [
        { name: 'chat 1', id: 1, isUnread: false },
        { name: 'chat 2', id: 2, isUnread: false },
    ],
    messages: {
        1: [{ text: 'Hello from redux', author: 'bot', creation: new Date().toLocaleString() }],
    },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            const prevMessages = state.messages[action.payload.chatId] || [];

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            text: action.payload.text,
                            author: action.payload.author,
                            creation: action.payload.creation,
                        },
                    ],
                },
            };
        }

        case ADD_CHAT: {
            const lastChat = state.chats[state.chats.length - 1];
            const chatId = lastChat.id + 1;

            // const chatId = Object.keys(store.chats).length + 1;
            return {
                ...state,
                chats: [...state.chats, {
                    name: action.payload.chatName,
                    id: chatId,
                    isUnread: false,
                }],
            };

        }

        case TOGGLE_UNREAD: {
            return {
                ...state,
                chats: state.chats.map((item, index) => {
                    if (item.id === action.payload.chatId) {
                        return {
                            ...item,
                            isUnread: !item.isUnread
                        }
                    }

                    // Leave every other chat unchanged
                    return item;
                })
            };
        }

        default:
            return state;
    }
};
