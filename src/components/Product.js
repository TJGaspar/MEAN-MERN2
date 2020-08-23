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
	//className="card product-name col media py-3 text-uppercase "
	render() {
		return (
			<div className="card p-3">
				<span className="product-name text-uppercase">
					{this.props.productName}
				</span>

				<div className="product-description">
					<span>Description: </span>
					<span>{this.props.productDescription}</span>
				</div>
				<section>
					<img className=" d-flex container" src={this.props.imageURL} alt="" />
					<div className="card bg-info text-center">
						stock: {this.props.stockQuantity}
					</div>
					<section className="container d-flex justify-content-center">
						<button
							className="btn btn-md btn-danger m-1 px-3"
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
							className="btn btn-md btn-success m-1 px-3"
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
		);
	}
}
export default Product;
