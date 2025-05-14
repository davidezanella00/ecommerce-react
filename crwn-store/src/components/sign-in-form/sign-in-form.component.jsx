import { useState } from "react";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsContainer, SubTitle } from "./sign-in-form.styles";

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-credential":
                    alert("Invalid credentials");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email");
                    break;
                case "auth/wrong-password":
                    alert("Incorrect password for email");
                    break;
                default:
                    console.error("Error signing in with email and password", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = () => {
        dispatch(googleSignInStart());
    }

    return (
        <SignInContainer>
            <SubTitle>Already have an account?</SubTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    inputOptions={{
                        type: "email",
                        onChange: handleChange,
                        name: "email",
                        value: email,
                        required: true
                    }}
                />
                <FormInput
                    label="Password"
                    inputOptions={{
                        type: "password",
                        onChange: handleChange,
                        name: "password",
                        value: password,
                        required: true
                    }}
                />
            </form>
            <ButtonsContainer>
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    buttonOptions={{
                        type: "submit",
                        onClick: handleSubmit
                    }}
                >
                    Sign In
                </Button>
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.google}
                    buttonOptions={{
                        type: "button",
                        onClick: signInWithGoogle
                    }}
                >
                    Sign in with Google
                </Button>
            </ButtonsContainer>
        </SignInContainer>
    )
}

export default SignInForm;