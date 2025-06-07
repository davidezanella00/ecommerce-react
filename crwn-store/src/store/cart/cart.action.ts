import { CategoryItem } from "../categories/category.types.ts";
import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils.ts";
import { CART_ACTION_TYPES, CartItem } from "./cart.types.ts";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

const clearCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem): CartItem[] => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const removeCartItem = (cartItems: CartItem[], cartItemToDecrease: CategoryItem): CartItem[] => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToDecrease.id;
    });

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrease.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToDecrease.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpenGb = withMatcher((boolean: boolean): SetIsCartOpen => {
    return createAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean);
});

export const setCartItemsGb = withMatcher((cartItems: CartItem[]): SetCartItems => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
});

export const addItemToCartGb = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItemsGb(newCartItems);
};

export const clearItemFromCartGb = (cartItems: CartItem[], cartItemToRemove: CategoryItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItemsGb(newCartItems);
};

export const removeItemFromCartGb = (cartItems: CartItem[], cartItemToDecrease: CategoryItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToDecrease);
    return setCartItemsGb(newCartItems);
};