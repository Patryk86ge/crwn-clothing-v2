import React, {useContext } from 'react';

import {Link, Outlet} from "react-router-dom";
import {ReactComponent as LogoCrwn} from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utile'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import './categoryNavBar.style.scss'

const NavBar = () => {

  const {currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className={'navigation'}>
        <Link
          className={'logo_container'}
          to={'/'}
        >
          <LogoCrwn/>
        </Link>
        <div className={'linksNav'}>
          <Link
            className={'link_Container'}
            to={'/hats'}
          >
            hats
          </Link>
          <Link
            className={'link_Container'}
            to={'/contact'}
          >
            contact
          </Link>
          {
            currentUser ? (
                <span
                  onClick={signOutUser}
                  className={'link_Container'}
                >
                Sign Out
              </span>
              )
              :
              (
                <Link
                  className={'link_Container'}
                  to={'/auth'}
                >
                  sign In
                </Link>)
          }

          <Link
            className={'link_Container'}
            to={'/basket'}
          >
            basket
          </Link>
          <Link
            className={'link_Container'}
            to={'/shop'}
          >
            shop
          </Link>
          <CartIcon/>
        </div>
        {
          isCartOpen &&  <CartDropdown />
        }
      </nav>
      <Outlet/>
    </>
  );
};

export default NavBar;
