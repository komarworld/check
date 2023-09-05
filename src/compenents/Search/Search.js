import Checkbox from '../CheckBox/CheckBox';
import './Search.css';

function SearchForm() {
  return (
    <section className='search' aria-label='Поисковая строка'>
      <div className='search__container'>
        <form className='search-form' autoComplete='off'>
          <input className='search-form__input'type='text' autoComplete='nope' minLength='2' placeholder='Фильм' required />
          <button className='search-form__button' type='submit' aria-label='Поиск'></button>
          <Checkbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;