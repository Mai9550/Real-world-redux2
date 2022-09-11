import React from 'react';
import PropTypes from 'prop-types';

const PlusIc = ({ color }) => {
	return (
		<svg
			width='22'
			height='22'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3 12H21'
				stroke={color}
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 21V3'
				stroke={color}
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

PlusIc.propTypes = {
	color: PropTypes.string,
};
PlusIc.defaultProps = {
	color: '#333333',
};

export default PlusIc;
