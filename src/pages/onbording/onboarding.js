import React from "react";
import "./onboarding.scss";
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";

const Onboarding = () => {
  return (
    <div className="onboarding">
      <Login />
      <Signup />
    </div>
  );
};

export default Onboarding;
