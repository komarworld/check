import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className='login'>
      <div className= 'login__container'>
        <Link to='/' className='login__logo'>
          <img alt='лого в виде бублика' className='login__logo-img' src={logo} />
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <fieldset className='login__fieldset'>
            <label className='login__label'>E-mail</label>
            <input
              required
              className='login__input'
              type='email'
              placeholder='Введите Email'>
            </input>
            <span className='login__error'></span>
          </fieldset>
          <fieldset className='login__fieldset'>
            <label className='login__label'>Пароль</label>
            <input
              required
              type='password'
              className='login__input'
              placeholder='Введите пароль'>
            </input>
            <span className='login__error' type='text'>
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className='login__button' type='submit'>
          Войти
        </button>
        </form>
        <p className='login__message'>
        Еще не зарегистрированы?{' '}
          <Link to='/signup' className='login__link'>
            Регистрация
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;