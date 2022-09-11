import React from "react";
import PropTypes from "prop-types";

const AllBatchesIc = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0496 19.9309V8.54165C27.0496 6.97563 25.7684 5.69434 24.2023 5.69434H4.27114C2.70512 5.69434 1.42383 6.97563 1.42383 8.54165V19.9309C1.42383 21.4969 2.70512 22.7782 4.27114 22.7782H24.2023C25.7684 22.7782 27.0496 21.4969 27.0496 19.9309ZM24.2023 19.9309H4.27114V8.54165H24.2023V19.9309ZM14.2367 9.96531C11.8735 9.96531 9.96577 11.873 9.96577 14.2363C9.96577 16.5995 11.8735 18.5072 14.2367 18.5072C16.6 18.5072 18.5077 16.5995 18.5077 14.2363C18.5077 11.873 16.6 9.96531 14.2367 9.96531ZM32.7443 9.96531V25.6255C32.7443 27.1915 31.463 28.4728 29.897 28.4728H5.6948C5.6948 27.0492 5.6948 27.1915 5.6948 25.6255H29.897V9.96531C31.463 9.96531 31.3206 9.96531 32.7443 9.96531Z"
        fill={color}
      />
    </svg>
  );
};

AllBatchesIc.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
AllBatchesIc.defaultProps = {
  color: "#dcdcdc",
  height: "35px",
  width: "35px",
};

export default AllBatchesIc;
