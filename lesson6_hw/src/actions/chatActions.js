export const ADD_CHAT = '@@chat/ADD_CHAT';
export const TOGGLE_UNREAD = '@@chat/TOGGLE_UNREAD';

export const addChat = (chatName) => ({
  type: ADD_CHAT,
  payload: {
    chatName,
  },
});

export const toggleUnread = (chatId) => ({
  type: TOGGLE_UNREAD,
  payload: {
    chatId,
  },
});
