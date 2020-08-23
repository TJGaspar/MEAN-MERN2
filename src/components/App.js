import "../css/App.css";
import React, { Component } from "react";
//import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import ProductsList from "./ProductList";
import { findIndex } from "lodash";


class App extends Component {
	constructor() {
		super();
		this.state = {
			store: "DreamWithUz",
			arrProducts: [],
			shopCartProds: [1, 2, 3],
		};
		this.decrementItem = this.decrementItem.bind(this);
		this.incrementItem = this.incrementItem.bind(this);
	}

	incrementItem(chosenProd) {
		let tempProduct = Object.assign(this.state.arrProducts);
		var SearchIndex = findIndex(tempProduct, { productName: chosenProd });
		tempProduct[SearchIndex].stock = Object.assign(
			this.state.arrProducts[SearchIndex].stock
		);
		tempProduct[SearchIndex].stock++;
		console.log(this.shopCartProds);
		console.log(tempProduct);
		this.setState({
			arrProducts: tempProduct,
		});
	}

	decrementItem(chosenProd) {
		let tempProduct = Object.assign(this.state.arrProducts);
		console.log(tempProduct);
		var SearchIndex = findIndex(tempProduct, { productName: chosenProd });
		tempProduct[SearchIndex].stock = Object.assign(
			this.state.arrProducts[SearchIndex].stock
		);
		tempProduct[SearchIndex].stock--;

		console.log("///temp" + tempProduct[SearchIndex].stock);

		this.setState({
			arrProducts: tempProduct,
		});
	}

	componentDidMount() {
		fetch("data.json")
			.then((response) => response.json())
			.then((result) => {
				const prod = result.map((item) => {
					console.log(item.stock);

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
								<h2
									className="text-center font-weight-bold .
								text-secondary"
								>
									{this.state.store}
								</h2>

								<ShoppingCart
									decrementItem={this.decrementItem}
									incrementItem={this.incrementItem}
									
								/>
								<ProductsList
									products={this.state.arrProducts}
									decrementItem={this.decrementItem}
									incrementItem={this.incrementItem}
								/>
								{/* <Product
									decrementItem={this.decrementItem}
									incrementItem={this.incrementItem}
									products={this.state.arrProducts}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
