import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import movieImg from '../../images/card-img.jpg';

export default function MoviesCard() {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
  <li className='movie-card'>
    <img src={movieImg} className='movie-card__image' alt="Кадр фильма" />
    <div className='movie-card__info'>
      <h2 className='movie-card__name'>33 слова о дизайне</h2>
      <button
        className={`movies-card__like ${pathname === "/saved-movies" && 'movies-card__like_delete'}
        ${isLiked && 'movies-card__like_active'}`}
        type='button'
        onClick={handleLikeClick}/>
    </div>
    <p className='movie-card__duration'>1ч 42м</p>
  </li>
  );
}