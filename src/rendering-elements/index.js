import React, { Component } from 'react';

export default class RenderingElements extends Component {
    userName = 'Cybersoft';
    class = 'FE 42';

    returnInfo = () => {
        return <p>UserName: {this.userName} - Lop: {this.class}</p>;
    };

    render() {
        return (
            <div>
                <h3 className="text-danger">RenderingElements</h3>
                <p>UserName: {this.userName}</p>
                <p>Class: {this.class}</p>
                {this.returnInfo()}
            </div>
        )
    }
}
