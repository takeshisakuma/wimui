import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackTop } from "../../src/components/navigation/BackTop/BackTop";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof BackTop> = {
  title: "Components/Navigation Utilities/BackTop",
  component: BackTop,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BackTop>;

export const Basic: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story.backtop_scroll")}</p>
        <p>{t("story.backtop_visible_400")}</p>
        <BackTop {...args} visibilityHeight={400} />
      </div>
    );
  },
};

export const CustomElement: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story.backtop_custom_scroll")}</p>
        <p>{t("story.backtop_visible_200")}</p>
        <BackTop {...args} visibilityHeight={200}>
          <div
            style={{
              height: 40,
              width: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              backgroundColor: "#108ee9",
              color: "#fff",
              fontSize: 14,
            }}
          >
            {t("story.backtop_up")}
          </div>
        </BackTop>
      </div>
    );
  },
};

const SpecificTargetStory = () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const { t } = useTranslation(ALL_NAMESPACES);

  return (
    <div style={{ padding: "20px" }}>
      <p>{t("story.backtop_target_msg")}</p>
      <div
        ref={(node) => setContainer(node)}
        tabIndex={0}
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #108ee9",
          padding: "20px",
          position: "relative",
        }}
      >
        <div style={{ height: "1000px" }}>
          <p>{t("story.backtop_inside_box")}</p>
          <BackTop
            target={() => container}
            visibilityHeight={100}
            style={{ position: "absolute", right: 20, bottom: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export const SpecificTarget: Story = {
  render: () => <SpecificTargetStory />,
};
