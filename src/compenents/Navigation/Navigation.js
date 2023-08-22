import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navigation.css';
//import BurgerMenu from '../BurgerMenu/BurgerMenu';


function Navigation({ isLoggedIn }) {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const location = useLocation();

  function handleOpenMenu() {
    setIsBurgerMenu(true)
  }

  function handleCloseMenu() {
    setIsBurgerMenu(false)
  }

    return (
      <>
        <ul className='header__links-navigation'>
          <li>
          <NavLink to='/movies' className={`header__link header__link_type_movies ${ location.pathname === '/movies' ? 'header__link_active' : '' }`}>Фильмы</NavLink>
          </li>
          <li>
            <NavLink to='/saved-movies' className={`header__link header__link_type_saved ${ location.pathname === '/saved-movies' ? 'header__link_active' : '' }`}>Сохраненные фильмы</NavLink>
          </li>
        </ul>
        <div className='header__account'>
          <NavLink to='/profile' className='header__link header__link_type_account'>Аккаунт
          <span className='header__img-account'></span>
          </NavLink>
        </div>
        <div className='header__burger'>
          <button className='header__link header__burger-button' aria-label='меню-бургер' type='button' onClick={handleOpenMenu}></button>
        </div>
        <div className={`navigation ${isBurgerMenu ? 'navigation_visible' : ''}`}>
          <div className='navigation__container'>
            <div className='navigation__button'>
              <button className='navigation__button_type_close' onClick={handleCloseMenu}></button>
            </div>
            <div className='navigation__links'>
              <Link className='navigation__link' to='/'>
                Главная
              </Link>
              <Link className={`navigation__link ${location.pathname === '/movies' && 'navigation__link_active'}`} to='/movies'>
                Фильмы
              </Link>
              <Link className={`navigation__link ${location.pathname === '/saved-movies' && 'navigation__link_active'}`} to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </div>
            <div className='navigation__button navigation__button_type_account'>
              <Link to='/profile' className='navigation__account-link'>
                Аккаунт
                <span className='navigation__img-account'></span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Navigation;