import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from 'react';
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from './category.styles';
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const Category = () => {
    const { category } = useParams();
    const categoriesMapConverted  = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMapConverted[category]);

    useEffect(() => {
        setProducts(categoriesMapConverted[category]);
    }, [category, categoriesMapConverted]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products?.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            productProp={product}
                        />
                    );
                })}
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;