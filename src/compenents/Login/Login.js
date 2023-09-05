import './Login.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Login({setLoggedIn}) {
  const navigate = useNavigate();
  
  function handleSubmit(evt) {
    evt.preventDefault();
    navigate('/movies');
    setLoggedIn(true);
    }
  return (
    <main className='login'>
      <div className= 'login__container'>
        <Link to='/' className='login__logo'>
          <img alt='лого в виде бублика' className='login__logo-img' src={logo} />
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <AuthForm
          name= {'login'}
          onSubmit={handleSubmit}>
             <fieldset className='form__fieldset'>
              <label htmlFor='name' className='form__label'>
                E-mail
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
              <label htmlFor='email' className='form__label'>
                Пароль
              </label>
              <input 
                className='form__input'
                type='password' 
                id='name'
                name='passwaord'
                minLength='4'
                required
                placeholder='Пароль'/>
              <span className='form__input-error'>{}</span>
            </fieldset>
        </AuthForm> 
      </div>
    </main>
  );
}

export default Login;