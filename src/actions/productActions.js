import { fetch } from "../api";

const request_product = () => ({ type: "request_product" });

export const getProducts = (page) => async (dispatch) => {
    dispatch(request_product());
    const response = await fetch("https://snaker-city.com/products");
    response.page = page || 1;

    return dispatch({ type: "set_products", payload: response });
};

export const getProduct = (id) => async (dispatch) => {
    dispatch(request_product());
    const response = await fetch("https://snaker-city.com/products");
    const product = response.data.find((item) => item.id === id);

    return dispatch({ type: "set_product", payload: product });
};
