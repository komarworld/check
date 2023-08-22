import { useState } from 'react';
//import Header from '../Header/Header';
import './Profile.css';

function Profil() {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('hello@yandex.ru');
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitClick = () => {
    setIsEdit(false);
  };
  return (
    <>
      <section className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, {name}!</h1>
          <div className='profile__form'>
            <label htmlFor='name' className='profile__label'>
              Имя
            </label>
            {isEdit ? <input className='profile__input' type='text' name='name' minLength='2' value={name} onChange={handleNameChange} /> : <span className='profile__name-value'>{name}</span>}
          </div>
          <div className='profile__form'>
            <label htmlFor='email' className='profile__email-label'>
              E-mail
            </label>
            {isEdit ? <input className='profile__input' type='email' name='email' value={email} onChange={handleEmailChange} /> : <span className='email-value'>{email}</span>}
          </div>
          {isEdit ? (
            <>
              <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
              <button type='submit' className='profile__button profile__button_disabled' handler={handleSubmitClick} aria-label='Сохранить данные'>
                Сохранить
              </button>
            </>
          ) : (
            <>
              <button type='button' className='profile__link-edit' href='/' onClick={handleEditClick} aria-label='Редактировать профиль'>
                Редактировать
              </button>
              <button type='button' className='profile__link-exit' href='/signout' aria-label='Выйти из аккаунта'>
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Profil;
