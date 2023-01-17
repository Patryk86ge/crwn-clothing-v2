import { useState  } from "react";
import './sign-up-form.style.scss';
import Button from '../button/button.component'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utile'
import FormInput from '../form-input/form-input.component';

const defaultFormFiled = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUpFrom = () => {
  const [formFields, setFormField] = useState(defaultFormFiled);
  const {displayName, email, password, confirmPassword} = formFields;



  console.log("hit");
  const resetForm = () => {
    setFormField(defaultFormFiled);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      alert('password do not match');//modal can use
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user,{ displayName });
      resetForm();
    } catch (error){
      if (error.code === 'auth/email-already-in-use'){
        alert('Cannot create user,email allredy in use') // || modal
      }else {
        console.log('error reaction users',error);
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target ;
    setFormField({...formFields,[name]: value});
  }

  return (
    <div className={'sign-up-container'}>
      <h2>Don't have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelName={'Display Name'}
          type={'text'}
          required
          min={'2'}
          max={'20'}
          onChange={handleChange}
          name={'displayName'}
          value={displayName}
        />
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
        <FormInput
          labelName={'Confirm Password'}
          type={'password'}
          required
          onChange={handleChange}
          name={'confirmPassword'}
          value={confirmPassword}/>
        <Button type={'submit'}>Sing Up</Button>
      </form>
    </div>
  );
};

export default SignUpFrom;