import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const MainPage = pathname === '/';
  const MoviesPage = pathname === '/movies';
  const SavedMoviesPage = pathname === '/saved-movies';
  const ProfilePage = pathname === '/profile';

  return (
    <header className={`header ${pathname === "/" && "header_green"}`}>
      {MainPage || MoviesPage || SavedMoviesPage || ProfilePage ?
        <header className="header__container">
          <Link className="header__logo" to="/" />
          {
            loggedIn ? <Navigation /> : 
              <div className="header__links-main">
                <Link to="/signup" className={`header__link-main ${pathname === "/" ? "header__link-main_type_signup" : ''}`}>
                  Регистрация
                </Link>
                <Link to="/signin" className="header__link-main header__link-main_type_signin" >Войти</Link>
              </div>
          }
        </header>
        : ''}
    </header>
  );
}

export default Header;