import { SEND_MESSAGE, sendMessage } from '../actions/messageAction';

export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.author === 'me') {
                setTimeout(() => {
                    store.dispatch(
                        sendMessage(
                            'I am just robot',
                            'robot',
                            action.payload.chatId
                        )
                    );
                }, 1000);
            }
        }
    }

    return next(action);
};
