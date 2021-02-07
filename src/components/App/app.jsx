import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import Player from '../player/player';
import FilmPage from '../film-page/film-page';

const App = ({title, genre, date}) => {
  return (
    
    <BrowserRouter>
      <Switch>

        <Route>
        <MainPage
          title={title}
          genre={genre}
          date={date}
        />
        </Route>

        <Route>

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
