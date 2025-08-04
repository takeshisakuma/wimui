import React from "react";

import PropTypes from "prop-types";

import "./button.scss";

import { useTranslation } from 'react-i18next';

type ButtonProps =  React.ComponentPropsWithoutRef<'button'> &{
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label: string;
  weight?:"bold"| "normal";
  role?:"primary"|"secondary"|"danger";
  color?:"white"|"black";
  state?:"abled"|"disabled";
};

export const Button = ({
  size = "medium",
  label,
  weight="bold",
  color="black",
  role="secondary",
  state="abled",
  ...props
}: ButtonProps) => {


  const { t } = useTranslation();

  return (
    <button
      type="button"
          className={[`wim-button`, `font-size-${size}`, `font-weight-${weight}`,`button-role-${role}`].join(
        " ",
      )}
      disabled={state === 'disabled'} 
      {...props}
    >

       {t(label)}
    </button>

  );
};

Button.propTypes = {
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
  weight: PropTypes.oneOf(["normal", "bold"]),
  color: PropTypes.oneOf(["black", "deepgray", "gray", "lightgray", "white", "error"]),
  role: PropTypes.oneOf(["primary", "secondary", "danger"]),
  state: PropTypes.oneOf(["abled", "disabled"])
}
