import React, { Component } from 'react';
import ClassProps from './classProps';
import FunctionProps from './functionProps';

export default class Props extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: "Duc",
            lop: "FE42"
        }
    }

    render() {
        const { username, lop } = this.state;

        return (
            <div>
                <h3>Props</h3>
               <ClassProps username={username} lop={lop} /> 
               <ClassProps username="Thu" lop="O Khong" /> 
               {/* <FunctionProps username="Thu" lop="O Khong" />  */}
               <FunctionProps>
                   <div>
                       <h3>Hello CyberSoft</h3>
                       <p>Hoang Duc</p>
                   </div>
               </FunctionProps>
            </div>
        )
    }
}
