import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk correctly

const initialState = {
    products: [],
    cart: [],
};

function productReducer(state = initialState.products, action) {
    switch (action.type) {
        case "product/get":
            return action.payload;
        default:
            return state;
    }
}

function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case "cart/add":
            const existingItem = state.find((item) => item.id === action.payload.id);
            return existingItem
                ? state.map((item) => (item.id === action.payload.id ? action.payload : item))
                : [...state, action.payload];

        case "cart/updateQuantity":
            return state.map((item) => (item.id === action.payload.id ? action.payload : item));
        case "cart/remove":
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export function getProducts() {
    return async (dispatch) => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            dispatch({ type: "product/get", payload: data["products"] });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
}

export function addToCart(product) {
    return { type: "cart/add", payload: product };
}

export function updateQuantity(productId, newQuantity) {
    return { type: "cart/updateQuantity", payload: { id: productId, quantity: newQuantity } };
}

export function removeFromCart(productId) {
    return { type: "cart/remove", payload: productId };
}

export default store;
