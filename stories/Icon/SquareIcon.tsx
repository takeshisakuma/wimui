import React from "react";

import PropTypes from "prop-types";




 const SquareIcon = ({ 
  size = 24, 
  color = 'currentColor',
   ...props }
  ) => (
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
  <circle cx="12" cy="12" r="10"/>
   </svg>
 );
 
 export default SquareIcon;



SquareIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,  
};
