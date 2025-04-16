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
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItemProp }) => {
    const { name, price, imageUrl, quantity } = cartItemProp;

    const { addItemToCart, clearItemFromCart, removeItemFromCart } = useContext(CartContext);

    const handleRemoveItem = () => {
        clearItemFromCart(cartItemProp);
    };

    const handleIncreaseQuantity = () => {
        addItemToCart(cartItemProp);
    };

    const handleDecreaseQuantity = () => {
        removeItemFromCart(cartItemProp);
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