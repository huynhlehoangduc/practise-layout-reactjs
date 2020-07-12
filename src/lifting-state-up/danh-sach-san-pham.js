import React, { Component } from "react";
import SanPham from './san-pham';

export default class DanhSachSanPham extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ListProductData: props.ListProductData,
		};
	}

	handleDetailProduct = (product) => {
		this.props.ProductDetail(product);
	}

	pushToCart = (product) => {
		this.props.pushToCart(product);
	}

	renderListProduct() {
		return this.state.ListProductData.map((product) => (<SanPham key={product.maSP} product={product} detailProduct={this.handleDetailProduct} pushToCart={this.pushToCart} />)
		);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					{this.renderListProduct()}
				</div>
			</div>
		);
	}
}
