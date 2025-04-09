import './checkout-item.styles.scss'
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
    }

    const handleDecreaseQuantity = () => {
        removeItemFromCart(cartItemProp);
    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleDecreaseQuantity}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleIncreaseQuantity}>&#10095;</div>
            </span>
            <span className='price'>€{price}</span>
            <div className='remove-button' onClick={handleRemoveItem}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;