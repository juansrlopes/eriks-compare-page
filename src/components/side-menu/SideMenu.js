import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./SideMenu.scss";

class SideMenu extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<div className="side-menu">
				<div className="selection-wrapper">
					<h3>Je Selectie</h3>
					{data.map(product => {
						return (
							<div key={product.sku} className="selection-item">
								<i className="fa fa-check-square" aria-hidden="true"></i>{" "}
								<span>{product.name}</span>
							</div>
						);
					})}
				</div>
				<ul className="info-list side-menu-list">
					<li className="info-list-item">Keumerk</li>
					<li className="info-list-item">Materiaal</li>
					<li className="info-list-item">Hardheid</li>
					<li className="info-list-item">Snoerdikte (mm)</li>
					<li className="info-list-item">Kleur</li>
					<li className="info-list-item">Toepassing</li>
					<li className="info-list-item">Temperatuurgebied (°C)</li>
				</ul>
			</div>
		);
	}
}

SideMenu.prototypes = {
	data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	data: state.products.data
});

export default connect(mapStateToProps)(SideMenu);
