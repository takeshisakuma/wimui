import React from "react";
import PropTypes from "prop-types";

const PlayIcon = ({ ...props }) => (
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
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);

export default PlayIcon;

PlayIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
