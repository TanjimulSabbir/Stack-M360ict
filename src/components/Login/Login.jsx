import LoginWithEmail from "./LoginWithEmail";
import LoginWithSocial from "./LoginWithSocial";
import "../../style/login.css"
import Divider from "../utils/Divider";

function Login() {
    return (
        <div className="text-center mt-20">
            <div className="loginTextHolder">
                <h2 className="signInText">Sign In</h2>
                <p className="welcomeText">Welcome back, you’ve been missed!</p>
            </div>
            <LoginWithSocial />
            <Divider />
            <LoginWithEmail />
        </div>
    )
}

export default Login;