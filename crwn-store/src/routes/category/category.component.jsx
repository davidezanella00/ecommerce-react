import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from 'react';
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from './category.styles';
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const categoriesMapConverted = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMapConverted[category]);

    useEffect(() => {
        setProducts(categoriesMapConverted[category]);
    }, [category, categoriesMapConverted]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
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
            )}

        </Fragment>
    );
}

export default Category;