import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';
import mainFilm from './mocks/main-film';
import films from './mocks/films';

ReactDOM.render(
    <App
      films={films}
      mainFilm={mainFilm}
    />,
    document.querySelector(`#root`)
);
