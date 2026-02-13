import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./watermark.scss";

type WatermarkProps = {
    content?: string | string[];
    image?: string;
    width?: number;
    height?: number;
    rotate?: number;
    zIndex?: number;
    opacity?: number;
    gap?: [number, number];
    offset?: [number, number];
    children?: React.ReactNode;
    className?: string;
};

export const Watermark = ({
    content,
    image,
    width = 120,
    height = 64,
    rotate = -22,
    zIndex = 9,
    opacity = 0.15,
    gap = [100, 100],
    offset = [50, 50],
    children,
    className,
}: WatermarkProps) => {
    const [base64, setBase64] = useState("");

    useEffect(() => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const ratio = window.devicePixelRatio || 1;
        const canvasWidth = (gap[0] + width) * ratio;
        const canvasHeight = (gap[1] + height) * ratio;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.translate(offset[0] * ratio, offset[1] * ratio);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.globalAlpha = opacity;

        if (image) {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = image;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, width * ratio, height * ratio);
                setBase64(canvas.toDataURL());
            };
        } else if (content) {
            const fontSize = 16 * ratio;
            ctx.font = `${fontSize}px sans-serif`;
            ctx.fillStyle = "black";
            ctx.textBaseline = "top";

            const contents = Array.isArray(content) ? content : [content];
            contents.forEach((item, index) => {
                ctx.fillText(item, 0, index * fontSize * 1.5);
            });
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setBase64(canvas.toDataURL());
        }
    }, [content, image, width, height, rotate, opacity, gap, offset]);

    return (
        <div className={classNames("wim-watermark-wrapper", className)}>
            {children}
            <div
                className="wim-watermark"
                style={{
                    zIndex,
                    backgroundImage: `url(${base64})`,
                    backgroundSize: `${gap[0] + width}px ${gap[1] + height}px`,
                }}
            />
        </div>
    );
};


