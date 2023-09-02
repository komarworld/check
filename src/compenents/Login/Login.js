import './Login.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../utils/UseformWithValidation';
import { useState } from 'react';
import { authorization } from '../../utils/MainApi';
import { UNAUTHORIZED_ERROR, LOGIN_ERROR  } from '../../constants/constants'


export function Login({setLoggedIn, isLoading, setIsLoading, setCurrentUser}) {
  const [errorText, setErrorText] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const navigate = useNavigate();
  
  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    setErrorText('');

    authorization({
      email: values['email'],
      password: values['password'],
   })
      .then((user) => {
        localStorage.setItem("token", user.token)
        setErrorText('');
        setCurrentUser(user);
        setLoggedIn(true);

        navigate('/movies', { replace: true });
        resetForm();
      })
      .catch((err) => {
        setLoggedIn(false);
        if (err === 401) {
          setErrorText(UNAUTHORIZED_ERROR);
        }
          setErrorText(LOGIN_ERROR );
      })
      .finally(() => setIsLoading(false));
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
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isButtonDisable={!isValid}
          errorText={errorText} >
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
                pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
                value={values['email'] || ''}
                onChange={handleChange}
                placeholder='Введите Email' />              
              <span className='form__input-error'>{errors.email}</span>
            </fieldset>
            <fieldset className='form__fieldset'>
              <label htmlFor='email' className='form__label'>
                Пароль
              </label>
              <input 
                className='form__input'
                type='password' 
                id='name'
                name='password'
                minLength='4'
                required
                value={values['password'] || ''}
                onChange={handleChange}
                placeholder='Пароль'/>
              <span className='form__input-error'>{errors.password}</span>
            </fieldset>
        </AuthForm> 
      </div>
    </main>
  );
}

export default Login;