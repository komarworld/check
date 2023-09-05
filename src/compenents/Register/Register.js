import Logo from '../../images/logo.svg';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Register({setLoggedIn}) {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate('/movies');
    setLoggedIn(true);
  }

  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/' className='register__logo'>
          <img alt='лого в виде бублика' className='register__logo-img' src={Logo} />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <AuthForm
          name= {'register'}
          onSubmit={handleSubmit}>
             <fieldset className='form__fieldset'>
              <label htmlFor='name' className='form__label'>
                Имя
              </label>
              <input 
                className='form__input'
                type='text' id='name'
                name='name'
                minLength='2'
                required
                placeholder='Введите имя'/>
              <span className='form__input-error'>{}</span>
            </fieldset>
            <fieldset className='form__fieldset'>
              <label htmlFor='email' className='form__label'>
                E-mail:
              </label>
              <input 
                required
                className='form__input'
                type='email'
                id='email'
                name='email'
                minLength='2'
                placeholder='Введите Email' />
              <span className='form__input-error'>{}</span>
            </fieldset>
            <fieldset className='form__fieldset'> 
              <label htmlFor='password' className='form__label'>
                Пароль
              </label>
              <input
                className='form__input'
                type='password'
                id='password'
                name='password'
                minLength='6'
                required 
                placeholder='Придумайте пароль'/>
              <span className='form__input-error'>Что-то пошло не так...</span>
            </fieldset>
        </AuthForm> 
      </div>
    </main>
  );
}
export default Register;