import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
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

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
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
            <div className="buttons-container">
                <Button
                    buttonType="inverted"
                    buttonOptions={{
                        type: "submit",
                        onClick: handleSubmit
                    }}
                >
                    Sign In
                </Button>
                <Button
                    buttonType="google"
                    buttonOptions={{ 
                        type: "button",
                        onClick: signInWithGoogle 
                    }}
                >
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default SignInForm;