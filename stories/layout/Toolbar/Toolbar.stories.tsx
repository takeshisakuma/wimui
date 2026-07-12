import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toolbar } from "@/components/layout/Toolbar/Toolbar";
import { IconButton } from "@/components/form/IconButton/IconButton";
import { Button } from "@/components/form/Button/Button";
import { ToggleGroup } from "@/components/form/ToggleGroup/ToggleGroup";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Layout/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
  args: {
    size: "md",
    orientation: "horizontal",
    "aria-label": "Formatting",
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: (args) => (
    <Toolbar {...args}>
      <Toolbar.Group aria-label="Text style">
        <IconButton iconName="EditIcon" aria-label="Edit" variant="ghost" size="sm" />
        <IconButton iconName="CopyIcon" aria-label="Copy" variant="ghost" size="sm" />
        <IconButton iconName="TrashIcon" aria-label="Delete" variant="ghost" size="sm" />
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="View">
        <ToggleGroup
          size="sm"
          selectionMode="single"
          aria-label="View mode"
          options={[
            { value: "list", iconName: "AlignJustifyIcon", label: "List" },
            { value: "grid", iconName: "ColumnsIcon", label: "Columns" },
            { value: "focus", iconName: "MaximizeIcon", label: "Focus" },
          ]}
          defaultValue="list"
        />
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Button size="sm" variant="ghost">
          Clear
        </Button>
      </Toolbar.Group>
    </Toolbar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)" }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Toolbar key={size} size={size} aria-label={`Size ${size}`}>
          <IconButton iconName="EditIcon" aria-label="Edit" variant="ghost" size="sm" />
          <IconButton iconName="CopyIcon" aria-label="Copy" variant="ghost" size="sm" />
          <Toolbar.Separator />
          <Button size="sm" variant="ghost">
            {size}
          </Button>
        </Toolbar>
      ))}
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    "aria-label": "Sidebar actions",
  },
  render: (args) => (
    <Toolbar {...args}>
      <IconButton iconName="EditIcon" aria-label="Edit" variant="ghost" size="sm" />
      <IconButton iconName="CopyIcon" aria-label="Copy" variant="ghost" size="sm" />
      <Toolbar.Separator />
      <IconButton iconName="ExternalLinkIcon" aria-label="Open" variant="ghost" size="sm" />
    </Toolbar>
  ),
};
