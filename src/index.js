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
import {checkAuth} from '../src/store/api-actions';
import {AuthorizationStatus} from './const';
import {ActionCreator} from './store/action';


const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        mainFilm={mainFilm}
      />
    </Provider>,
    document.querySelector(`#root`)
);
