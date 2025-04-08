import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../utils/shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
    const [productsGb, setProductsGb] = useState([]);

    useEffect(() => {
        setProductsGb(PRODUCTS);
    }, []);

    const value = {
        products: productsGb,
        setProducts: setProductsGb
    };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};