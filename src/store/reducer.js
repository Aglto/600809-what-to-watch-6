import genreType from '../mocks/genre';
import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const getMoviesByGenre = (movie, genre) => {
  return genre === genreType.allGenre ? movie : movie.filter((item) => item.genre === genre);
};

const initialState = {
  isFilmsLoaded: false,
  activeGenre: genreType.allGenre,
  films: [],
  filteredFilms: [],
  genres: Object.values(genreType),
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null,
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
