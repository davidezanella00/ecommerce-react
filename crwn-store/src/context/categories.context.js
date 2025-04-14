import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMapGb, setCategoriesMapGb] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMapGb(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = {
        categoriesMap: categoriesMapGb,
        setCategoriesMap: setCategoriesMapGb
    };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};