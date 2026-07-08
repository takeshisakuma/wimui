import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./watermark.module.scss";

type WatermarkProps = {
  /** Text content of the watermark (a string or multiple lines) */
  content?: string | string[];
  /** Image URL used as the watermark instead of text */
  image?: string;
  /** Width of a single watermark tile (px) */
  width?: number;
  /** Height of a single watermark tile (px) */
  height?: number;
  /** Rotation angle of the watermark (degrees) */
  rotate?: number;
  /** z-index of the watermark layer */
  zIndex?: number;
  /** Opacity of the watermark */
  opacity?: number;
  /** Gap between watermark tiles [x, y] (px) */
  gap?: [number, number];
  /** Offset of the watermark pattern [x, y] (px) */
  offset?: [number, number];
  /** Content overlaid by the watermark */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
};

export const Watermark = (props: WatermarkProps) => {
  const {
    content,
    image,
    width = 125,
    height = 64,
    rotate = -22,
    zIndex = 9,
    opacity = 0.15,
    gap = [100, 100],
    offset = [50, 50],
    children,
    className,
  } = props;

  const [base64, setBase64] = useState("");
  const [markSize, setMarkSize] = useState({ w: width, h: height });

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ratio = window.devicePixelRatio || 1;

    if (image) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = image;
      img.onload = () => {
        const aspect = img.width / img.height;
        let w = props.width;
        let h = props.height;

        if (w === undefined && h === undefined) {
          w = 125;
          h = w / aspect;
        } else if (w !== undefined && h === undefined) {
          h = w / aspect;
        } else if (w === undefined && h !== undefined) {
          w = h * aspect;
        } else {
          w = w!;
          h = h!;
        }

        const canvasWidth = (gap[0] + w) * ratio;
        const canvasHeight = (gap[1] + h) * ratio;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.translate(offset[0] * ratio, offset[1] * ratio);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.globalAlpha = opacity;
        ctx.drawImage(img, 0, 0, w * ratio, h * ratio);
        setBase64(canvas.toDataURL());
        setMarkSize({ w, h });
      };
    } else if (content) {
      const w = width;
      const h = height;
      const canvasWidth = (gap[0] + w) * ratio;
      const canvasHeight = (gap[1] + h) * ratio;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.translate(offset[0] * ratio, offset[1] * ratio);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.globalAlpha = opacity;

      const fontSize = 16 * ratio;
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = "black";
      ctx.textBaseline = "top";

      const contents = Array.isArray(content) ? content : [content];
      contents.forEach((item, index) => {
        ctx.fillText(item, 0, index * fontSize * 1.5);
      });
      setTimeout(() => {
        setBase64(canvas.toDataURL());
        setMarkSize({ w, h });
      }, 0);
    }
  }, [content, image, props.width, props.height, rotate, opacity, gap, offset, width, height]);

  return (
    <div className={classNames(styles.wrapper, className)}>
      {children}
      <div
        className={styles.root}
        data-testid="watermark"
        style={{
          zIndex,
          backgroundImage: `url(${base64})`,
          backgroundSize: `${gap[0] + markSize.w}px ${gap[1] + markSize.h}px`,
        }}
      />
    </div>
  );
};
