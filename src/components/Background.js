import React from 'react';
import './Background.css';

const Background = ({ videoSrc }) => {
  return (
    <div className="background-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
