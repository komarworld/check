import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio' aria-label='Проекты обучения'>
      <div className="portfolio__container">
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' href='https://github.com/komarworld/how-to-learn' target='_blank' rel='noreferrer'>
              Статичный сайт
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' href='https://github.com/komarworld/russian-travel' target='blank' rel='noreferrer'>
              Адаптивный сайт
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' href='https://github.com/komarworld/react-mesto-auth' target='blank' rel='noreferrer'>
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;