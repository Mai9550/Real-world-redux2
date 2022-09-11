import React from 'react';
import PropTypes from 'prop-types';

const StarIc = ({ color }) => {
  return (
    <svg width="64" height="64" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.1">
      <path opacity="0.1" d="M162.999 159.165V162.987H159.176" stroke="#20263C" stroke-miterlimit="10"/>
      <path opacity="0.1" d="M151.825 162.987H8.50586" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
      <path opacity="0.1" d="M4.82286 162.987H1V159.165" stroke="#20263C" stroke-miterlimit="10"/>
      <path opacity="0.1" d="M1 151.812V8.49268" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
      <path opacity="0.1" d="M1 4.82322V1.00037H4.82286" stroke="#20263C" stroke-miterlimit="10"/>
      <path opacity="0.1" d="M12.1758 1H155.495" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
      <path opacity="0.1" d="M159.176 1H162.999V4.82286" stroke="#20263C" stroke-miterlimit="10"/>
      <path opacity="0.1" d="M162.998 12.1625V155.494" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
      </g>
      <path d="M54.5195 120.783L81.9241 102.748L109.314 120.783L81.9241 36.6801L54.5195 120.783Z" fill={color}/>
      <path d="M68.5379 63.4401L37.9551 74.2515L61.9194 82.5544L68.5379 63.4401Z" fill={color}/>
      <path d="M125.88 74.2515L95.2969 63.4401L101.915 82.5544L125.88 74.2515Z" fill={color}/>
    </svg>
  );
};

StarIc.propTypes = {
  color: PropTypes.string,
}
StarIc.defaultProps = {
  color: "#414042",
}

export default StarIc;
