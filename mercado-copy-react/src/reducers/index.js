import {combineReducers} from "redux";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import toastReducer from "./toast";

const allReducers = combineReducers({
    cartProducts: cartReducer,
    wishlistProducts: wishlistReducer,
    toasts: toastReducer
});

export default allReducers
