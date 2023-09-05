import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {

  function goback() {
    window.history.back();
  }

  return (
    <main className='notfound'>
      <h2 className='notfound__title'>404</h2>
      <p className='notfound__message'>Страница не найдена</p>
      <a  onClick={goback}className='notfound__link'>
        Назад
      </a>
    </main>
  );
};

export default NotFound;
