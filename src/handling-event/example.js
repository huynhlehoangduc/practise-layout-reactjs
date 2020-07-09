import React, { Component } from 'react';

export default class HandleEventExample extends Component {
    isLogin = false;
    userName = 'Duc';

    login = () => {
        this.isLogin = true;
        console.log(this.isLogin);
    }

    renderHtml = () => {
        return this.isLogin ? <p>Hello {this.userName}</p> : <button className="btn btn-success" onClick={this.login}>Login</button>;
    }

    render() {
        return (
            <div>
                HandleEventExample <br />
                {this.renderHtml()}
            </div>
        )
    }
}
