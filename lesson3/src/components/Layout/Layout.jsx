import React from 'react';
import {Header} from '../Header';
import {ChatList} from '../ChatList';
import {MessageField} from '../Messages';

function Layout() {

  return (
      <div className="layout">
        <Header className="header" title='Test React GB'/>
        <div className="layout-inner" style={{width: '100%', display: 'flex'}}>
          <div className="layout-inner-left"
               style={{backgroundColor: '#f5f5f5', flexShrink: '0'}}>
            <ChatList className="chat-list"/>
          </div>
          <div className="layout-inner-right" style={{flex: '1 1 0'}}>
            <MessageField/>
          </div>
        </div>
      </div>
  );

}

export { Layout };
