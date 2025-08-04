import React from "react";

import PropTypes from "prop-types";

import "./span.scss";

import { useTranslation } from 'react-i18next';



type SpanProps =  React.ComponentPropsWithoutRef<'span'> &{
  size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
  color?: "black" | "deepgray" | "gray" | "lightgray" | "white" |"error";
  weight?: "normal" | "bold";
  style?:"normal" | "italic";
  content: string;
};




export const Span = ({

  size = "medium",
  content = "span",
  color = "black",
  weight= "normal",
  style="normal",
  ...props
}: SpanProps) => {


  const { t } = useTranslation();

  return (
    <span
          className={[`wim-span`,`font-color-${color}`, `font-size-${size}`, `font-weight-${weight}`, `font-style-${style}`].join(
        " ",
      )}
    
    >{t(content)}</span>
  );
};

Span.propTypes = {
  
  size: PropTypes.oneOf(["ex-small", "small", "medium", "large", "ex-large"]),
      
  color: PropTypes.oneOf(["black", "deepgray", "gray", "lightgray", "white", "error"]),

  weight: PropTypes.oneOf(["normal", "bold"]),  

  style: PropTypes.oneOf(["normal","italic"]),

  content: PropTypes.string.isRequired,

  onClick: PropTypes.func,   

};  