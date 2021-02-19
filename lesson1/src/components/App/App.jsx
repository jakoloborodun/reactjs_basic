import React from 'react';

import { Messages } from '../Messages';

const App = () => {
  // return React.createElement('div', {id: 'test-id'}, 'Hello from React');
  // return <div id='test-id'>Hello from React</div>;

  return (
      <div id='test-id'>
        <h3>Hello from React</h3>
        <Messages messages={['First message', 'Second message', 'Third message']} />
        {/* <Message text='My other message' /> */}
      </div>
  );
};

// export default App;
export { App };
