import { Link } from 'react-router-dom';
import './AuthForm.css';

export default function AuthForm({ children, name, onSubmit, isLoading, isButtonDisable,  errorText}) {

  const isRegister = name === 'register';

  return (
    <form className="form" onSubmit={onSubmit} name={name} noValidate>
      <div className="form__container">
        {children}
      </div>
      <div className="form__button-container">
        <span className="form__error">{errorText}</span>
        <button
          className={`form__button form__button_type_${ isLoading || isButtonDisable ? 'disable' : ''}`}
          type="submit"
          disabled = {isLoading || isButtonDisable}
          aria-label='Кнопка Регистрации'
        >
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <p className="form__message">
          {isRegister ? 'Уже зарегистрированы? ' : 'Еще не зарегистрированы? '}
          <Link
            className="form__message-link"
            to={name === 'register' ? '/signin' : '/signup'}
          >
            {isRegister ? 'Войти' : 'Регистрация'}
          </Link>
        </p>
      </div>
    </form>
  )
}