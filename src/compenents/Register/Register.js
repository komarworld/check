import Logo from '../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/' className='register__logo'>
          <img alt='лого в виде бублика' className='register__logo-img' src={Logo} />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <fieldset className='register__fieldset'>
            <label htmlFor='name' className='register__label'>
              Имя
            </label>
            <input 
              className='register__input'
              type='text' id='name'
              name='name'
              minLength='2'
              required
              placeholder='Введите имя'/>
          </fieldset>
          <fieldset className='register__fieldset'>
            <label htmlFor='email' className='register__label'>
              E-mail:
            </label>
            <input 
              required
              className='register__input'
              type='email'
              id='email'
              name='email'
              minLength='2'
              placeholder='Введите Email' />
          </fieldset>
          <fieldset className='register__fieldset'> 
            <label htmlFor='password' className='register__label'>
              Пароль
            </label>
            <input
              className='register__input'
              type='password'
              id='password'
              name='password'
              minLength='6'
              required 
              placeholder='Придумайте пароль'/>
            <span className='register__error-message'>Что-то пошло не так...</span>
          </fieldset>
          <button type='submit' className='register__button' aria-label='Кнопка Регистрации'>
            Зарегистрироваться
          </button>
        </form>
        <p className='register__message'>
          Уже зарегистрированы?{' '}
          <Link to= '/signin' className='register__link'>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Register;