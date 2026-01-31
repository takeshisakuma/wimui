import React from "react";
import PropTypes from "prop-types";
import "./scroll-area.scss";
import { useTranslation } from "react-i18next";

type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
  text: string;
  scrollAxis?: "y";
  maxHeight?: string; //px以外にも対応するため文字列にしている
};

export const ScrollArea = ({
  text,
  scrollAxis: _scrollAxis = "y",
  maxHeight = `10rem`,
  ..._props
}: ScrollAreaProps) => {
  const { t } = useTranslation();

  return (
    <div className="wim-scroll-area" style={{ maxHeight: maxHeight }}>
      {t(text)}
    </div>
  );
};

ScrollArea.propTypes = {
  text: PropTypes.string.isRequired,
  scrollAxis: PropTypes.oneOf(["y"]),
  /** Maximum height of the scroll area */
  maxHeight: PropTypes.string,
};
