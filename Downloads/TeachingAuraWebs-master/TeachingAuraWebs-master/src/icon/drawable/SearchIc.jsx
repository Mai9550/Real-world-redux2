import React from 'react';
import PropTypes from 'prop-types';

const SearchIc = ({ color }) => {
  return (
    <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1283 24.4997C20.2494 24.4997 25.2116 19.5375 25.2116 13.4163C25.2116 7.29519 20.2494 2.33301 14.1283 2.33301C8.0071 2.33301 3.04492 7.29519 3.04492 13.4163C3.04492 19.5375 8.0071 24.4997 14.1283 24.4997Z" fill={color}/>
      <path d="M25.5619 25.6667C25.3519 25.6667 25.1419 25.585 24.9902 25.4333L22.8202 23.2633C22.5052 22.9483 22.5052 22.435 22.8202 22.1083C23.1352 21.7933 23.6486 21.7933 23.9752 22.1083L26.1452 24.2783C26.4602 24.5933 26.4602 25.1067 26.1452 25.4333C25.9819 25.585 25.7719 25.6667 25.5619 25.6667Z" fill={color}/>
    </svg>
  );
};

SearchIc.propTypes = {
  color: PropTypes.string,
}
SearchIc.defaultProps = {
  color: "#888888",
}

export default SearchIc;
