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
import { useDispatch } from 'react-redux';
import { addItemToCartGb, clearItemFromCartGb, removeItemFromCartGb } from '../../store/cart/cart.reducer';

const CheckoutItem = ({ cartItemProp }) => {
    const { name, price, imageUrl, quantity } = cartItemProp;

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(clearItemFromCartGb(cartItemProp));
    };

    const handleIncreaseQuantity = () => {
        dispatch(addItemToCartGb(cartItemProp));
    };

    const handleDecreaseQuantity = () => {
        dispatch(removeItemFromCartGb(cartItemProp));
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