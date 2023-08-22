import './Promo.css';
import Globus from '../../../images/globus.svg';

function Promo() {
  return (
    <section className='promo' aria-label='Титульная заставка'>
      <div className='promo__container'>
        <div className='promo__text'>
          <h1 className='promo__title'>
          Учебный проект студента факультета Веб&#8209;разработки
          </h1>
          <p className='promo__description'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className='promo__link' href='#about'>
            Узнать больше
          </a>
        </div>
        <img className='promo__img' alt='web Глобус' src = {Globus}/>
      </div>
    </section>
  )
}

export default Promo;