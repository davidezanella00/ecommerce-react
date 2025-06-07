import { AnyAction } from "redux-saga";
import { CartItem } from "./cart.types.ts";
import { setCartItemsGb, setIsCartOpenGb } from "./cart.action.ts";

export type CartState = {
    readonly isCartOpenGb: boolean;
    readonly cartItemsGb: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
    isCartOpenGb: false,
    cartItemsGb: []
};

export const cartReducer = (
    state = CART_INITIAL_STATE,
    action = {} as AnyAction
): CartState => {

    if (setIsCartOpenGb.match(action)) {
        return {
            ...state,
            isCartOpenGb: action.payload
        };
    }
    if (setCartItemsGb.match(action)) {
        return {
            ...state,
            cartItemsGb: action.payload,
        };
    }
    return state;
};