import React, { Component } from 'react';
import ProductCard from './ProductCard';

class LaptopList extends Component {
    render() {
        return (
            <div className="container-fluid pt-5 pb-5 bg-light">
                <h1>BEST LAPTOP</h1>
                <div className="row">
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default LaptopList;