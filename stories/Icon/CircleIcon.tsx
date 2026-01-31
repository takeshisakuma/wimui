import React from "react";

import PropTypes from "prop-types";

const CircleIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    fill="currentColor"
    {...props}
  >
    <circle
      cx="107.588"
      cy="106.555"
      r="105.263"
      transform="matrix(.95 0 0 .95 -2.21 -1.227)"
    />
  </svg>
);

export default CircleIcon;

CircleIcon.propTypes = {
  // SVGの標準的なprops
  className: PropTypes.string,
  style: PropTypes.object,
  // その他のSVG属性も受け付ける
};
