import React from 'react';
import Card from '../card';
import PropTypes from 'prop-types';
import {snakeToCamelAdapter} from '../../adapters/camel-case-adapter';

const FilmList = ({films}) => {

  const movies = snakeToCamelAdapter(films);

  return (
    <React.Fragment>
      {movies.map((item) => <Card name={item.name} img={item.previewImage} video={item.videoLink} id={item.id} key={item.id} />)}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};


export default FilmList;
