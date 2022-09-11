import React from "react";
import PropTypes from "prop-types";

const NotificationIc = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.05 3.27114H21.6263V0.423828H18.779V3.27114H7.38977V0.423828H4.54245V3.27114H3.1188C1.55278 3.27114 0.271484 4.55243 0.271484 6.11846V26.0497C0.271484 27.6157 1.55278 28.897 3.1188 28.897H23.05C24.616 28.897 25.8973 27.6157 25.8973 26.0497V6.11846C25.8973 4.55243 24.616 3.27114 23.05 3.27114ZM23.05 26.0497H3.1188V11.8131H23.05V26.0497ZM3.1188 8.96577V6.11846H23.05V8.96577H3.1188ZM11.0343 23.8572L19.4766 15.4149L17.9675 13.9059L11.0343 20.8391L8.03041 17.8351L6.52134 19.3442L11.0343 23.8572Z"
        fill={color}
      />
    </svg>
  );
};

NotificationIc.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
NotificationIc.defaultProps = {
  color: "#dcdcdc",
  height: "26px",
  width: "29px",
};

export default NotificationIc;
