import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../utils/shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
    const [productsGlobal, setProductsGlobal] = useState([]);

    useEffect(() => {
        setProductsGlobal(PRODUCTS);
    }, []);

    const value = {
        products: productsGlobal,
        setProducts: setProductsGlobal
    };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};