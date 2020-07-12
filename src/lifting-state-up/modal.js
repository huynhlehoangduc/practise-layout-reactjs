import React, { Component } from "react";
import NumberFormat from 'react-number-format';

export default class Modal extends Component {

	decreaseQty = (product) => {
		this.props.decreaseQty(product);
	}

	increaseQty = (product) => {
		this.props.increaseQty(product);
	}

	deleteProductFromCart = (product) => {
		this.props.deleteProductFromCart(product);
	}

	renderCartDetail = () => {
		const currencySymbol = "VNĐ";

		return this.props.cart.map((product) => (
			<tr key={product.maSP}>
				<td>{product.maSP}</td>
				<td>{product.tenSP}</td>
				<td>
					<img src={product.hinhAnh} width={50} alt="" />
				</td>
				<td>
					<button
						id="btn_decrease_qty"
						className="btn btn-success btn-sm"
						onClick={() => this.decreaseQty(product)}
						disabled={product.quantity === 1}
					>-</button> {product.quantity} <button
						id="btn_increase_qty"
						className="btn btn-success btn-sm"
						onClick={() => this.increaseQty(product)}
					>+</button>
				</td>
				<td><NumberFormat value={product.giaBan} displayType={'text'} thousandSeparator={true} prefix={currencySymbol} /></td>
				<td><NumberFormat value={product.giaBan * product.quantity} displayType={'text'} thousandSeparator={true} prefix={currencySymbol} /></td>
				<td>
					<button
						className="btn btn-danger"
						onClick={() => this.deleteProductFromCart(product)}
					>Delete</button>
				</td>
			</tr>
		));
	};

	render() {
		return (
			<div
				className="modal fade"
				id="modelId"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="modelTitleId"
				aria-hidden="true"
			>
				<div
					className="modal-dialog"
					style={{ maxWidth: "1000px" }}
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Giỏ hàng</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							<table className="table">
								<thead>
									<tr>
										<th>Mã sản phẩm</th>
										<th>tên sản phẩm</th>
										<th>hình ảnh</th>
										<th>số lượng</th>
										<th>đơn giá</th>
										<th>thành tiền</th>
									</tr>
								</thead>
								<tbody>
									{this.renderCartDetail()}
								</tbody>
							</table>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>Close</button>
							<button type="button" className="btn btn-primary"
								data-dismiss="modal">Save</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
