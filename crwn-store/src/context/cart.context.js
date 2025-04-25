import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    addItemToCart: () => { },
    cartCount: 0,
    clearItemFromCart: () => { },
    removeItemFromCart: () => { },
    cartTotal: 0,
});

export const CART_ACTION_TYPES = {
    SET_CART_OPEN: "SET_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS"
};

const INITIAL_STATE = {
    isCartOpenGb: false,
    cartItemsGb: [],
    cartCountGb: 0,
    cartTotalGb: 0
};

const cartReducer = (state, action) => {
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
                ...payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const { isCartOpenGb, cartItemsGb, cartCountGb, cartTotalGb } = state;
    const setIsCartOpenGb = (cartOpenStatus) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, cartOpenStatus));
    };
    const setCartItemsGb = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price);
        }, 0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItemsGb: newCartItems,
            cartCountGb: newCartCount,
            cartTotalGb: newCartTotal
        }));
    };

    const addItemToCartGb = (productToAdd) => {
        setCartItemsGb(addCartItem(cartItemsGb, productToAdd));
    };

    const clearItemFromCartGb = (cartItemToRemove) => {
        setCartItemsGb(clearCartItem(cartItemsGb, cartItemToRemove));
    };

    const removeItemFromCartGb = (cartItemToDecrease) => {
        setCartItemsGb(removeCartItem(cartItemsGb, cartItemToDecrease));
    };

    const value = {
        isCartOpen: isCartOpenGb,
        setIsCartOpen: setIsCartOpenGb,
        cartItems: cartItemsGb,
        setCartItems: setCartItemsGb,
        addItemToCart: addItemToCartGb,
        cartCount: cartCountGb,
        clearItemFromCart: clearItemFromCartGb,
        removeItemFromCart: removeItemFromCartGb,
        cartTotal: cartTotalGb,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};