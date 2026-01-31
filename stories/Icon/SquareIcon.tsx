import React from "react";

import PropTypes from "prop-types";

const SquareIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0h200v199.999H0z" />
  </svg>
);

export default SquareIcon;

SquareIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
