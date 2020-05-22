import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
      custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
