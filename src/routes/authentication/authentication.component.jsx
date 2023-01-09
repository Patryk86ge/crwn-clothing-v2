import React from 'react';
import './authentication.style.scss'
import SignUpFrom from '../../components/sign-up-form/sign-up-from.component'
import SignInForm from "../../components/sign-in-form/sign-in-form.component";


const Authentication = () => {

  return (
      <div className={'authentication-container'}>
        <SignInForm/>
        <SignUpFrom/>
      </div>
  );
};

export default Authentication;