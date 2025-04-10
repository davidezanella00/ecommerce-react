import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span
                            className="nav-link"
                            onClick={signOutHandler}
                        >
                            SIGN OUT
                        </span>
                    ) : (
                        <Link to="/auth" className="nav-link">
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;