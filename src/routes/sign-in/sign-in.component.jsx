import React, {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utile';
import SignUpFrom from '../../components/sign-up-form/sign-up-from.component'


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google popup
      </button>
      < SignUpFrom />
    </div>
  );
};

export default SignIn;