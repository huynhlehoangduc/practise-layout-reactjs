import React, { Component } from 'react';

export default class State extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLogin: false,
            userName: 'Duc',
        };
    }

    login = () => {
        this.setState({
            isLogin: true
        });

        console.log(this.state);
    }

    renderHtml = () => {
        return this.state.isLogin ? <p>Hello {this.state.userName}</p> : <button className="btn btn-success" onClick={this.login}>Login</button>;
    }

    render() {
        return (
            <div>
                State <br />
                {this.renderHtml()}
            </div>
        )
    }
}
