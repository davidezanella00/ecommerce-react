import { createContext, useEffect, useState } from "react";

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
}

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
}

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

export const CartProvider = ({ children }) => {
    const [isCartOpenGb, setIsCartOpenGb] = useState(false);
    const [cartItemsGb, setCartItemsGb] = useState([]);
    const [cartCountGb, setCartCountGb] = useState(0);
    const [cartTotalGb, setCartTotalGb] = useState(0);

    const addItemToCartGb = (productToAdd) => {
        setCartItemsGb(addCartItem(cartItemsGb, productToAdd));
    }

    const clearItemFromCartGb = (cartItemToRemove) => {
        setCartItemsGb(clearCartItem(cartItemsGb, cartItemToRemove));
    }

    const removeItemFromCartGb = (cartItemToDecrease) => {
        setCartItemsGb(removeCartItem(cartItemsGb, cartItemToDecrease));
    }

    useEffect(() => {
        const newCartCount = cartItemsGb.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
        setCartCountGb(newCartCount);
    }, [cartItemsGb]);

    useEffect(() => {
        const newCartTotal = cartItemsGb.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price);
        }, 0);
        setCartTotalGb(newCartTotal);
    }, [cartItemsGb]);

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