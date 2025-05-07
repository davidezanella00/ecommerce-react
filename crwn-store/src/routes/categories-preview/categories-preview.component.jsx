import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
    const categoriesMapConverted  = useSelector(selectCategoriesMap);

    return (
        <Fragment>
            {Object
                .keys(categoriesMapConverted)
                .map((title) => {
                    const products = categoriesMapConverted[title];
                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}
                        />
                    );
                })}
        </Fragment>
    );
}

export default CategoriesPreview;