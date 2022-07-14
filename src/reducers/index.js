import { combineReducers } from "redux";
import cartReducer from "./cartReducer"
import productReducer from "./productReducer";

const reducers = combineReducers({
    cart: cartReducer,
    products: productReducer,
})

export default reducers