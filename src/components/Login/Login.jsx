import LoginWithEmail from "./LoginWithEmail";
import LoginWithSocial from "./LoginWithSocial";
import divider from "../../assets/underline.svg"
import "../../style/login.css"

function Login() {
    return (
        <div className="text-center mt-20">
            <div className="loginTextHolder">
                <h2 className="signInText">Sign In</h2>
                <p className="welcomeText">Welcome back, you’ve been missed!</p>
            </div>
            <LoginWithSocial />
            <div className="flex items-center space-x-6 justify-center my-9">
                <img src={divider} alt="" />
                <p className="or">OR</p>
                <img src={divider} alt="" />
            </div>
            <LoginWithEmail />
        </div>
    )
}

export default Login;