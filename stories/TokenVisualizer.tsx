import React from "react";

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
  // 影の違いを純粋に比較するため、浮き上がっている要素の色はすべて白(#ffffff)に統一
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
          // 白い背景の上で白いボックスの形を認識させるためのごく薄いボーダー
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
  type = "line-height",
}: {
  token: string;
  text: string;
  type?: "line-height" | "font-size";
}) => {
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

  return (
    <div style={{ marginBottom: "24px" }}>
      <span
        style={{
          display: "block",
          fontSize: "12px",
          color: "var(--text-secondary)",
          fontWeight: 600,
          fontFamily: "monospace",
        }}
      >
        {token}
      </span>
      <div style={style}>{text}</div>
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
