import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menubar } from "@/components/navigation/Menubar/Menubar";
import { Icon } from "@/components/media/Icon/Icon";

const meta: Meta<typeof Menubar> = {
  title: "Components/Navigation Elements/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
  },
  args: {
    "aria-label": "Application",
  },
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: (args) => (
    <Menubar {...args}>
      <Menubar.Menu value="file">
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item icon={<Icon name="DocumentIcon" size="sm" />}>New</Menubar.Item>
          <Menubar.Item icon={<Icon name="ProjectIcon" size="sm" />}>Open…</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Save</Menubar.Item>
          <Menubar.Item disabled>Save as…</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu value="edit">
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item icon={<Icon name="CopyIcon" size="sm" />}>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu value="view">
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content align="end">
          <Menubar.Item>Zoom in</Menubar.Item>
          <Menubar.Item>Zoom out</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Fullscreen</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu value="help" disabled>
        <Menubar.Trigger disabled>Help</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Docs</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};
