import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import Player from '../player/player';
import FilmPage from '../film-page/film-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {

  const {title, genre, date} = props;

  return (

    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <MainPage
            title={title}
            genre={genre}
            date={date}
          />
        </Route>

        <Route path='/login' exact>
          <SignIn />
        </Route>

        <Route path='/mylist' exact>
          <MyList />
        </Route>

        <Route path='/films/:id' exact>
          <FilmPage />
        </Route>

        <Route path='/films/:id/review' exact>
          <MoviePageReviews />
        </Route>

        <Route path='/player/:id' exact>
          <Player />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default App;
