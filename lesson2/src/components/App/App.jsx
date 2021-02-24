import {Component} from 'react';
import {MessageField} from '../Messages';

class App extends Component {
  render() {
    return (
        <div id='test-id'>
          <h2>Hello from React</h2>

          <MessageField/>
        </div>
    );
  }
}

export {App};
