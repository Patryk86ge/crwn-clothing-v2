import React from 'react';
import './categoryNavBar.style.scss'
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as LogoCrwn} from '../../assets/crown.svg'
import menu from './menu.js'


const NavBar = () => {
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
          {
            menu.map((nav) => (
              <Link
                className={'link_Container'}
                key={nav.id}
                to={nav.path}
              >
                {nav.title}
              </Link>
            ))
          }
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default NavBar;