import React from "react";

import PropTypes from "prop-types";

import "./icon.scss";

import { useTranslation } from 'react-i18next';


// SVG
import CircleIcon from './CircleIcon';
import SquareIcon from './SquareIcon';


// Map icon names to their components
const icons = {
  CircleIcon: CircleIcon,
  SquareIcon: SquareIcon,
};

type IconProps =  React.ComponentPropsWithoutRef<'div'> &{
  name: "CircleIcon" | "SquareIcon"; 
  size?:  number; 
  color?: string;
};

const Icon = ({ 
  name,
  size = 24,
  color = 'currentColor',
  ...props 
}: IconProps) => {

   if (!name) {
     return null;
   }
   const IconComponent = icons[name];
   if (!IconComponent) {
     return null;
   }
   return <IconComponent size={size} color={color} {...props} />;
 };
 
 
 export default Icon;


Icon.propTypes = {
  name: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  /** Icon size */
  size: PropTypes.oneOfType([PropTypes.number]),
  /** Icon color */
  color: PropTypes.string,
 }
