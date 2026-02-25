import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";

const meta: Meta<typeof ScrollProgress> = {
  title: "Components/Utilities/ScrollProgress",
  component: ScrollProgress,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ScrollProgress>;

export const Default: Story = {
  render: (args) => (
    <div style={{ height: "200vh", padding: "20px" }}>
      <ScrollProgress {...args} />
      <h1>Scroll down to see the progress bar at the top</h1>
      <div style={{ marginTop: "100vh" }}>
        <p>Reached the middle</p>
      </div>
      <div style={{ marginTop: "100vh" }}>
        <p>Reached the end</p>
      </div>
    </div>
  ),
};

export const CustomContainer: Story = {
  render: (args) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    return (
      <div style={{ padding: "20px" }}>
        <div
          ref={containerRef}
          style={{
            height: "300px",
            overflowY: "auto",
            border: "1px solid #ccc",
            position: "relative",
          }}
        >
          <ScrollProgress
            {...args}
            target={containerRef}
            style={{ position: "sticky", top: 0 }}
          />
          <div style={{ height: "1000px", padding: "10px" }}>
            <p>Scroll inside this container</p>
          </div>
        </div>
      </div>
    );
  },
};
