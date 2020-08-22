import React, { Component } from "react";

class ProductList extends Component {
	render() {
		return (
			<div className="products item-list mb-3">
				{this.props.products.map((item) => (
					<div className="product-name col media py-3" key={item.productName}>
						<div className="mr-3"></div>

						<div className="product-info media-body">
							<div className="product-head ">
								<span className="product-text">{item.productName}</span>
							</div>

							<div className="product-name">
								<span className="label-item">Description: </span>
								<span>{item.description}</span>
							</div>
							<img src={item.image} alt="" />
							<button className="btn btn-md btn-info">
								stock: {item.stock}
							</button>
							<div>
								<button
									className="btn btn-md btn-danger"
									onClick={() => this.props.decrementItem(item.productName)}
								>
									-
								</button>
								<button
									className="btn btn-md btn-success"
									onClick={() => this.props.incrementItem(item.productName)}
								>
									+
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
export default ProductList;
