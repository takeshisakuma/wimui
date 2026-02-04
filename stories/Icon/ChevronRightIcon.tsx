import React from "react";
import PropTypes from "prop-types";

const ChevronRightIcon = ({ ...props }) => (
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
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

export default ChevronRightIcon;

ChevronRightIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
