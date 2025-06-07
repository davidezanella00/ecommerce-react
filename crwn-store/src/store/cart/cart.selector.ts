import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => {
    return state.cart;
}

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => {
        return cart.cartItemsGb;
    }
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => {
        return cart.isCartOpenGb;
    }
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
    }
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price);
        }, 0);
    }
);