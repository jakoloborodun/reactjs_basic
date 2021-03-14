import { SEND_MESSAGE, sendMessage } from '../actions/messageActions';

export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.author === store.getState().profile.profileName) {
                setTimeout(() => {
                    store.dispatch(
                        sendMessage(
                            'I am just robot',
                            'Bot',
                            new Date().toLocaleString(),
                            action.payload.chatId
                        )
                    );
                }, 2000);
            }
            else {
                // highlight chat.
                let router = store.getState().router;
                if (router.location.pathname !== '/chat/' + action.payload.chatId) {
                    console.log('let\'s highlight this chat!');

                }
            }
        }
    }

    return next(action);
};
