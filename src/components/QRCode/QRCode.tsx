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
      />
    </div>
  );
};
