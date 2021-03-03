import { Component, createRef } from 'react';

class UncontrolledForm extends Component {
    userRef = createRef(); // {current: null}
    messageRef = createRef(); // useRef()

    handleSend = () => {
        const userName = this.userRef.current.value;
        const message = this.messageRef.current.value;

        console.log({ userName, message });
        // в стейт messages добавить сообщение из поля ввода
        // и очистить поле ввода
    };

    componentDidMount() {
        this.userRef.current.focus();
    }

    render() {
        return (
            <div>
                <input name='username' ref={this.userRef} />
                <input name='message' ref={this.messageRef} />
                <button onClick={this.handleSend}>Send</button>
            </div>
        );
    }
}
export { UncontrolledForm };
