import React from "react";

import PropTypes from "prop-types";




 const CircleIcon = ({ size = 24, ...props }) => (
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={size}
     height={size}
     viewBox="0 0 24 24"
     fill="currentColor"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     {...props}
   >

  <circle cx="12" cy="12" r="10"/>
   </svg>
 );
 
 export default CircleIcon;



CircleIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,  
};

