import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    const categoriesMapConverted = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object
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
                    })
            )}
        </Fragment>
    );
}

export default CategoriesPreview;