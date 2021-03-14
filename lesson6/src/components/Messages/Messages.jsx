import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField, Icon, IconButton } from '@material-ui/core';

import { Message } from './Message';
import { sendMessage } from '../../actions/messageAction';

class _Messages extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        textMessage: '',
    };

    fieldRef = createRef();
    inputRef = createRef();

    addMessage = (msg = '', author = '') => {
        const { currentChat } = this.props;
        const message = msg.length ? msg : this.state.textMessage;
        const currentAuthor = author.length ? author : 'me';
        message && this.props.sendMessage(message, currentAuthor, currentChat);

        !author.length &&
            this.setState({
                textMessage: '',
            });

        this.inputRef.current.focus();
    };

    componentDidUpdate() {
        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = {}, currentChat: chatId } = this.props;
        // const chatId = this.props.currentChat;

        return (
            <div className='message-field'>
                {chatId && (
                    <>
                        <div className='messages' ref={this.fieldRef}>
                            {messages[chatId] &&
                                messages[chatId].map((item, index) => (
                                    <Message key={index} {...item} />
                                ))}
                        </div>
                        <div className='message-new'>
                            <TextField
                                inputRef={this.inputRef}
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

const mapStateToProps = (state) => ({
    messages: state.chat.messages,
});

const Messages = connect(mapStateToProps, { sendMessage })(_Messages);

export { Messages };
