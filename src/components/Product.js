import React, { Component } from "react";

class Product extends Component {
	constructor() {
		super();
		this.state = {
			productName: "",
			stockQuantity: 0,
		};
	}

	componentDidMount() {
		this.setState({
			productName: this.props.productName,
			stockQuantity: this.props.stockQuantity,
		});
	}

	render() {
		return (
			<div
				className="card product-name col media py-3 "
				key={this.props.productName}
			>
				<div className="mr-3"></div>

				<div className="product-info media-body">
					<div className="product-head ">
						<span className="product-text">{this.props.productName}</span>
					</div>

					<div className="product-name">
						<span className="label-item">Description: </span>
						<span>{this.props.productDescription}</span>
					</div>
					<section className="container  text-center">
						<img src={this.props.imageURL} alt="" />
						<div className="card bg-info text-center">
							stock: {this.props.stockQuantity}
						</div>
						<section className="container d-flex justify-content-center">
							<button
								className="btn btn-md btn-danger mx-1 px-3"
								onClick={() =>
									this.props.decrementCart(
										this.state.productName,
										this.state.stockQuantity
									)
								}
							>
								-
							</button>
							<button
								className="btn btn-md btn-success mx-1 px-3"
								onClick={() =>
									this.props.incrementCart(
										this.state.productName,
										this.state.stockQuantity
									)
								}
							>
								+
							</button>
						</section>
					</section>
				</div>
			</div>
		);
	}
}
export default Product;
