import React, { Component } from 'react';

export default class ListKey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listProduct: [
                { id: 1, name: "Iphone X", price: 20000 },
                { id: 2, name: "Iphone XS", price: 20000 },
                { id: 3, name: "Iphone XS Max", price: 20000 },
                { id: 4, name: "Iphone Xr", price: 20000 },
            ],
        };
    }

    renderTable() {
        const { listProduct } = this.state;

        let abc = listProduct.map((product, index) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });

        console.log(abc);

        return abc;
    }

    render() {
        return (
            <div>
                <h3 className="text-danger">ListKeys</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id: </th>
                            <th>Name: </th>
                            <th>Price: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
