import React from 'react';
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utile';


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  }
  return (
    <div>
      <h1>halllooooo</h1>
      <button onClick={logGoogleUser}>
        Sign in with google popup
      </button>
    </div>
  );
};

export default SignIn;