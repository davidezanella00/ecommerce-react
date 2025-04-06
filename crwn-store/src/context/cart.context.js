import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpenGlobal, setIsCartOpenGlobal] = useState(false);

    const value = {
        isCartOpen: isCartOpenGlobal,
        setIsCartOpen: setIsCartOpenGlobal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};