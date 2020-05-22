import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.scss";

const Signup = () => {
  const INITIALVALUE = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(INITIALVALUE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setValues(INITIALVALUE);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <h2 className="title">i do not have a account</h2>
      <span>Signu with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
