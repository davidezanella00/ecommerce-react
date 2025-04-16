import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationCcontainer } from "./authentication.styles.jsx";

const Authentication = () => {

    return (
        <AuthenticationCcontainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationCcontainer>
    )
}

export default Authentication;