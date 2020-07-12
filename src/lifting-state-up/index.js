import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import ListProductData from './data.json';
import ChitietSanpham from './chitiet-sanpham'

export default class LiftingStateUpCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ListProductData,
			detailProduct: ListProductData[0],
			cart: []
		};
	}

	getProductDetail = (product) => {
		this.setState({
			detailProduct: product
		});
	}

	pushToCart = (product) => {
		let cart = [...this.state.cart],
			index = cart.findIndex(productCard => productCard.maSP === product.maSP);

		if (index !== -1) {
			cart[index].quantity++;
		}
		else {
			product.quantity = 1;
			cart.push(product);
		}

		this.setState({
			cart
		}, 
			() => {
				console.log(cart);
			}
		);
	}

	getTotalIncart = () => {
		return this.state.cart.reduce((total, product) => total + product.quantity, 0);
	}

	decreaseQty = (product) => {
		let {cart} = this.state,
			index = cart.findIndex(productCart => productCart.maSP === product.maSP);

		cart[index].quantity --;

		this.setState({
			cart
		});
	}

	increaseQty = (product) => {
		let {cart} = this.state,
			index = cart.findIndex(productCart => productCart.maSP === product.maSP);

		cart[index].quantity ++;

		this.setState({
			cart
		});
	}

	deleteProductFromCart = (product) => {
		let {cart} = this.state,
			index = cart.findIndex(productCart => productCart.maSP === product.maSP);
		
		cart.splice(index, 1);

		this.setState({
			cart
		});
	}

	render() {
		return (
			<div>
				<h3 className="title">Bài tập giỏ hàng</h3>
				<div className="container">
					<button
						className="btn btn-danger"
						data-toggle="modal"
						data-target="#modelId"
					>
						Giỏ hàng ({this.getTotalIncart()})
          			</button>
				</div>
				<DanhSachSanPham ListProductData={this.state.ListProductData} ProductDetail={this.getProductDetail} pushToCart={this.pushToCart} />
				<Modal 
					cart={this.state.cart} 
					decreaseQty={this.decreaseQty} 
					increaseQty={this.increaseQty}
					deleteProductFromCart={this.deleteProductFromCart}
					/>
				<ChitietSanpham detailProduct={this.state.detailProduct} />
				
			</div>
		);
	}
}
