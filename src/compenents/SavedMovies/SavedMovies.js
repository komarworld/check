import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className="saved-movies" aria-label="Сохранённые фильмы">
      <Search />
      <MoviesCardList />
    </main>
  )
}

export default SavedMovies