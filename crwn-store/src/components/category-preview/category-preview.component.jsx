import { Link } from 'react-router-dom';
import ProductCard from "../product-card/product-card.component";
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <Link className='title' to={title}>
                {title.toUpperCase()}
            </Link>
            <div className="preview">
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                productProp={product}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default CategoryPreview;