import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { setCategoriesGb } from '../../store/categories/category.reducer';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesAndDocuments();
            dispatch(setCategoriesGb(categories));
        }
        getCategories();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
}

export default Shop;