import React from "react";
import PropTypes from "prop-types";
import "./scrollarea.scss";
import { useTranslation } from "react-i18next";

type ScrollareaProps = React.ComponentPropsWithoutRef<"div"> & {
  text: string;
  scrollAxis?: "y";
  maxHeight?: string; //px以外にも対応するため文字列にしている
};

export const Scrollarea = ({
  text,
  scrollAxis = "y",
  maxHeight = `10rem`,
  ...props
}: ScrollareaProps) => {
  const { t } = useTranslation();

  // スタイルを動的に生成
  const style: React.CSSProperties = {};

  return (
    <div className="wim-scrollarea" style={{ maxHeight: maxHeight }}>
      {t(text)}
    </div>
  );
};

Scrollarea.propTypes = {
  text: PropTypes.string.isRequired,
  scrollAxis: PropTypes.oneOf(["y"]),
  /** Maximum height of the scroll area */
  maxHeight: PropTypes.string,
};
