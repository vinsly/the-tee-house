import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./login.scss";

const Login = () => {
  const INITIAL_STATE = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(INITIAL_STATE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({ ...INITIAL_STATE });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Login</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Login With google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
