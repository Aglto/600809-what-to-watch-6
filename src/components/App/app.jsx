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
import AddReview from '../add-review/add-review';

const App = (props) => {
  const {films, mainFilm} = props;
  
  return (

    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <MainPage
            films={films}
            mainFilm={mainFilm}
          />
        </Route>

        <Route path='/login' exact>
          <SignIn />
        </Route>

        <Route path='/mylist' exact>
          <MyList films={films.slice(0, 8)}/>
        </Route>

        <Route path='/films/:id' exact>
          <FilmPage movies={films}/>
        </Route>

        <Route path='/films/page/review' exact>
          <MoviePageReviews />
        </Route>

        <Route path='/player/:id' exact>
          <Player movies={films}/>
        </Route>

        <Route path='/films/:id/review' exact>
          <AddReview movies={films}/>
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  mainFilm: PropTypes.object.isRequired,
}

export default App;
