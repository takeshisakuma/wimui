import React from "react";
import PropTypes from "prop-types";

const ChevronDownIcon = ({ ...props }) => (
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
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export default ChevronDownIcon;

ChevronDownIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
