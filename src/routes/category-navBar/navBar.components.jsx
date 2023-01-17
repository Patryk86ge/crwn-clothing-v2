import React, {useContext} from 'react';
import './categoryNavBar.style.scss'
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as LogoCrwn} from '../../assets/crown.svg'
import {UserContext} from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utile'


const NavBar = () => {

  const { currentUser } = useContext(UserContext);

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
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default NavBar;
