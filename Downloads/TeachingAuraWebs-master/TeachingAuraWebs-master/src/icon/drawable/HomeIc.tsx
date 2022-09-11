import React from "react";
import PropTypes from "prop-types";

const HomeIc = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1476 3.20669V6.054H17.453V3.20669H23.1476ZM8.91108 3.20669V11.7486H3.21645V3.20669H8.91108ZM23.1476 14.5959V23.1379H17.453V14.5959H23.1476ZM8.91108 20.2906V23.1379H3.21645V20.2906H8.91108ZM25.995 0.359375H14.6057V8.90132H25.995V0.359375ZM11.7584 0.359375H0.369141V14.5959H11.7584V0.359375ZM25.995 11.7486H14.6057V25.9852H25.995V11.7486ZM11.7584 17.4433H0.369141V25.9852H11.7584V17.4433Z"
        fill={color}
      />
    </svg>
  );
};

HomeIc.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
HomeIc.defaultProps = {
  color: "#dcdcdc",
  height: "26px",
  width: "26px",
};

export default HomeIc;
