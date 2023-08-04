import { useState } from "react";
import "./TextInput.scss";

interface Props {
  type: string;
  placeholder: string;
  passwordLabelText: string;
  showPassword: () => void;
}

const TextInput = ({
  type,
  placeholder,
  showPassword,
  showPasswordLabel,
  passwordLabelText,
}: Props) => {
  return (
    <div className="input__container">
      <input type={type} placeholder={placeholder} />
      {showPasswordLabel && <span onClick={showPassword}>{passwordLabelText}</span>}
    </div>
  );
};

export default TextInput;
