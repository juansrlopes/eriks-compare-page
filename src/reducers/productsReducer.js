import { FETCH_PRODUCTS } from "../actions/types";
import { FETCH_PRODUCTS_FROM_LOCALSTORAGE } from "../actions/types";
import { DELETE_PRODUCT } from "../actions/types";

const inititalState = {
	data: []
};

// Products reducer
const products = (state = inititalState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				data: payload
			};
		case FETCH_PRODUCTS_FROM_LOCALSTORAGE:
			return {
				...state,
				data: payload
			};
		case DELETE_PRODUCT:
			return {
				...state
			};
		default:
			return state;
	}
};

export default products;
