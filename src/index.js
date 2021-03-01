import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/app';
import mainFilm from './mocks/main-film';
import films from './mocks/films';
import reducer from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        mainFilm={mainFilm}
      />
    </Provider>,
    document.querySelector(`#root`)
);
