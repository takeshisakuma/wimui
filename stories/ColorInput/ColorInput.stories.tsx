import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorInput } from "@/components/ColorInput/ColorInput";

const meta: Meta<typeof ColorInput> = {
    title: "Components/Pickers & Sliders/ColorInput",
    component: ColorInput,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
    args: {
        defaultValue: "#0052cc",
    },
};

export const WithIcon: Story = {
    args: {
        defaultValue: "#3b82f6",
        leftIcon: "ImageIcon",
    },
};

export const CustomStates: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ColorInput {...args} state="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" />
            <ColorInput {...args} state="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" />
            <ColorInput {...args} state="disabled" defaultValue="#6b7280" leftIcon="SettingsIcon" />
        </div>
    ),
};


