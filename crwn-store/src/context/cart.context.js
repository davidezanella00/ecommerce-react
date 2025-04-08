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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    addItemToCart: () => { },
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpenGb, setIsCartOpenGb] = useState(false);
    const [cartItemsGb, setCartItemsGb] = useState([]);
    const [cartCountGb, setCartCountGb] = useState(0);

    const addItemToCartGb = (productToAdd) => {
        setCartItemsGb(addCartItem(cartItemsGb, productToAdd));
    }

    useEffect(() => {
        const newCartCount = cartItemsGb.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
        setCartCountGb(newCartCount);
    }, [cartItemsGb]);

    const value = {
        isCartOpen: isCartOpenGb,
        setIsCartOpen: setIsCartOpenGb,
        cartItems: cartItemsGb,
        setCartItems: setCartItemsGb,
        addItemToCart: addItemToCartGb,
        cartCount: cartCountGb
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};