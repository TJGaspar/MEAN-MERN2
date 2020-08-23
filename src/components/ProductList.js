import React, { Component } from "react";

class ProductList extends Component {
	render() {
		return (
			<div className="products item-list mb-3">
				{this.props.products.map((item) => (
					<div
						className="card product-name col media py-3 "
						key={item.productName}
					>
						<div className="mr-3"></div>

						<div className="product-info media-body">
							<div className="product-head ">
								<span className="product-text">{item.productName}</span>
							</div>

							<div className="product-name">
								<span className="label-item">Description: </span>
								<span>{item.productDescription}</span>
							</div>
							<section className="container  text-center">
								<img src={item.imageURL} alt="" />
								<div className="card bg-info text-center">
									stock: {item.stockQuantity}
								</div>
								<section className="container d-flex justify-content-center">
									<button
										className="btn btn-md btn-danger mx-1 px-3"
										onClick={() => this.props.decrementItem(item.productName)}
									>
										-
									</button>
									<button
										className="btn btn-md btn-success mx-1 px-3"
										onClick={() => this.props.incrementItem(item.productName)}
									>
										+
									</button>
								</section>
							</section>
						</div>
					</div>
				))}
			</div>
		);
	}
}
export default ProductList;
