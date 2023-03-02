import React, {useContext } from 'react';

import { Outlet} from "react-router-dom";
import {ReactComponent as LogoCrwn} from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utile'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer,LinkContainer, LinkNav ,LogoContainer } from  './categoryNavBar.style.jsx'

const NavBar = () => {
  const {currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer
          to={'/'}
        >
          <LogoCrwn/>
        </LogoContainer>
        <LinkContainer>
          {/*<LinkNav*/}
          {/*  to={'/hats'}*/}
          {/*>*/}
          {/*  hats*/}
          {/*</LinkNav>*/}
          {/*<LinkNav*/}
          {/*  to={'/contact'}*/}
          {/*>*/}
          {/*  contact*/}
          {/*</LinkNav>*/}
          {/*<LinkNav*/}
          {/*  to={'/basket'}*/}
          {/*>*/}
          {/*  basket*/}
          {/*</LinkNav>*/}
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
