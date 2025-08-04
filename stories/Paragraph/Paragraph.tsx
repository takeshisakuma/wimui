import React from "react";

import PropTypes from "prop-types";

import "./paragraph.scss";

import { useTranslation } from 'react-i18next';



type ParagraphProps =  React.ComponentPropsWithoutRef<'p'> &{
  size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
  color?: "black" | "deepgray" | "gray" | "lightgray" | "white" |"error" ;
  weight?: "normal" | "bold" ;
  lineHeight?: "normal-jpan" | "tight-jpan" | "loose-jpan" | "normal-latn" | "tight-latn" | "loose-latn";
  style?:"normal" | "italic";
  content: string;
};




export const Paragraph = ({

  size = "medium",
  content = "text",
  color = "black",
  weight= "normal",
  lineHeight = "normal-latn",
  style="normal",
  ...props
}: ParagraphProps) => {


  const { t } = useTranslation();

  return (
    <p
          className={[`wim-paragraph`,`font-color-${color}`, `font-size-${size}`, `font-weight-${weight}`, `font-lines-${lineHeight}`, `font-style-${style}`].join(
        " ",
      )}
    
    >{t(content)}</p>
  );
};

Paragraph.propTypes = {
  
  size: PropTypes.oneOf(["ex-small", "small", "medium", "large", "ex-large"]),
      
  color: PropTypes.oneOf(["black", "deepgray", "gray", "lightgray", "white", "error"]),

  weight: PropTypes.oneOf(["normal", "bold"]),  

  style: PropTypes.oneOf(["normal","italic"]),

  lineHeight: PropTypes.oneOf(["normal-jpan", "tight-jpan", "loose-jpan", "normal-latn", "tight-latn", "loose-latn"]),  

  content: PropTypes.string.isRequired,

  onClick: PropTypes.func,   

};  
