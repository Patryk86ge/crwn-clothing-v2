import { useSelector } from "react-redux";
import {selectIsCartOpen} from '../../store/cart/cart.selector'
import { Outlet } from "react-router-dom";
import {ReactComponent as LogoCrwn} from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utile';
import { selectCurrentUser } from '../../store/user/user.selector'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  LinkContainer,
  LinkNav ,
  LogoContainer
} from  './categoryNavBar.style.jsx';

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const  isCartOpen  = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer
          to={'/'}
        >
          <LogoCrwn/>
        </LogoContainer>
        <LinkContainer>
          <LinkNav
            to={'/shop'}
          >
            shop
          </LinkNav>
          {
            currentUser ? (
                <LinkNav as={'span'}
                  onClick={signOutUser}
                  className={'linksNav'}
                >
                Sign Out
              </LinkNav>
              )
              :
              (
                <LinkNav
                  to={'/auth'}
                >
                  sign In
                </LinkNav>)
          }
          <CartIcon/>
        </LinkContainer>
        {
          isCartOpen &&  <CartDropdown />
        }
      </NavigationContainer>
      <Outlet/>
    </>
  );
};

export default NavBar;
