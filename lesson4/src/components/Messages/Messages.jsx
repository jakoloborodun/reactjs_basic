import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Message } from './Message';

import './Message.css';

class Messages extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
    };

    state = {
        messages: {
            0: [
                { text: 'Hello world', author: 'me' },
                { text: 'How are you?', author: 'me' },
            ],
            1: [],
            2: [{ text: 'Hello from 2', author: 'me' }],
        },
        textMessage: '',
    };

    fieldRef = createRef();

    addMessage = () => {
        const { currentChat } = this.props;

        this.setState({
            messages: {
                ...this.state.messages,
                [currentChat]: [
                    ...this.state.messages[currentChat],
                    {
                        text: this.state.textMessage,
                        author: 'me',
                    },
                ],
            },
            textMessage: '',
        });
    };

    componentDidUpdate(_, prevState) {
        const { currentChat } = this.props;

        if (
            prevState.messages[currentChat].length !==
                this.state.messages[currentChat].length &&
            this.state.messages[currentChat].length % 2 === 1
        ) {
            setTimeout(() => {
                this.setState({
                    messages: {
                        ...this.state.messages,
                        [currentChat]: [
                            ...this.state.messages[currentChat],
                            { text: 'I am just robot', author: 'robot' },
                        ],
                    },
                    textMessage: '',
                });
            }, 1000);
        }

        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = [] } = this.state;
        const { currentChat } = this.props;
        console.log('Messages', currentChat);

        return (
            <div className='message-field'>
                {currentChat && (
                    <>
                        <div className='messages' ref={this.fieldRef}>
                            {messages[currentChat] &&
                                messages[currentChat].map((item, index) => (
                                    <Message key={index} {...item} />
                                ))}
                        </div>
                        <div className='message-new'>
                            <TextField
                                className='text-field'
                                value={this.state.textMessage}
                                label='New message'
                                onChange={(event) =>
                                    this.setState({
                                        textMessage: event.target.value,
                                    })
                                }
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        this.addMessage();
                                    }
                                }}
                            />
                            <IconButton
                                color='primary'
                                variant='contained'
                                onClick={this.addMessage}
                            >
                                <Icon>send</Icon>
                            </IconButton>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export { Messages };
