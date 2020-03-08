import { FETCH_PRODUCTS } from "./types";
import { FETCH_PRODUCTS_FROM_LOCALSTORAGE } from "./types";
import { DELETE_PRODUCT } from "./types";

// Retrieving products from local storage to use in the actions
function retrieveAndParseDataFromLocalStorage() {
	const retrievedDataFromLocalStorage = localStorage.getItem("products");
	const parseDataFromLocalStorage = JSON.parse(retrievedDataFromLocalStorage);
	return parseDataFromLocalStorage;
}

// Fetch product action
export const fetchProducts = () => dispatch => {
	fetch("http://5c35e7f96fc11c0014d32fcd.mockapi.io/compare/products")
		.then(res => res.json())
		.then(data => {
			const dataInAlphabeticalOrder = data.products.sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			// Stringify products from local storage to make it into an array
			localStorage.setItem("products", JSON.stringify(dataInAlphabeticalOrder));
			dispatch({
				type: FETCH_PRODUCTS,
				payload: retrieveAndParseDataFromLocalStorage()
			});
		});
};

// Fetch from local storage action
export const fetchProductsFromLocalStorage = () => dispatch => {
	dispatch({
		type: FETCH_PRODUCTS_FROM_LOCALSTORAGE,
		payload: retrieveAndParseDataFromLocalStorage()
	});
};

// Delete single product from local storage action
export const deleteProduct = sku => dispatch => {
	const filteredData = retrieveAndParseDataFromLocalStorage().filter(
		product => product.sku !== sku
	);
	localStorage.setItem("products", JSON.stringify(filteredData));
	dispatch({
		type: DELETE_PRODUCT
	});
};
