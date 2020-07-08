import React, { Component } from 'react';
import slide_1 from './../resources/img/slide_1.jpg';

class ProductCard extends Component {
    render() {
        return (
            <div className="card  bg-light" style={{ width: "18rem" }}>
                <img src={slide_1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                    <a href="#123" className="btn btn-primary">Detail</a>
                    <a href="#123" className="btn btn-danger ml-1">Card</a>
                </div>
            </div>
        );
    }
}

export default ProductCard;