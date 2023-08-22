import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <main className='notfound'>
      <h2 className='notfound__title'>404</h2>
      <p className='notfound__message'>Страница не найдена</p>

      <Link to='/' className='notfound__link'>
        Назад
      </Link>
    </main>
  );
};

export default NotFound;
