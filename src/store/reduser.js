import genreType from '../mocks/genre';
import films from '../mocks/films';
import {ActionType} from './action';

const getMoviesByGenre = (movie, genre) => {
  return genre === genreType.allGenre ? movie : movie.filter((item) => item.genre === genre);
};

const initialState = {
  activeGenre: genreType.allGenre,
  films,
  filteredFilms: films,
  genres: Object.values(genreType),
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
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

export default reduser;
