import genreType from '../mocks/genre';
import {ActionType} from './action';

const getMoviesByGenre = (movie, genre) => {
  return genre === genreType.allGenre ? movie : movie.filter((item) => item.genre === genre);
};

const initialState = {
  isFilmsLoaded: false,
  activeGenre: genreType.allGenre,
  films: [],
  filteredFilms: [],
  genres: Object.values(genreType),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        isFilmsLoaded: true,
        films: action.payload,
        filteredFilms: action.payload,
      };

    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.GET_FILTERED_MOVIES:
      return {
        ...state,
        filteredFilms: getMoviesByGenre(state.films, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
