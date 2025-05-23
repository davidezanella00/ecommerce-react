import { addItemToCartGb } from '../../store/cart/cart.reducer';
import { useDispatch } from 'react-redux';
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

    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(addItemToCartGb(productProp));
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