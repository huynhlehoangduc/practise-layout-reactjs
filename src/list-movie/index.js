import React, { Component } from 'react';
import listMovie from './data.json';
import MovieCard from './movie-card';

export default class ListMovie extends Component {

    constructor(pros) {
        super(pros);

        this.state = {
            listMovie,
        };

        console.log(this.state.listMovie);
    }

    render() {
        return (
            <div className="container">
                <h1>Danh sách phim</h1>
                <div className="row">
                    {this.state.listMovie.map((movie, index) => (
                        <div className="col-md-4 p-3" key={movie.maPhim}>
                            <MovieCard movie={movie}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
