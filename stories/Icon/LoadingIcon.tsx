import React from "react";
import PropTypes from "prop-types";

const LoadingIcon = ({ ...props }) => (
    <svg
        viewBox="0 0 200 200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g transform="matrix(0.897448,0,0,0.897448,10.255182,10.255182)">
            <path d="M210.876,111.143C205.278,167.418 157.738,211.427 100,211.427C38.502,211.427 -11.427,161.498 -11.427,100C-11.427,38.502 38.502,-11.427 100,-11.427C113.953,-11.427 127.31,-8.857 139.624,-4.165L129.336,16.412C120.153,13.185 110.28,11.43 100,11.43C51.117,11.43 11.43,51.117 11.43,100C11.43,148.883 51.117,188.57 100,188.57C145.109,188.57 182.387,154.774 187.874,111.143L210.876,111.143Z" />
        </g>
    </svg>
);

export default LoadingIcon;

LoadingIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
