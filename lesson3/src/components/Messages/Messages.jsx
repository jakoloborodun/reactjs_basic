import { Component, Fragment } from 'react';

import { Message } from './Message';

class Messages extends Component {
    state = {
        messages: [
            { text: 'Hello world', author: 'me' },
            { text: 'How are you?', author: 'me' },
        ],
    };

    addMessage = () => {
        this.setState({
            messages: [
                ...this.state.messages,
                { text: 'Whassap?', author: 'me' },
            ],
        });
    };

    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        { text: 'I am just robot', author: 'robot' },
                    ],
                });
            }, 1000);
        }
    }

    render() {
        const { messages = [] } = this.state;

        return (
            <Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message key={index} {...item} />
                    ))}
                </div>

                <button onClick={this.addMessage}>Send message</button>
            </Fragment>
        );
    }
}

export { Messages };
