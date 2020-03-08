import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import SideMenu from "../side-menu/SideMenu";
import ProductList from "../product-list/ProductList";
import { connect } from "react-redux";
import {
	fetchProducts,
	fetchProductsFromLocalStorage
} from "../../actions/productsAction";
import "./Products.scss";

class Products extends React.Component {
	componentDidMount() {
		// Getting products array from local storage
		const checkLocalStorage = localStorage.getItem("products");

		// Check if item exist in the local storage
		if (!checkLocalStorage) {
			// If products don't exist then query call action to query for data
			this.props.fetchProducts();
		} else {
			// If products exist in local storage then call action to populate state with it
			this.props.fetchProductsFromLocalStorage();
		}
	}
	render() {
		const { data } = this.props;
		// Check if data is null, if so render message div
		if (data !== null) {
			return (
				<div className="main">
					<Header />
					<div className="product-wrapper">
						<div className="product-inner left">
							<SideMenu />
						</div>
						<div className="product-inner right">
							<ProductList />
						</div>
					</div>
				</div>
			);
		} else {
			return <div className="fetching-message">Fetching products...</div>;
		}
	}
}

Products.prototypes = {
	data: PropTypes.array.isRequired,
	fetchProducts: PropTypes.func.isRequired,
	fetchProductsFromLocalStorage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	data: state.products.data
});

export default connect(mapStateToProps, {
	fetchProducts,
	fetchProductsFromLocalStorage
})(Products);
