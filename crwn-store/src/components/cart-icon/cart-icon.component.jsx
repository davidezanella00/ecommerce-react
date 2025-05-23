import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpenGb } from '../../store/cart/cart.reducer';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => {
        return dispatch(setIsCartOpenGb(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;