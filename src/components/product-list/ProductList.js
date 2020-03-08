import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	fetchProductsFromLocalStorage,
	deleteProduct
} from "../../actions/productsAction";
import "./ProductList.scss";

class ProductList extends React.Component {
	// Call action do remove product from localstorage based on sku id
	removeProduct(sku) {
		if (this.props.data.length > 1) {
			this.props.deleteProduct(sku);
			this.props.fetchProductsFromLocalStorage();
		}
	}
	render() {
		const { data } = this.props;
		return (
			<div className="product-list-wrapper">
				{data.map(product => {
					return (
						<div className="product-list-box" key={product.sku}>
							<div className="box-header">
								{data.length > 1 && (
									<button
										className="hide-product"
										onClick={() => this.removeProduct(product.sku)}
									>
										<i className="fa fa-trash" aria-hidden="true"></i>
									</button>
								)}

								<img
									src={product.productImage}
									className="box-header-image"
									alt={product.name}
								/>
								<p className="product-name">{product.name}</p>
								<p className="product-price">{product.salePrice}</p>
								<p className="product-extra">perk stuk / excl btw</p>
							</div>
							<ul className="info-list">
								<li className="info-list-item">
									<Badges badges={product.badges} />
								</li>
								<li className="info-list-item item-bold">
									<div className="mobile-info">Materiaal: </div>
									{product.Materiaal}
								</li>
								<li className="info-list-item item-bold">
									<div className="mobile-info">Hardheid: </div>
									{product.Hardheid}
								</li>
								<li className="info-list-item item-bold">
									<div className="mobile-info">Snoerdikte: </div>
									{product.Snoerdikte}
								</li>
								<li className="info-list-item item-bold">
									<div className="mobile-info">Kleur: </div>
									{product.Kleur}
								</li>
								<li className="info-list-item item-bold">
									<div className="mobile-info">Toepassing: </div>
									{product.Toepassing}
								</li>
								<li className="info-list-item item-bold">
									<div className="mobile-info">Temperatuurgebied: </div>
									{product.Temperatuurgebied}
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		);
	}
}

const Badges = props => {
	const { badges } = props;
	const splitBadges = badges.split("|");
	return (
		<div className="badges">
			{splitBadges.map((splitBadgesItem, index) => (
				<img
					className="badge-image"
					src={splitBadgesItem}
					alt="Badges"
					key={index}
				/>
			))}
		</div>
	);
};

ProductList.prototypes = {
	data: PropTypes.array.isRequired,
	fetchProductsFromLocalStorage: PropTypes.func.isRequired,
	deleteProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	data: state.products.data
});

export default connect(mapStateToProps, {
	fetchProductsFromLocalStorage,
	deleteProduct
})(ProductList);
