import { useSelector } from "react-redux";
import { selectCartCount, selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
    EmptyCartMessage,
    CartIconWithCount,
    StyledShoppingIcon,
    CartCount
} from './checkout.styles';
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const cartCount = useSelector(selectCartCount);
    const headerBlockElements = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    return (
        <CheckoutContainer>
            {cartItems.length ? (
                <div>
                    <CheckoutHeader>
                        {headerBlockElements.map((header, index) => (
                            <HeaderBlock key={index}>{header}</HeaderBlock>
                        ))}
                    </CheckoutHeader>
                    {cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItemProp={cartItem} />
                    ))}
                    <Total>Total: €{cartTotal}</Total>
                    <PaymentForm />
                </div>
            ) : (
                <EmptyCartMessage>
                    <CartIconWithCount>
                        <StyledShoppingIcon />
                        <CartCount>{cartCount}</CartCount>
                    </CartIconWithCount>
                    <h2>Your cart is empty</h2>
                </EmptyCartMessage>
            )}
        </CheckoutContainer>
    );
};

export default Checkout;