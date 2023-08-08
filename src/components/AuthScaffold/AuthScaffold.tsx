import "./AuthScaffold.scss";
import AuthScaffoldImage from "../../assets/pablo-sign-in 1.svg";
import Logo from "../../assets/logo.svg";

const AuthScaffold = ({ children }) => {
  return (
    <div className="login__container">
      <div className="logo__container">
        <img src={Logo} className="logo" />
        <img src={AuthScaffoldImage} className="pablo" />
      </div>
      <div className="form__container">{children}</div>
    </div>
  );
};

export default AuthScaffold;
