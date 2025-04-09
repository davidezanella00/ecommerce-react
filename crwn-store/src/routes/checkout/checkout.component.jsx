import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import './checkout.styles.scss';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const Checkout = () => {
    const { cartItems, cartTotal, cartCount } = useContext(CartContext);
    const headerBlockElements = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    return (
        <div className="checkout-container">
            {cartItems.length
                ? (
                    <div>
                        <div className="checkout-header">
                            {headerBlockElements.map((header, index) => (
                                <div key={index} className="header-block" >{header}</div>
                            ))}
                        </div>
                        {cartItems.map((cartItem) => (
                            <CheckoutItem key={cartItem.id} cartItemProp={cartItem} />
                        ))}
                        <div className="total">Total: €{cartTotal}</div>
                    </div>
                ) : (
                    <div className="empty-cart-message">
                        <div className="cart-icon-with-count">
                            <ShoppingIcon className="shopping-icon" />
                            <span className="cart-count">{cartCount}</span>
                        </div>
                        <h2>Your cart is empty</h2>
                    </div>
                )}
        </div>
    );
}

export default Checkout;