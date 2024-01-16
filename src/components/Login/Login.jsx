import LoginWithEmail from "./LoginWithEmail";
import LoginWithSocial from "./LoginWithSocial";
import "../../style/login.css"

function Login() {
    return (
        <div className="text-center">
            <div className="loginTextHolder">
                <h2 className="signInText">Sign In</h2>
                <p className="welcomeText">Welcome back, you’ve been missed!</p>
            </div>
            <LoginWithSocial />
            <LoginWithEmail />
        </div>
    )
}

export default Login;