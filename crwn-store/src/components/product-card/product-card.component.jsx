import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ productProp }) => {
    const { name, price, imageUrl } = productProp;

    const { addItemToCart } = useContext(CartContext);

    const addItemToCartHandler = () => {
        addItemToCart(productProp);
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType='inverted'
                buttonOptions={{
                    onClick: addItemToCartHandler
                }}>
                Add to Cart
            </Button>
        </div>
    );
}

export default ProductCard;