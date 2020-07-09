import React, { Component } from 'react'

export default class Car extends Component {

    constructor (pros) {
        super (pros);

        this.state = {
            cars : [
                {id: 1, color: 'red', path: './img/imgRedCar.jpg'},
                {id: 2, color: 'black', path: './img/imgBlackCar.jpg'},
                {id: 3, color: 'silver', path: './img/imgSilverCar.jpg'},
            ],
        };

        this.state.activeCar = this.state.cars[0];
    }

    renderImage () {
        return <img src={this.state.activeCar.path} className="img-fluid" alt="..."/>;
    }

    chooseCar (color) {
        this.setState({
            activeCar: this.state.cars.filter(car => car.color === color )[0]
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {this.renderImage()}
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger m-2" onClick={()=>this.chooseCar('red')}>Red</button>
                        <button className="btn btn-secondary m-2" onClick={()=>this.chooseCar('silver')}>Silver</button>
                        <button className="btn btn-dark m-2" onClick={()=>this.chooseCar('black')}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
