import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IndicatorSlider } from "../../../src/components/_internal/IndicatorSlider";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof IndicatorSlider> = {
  title: "Components/Internal/IndicatorSlider",
  component: IndicatorSlider,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof IndicatorSlider>;

export const Default: Story = {
  render: function Render() {
    const [active, setActive] = useState(0);
    const { t } = useTranslation(["common"]);
    const labels = ["home", "profile", "settings", "account"];

    return (
      <div 
        className="wim-tab-list" 
        style={{ 
            display: "flex", 
            position: "relative", 
            gap: "24px",
            padding: "8px 16px",
            background: "#f5f5f5",
            borderRadius: "8px"
        }}
      >
        {labels.map((key, i) => (
            <button
                key={i}
                className={active === i ? "is-active" : ""}
                style={{ 
                    border: "none", 
                    background: "none", 
                    padding: "8px 12px", 
                    cursor: "pointer",
                    zIndex: 2,
                    position: "relative",
                    color: active === i ? "#0070f3" : "#666",
                    fontWeight: active === i ? "bold" : "normal",
                    transition: "color 0.2s"
                }}
                onClick={() => setActive(i)}
            >
                {t(key)}
            </button>
        ))}
        {/* The slider follows the .is-active element */}
        <IndicatorSlider 
            activeSelector=".is-active" 
            className="wim-tab-indicator"
            style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                backgroundColor: "#0070f3",
                zIndex: 1
            }}
        />
      </div>
    );
  },
};

export const Vertical: Story = {
    render: function Render() {
        const [active, setActive] = useState(0);
        const { t } = useTranslation(["common"]);
        const labels = ["overview", "analytics", "reports", "audience"];

        return (
          <div 
            className="wim-nav-list" 
            style={{ 
                display: "flex", 
                flexDirection: "column",
                position: "relative", 
                gap: "8px",
                padding: "16px",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "200px"
            }}
          >
            {labels.map((key, i) => (
                <button
                    key={i}
                    className={active === i ? "is-active-v" : ""}
                    style={{ 
                        border: "none", 
                        background: "none", 
                        padding: "10px 16px", 
                        textAlign: "left",
                        cursor: "pointer",
                        zIndex: 2,
                        position: "relative",
                        color: active === i ? "#0070f3" : "#666",
                        fontWeight: active === i ? "bold" : "normal"
                    }}
                    onClick={() => setActive(i)}
                >
                    {t(key)}
                </button>
            ))}
            <IndicatorSlider 
                activeSelector=".is-active-v" 
                orientation="vertical"
                className="wim-nav-indicator"
                style={{
                    position: "absolute",
                    left: 0,
                    width: "4px",
                    backgroundColor: "#0070f3",
                    borderRadius: "0 4px 4px 0",
                    zIndex: 1
                }}
            />
          </div>
        );
      },
};
