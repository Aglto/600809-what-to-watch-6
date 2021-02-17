import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Card = ({name, img, id}) => {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <NavLink className="small-movie-card__link" to={`/films/${id}`}>{name}</NavLink>
      </h3>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
