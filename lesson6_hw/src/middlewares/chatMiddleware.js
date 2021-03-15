import { toggleUnread } from '../actions/chatActions';
import { LOCATION_CHANGE } from 'connected-react-router'

export const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      const chats = store.getState().chat.chats;

      let pathArray = action.payload.location.pathname.split('/');
      const currentChatId = pathArray[pathArray.length - 1];

      let currentChat = chats.find(chat => {
        return chat.id === parseInt(currentChatId, 10)
      });

      if (currentChat?.isUnread) {
        setTimeout(() => {
          store.dispatch(
              toggleUnread(currentChat.id)
          );
        }, 500);

      }
    }
  }

  return next(action);
};
