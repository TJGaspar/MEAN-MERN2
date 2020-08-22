import React, { Component } from "react";
import { GiShoppingCart } from "react-icons/gi";
class ShoppingCart extends Component {
	render() {
		return (
			<div className="shopping-cart">
				{" "}
				Shopping cart <GiShoppingCart />
				<button className="btn btn-md btn-info">
		{0} items
				</button>
			</div>
		);
	}
}
export default ShoppingCart;
