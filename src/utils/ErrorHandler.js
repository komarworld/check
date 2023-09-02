export function handleError(err, page) {
  console.log(err);
  if (err.includes(409)) {
    return 'Пользователь с таким email уже существует.';
  } else if (err.includes(500)) {
    return '500 На сервере произошла ошибка.';
  } else if (err.includes(401)) {
    return 'Вы ввели неправильный логин или пароль.';
  } else if (err.includes(400)) {
    return 'При авторизации произошла ошибка/Ошибка токена';
  } else {
    if (page === 'register') {
      return 'При регистрации пользователя произошла ошибка.';
    } else if (page === 'login') {
      return 'При авторизации на сервере произошла ошибка.';
    } else if (page === 'profile') {
      return 'При обновлении профиля произошла ошибка.';
    } else {
      return 'На сервере произошла ошибка';
    }
  }
}
