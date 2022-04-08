import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools }  from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const initialStore = {
    cartReducer : {
        cartItems : JSON.parse(localStorage.getItem('cartItems')) ??[]
    }
}
export const store = createStore(rootReducer, initialStore, composeEnhancers());