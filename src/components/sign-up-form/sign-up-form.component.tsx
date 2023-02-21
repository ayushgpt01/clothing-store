import { useState, ChangeEvent } from "react";
import { AuthError,AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpFormContainer } from "./sign-up-form.styles";
import { signUpUser } from "../../store/user/userSlice";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpUser({ email, password, displayName }));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email already in use");
      } else if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
        alert("Password too weak");
      } else {
        console.log("Error creating user " + (error as AuthError).message);
      }
    }
  };

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
