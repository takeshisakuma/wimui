import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/Divider/Divider";

const meta: Meta<typeof Divider> = {
    title: "Component/Utilities/Divider",
    component: Divider,
    tags: [],
    parameters: {
        layout: "padded",
    },
    decorators: [
        (Story, context) => (
            <div style={{
                width: context.args.orientation === "vertical" ? "auto" : "100%",
                maxWidth: context.args.orientation === "vertical" ? "none" : "300px",
                height: context.args.orientation === "vertical" ? "100px" : "auto",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    args: {
        orientation: "horizontal",
    },
};

export const Vertical: Story = {
    args: {
        orientation: "vertical",
    },
};


