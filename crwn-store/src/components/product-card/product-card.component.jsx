import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
    ProductCartContainer,
    ProductImage,
    Footer,
    Name,
    Price,
} from './product-card.styles';

const ProductCard = ({ productProp }) => {
    const { name, price, imageUrl } = productProp;

    const { addItemToCart } = useContext(CartContext);

    const addItemToCartHandler = () => {
        addItemToCart(productProp);
    }

    return (
        <ProductCartContainer>
            <ProductImage src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                buttonOptions={{
                    onClick: addItemToCartHandler
                }}
            >
                Add to card
            </Button>
        </ProductCartContainer>
    );
};

export default ProductCard;