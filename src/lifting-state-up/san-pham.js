import React, { Component } from "react";

export default class SanPham extends Component {

	handleDetail = () => {
		this.props.detailProduct(this.props.product);
	};

	pushToCart = () => {
		this.props.pushToCart(this.props.product);
	};

	render() {
		return (
			<div className="col-sm-4">
				<div className="card">
					<img className="card-img-top" src={this.props.product.hinhAnh} alt="" />
					<div className="card-body">
						<h4 className="card-title">{this.props.product.tenSP}</h4>
						<button className="btn btn-success" onClick={this.handleDetail}>Chi tiết</button>
						<button className="btn btn-danger"
						 onClick={this.pushToCart}
						>Thêm giỏ hàng</button>
					</div>
				</div>
			</div>
		);
	}
}
