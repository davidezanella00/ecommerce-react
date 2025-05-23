import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles.jsx';

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

const Button = ({ children, buttonType, isLoading, buttonOptions }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...buttonOptions}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    );
}

export default Button;