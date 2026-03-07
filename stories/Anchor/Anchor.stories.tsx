import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Anchor } from "@/components/Anchor/Anchor";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Anchor> = {
  title: "Components/Navigation Elements/Anchor",
  component: Anchor,
  parameters: {
    layout: "fullscreen",
  },
  tags: [],
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "common", "components"]);
    const [isMobile, setIsMobile] = React.useState(false);

    const items = [
      {
        key: "part-1",
        href: "#part-1",
        title: t("story_anchor_part1"),
      },
      {
        key: "part-2",
        href: "#part-2",
        title: t("story_anchor_part2"),
        children: [
          {
            key: "part-2-1",
            href: "#part-2-1",
            title: t("story_anchor_part2_1"),
          },
          {
            key: "part-2-2",
            href: "#part-2-2",
            title: t("story_anchor_part2_2"),
          },
        ],
      },
      {
        key: "part-3",
        href: "#part-3",
        title: t("story_anchor_part3"),
      },
    ];

    React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row-reverse",
          padding: isMobile ? "0" : "20px",
          gap: isMobile ? "0" : "40px",
          minHeight: "150vh",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            width: isMobile ? "100%" : "200px",
            flexShrink: 0,
            background: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(8px)",
            alignSelf: "flex-start",
            padding: isMobile ? "0" : "20px 0",
            borderBottom: isMobile ? "1px solid #eee" : "none",
          }}
        >
          <Anchor
            {...args}
            items={items}
            direction={isMobile ? "horizontal" : "vertical"}
            offset={isMobile ? 60 : args.offset}
          />
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: isMobile ? "20px" : 0 }}>
          <section
            id="part-1"
            style={{
              height: "600px",
              background: "#f0f2f5",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{t("story_anchor_part1")}</h2>
            <p>{t("story_anchor_scroll_msg")}</p>
          </section>
          <section
            id="part-2"
            style={{
              height: "1000px",
              background: "#f9f9f9",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{t("story_anchor_part2")}</h2>
            <div
              id="part-2-1"
              style={{
                height: "400px",
                border: "1px dashed #ccc",
                margin: "20px 0",
                padding: "10px",
              }}
            >
              <h3>{t("story_anchor_part2_1")}</h3>
            </div>
            <div
              id="part-2-2"
              style={{
                height: "400px",
                border: "1px dashed #ccc",
                margin: "20px 0",
                padding: "10px",
              }}
            >
              <h3>{t("story_anchor_part2_2")}</h3>
            </div>
          </section>
          <section
            id="part-3"
            style={{ height: "600px", background: "#f0f2f5", padding: "20px" }}
          >
            <h2>{t("story_anchor_part3")}</h2>
          </section>
        </div>
      </div>
    );
  },
  args: {
    offset: 20,
  },
};
