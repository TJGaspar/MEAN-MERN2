import "../css/App.css";
import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
// import AddAppointments from "./AddAppointments";
import ProductsList from "./ProductList";
// import { result } from "lodash";

class App extends Component {
	constructor() {
		super();
		this.state = {
			store: "StoreName",
			arrProducts: [],
			// lastIndex: 0,
		};
	}
	componentDidMount() {
		fetch("data.json")
			.then((response) => response.json())
			.then((result) => {
				const prod = result.map((item) => {
					// item.uniq = this.state.lastIndex;
					// this.setState({ lastIndex: this.state.lastIndex + 1 });
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
				<div className="container">
					<div className="row">
						<div className="col-md-12 bg-white">
							<div className="container">
								{this.state.store}

								<ShoppingCart />
								
								{/* <AddAppointments /> */}
								<ProductsList products={this.state.arrProducts} />
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
