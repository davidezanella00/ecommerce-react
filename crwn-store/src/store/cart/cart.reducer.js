import { createSlice } from "@reduxjs/toolkit";

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

export const CART_INITIAL_STATE = {
    isCartOpenGb: false,
    cartItemsGb: []
};

export const cartReducerSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpenGb(state, action) {
            state.isCartOpenGb = action.payload;
        },
        addItemToCartGb(state, action) {
            state.cartItemsGb = addCartItem(state.cartItemsGb, action.payload);
        },
        clearItemFromCartGb(state, action) {
            state.cartItemsGb = clearCartItem(state.cartItemsGb, action.payload);
        },
        removeItemFromCartGb(state, action) {
            state.cartItemsGb = removeCartItem(state.cartItemsGb, action.payload);
        },
    }
});

export const {
    setIsCartOpenGb,
    addItemToCartGb,
    clearItemFromCartGb,
    removeItemFromCartGb
} = cartReducerSlice.actions;
export const cartReducer = cartReducerSlice.reducer;