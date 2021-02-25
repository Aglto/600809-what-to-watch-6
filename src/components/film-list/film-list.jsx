import React from 'react';
import Card from '../card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const FilmList = ({filteredFilms}) => {

  return (
    <React.Fragment>
      {filteredFilms.map((item) => <Card name={item.name} img={item.previewImage} video={item.videoLink} id={item.id} key={item.id} />)}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  filteredFilms: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
});

export {FilmList};
export default connect(mapStateToProps, null)(FilmList);
