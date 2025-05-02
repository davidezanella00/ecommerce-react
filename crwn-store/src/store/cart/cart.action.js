import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id;
    });

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const removeCartItem = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToDecrease.id;
    });

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrease.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToDecrease.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const setCartItemsGb = (newCartItems) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpenGb = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean);
}

export const addItemToCartGb = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItemsGb(newCartItems);
};

export const clearItemFromCartGb = (cartItems, cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItemsGb(newCartItems);
};

export const removeItemFromCartGb = (cartItems, cartItemToDecrease) => {
    const newCartItems = removeCartItem(cartItems, cartItemToDecrease);
    return setCartItemsGb(newCartItems);
};