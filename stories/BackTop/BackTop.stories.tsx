import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackTop } from "../../src/components/BackTop/BackTop";
import React from "react";

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
    args: {
        visibilityHeight: 400,
    },
    render: (args) => (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>Scroll down to see the BackTop button appear.</p>
            <p>The button will become visible after scrolling 400px.</p>
            <BackTop {...args} />
        </div>
    ),
};

export const CustomElement: Story = {
    args: {
        visibilityHeight: 200,
        children: (
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
                UP
            </div>
        ),
    },
    render: (args) => (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>Scroll down to see the custom BackTop button appear.</p>
            <p>The button will become visible after scrolling 200px.</p>
            <BackTop {...args} />
        </div>
    ),
};

const SpecificTargetStory = () => {
    const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

    return (
        <div style={{ padding: "20px" }}>
            <p>Scrolling is limited to the blue box below.</p>
            <div
                ref={(node) => setContainer(node)}
                style={{
                    height: "300px",
                    overflowY: "scroll",
                    border: "1px solid #108ee9",
                    padding: "20px",
                    position: "relative",
                }}
            >
                <div style={{ height: "1000px" }}>
                    <p>Scroll inside this box...</p>
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
