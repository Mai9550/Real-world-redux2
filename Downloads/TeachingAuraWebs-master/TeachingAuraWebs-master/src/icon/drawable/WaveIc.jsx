import React from 'react';
import PropTypes from 'prop-types';

const WaveIc = ({ color }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.2" cx="29.5" cy="29.5" r="29.5" fill={color}/>
      <circle opacity="0.4" cx="29.5" cy="29.5" r="22.5" fill={color}/>
      <circle opacity="0.6" cx="29.5" cy="29.5" r="14.5" fill={color}/>
      <circle opacity="0.8" cx="29.5" cy="29.5" r="7.5" fill={color}/>
      <path d="M29.352 32.768H33.58V34H28.05V24.2H29.352V32.768Z" fill="white"/>
    </svg>
  );
};

WaveIc.propTypes = {
  color: PropTypes.string,
}
WaveIc.defaultProps = {
  color: "#FF1148",
}

export default WaveIc;
