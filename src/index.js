import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app';

const data = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
};

ReactDOM.render(
    <App
      title={data.title}
      genre={data.genre}
      date={data.date}
    />,
    document.querySelector(`#root`)
);
