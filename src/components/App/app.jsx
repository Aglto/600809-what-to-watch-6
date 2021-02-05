import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';
import SignIn from '../sign-in/sign-in';

const App = ({title, genre, date}) => {
  return (
    <MainPage
      title={title}
      genre={genre}
      date={date}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default App;
