export const ActionType = {
  CHANGE_GENRE: `/changeGenre`,
  GET_FILTERED_MOVIES: `/getFilteredMovies`,
  LOAD_FILMS: `/loadFilms`,
  REQUIRED_AUTHORIZATION: `/requiredAuthorization`,
  GET_USER_INFO: `/getUserInfo`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilteredMovies: (genre) => ({
    type: ActionType.GET_FILTERED_MOVIES,
    payload: genre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getUserInfo: (userInfo) => ({
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  }),
};
