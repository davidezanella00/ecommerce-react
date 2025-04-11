import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../utils/shop-data.js';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
    const [productsGb, setProductsGb] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            //setProductsGb(categoryMap);
        }
        getCategoriesMap();
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