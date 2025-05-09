import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return (
        {
            [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
            [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
            [BUTTON_TYPE_CLASSES.base]: BaseButton,
        }[buttonType]
    );
}

const Button = ({ children, buttonType, buttonOptions }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...buttonOptions}>
            {children}
        </CustomButton>
    );
}

export default Button;