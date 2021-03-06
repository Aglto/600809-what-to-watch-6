import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/app';
import mainFilm from './mocks/main-film';
import reducer from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api';
import thunk from "redux-thunk";


const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
    <Provider store={store}>
      <App
        mainFilm={mainFilm}
      />
    </Provider>,
    document.querySelector(`#root`)
);
