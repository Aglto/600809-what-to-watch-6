import {ActionCreator} from './action';
import {APIRoute} from '../const';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data));
    })
);
