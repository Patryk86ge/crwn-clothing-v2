import React, {useState} from 'react';
import './sign-in-form.style.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utile";

const defaultFormFiled = {
  email: '',
  password: '',
}


const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFiled);
  const {email, password} = formFields;

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const resetForm = () => {
    setFormField(defaultFormFiled);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(res);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('noo user on this email');
          break;
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormField({...formFields, [name]: value});
  }
  return (
    <div className={'sign-in-container'}>
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form
        onSubmit={handleSubmit}>
        <FormInput
          labelName={'Email'}
          type={'email'}
          required
          onChange={handleChange}
          name={'email'}
          value={email}/>
        <FormInput
          labelName={'Password'}
          type={'password'}
          required
          onChange={handleChange}
          name={'password'}
          value={password}/>
        <div className="buttons-container">
          <Button
            buttonType={'inverted'}
            type={'submit'}>
            Sing In
          </Button>
          <Button
            buttonType={'google'}
            type={'button'}
            onClick={logGoogleUser}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;