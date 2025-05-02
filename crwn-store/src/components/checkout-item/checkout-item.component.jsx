import {
    CheckoutItemContainer,
    ImageContainer,
    Image,
    Name,
    Quantity,
    Arrow,
    Value,
    Price,
    RemoveButton
} from './checkout-item.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCartGb, clearItemFromCartGb, removeItemFromCartGb } from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItemProp }) => {
    const { name, price, imageUrl, quantity } = cartItemProp;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleRemoveItem = () => {
        dispatch(clearItemFromCartGb(cartItems, cartItemProp));
    };

    const handleIncreaseQuantity = () => {
        dispatch(addItemToCartGb(cartItems, cartItemProp));
    };

    const handleDecreaseQuantity = () => {
        dispatch(removeItemFromCartGb(cartItems, cartItemProp));
    };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={handleDecreaseQuantity}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleIncreaseQuantity}>&#10095;</Arrow>
            </Quantity>
            <Price>€{price}</Price>
            <RemoveButton onClick={handleRemoveItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;