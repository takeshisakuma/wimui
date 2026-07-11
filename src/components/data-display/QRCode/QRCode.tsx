import React from "react";
import classNames from "classnames";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import styles from "./qrcode.module.scss";

type QRCodeProps = {
  /** Value encoded in the QR code */
  value: string;
  /** Size of the QR code in px */
  size?: number;
  /** Error correction level */
  level?: "L" | "M" | "Q" | "H";
  /** Background color */
  bgColor?: string;
  /** Foreground (module) color */
  fgColor?: string;
  /** Size of the quiet-zone margin, in modules */
  marginSize?: number;
  /** Whether to render as an SVG or a canvas */
  renderAs?: "svg" | "canvas";
  /** Settings for an image embedded in the center of the QR code */
  imageSettings?: React.ComponentProps<typeof QRCodeSVG>["imageSettings"];
  /** Additional class names */
  className?: string;
  /** Accessible label describing what the QR code represents */
  "aria-label"?: string;
};

export const QRCode = ({
  value,
  size = 128,
  level = "M",
  bgColor = "var(--wim-color-bg-component)",
  fgColor = "var(--wim-color-text-primary)",
  marginSize = 0,
  renderAs = "svg",
  imageSettings,
  className,
  "aria-label": ariaLabel,
}: QRCodeProps) => {
  const Component = renderAs === "svg" ? QRCodeSVG : QRCodeCanvas;

  return (
    <div className={classNames("wim-qr-code", styles.root, className)}>
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
