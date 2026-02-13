import React from "react";

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

        .wim-swatch-square-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
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
          transform: scale(1.2) rotate(2deg);
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
