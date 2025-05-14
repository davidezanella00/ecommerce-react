import { useState } from "react";
import { signUpStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import { SubTitle, SignUpContainer } from "./sign-up-form.styles.jsx";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.error("user creation encountered an error", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <SubTitle>Don't have an account?</SubTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    inputOptions={{
                        type: "text",
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName,
                        required: true
                    }}
                />

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

                <FormInput
                    label="Confirm Password"
                    inputOptions={{
                        type: "password",
                        onChange: handleChange,
                        name: "confirmPassword",
                        value: confirmPassword,
                        required: true
                    }}
                />

                <Button buttonOptions={{ type: "submit" }}>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;