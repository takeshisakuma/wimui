import React from "react";

import PropTypes from "prop-types";

const CircleIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // 引用符で囲む
    stroke="currentColor" // 引用符で囲む
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default CircleIcon;

CircleIcon.propTypes = {
  // SVGの標準的なprops
  className: PropTypes.string,
  style: PropTypes.object,
  // その他のSVG属性も受け付ける
};
