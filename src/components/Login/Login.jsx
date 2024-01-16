import LoginWithEmail from "./LoginWithEmail";
import LoginWithSocial from "./LoginWithSocial";

function Login() {
    return (
        <div>
            <LoginWithSocial />
            <div>
                <h2>Sign In</h2>
                <p>Welcome back, you’ve been missed!</p>
            </div>
            <LoginWithEmail />
        </div>
    )
}

export default Login;