import logger from 'redux-logger';

import { messagesMiddleware } from './messagesMiddleware';
import { chatMiddleware } from './chatMiddleware';

export default [logger, messagesMiddleware, chatMiddleware];
