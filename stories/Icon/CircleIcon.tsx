import React from "react";

import PropTypes from "prop-types";




 const CircleIcon = ({ size = 24, color = 'currentColor', ...props }) => (
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={size}
     height={size}
     viewBox="0 0 24 24"
     fill={color}
     stroke={color}
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     {...props}
   >

   <path d="M0 0h200v200H0z"/>
   </svg>
 );
 
 export default CircleIcon;



CircleIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,  
};

