import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({previewVideoLink, previewImage}) => {

  const videoRef = useRef();
  let timerId;

  const handleMouseEnter = () => {
    timerId = setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerId);
    videoRef.current.src = previewVideoLink;
  };

  return (
    <video
      poster={previewImage}
      src={previewVideoLink}
      width="280"
      height="175"
      muted={true}
      ref={videoRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
