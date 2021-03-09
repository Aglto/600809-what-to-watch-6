import {ActionCreator} from './action';
import {APIRoute} from '../const';
import {AuthorizationStatus} from '../const';
import {snakeToCamelAdapter} from '../adapters/camel-case-adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(snakeToCamelAdapter(data)));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.getUserInfo(data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
