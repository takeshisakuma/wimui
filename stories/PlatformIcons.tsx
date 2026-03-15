import React from "react";
import { Icon } from "../src/components/Icon/Icon";

export const PlatformIcons = ({ pc, mobile }: { pc?: boolean; mobile?: boolean }) => (
  <div style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
    {pc && (
      <Icon
        name="MonitorIcon"
        style={{ width: 18, height: 18, color: "var(--text-primary)" }}
      />
    )}
    {mobile && (
      <Icon
        name="SmartphoneIcon"
        style={{ width: 18, height: 18, color: "var(--text-primary)" }}
      />
    )}
  </div>
);
