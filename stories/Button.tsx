import React from "react";

import PropTypes from "prop-types";

import "./button.scss";

import { useTranslation } from 'react-i18next';

type ButtonProps =  React.ComponentPropsWithoutRef<'button'> &{
  primary?: boolean;
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label: string;
};

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >

       {t(label)}
    </button>

  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
