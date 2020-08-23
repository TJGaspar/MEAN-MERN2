import React, { Component } from "react";
import { GiShoppingCart } from "react-icons/gi";

class ShoppingCart extends Component {
	render() {
		return (
			<section className=" container d-flex justify-content-center">
				<div className="shopping-cart"> Shopping cart <GiShoppingCart /></div>
				
				<button className="btn btn-md btn-info ">
		{this.props.shoppingItems} items
				</button>
			</section>
		);
	}
}
export default ShoppingCart;
