import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isCartOpenGb: false,
    cartItemsGb: []
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                isCartOpenGb: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItemsGb: payload,
            }
        default:
            return state;
    }
};