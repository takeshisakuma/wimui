import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Splitter } from "@/components/Splitter/Splitter";

const meta: Meta<typeof Splitter> = {
  title: "Components/Layout/Splitter",
  component: Splitter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Splitter>;

const PanelContent = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <div
    style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      fontSize: "24px",
      fontWeight: "bold",
      color: "white",
    }}
  >
    {children}
  </div>
);

export const Horizontal: Story = {
  render: () => (
    <div
      style={{
        height: "400px",
        border: "1px solid var(--wim-color-border-subtle)",
      }}
    >
      <Splitter orientation="horizontal">
        <Splitter.Panel defaultSize={30}>
          <PanelContent color="#3b82f6">Left Panel</PanelContent>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={70}>
          <PanelContent color="#10b981">Right Panel</PanelContent>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        height: "400px",
        border: "1px solid var(--wim-color-border-subtle)",
      }}
    >
      <Splitter orientation="vertical">
        <Splitter.Panel defaultSize={40}>
          <PanelContent color="#ef4444">Top Panel</PanelContent>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={60}>
          <PanelContent color="#f59e0b">Bottom Panel</PanelContent>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
};

export const MultiplePanels: Story = {
  render: () => (
    <div
      style={{
        height: "400px",
        border: "1px solid var(--wim-color-border-subtle)",
      }}
    >
      <Splitter orientation="horizontal">
        <Splitter.Panel defaultSize={20}>
          <PanelContent color="#6366f1">Panel 1</PanelContent>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={60}>
          <PanelContent color="#8b5cf6">Panel 2</PanelContent>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={20}>
          <PanelContent color="#ec4899">Panel 3</PanelContent>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <div
      style={{
        height: "600px",
        border: "1px solid var(--wim-color-border-subtle)",
      }}
    >
      <Splitter orientation="horizontal">
        <Splitter.Panel defaultSize={25}>
          <PanelContent color="#374151">Sidebar</PanelContent>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel defaultSize={75}>
          <Splitter orientation="vertical">
            <Splitter.Panel defaultSize={70}>
              <PanelContent color="#1f2937">Main Content</PanelContent>
            </Splitter.Panel>
            <Splitter.Handle />
            <Splitter.Panel defaultSize={30}>
              <PanelContent color="#4b5563">Console / Logs</PanelContent>
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
};

export const Constraints: Story = {
  render: () => (
    <div
      style={{
        height: "400px",
        border: "1px solid var(--wim-color-border-subtle)",
      }}
    >
      <Splitter orientation="horizontal">
        <Splitter.Panel minSize={20} maxSize={50} defaultSize={30}>
          <PanelContent color="#14b8a6">Min: 20%, Max: 50%</PanelContent>
        </Splitter.Panel>
        <Splitter.Handle />
        <Splitter.Panel>
          <PanelContent color="#06b6d4">Flexible Panel</PanelContent>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
};
