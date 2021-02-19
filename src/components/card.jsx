import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import VideoPlayer from '../components/video-player/video-player';

const Card = ({name, img, id, video}) => {


  return (
    <article className="small-movie-card catalog__movies-card">
        <VideoPlayer previewVideoLink={video} previewImage={img} />
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
