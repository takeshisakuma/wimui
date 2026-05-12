import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Autosave } from "@/components/feedback/Autosave/Autosave";

const meta: Meta<typeof Autosave> = {
  title: "Components/Alerts & Notifications/Autosave",
  component: Autosave,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["idle", "saving", "saved", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autosave>;

export const Default: Story = {
  args: {
    status: "saved",
  },
};

export const Saving: Story = {
  args: {
    status: "saving",
  },
};

export const Saved: Story = {
  args: {
    status: "saved",
  },
};

export const SavedWithTime: Story = {
  args: {
    status: "saved",
    savedAt: new Date(),
  },
};

export const Error: Story = {
  args: {
    status: "error",
  },
};

export const ErrorCustomMessage: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Autosave
        {...args}
        status="error"
        errorMessage={t("story.autosave_error_connection")}
      />
    );
  },
};
