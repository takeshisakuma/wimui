import React from "react";

import PropTypes from "prop-types";

import "./icon.scss";

import { useTranslation } from 'react-i18next';


// SVG
import CircleIcon from './CircleIcon';
import SquareIcon from './SquareIcon';


// アイコン名をコンポーネントにマッピング
const icons = {
  CircleIcon: CircleIcon,
  SquareIcon: SquareIcon,
};

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: "CircleIcon" | "SquareIcon"; 
  size?: "small" | "medium" | "large";
  color?: "semantic-danger" | "semantic-success" | "semantic-warning" | "semantic-primary" | "semantic-secondary";
};

const Icon = ({ 
  name,
  size = "medium",
  color = "semantic-primary",// このcolorプロパティは直接使わない
  ...props 
}: IconProps) => {



   if (!name) {
     return null;
   }
   const IconComponent = icons[name];
   if (!IconComponent) {
     return null;
   }



  // colorプロパティから"semantic-"を除いてクラス名にする
  const colorClass = color.replace('semantic-', '');

   return <IconComponent 
    className={[`wim-icon`, `font-size-${size}`,colorClass].join(" ")}
    

   {...props} />;
 };
 
 
 export default Icon;


Icon.propTypes = {
  name: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  /** Icon size */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Icon color */
   /* color: PropTypes.oneOf(["semantic-danger", "semantic-success", "semantic-warning", "semantic-primary", "semantic-secondary"]),*/
  color: PropTypes.oneOf(["semantic-danger", "semantic-success", "semantic-warning", "semantic-primary", "semantic-secondary"]),

 }
