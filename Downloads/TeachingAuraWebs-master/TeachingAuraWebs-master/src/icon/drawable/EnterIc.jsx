import React from 'react';
import PropTypes from 'prop-types';

const EnterIc = ({ color }) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M21 7.52001V13.4C21 13.74 20.67 13.98 20.35 13.88L16.42 12.66C15.34 12.33 14.18 12.61 13.39 13.4C12.59 14.2 12.3 15.37 12.64 16.45L13.85 20.35C13.95 20.67 13.71 21 13.37 21H7.52C4.07 21 2 18.94 2 15.48V7.52001C2 4.06001 4.07 2.00002 7.52 2.00002H15.48C18.93 2.00002 21 4.06001 21 7.52001Z'
				fill={color}
			/>
			<path
				d='M21.9597 18.8399L20.3297 19.3899C19.8797 19.5399 19.5197 19.8899 19.3697 20.3499L18.8197 21.9799C18.3497 23.3899 16.3697 23.3599 15.9297 21.9499L14.0797 15.9999C13.7197 14.8199 14.8097 13.7199 15.9797 14.0899L21.9397 15.9399C23.3397 16.3799 23.3597 18.3699 21.9597 18.8399Z'
				fill={color}
			/>
		</svg>
	);
};

EnterIc.propTypes = {
	color: PropTypes.string,
};
EnterIc.defaultProps = {
	color: '#333333',
};

export default EnterIc;
