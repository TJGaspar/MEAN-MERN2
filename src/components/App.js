import "../css/App.css";
import React, { Component } from "react";

import ShoppingCart from "./ShoppingCart";
import ProductsList from "./ProductList";
import { findIndex } from "lodash";

class App extends Component {
	constructor() {
		super();
		this.state = {
			store: "DreamWithUz",
			arrProducts: [],
			shoppingItems: 0,
		};
		this.decrementCart = this.decrementCart.bind(this);
		this.incrementCart = this.incrementCart.bind(this);
	}

	incrementCart(chosenProd) {
		let tempProduct = Object.assign(this.state.arrProducts);
		var SearchIndex = findIndex(tempProduct, { productName: chosenProd });
		tempProduct[SearchIndex].stock = Object.assign(
			this.state.arrProducts[SearchIndex].stockQuantity
		);
		if (tempProduct[SearchIndex].stock > 0) {
			tempProduct[SearchIndex].stockQuantity--;
			this.setState({
				arrProducts: tempProduct,
				shoppingItems: this.state.shoppingItems + 1,
			});
		}
	}

	decrementCart(chosenProd, inicialStock) {
		let tempProduct = Object.assign(this.state.arrProducts);
		var SearchIndex = findIndex(tempProduct, { productName: chosenProd });
		tempProduct[SearchIndex].stock = Object.assign(
			this.state.arrProducts[SearchIndex].stockQuantity
		);
		if (inicialStock > tempProduct[SearchIndex].stock) {
			tempProduct[SearchIndex].stockQuantity++;
			this.setState({
				arrProducts: tempProduct,
				shoppingItems: this.state.shoppingItems - 1,
			});
		}
	}

	componentDidMount() {
		fetch("data.json")
			.then((response) => response.json())
			.then((result) => {
				const prod = result.map((item) => {
					return item;
				});
				this.setState({
					arrProducts: prod,
				});
			});
	}

	render() {
		return (
			<main className="page bg-white" id="petratings">
				<div className="container d-flex justify-content-center">
					<div className="row">
						<div className="col-md-12 bg-white">
							<div className="container ">
								<h2 className="text-center font-weight-bold text-secondary">
									{this.state.store}
								</h2>
								<ShoppingCart
									decrementCart={this.decrementCart}
									incrementCart={this.incrementCart}
									cartproducts={this.state.shopCartProds}
									shoppingItems={this.state.shoppingItems}
								/>
								<ProductsList
									products={this.state.arrProducts}
									decrementCart={this.decrementCart}
									incrementCart={this.incrementCart}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
