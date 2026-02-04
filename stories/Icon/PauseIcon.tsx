import React from "react";
import PropTypes from "prop-types";

const PauseIcon = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
);

export default PauseIcon;

PauseIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
