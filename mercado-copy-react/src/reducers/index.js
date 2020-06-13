import {combineReducers} from "redux";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";

const allReducers = combineReducers({
    cartProducts: cartReducer,
    wishlistProducts: wishlistReducer,
});

export default allReducers
