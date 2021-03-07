import { Component, createRef } from 'react';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { sendMessage } from '../../redux/actions/messageActions';
import { Message } from './Message';

const styles = {
    root: {
        color: 'black',
    },
};

class _Messages extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        classes: PropTypes.object,
    };

    state = {
        textMessage: '',
    };

    fieldRef = createRef();

    addMessage = (msg = '', author = '') => {
        const chatId = this.props.currentChat;

        const newMessage = msg.length ? msg : this.state.textMessage;
        const currentAuthor = author.length ? author : 'me';

        (msg.length || this.state.textMessage) &&
            this.props.sendMessage(newMessage, currentAuthor, chatId);

        this.setState({
            textMessage: '',
        });
    };

    componentDidUpdate(prevProps) {
        const chatId = this.props.currentChat;

        if (
            prevProps.messages[chatId]?.length !==
                this.props.messages[chatId]?.length &&
            this.props.messages[chatId]?.length % 2 === 1
        ) {
            setTimeout(() => {
                this.addMessage('I am just robot', 'robot');
            }, 1000);
        }

        this.fieldRef.current.scrollTop = this.fieldRef.current.scrollHeight;
    }

    render() {
        const { messages = {}, currentChat: chatId } = this.props;

        return (
            <div className='message-field'>
                {this.props.currentChat && (
                    <>
                        <div className='messages' ref={this.fieldRef}>
                            {messages[chatId] &&
                                messages[chatId].map((item, index) => (
                                    <Message key={index} {...item} />
                                ))}
                        </div>
                        <div className='message-new'>
                            <TextField
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

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators({ sendMessage }, dispatch);

const Messages = compose(
    withStyles(styles),
    connect(mapStateToProps, { sendMessage })
)(_Messages);

export { Messages };
