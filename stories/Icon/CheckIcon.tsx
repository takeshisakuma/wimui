import React from "react";
import PropTypes from "prop-types";

const CheckIcon = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export default CheckIcon;

CheckIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
