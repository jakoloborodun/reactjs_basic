import { Component } from 'react';

class Form extends Component {
    state = {
        message: '',
        username: '',
        agreement: false,
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCheckbox = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // фронтовые штучки

        this.doSumthing();
    };

    doSumthing = () => {
        console.log('submit from fe');
    };

    handleKeyDown = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            this.doSumthing();
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <input
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <input
                    name='agreement'
                    type='checkbox'
                    onChange={this.handleCheckbox}
                    checked={this.state.agreement}
                />
                <button>Send</button>
            </form>
        );
    }
}
export { Form };
