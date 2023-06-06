import { useState  } from "react";
import { useDispatch } from "react-redux";
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component';
import {SignUpContainer} from './sign-up-form.style';
import {signUpStart} from "../../store/user/user.action";
const defaultFormFiled = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUpFrom = () => {
  const dispatch = useDispatch()
  const [formFields, setFormField] = useState(defaultFormFiled);
  const {displayName, email, password, confirmPassword} = formFields;
  const resetForm = () => {
    setFormField(defaultFormFiled);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      alert('password do not match');//modal can use
    }
    try {
      dispatch(signUpStart(email,password,displayName))
      resetForm();
    } catch (error){
      if (error.code === 'auth/email-already-in-use'){
        alert('Cannot create user,email already in use') // || modal
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
    <SignUpContainer>
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
    </SignUpContainer>
  );
};

export default SignUpFrom;