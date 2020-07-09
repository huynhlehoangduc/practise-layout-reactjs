import React, { Component } from 'react';

export default class HandlingEvent extends Component {
    helloWorld () {
        console.log('Hello world');
    }

    helloWorldWithParam (e, age) {
        console.log(e);
        console.log(age);
    }

    render() {
        return (
            <div>
                <h3 className="text-danger">HandlingEvent</h3>
                <button className="btn btn-primary" onClick={this.helloWorld}>Bấm nút</button>
                <button className="btn btn-success ml-2" onClick={()=>this.helloWorldWithParam(this, 18)}>Bấm nút Params</button>
            </div>
        )
    }
}
