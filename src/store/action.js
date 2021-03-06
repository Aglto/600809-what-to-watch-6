export const ActionType = {
  CHANGE_GENRE: `/changeGenre`,
  GET_FILTERED_MOVIES: `/getFilteredMovies`,
  LOAD_FILMS: `/loadFilms`,
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
};
