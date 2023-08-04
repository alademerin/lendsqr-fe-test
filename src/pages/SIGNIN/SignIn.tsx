import "./SignIn.scss";
import AuthScaffold from "../../components/AuthScaffold/AuthScaffold";
import TextInput from "../../components/TextInput/TextInput";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthScaffold>
      <img src={Logo} />
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <form>
        <TextInput type="text" placeholder="Email" />
        <TextInput
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          showPasswordLabel
          passwordLabelText={showPassword ? "HIDE" : "SHOW"}
          showPassword={() => setShowPassword(!showPassword)}
        />
        <p>Forgot Password?</p>
        <button type="submit">Log in</button>
      </form>
    </AuthScaffold>
  );
};

export default SignIn;
