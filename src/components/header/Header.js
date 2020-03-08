import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productsAction";
import "./Header.scss";

class Header extends React.Component {
	// Call action to populate state with complete data
	fetchAllProducts = () => {
		this.props.fetchProducts();
	};
	render() {
		const { data } = this.props;
		return (
			<div className="top-box">
				<h2>{data.length} producten vergelijnken</h2>
				<button
					className="btn-load-all"
					onClick={() => this.fetchAllProducts()}
				>
					Laad alle producten
				</button>
			</div>
		);
	}
}

Header.prototypes = {
	data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	data: state.products.data
});

export default connect(mapStateToProps, { fetchProducts })(Header);
