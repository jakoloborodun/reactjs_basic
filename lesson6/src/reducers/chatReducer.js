import { SEND_MESSAGE } from '../actions/messageAction';
import { ADD_CHAT } from '../actions/chatActions';

const initialStore = {
    chats: ['chat 1', 'chat 2', 'chat 3'],
    messages: {
        0: [
            { text: 'Hello world', author: 'me' },
            { text: 'How are you?', author: 'me' },
        ],
        1: [{ text: "Hey! I'm using second chat!", author: 'me' }],
        2: [{ text: "Hey! I'm using third chat!", author: 'me' }],
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...store,
                chats: [...store.chats, action.payload.title],
            };
        }
        case SEND_MESSAGE: {
            const { chatId, text, author } = action.payload;
            const prevMessages = store.messages[chatId] || [];

            return {
                ...store,
                messages: {
                    ...store.messages,
                    [chatId]: [...prevMessages, { text, author }],
                },
            };
        }
        default:
            return store;
    }
}
