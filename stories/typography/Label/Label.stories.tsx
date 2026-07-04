import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Input, Label } from "wimui";

const meta: Meta<typeof Label> = {
  title: "Components/Form Layout/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "90vw", width: "100%", boxSizing: "border-box" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: "Username",
    children: <Input placeholder="johndoe" />,
  },
};

export const Required: Story = {
  args: {
    required: true,
    children: <Input type="email" placeholder="email@example.com" />,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Label {...args} label={t("story.label_email_address")} />;
  },
};

export const Optional: Story = {
  args: {
    showOptional: true,
    children: <Input type="tel" placeholder="000-0000-0000" />,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Label {...args} label={t("story.label_phone_number")} />;
  },
};
