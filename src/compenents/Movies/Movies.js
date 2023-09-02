import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import { getAllMovies } from '../../utils/MoviesApi'
import { useResize } from '../../utils/CheckResize';
import filterMovies from '../../utils/Filter';


function Movies({
  likedMovies,
  setLikedMovies,
  movies,
  setMovies,
  searchedMovies,
  setSearchedMovies,
  notMoviesResult,
  setNotMoviesResult,
  handleNotMoviesResult,
  checkedShort,
  setCheckedShort,
}) {

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [preloaderOn, setPreloaderOn] = useState(false);
  const [shortMovies, setShortMovies] = useState([]);
  const [startItems, setStartItems] = useState(5);;
  const [addItems, setAddItems] = useState(2);
  const [buttonMore, setButtonMore] = useState(false);
  const windowWidth = useResize();
  console.log('movie start')

  useEffect(() => {
    settingAmountFilms();
    handleShowButtonMore(startItems);
  }, [windowWidth]);

    /*
  useEffect(() => {
    settingAmountFilms();
    checkedShort ? handleShowButtonMore(shortMovies) : handleShowButtonMore(searchedMovies);
  }, [windowWidth]);
  */

  useEffect(() => {
    if (localStorage.movieSearchText) {
      setValue(localStorage.getItem('movieSearchText'));
      setCheckedShort(JSON.parse(localStorage.getItem('checkedShort')));
      setShortMovies(JSON.parse(localStorage.getItem('shortMovies')));
      setSearchedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
    }
  }, [])

  useEffect(() => {
    if (movies[0]) {
      setNotMoviesResult(false);
    }
    handleNotMoviesResult(shortMovies, searchedMovies);
    savingLocalData();
    handleShowButtonMore(startItems);
  }, [searchedMovies, shortMovies])

/*
  useEffect(() => {
    isChecked ? handleShowButtonMore(shortMovies) : handleShowButtonMore(searchedMovies);
    handleNotMoviesResult();
    savingLocalData();
  }, [searchedMovies, shortMovies])
*/ 

  function handleChange(event) {
    setValue(event.target.value);
    if (event.target.value === '') {
      setIsValid(false);
      setButtonDisabled(true);
    } else {
      setIsValid(true);
      setButtonDisabled(false);
    }
  }
  
  function showButtonMore(moviesArr, InitialMovies) {
    moviesArr.length >= InitialMovies + 1 ?
      setButtonMore(true) : setButtonMore(false);
  }

  function handleShowButtonMore(InitialMovies) {
    checkedShort ?
      showButtonMore(shortMovies, InitialMovies) :
      showButtonMore(searchedMovies, InitialMovies);
  }

  function handleClickMore() {
    const sum = startItems + addItems;
    setStartItems(sum);
    handleShowButtonMore(sum);
  }

  /*
  function handleNotMoviesResult() {
     if (movies[0]) {
      if (isChecked) {
        shortMovies.length === 0 ? setNotMoviesResult(true) : setNotMoviesResult(false);
      } else {
        searchedMovies.length === 0 ? setNotMoviesResult(true) : setNotMoviesResult(false);
      }
    }
  } 
*/

  /*
  function filterMovies(moviesList, filter) {
    return moviesList.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()) &&
      (filter ? movie.duration < 40 : true));
  }
*/

  function savingLocalData() {
    localStorage.setItem('movieSearchText', value);
    localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
    localStorage.setItem('checkedShort', JSON.stringify(checkedShort));
    localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
  }
  
  function handleGetAllMovies(moviesList) {
    setButtonMore(false);
    getAllMovies()
    .then((res) => {
      setMovies(res);
      moviesList === searchedMovies ? 
        setSearchedMovies(filterMovies(res, value, false)) : 
        setShortMovies(filterMovies(res, value, true));
        console.log('получение aRR')
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setButtonDisabled(false);
      setPreloaderOn(false);
    })
  }

  function findMovies(checked) {
    setButtonDisabled(true);
    if (value === '') {
      setIsValid(false);
    } else {
      setPreloaderOn(true);
      setIsValid(true);
      settingAmountFilms();
      if (movies[0]) {
        setButtonDisabled(false);
        setPreloaderOn(false);
        checked ?
          setSearchedMovies(filterMovies(movies, value, false)) :
          setShortMovies(filterMovies(movies, value, true));
      } else {
        checked ?
          handleGetAllMovies(searchedMovies) :
          handleGetAllMovies(shortMovies);
      }
    }
  }

  function handleChecked() {
    findMovies(checkedShort);
    setCheckedShort(!checkedShort);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    findMovies(!checkedShort);
  }

  function settingAmountFilms() {
    if (windowWidth >= 1000) {
      setStartItems(16);
      setAddItems(4);
    } else if (windowWidth >= 800) {
      setStartItems(12);
      setAddItems(3);
    } else if (windowWidth >= 500) {
      setStartItems(8);
      setAddItems(2);
    } else {
      setStartItems(5);
      setAddItems(2);
    }
  }

  return (
    <main className='movies' aria-label='Страница поиска фильмов'>
      <SearchForm 
      value={value}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isValid={isValid}
      buttonDisabled={buttonDisabled}
      checkedShort={checkedShort}
      handleChecked={handleChecked}
      />
      {preloaderOn ? <Preloader /> :
      <MoviesCardList 
        searchedMovies={searchedMovies}
        notMoviesResult={notMoviesResult}
        startItems={startItems}
        likedMovies={likedMovies}
        setLikedMovies={setLikedMovies}
        shortMovies={shortMovies}
        checkedShort={checkedShort}
        buttonMore={buttonMore}
        handleClickMore={handleClickMore} />}
    </main>
  );
}


export default Movies;