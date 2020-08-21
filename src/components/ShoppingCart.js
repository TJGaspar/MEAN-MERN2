import React, { Component } from "react";
import { GiShoppingCart } from "react-icons/gi";
class ShoppingCart extends Component {
	render() {
		return (
				<div className = "shopping-cart"> Shopping cart <GiShoppingCart /> </div>
				 
		);
	}
}
export default ShoppingCart;
