export const getSelectedMovieId = ()=> JSON.parse(window.localStorage.getItem('selectedMovieId'))
export const setSelectedMovieId = (movieId)=> window.localStorage.setItem('selectedMovieId', JSON.stringify(movieId))