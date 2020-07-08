import React, { Component } from 'react';
import ProductCard from './ProductCard';

class SmartPhoneList extends Component {
    render() {
        return (
            <div className="dark-section container-fluid pt-5 pb-5">
                <h1>BEST SMARTPHONE</h1>
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

export default SmartPhoneList;