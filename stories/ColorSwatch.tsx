import React from "react";
import { SIGNAL_COLOR_CHANGE } from "./ContrastChecker";

/**
 * ColorSwatch component for documentation
 */
interface ColorSwatchProps {
    /** Color name displayed in the card */
    name?: string;
    /** Color value or variable name displayed in the card */
    value?: string;
    /** The actual color (CSS variable, hex, etc.) */
    color: string;
    /** Text or element to display on top of the color swatch */
    children?: React.ReactNode;
    /** Variant of the swatch */
    variant?: "card" | "square";
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
    name,
    value,
    color,
    children,
    variant = "card",
}) => {
    const handleSetColor = (type: "bg" | "fg") => {
        // Ensure we handle variable names correctly
        let colorValue = value || color;
        if (colorValue.startsWith("--")) {
            colorValue = `var(${colorValue})`;
        }

        const event = new CustomEvent(SIGNAL_COLOR_CHANGE, {
            detail: { type, value: colorValue },
        });
        window.dispatchEvent(event);
    };

    return (
        <>
            <style>
                {`
        .wim-swatch-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--wim-color-border, #e5e5e5);
          background: var(--bg-component, #fff);
          display: flex;
          flex-direction: column;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .wim-swatch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          border-color: var(--color-primary, #007aff);
        }
        .wim-swatch-card-preview {
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          position: relative;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .wim-swatch-card-info {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }
        .wim-swatch-name {
          font-weight: 600;
          font-size: 15px;
          color: var(--text-primary, #1a1a1a);
        }
        .wim-swatch-value {
          font-family: "Cascadia Code", "Fira Code", monospace;
          font-size: 12px;
          color: var(--text-secondary, #666);
          background: var(--bg-app, #f5f5f5);
          padding: 2px 6px;
          border-radius: 4px;
          width: fit-content;
          word-break: break-all;
        }
        
        .wim-swatch-actions {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          z-index: 20;
        }
        .wim-swatch-card:hover .wim-swatch-actions,
        .wim-swatch-square-wrapper:hover .wim-swatch-actions {
          opacity: 1;
          pointer-events: auto;
        }
        .wim-swatch-action-btn {
          padding: 2px 6px;
          font-size: 10px;
          font-weight: 700;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          color: #333;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .wim-swatch-action-btn:hover {
          background: var(--color-primary, #007aff);
          color: #fff;
          border-color: var(--color-primary, #007aff);
          transform: scale(1.1);
        }

        .wim-swatch-square-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
          position: relative;
        }
        .wim-swatch-square-wrapper:hover {
          z-index: 50;
        }
        .wim-swatch-square {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 6px;
          border: 1px solid rgba(0,0,0,0.08);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          position: relative;
        }
        .wim-swatch-square:hover {
          transform: scale(1.1);
          z-index: 10;
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
          border-radius: 8px;
        }
        .wim-swatch-square-label {
          font-size: 10px;
          font-family: inherit;
          font-weight: 500;
          text-align: center;
          color: var(--text-tertiary, #999);
          word-break: break-all;
          max-width: 100%;
        }
      `}
            </style>

            {variant === "card" ? (
                <div className="wim-swatch-card">
                    <div className="wim-swatch-actions">
                        <button className="wim-swatch-action-btn" onClick={(e) => { e.stopPropagation(); handleSetColor("bg"); }}>BG</button>
                        <button className="wim-swatch-action-btn" onClick={(e) => { e.stopPropagation(); handleSetColor("fg"); }}>FG</button>
                    </div>
                    <div className="wim-swatch-card-preview" style={{ background: color }}>
                        {children}
                    </div>
                    <div className="wim-swatch-card-info">
                        {name && <span className="wim-swatch-name">{name}</span>}
                        {value && <span className="wim-swatch-value">{value}</span>}
                    </div>
                </div>
            ) : (
                <div className="wim-swatch-square-wrapper">
                    <div className="wim-swatch-actions" style={{ top: "-8px", right: "-4px" }}>
                        <button className="wim-swatch-action-btn" onClick={(e) => { e.stopPropagation(); handleSetColor("bg"); }}>BG</button>
                        <button className="wim-swatch-action-btn" onClick={(e) => { e.stopPropagation(); handleSetColor("fg"); }}>FG</button>
                    </div>
                    <div
                        className="wim-swatch-square"
                        style={{ background: color }}
                        title={value || name || color}
                    >
                        {children}
                    </div>
                    {(name || value) && (
                        <span className="wim-swatch-square-label">{name || value}</span>
                    )}
                </div>
            )}
        </>
    );
};

export const ColorGrid: React.FC<{
    children: React.ReactNode;
    variant?: "card" | "square";
}> = ({ children, variant = "card" }) => {
    const gridStyle =
        variant === "card"
            ? {
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "24px",
            }
            : {
                gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                gap: "16px",
            };

    return (
        <div
            style={{
                display: "grid",
                ...gridStyle,
                marginTop: "24px",
                marginBottom: "40px",
            }}
        >
            {children}
        </div>
    );
};
