import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';

const initialState = {
    chats : [
        { name: 'chat 1', id: 1 },
        { name: 'chat 2', id: 2 },
    ],
    messages: {
        1: [{ text: 'Hello from redux', author: 'bot' }],
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
                    id: chatId
                }],
            };

        }

        default:
            return state;
    }
};
