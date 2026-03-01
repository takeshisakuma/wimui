import React from "react";
import { useTranslation } from "react-i18next";

export const SpacingSwatch = ({
  name,
  value,
  size,
}: {
  name: string;
  value: string;
  size: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "12px",
        background: "var(--bg-component, #fff)",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid var(--wim-color-border, #eee)",
      }}
    >
      <div
        style={{
          width: "120px",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        {name}
      </div>
      <div
        style={{
          width: "100px",
          fontFamily: "monospace",
          fontSize: "12px",
          color: "var(--text-secondary)",
          background: "var(--bg-app)",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        {value}
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "24px",
            width: size,
            background: "var(--color-primary, #007aff)",
            borderRadius: "2px",
            opacity: 0.7,
          }}
        ></div>
      </div>
    </div>
  );
};

export const RadiusSwatch = ({
  name,
  value,
  radius,
}: {
  name: string;
  value: string;
  radius: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        background: "var(--bg-component, #fff)",
        borderRadius: "12px",
        border: "1px solid var(--wim-color-border, #eee)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80px",
          background: "var(--bg-app, #f9f9f9)",
          border: "2px solid var(--color-primary, #007aff)",
          borderRadius: radius,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            color: "var(--text-secondary)",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export const ShadowSwatch = ({
  name,
  value,
  shadow,
}: {
  name: string;
  value: string;
  shadow: string;
}) => {
  // To compare shadow differences purely, the color of the lifted elements is all unified to white (#ffffff)
  const boxColor = name === "Inset" ? "#f8f9fa" : "#ffffff";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        padding: "40px 24px",
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid var(--wim-color-border, #eee)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: boxColor,
          borderRadius: "12px",
          boxShadow: shadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color: "var(--text-primary, #333)",
          fontWeight: 800,
          // Very thin border to make the white box shape recognizable on the white background
          border: name === "Inset" ? "none" : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          {name} Level
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "var(--text-secondary)",
            background: "var(--bg-app, #f5f5f5)",
            padding: "2px 8px",
            borderRadius: "4px",
            marginTop: "4px",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export const MotionSwatch = ({
  name,
  duration,
  easing,
}: {
  name: string;
  duration: string;
  easing: string;
}) => {
  const [active, setActive] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
        background: "var(--bg-component, #fff)",
        borderRadius: "12px",
        border: "1px solid var(--wim-color-border, #eee)",
        cursor: "pointer",
      }}
      onClick={() => setActive(!active)}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
        Click to animate
      </div>
      <div
        style={{
          height: "40px",
          background: "var(--bg-app)",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "32px",
            width: "32px",
            borderRadius: "50%",
            background: "var(--color-primary)",
            top: "4px",
            left: active ? "calc(100% - 36px)" : "4px",
            transition: `all ${duration} ${easing}`,
          }}
        ></div>
      </div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--text-secondary)",
        }}
      >
        {duration} | {easing}
      </div>
    </div>
  );
};

export const TypographyVisualizer = ({
  token,
  text,
  textKey,
  type = "line-height",
}: {
  token: string;
  text?: string;
  textKey?: string;
  type?: "line-height" | "font-size";
}) => {
  const { t } = useTranslation();
  const actualText = textKey ? t(textKey) : (text || "");

  const style: React.CSSProperties = {
    background: "var(--bg-app, #f9f9f9)",
    padding: "24px",
    borderRadius: "8px",
    border: "1px solid var(--wim-color-border, #eee)",
    marginTop: "8px",
    fontSize: "16px",
    color: "var(--text-primary, #333)",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  };

  if (type === "line-height") {
    style.lineHeight = `var(${token})`;
  } else {
    style.fontSize = `var(${token})`;
    style.lineHeight = "1.5";
  }

  const lines = actualText.split(/\\n|\n/);
  const title = lines[0];
  const previewText = lines.slice(1).join('\n') || title;

  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary, #333)",
        }}
      >
        {title}
        <code
          style={{
            marginLeft: "12px",
            fontSize: "13px",
            color: "var(--text-secondary, #666)",
            background: "rgba(0, 0, 0, 0.05)",
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "normal",
            fontFamily: "monospace",
            verticalAlign: "middle"
          }}
        >
          {token}
        </code>
      </div>
      <div style={style}>{previewText}</div>
    </div>
  );
};

export const FontWeightVisualizer = ({
  weight,
  token,
  name,
}: {
  weight: number;
  token: string;
  name: string;
}) => {
  return (
    <div>
      <div
        style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary, #333)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {weight}
        <span
          style={{
            marginLeft: "12px",
            fontSize: "13px",
            color: "var(--text-secondary, #666)",
            background: "rgba(0, 0, 0, 0.05)",
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "normal",
            fontFamily: "monospace",
          }}
        >
          {token}
        </span>
      </div>
      <div
        style={{
          padding: "20px",
          background: "var(--bg-component)",
          borderRadius: "8px",
          border: "1px solid var(--wim-color-border)",
          color: "var(--text-primary)",
        }}
      >
        <div style={{ fontWeight: `var(${token})`, fontSize: "24px" }}>
          {name}
        </div>
      </div>
    </div>
  );
};

export const DecorationVisualizer = ({
  token,
  name,
  type = "decoration",
}: {
  token: string;
  name: string;
  type?: "decoration" | "highlight";
}) => {
  return (
    <div>
      <div
        style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary, #333)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {name}
        <span
          style={{
            marginLeft: "12px",
            fontSize: "13px",
            color: "var(--text-secondary, #666)",
            background: "rgba(0, 0, 0, 0.05)",
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "normal",
            fontFamily: "monospace",
          }}
        >
          {token}
        </span>
      </div>
      <div
        style={{
          padding: "20px",
          background: "var(--bg-component, #fff)",
          borderRadius: "8px",
          border: "1px solid var(--wim-color-border, #eee)",
          color: "var(--text-primary, #333)",
        }}
      >
        <span
          style={
            type === "decoration"
              ? { textDecoration: `var(${token})`, fontSize: "20px" }
              : { background: `var(${token})`, fontSize: "20px", padding: "4px 8px", borderRadius: "4px" }
          }
        >
          {type === "decoration" ? "The quick brown fox" : "Highlight Text"}
        </span>
      </div>
    </div>
  );
};

export const FocusOutlineSwatch = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        padding: "24px",
        background: "var(--bg-component, #fff)",
        borderRadius: "12px",
        border: "1px solid var(--wim-color-border, #eee)",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "40px",
          background: "var(--color-primary, #007aff)",
          borderRadius: "var(--radius-md)",
          outline: "var(--focus-outline-width) solid rgba(0, 122, 255, 0.5)",
          outlineOffset: "var(--focus-outline-offset)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Focused
      </div>
      <div style={{ textAlign: "center", marginTop: "8px" }}>
        <div style={{ fontSize: "14px", fontWeight: 600 }}>Focus Ring</div>
        <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
          <code style={{ background: "rgba(0,0,0,0.05)", padding: "2px 4px", borderRadius: "4px" }}>--focus-outline-width</code> (2px)<br />
          <code style={{ background: "rgba(0,0,0,0.05)", padding: "2px 4px", borderRadius: "4px", marginTop: "4px", display: "inline-block" }}>--focus-outline-offset</code> (2px)
        </div>
      </div>
    </div>
  );
};

export const InteractiveSwatch = ({
  name,
  tokenName,
  tokenValue,
  hoverStyle = {},
  activeStyle = {},
}: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        padding: "24px",
        background: "var(--bg-component, #fff)",
        borderRadius: "12px",
        border: "1px solid var(--wim-color-border, #eee)",
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={{
          width: "120px",
          height: "60px",
          background: "var(--bg-app, #f5f5f5)",
          border: "1px solid var(--wim-color-border, #ccc)",
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "var(--transition-base, all 0.3s ease-in-out)",
          ...(isHovered ? hoverStyle : {}),
          ...(isActive ? activeStyle : {}),
        }}
      >
        Hover / Click
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "14px", fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
          <code style={{ background: "rgba(0,0,0,0.05)", padding: "2px 4px", borderRadius: "4px" }}>{tokenName}</code><br />
          <span style={{ display: "inline-block", marginTop: "4px" }}>({tokenValue})</span>
        </div>
      </div>
    </div>
  );
};

export const TokenGrid: React.FC<{
  children: React.ReactNode;
  columns?: string;
}> = ({ children, columns = "repeat(auto-fill, minmax(180px, 1fr))" }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gap: "20px",
        marginTop: "20px",
        marginBottom: "40px",
      }}
    >
      {children}
    </div>
  );
};
