
function filterMovies(moviesArr, value, isshort) {
  return moviesArr.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()) &&
    (isshort ? movie.duration < 40 : true));
}

export default filterMovies
