import React, { Component } from 'react';

export default class ChitietSanpham extends Component {
    render() {
        return (
            <div className="row">
					<div className="col-sm-5">
						<img className="img-fluid" src={this.props.detailProduct.hinhAnh} alt="" />
						<h3 style={{ textAlign: "center" }}>{this.props.detailProduct.tenSP}</h3>
					</div>
					<div className="col-sm-7">
						<h3>Thông số kỹ thuật</h3>
						<table className="table">
							<tbody>
								<tr>
									<td>Màn hình</td>
									<td>{this.props.detailProduct.manHinh}</td>
								</tr>
								<tr>
									<td>Hệ điều hành</td>
									<td>{this.props.detailProduct.heDieuHanh}</td>
								</tr>
								<tr>
									<td>Camera trước</td>
									<td>{this.props.detailProduct.cameraTruoc}</td>
								</tr>
								<tr>
									<td>Camera sau</td>
									<td>{this.props.detailProduct.cameraSau}</td>
								</tr>
								<tr>
									<td>RAM</td>
									<td>{this.props.detailProduct.ram}</td>
								</tr>
								<tr>
									<td>ROM</td>
									<td>{this.props.detailProduct.rom}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
        )
    }
}
