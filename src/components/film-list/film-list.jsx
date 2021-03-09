import React from 'react';
import Card from '../card';
import PropTypes from 'prop-types';

const FilmList = ({films}) => {

  return (
    <React.Fragment>
      {films.map((item) => <Card name={item.name} img={item.previewImage} video={item.videoLink} id={item.id} key={item.id} />)}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};


export default FilmList;
