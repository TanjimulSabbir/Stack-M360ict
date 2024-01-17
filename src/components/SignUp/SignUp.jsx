import LoginWithSocial from "../Login/LoginWithSocial";
import Divider from "../utils/Divider";
import SignUpWithEmail from "./SignUpWithEmail";
import "../../style/signUp.scss"

function SignUp() {
  return (
    <div>
      <div className="loginTextHolder">
        <h2 className="signInText">Getting Started</h2>
        <p className="welcomeText">Create an account to continue!</p>
      </div>
      <LoginWithSocial />
      <Divider />
      <SignUpWithEmail />
    </div>
  )
}

export default SignUp;