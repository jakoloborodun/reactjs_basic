import { Component } from 'react';
import { Messages } from '../Messages';

class App extends Component {
    render() {
        return (
            <div id='test-id'>
                <h2>Hello from React</h2>

                <Messages />
            </div>
        );
    }
}

export { App };
