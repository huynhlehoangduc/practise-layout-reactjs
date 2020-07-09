import React, { Component } from 'react';

export default class MovieCard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            movie : props.movie
        }; 
    }
    
    render() {
        return (
            <div className="card  bg-light" style={{ width: "18rem" }}>
                <img src={this.state.movie.hinhAnh} className="card-img-top" alt="..." height="300px" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.movie.tenPhim}</h5>
                    <p className="card-text" style={{ height: "5rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {this.state.movie.moTa}</p>
                </div>
            </div>
        )
    }
}
