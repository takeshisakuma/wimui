import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { CopyButton } from "wimui";

const meta: Meta<typeof CopyButton> = {
  title: "Components/Buttons/CopyButton",
  component: CopyButton,
  tags: [],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <CopyButton {...args} value={t("story.copybutton_value")} />;
  },
};

export const Small: Story = {
  args: {
    // Copyable value naming the variant, kept verbatim. i18n-ignore-next-line
    value: "Small CopyButton",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    // Copyable value naming the variant, kept verbatim. i18n-ignore-next-line
    value: "Large CopyButton",
    size: "lg",
  },
};
