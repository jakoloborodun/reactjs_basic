import React from 'react';
import {Header} from '../Header';
import {ChatList} from '../ChatList';
import {MessageField} from '../Messages';

import './Layout.css';

function Layout() {

  return (
      <div className="layout">
        <Header className="header" title='Test React GB'/>
        <div className="layout-inner" style={{width: '100%', height: '500px', display: 'flex'}}>
          <div className="layout-inner-left">
            <ChatList className="chat-list"/>
          </div>
          <div className="layout-inner-right">
            <MessageField/>
          </div>
        </div>
      </div>
  );

}

export { Layout };
