import React from "react";
import classNames from "classnames";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import "./qrcode.scss";

type QRCodeProps = {
  value: string;
  size?: number;
  level?: "L" | "M" | "Q" | "H";
  bgColor?: string;
  fgColor?: string;
  marginSize?: number;
  renderAs?: "svg" | "canvas";
  imageSettings?: React.ComponentProps<typeof QRCodeSVG>["imageSettings"];
  className?: string;
  /** Accessible label describing what the QR code represents */
  "aria-label"?: string;
};

export const QRCode = ({
  value,
  size = 128,
  level = "M",
  bgColor = "#FFFFFF",
  fgColor = "#000000",
  marginSize = 0,
  renderAs = "svg",
  imageSettings,
  className,
  "aria-label": ariaLabel,
}: QRCodeProps) => {
  const Component = renderAs === "svg" ? QRCodeSVG : QRCodeCanvas;

  return (
    <div className={classNames("wim-qrcode", className)}>
      <Component
        value={value}
        size={size}
        level={level}
        bgColor={bgColor}
        fgColor={fgColor}
        marginSize={marginSize}
        imageSettings={imageSettings}
        aria-label={ariaLabel ?? value}
      />
    </div>
  );
};
