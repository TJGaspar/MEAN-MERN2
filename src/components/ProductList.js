import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
	render() {
		return (
			<div className="products item-list mb-3">
				{this.props.products.map((item) => (
					<div
						className="card product-name col media py-3 "
						key={item.productName}
					>
						<Product
							productName={item.productName}
							stockQuantity={item.stockQuantity}
							imageURL={item.imageURL}
							productDescription={item.productDescription}
							decrementCart={this.props.decrementCart}
							incrementCart={this.props.incrementCart}
						/>
					</div>
					
				))}
			</div>
		);
	}
}
export default ProductList;
