import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import Player from '../player/player';
import FilmPage from '../film-page/film-page';
import NotFoundPage from '../not-found-page/not-found-page';
import AddReview from '../add-review/add-review';
import {fetchFilmList} from '../../store/api-actions';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

const App = (props) => {
  const {isFilmsLoaded, onLoadData, films, mainFilm} = props;
  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadData();
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (

    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <MainPage
            mainFilm={mainFilm}
          />
        </Route>

        <Route path='/login' exact>
          <SignIn />
        </Route>

        <PrivateRoute exact
          path="/mylist"
          render={() => <MyList films = {films}/>}
        />

        <Route path='/films/:id' exact>
          <FilmPage films={films}/>
        </Route>

        <Route path='/films/page/review' exact>
          <MoviePageReviews />
        </Route>

        <Route path='/player/:id' exact>
          <Player films={films}/>
        </Route>

        <PrivateRoute exact
          path="/films/:id/review"
          render={() => <AddReview film = {films}/>}
        />

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFilmsLoaded: state.isFilmsLoaded,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmList());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
