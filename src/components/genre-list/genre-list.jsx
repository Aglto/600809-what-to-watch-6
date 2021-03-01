import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';


const GenreList = ({genres, activeGenre, onGenreClick}) => {

  return (
    <Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, i) => (
          <li key={genre + i} className={`catalog__genres-item ${activeGenre === genre && `catalog__genres-item--active`}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre);
            }}
            >{genre}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};


const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilteredMovies(genre));
  }
});

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
