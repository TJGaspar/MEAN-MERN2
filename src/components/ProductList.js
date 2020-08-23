import React, { Component } from "react";
import Product from "./Product";

// function StockColor(stockQT) {
// 	switch (true) {
// 		case (stockQT<1):
// 			console.log("aqui1");
// 		return "className = 0";
// 		case (1 < stockQT < 6):
// 			console.log("aqui2");
// 		return "className = <1";
// 		case (5< stockQT < 16):
// 			console.log("aqui3");
// 		return "className = <6";
// 		case (stockQT>15):
// 			console.log("aqui4");
// 		return "className = <16";
// 	}
// }


class ProductList extends Component {
	
	render() {
		return (
			<div className="products item-list mb-3">
				{this.props.products.map((item) => (
					<div key={item.productName} >
						
						<Product
							productName={item.productName}
							stockQuantity={item.stockQuantity}
							//stockColor={StockColor(item.stockQuantity)}
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
