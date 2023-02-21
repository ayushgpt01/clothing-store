import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userSlice";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInFormContainer, ButtonContainer } from "./sign-in-form.styles";
import { AuthErrorCodes, AuthError } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart({ email, password }));
      resetFormFields();
    } catch (error) {
      if (
        (error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD ||
        (error as AuthError).code === AuthErrorCodes.INVALID_EMAIL
      ) {
        alert("Wrong Email or Password");
      } else {
        console.log((error as AuthError).message);
      }
    }
  };

  return (
    <SignInFormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
