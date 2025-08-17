import React from "react";

import PropTypes from "prop-types";




 const SquareIcon = ({ 
   ...props }
  ) => (
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
<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
   </svg>
 );
 
 export default SquareIcon;


SquareIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};