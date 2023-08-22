import './AboutMe.css';
import MyPhoto from '../../../images/mephoto.jpg';

function AboutMe() {
  return (
    <section className='about-me' aria-label='Инормация о студенте'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__info'>
          <div className='about-me__info-text'> 
            <h3 className='about-me__info-name'>Виталий</h3>
            <p className='about-me__info-details'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__info-description'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. 
              Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.  
            </p>
            <a className='about-me__link' href='https://github.com/komarworld' target='_blank' rel='noreferrer'>
              Github
            </a>
          </div>
          <img className='about-me__photo' src={MyPhoto} alt='фото' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;