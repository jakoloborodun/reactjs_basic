export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (text, author, creation, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        creation,
        chatId,
    },
});
