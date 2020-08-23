import React, { Component } from "react";
import { GiShoppingCart } from "react-icons/gi";

class ShoppingCart extends Component {
	render() {
		return (
			<section className=" container d-flex justify-content-center my-2">
				<div className="shopping-cart px-1 align-bottom"> Shopping cart <GiShoppingCart /></div>
				
				<div className="card bg-info text-center px-2">
		{this.props.shoppingItems} items
				</div>
			</section>
		);
	}
}
export default ShoppingCart;
