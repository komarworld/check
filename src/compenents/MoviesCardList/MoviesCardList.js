import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
    <>
      <section className='movie-cards' aria-label='Карточки фильмов'>
        <p className='movie-cards__not-found'>Ничего не найдено</p>
        <ul className='movie-cards__container'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </section>
      <section className='more-cards' aria-label='Загрузка больше карточек'>
        <button type='button' className='more-cards__button'>Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;