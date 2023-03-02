import SignUpFrom from '../../components/sign-up-form/sign-up-from.component'
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from './authentication.style'


const Authentication = () => {

  return (
      <AuthenticationContainer>
        <SignInForm/>
        <SignUpFrom/>
      </AuthenticationContainer>
  );
};

export default Authentication;