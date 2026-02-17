import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingOverlay } from "../../src/components/LoadingOverlay/LoadingOverlay";
import React from "react";
import { Button } from "../../src/components/Button/Button";
import { Icon } from "../../src/components/Icon/Icon";

const meta: Meta<typeof LoadingOverlay> = {
    title: "Component/Loading & Progress/LoadingOverlay",
    component: LoadingOverlay,
    parameters: {
        layout: "padded",
    },
    argTypes: {
        visible: {
            control: "boolean",
        },
        loaderType: {
            control: "select",
            options: ["spinner", "bars", "dots", "pulse"],
        },
        loaderSize: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
        loaderColor: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error", "neutral", "currentColor"],
        },
        backdropVariant: {
            control: "select",
            options: ["light", "dark"],
        },
        blur: {
            control: "select",
            options: ["none", "sm", "md", "lg"],
        },
        fixed: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Basic: Story = {
    args: {
        visible: true,
        loaderType: "spinner",
        loaderSize: "lg",
        loaderColor: "primary",
    },
    render: (args) => (
        <div style={{ position: "relative", height: "400px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <div style={{ padding: "20px" }}>
                <h3>Content Area</h3>
                <p>This is the content that will be overlaid when loading.</p>
            </div>
            <LoadingOverlay {...args} />
        </div>
    ),
};

export const WithMessage: Story = {
    args: {
        visible: true,
        loaderType: "spinner",
        loaderSize: "lg",
        loaderColor: "primary",
        message: "Loading data...",
    },
    render: (args) => (
        <div style={{ position: "relative", height: "400px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <div style={{ padding: "20px" }}>
                <h3>Content Area</h3>
                <p>Loading overlay with a custom message.</p>
            </div>
            <LoadingOverlay {...args} />
        </div>
    ),
};

export const DifferentLoaderTypes: Story = {
    render: () => (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {(["spinner", "bars", "dots", "pulse"] as const).map((type) => (
                <div
                    key={type}
                    style={{
                        position: "relative",
                        height: "300px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                >
                    <div style={{ padding: "20px" }}>
                        <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                    </div>
                    <LoadingOverlay visible={true} loaderType={type} />
                </div>
            ))}
        </div>
    ),
};

export const BackdropVariants: Story = {
    render: () => (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            <div
                style={{
                    position: "relative",
                    height: "300px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
            >
                <div style={{ padding: "20px", color: "white" }}>
                    <h4>Light Backdrop</h4>
                </div>
                <LoadingOverlay visible={true} backdropVariant="light" loaderColor="primary" />
            </div>
            <div
                style={{
                    position: "relative",
                    height: "300px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                }}
            >
                <div style={{ padding: "20px", color: "white" }}>
                    <h4>Dark Backdrop</h4>
                </div>
                <LoadingOverlay visible={true} backdropVariant="dark" loaderColor="currentColor" />
            </div>
        </div>
    ),
};

export const BlurEffects: Story = {
    render: () => (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {(["none", "sm", "md", "lg"] as const).map((blurLevel) => (
                <div
                    key={blurLevel}
                    style={{
                        position: "relative",
                        height: "300px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundImage: "url(https://picsum.photos/400/300)",
                        backgroundSize: "cover",
                    }}
                >
                    <div style={{ padding: "20px", color: "white", textShadow: "0 0 4px black" }}>
                        <h4>Blur: {blurLevel}</h4>
                    </div>
                    <LoadingOverlay visible={true} blur={blurLevel} />
                </div>
            ))}
        </div>
    ),
};

export const FullScreen: Story = {
    args: {
        visible: false,
        fixed: true,
        loaderType: "spinner",
        loaderSize: "xl",
        message: "Loading application...",
    },
    render: function FullScreenStory(args) {
        const [loading, setLoading] = React.useState(false);

        const handleClick = () => {
            setLoading(true);
            setTimeout(() => setLoading(false), 3000);
        };

        return (
            <div style={{ padding: "20px" }}>
                <Button onClick={handleClick}>Show Full Screen Loading</Button>
                <p>Click the button to show a full-screen loading overlay for 3 seconds.</p>
                <LoadingOverlay {...args} visible={loading} />
            </div>
        );
    },
};

export const Interactive: Story = {
    render: function InteractiveStory() {
        const [loading, setLoading] = React.useState(false);

        const handleClick = () => {
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
        };

        return (
            <div
                style={{
                    position: "relative",
                    height: "400px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px",
                }}
            >
                <h3>Interactive Example</h3>
                <p>Click the button to simulate a loading state.</p>
                <Button onClick={handleClick} disabled={loading}>
                    Load Data
                </Button>
                <div style={{ marginTop: "20px" }}>
                    <p>Some content that will be overlaid during loading...</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <LoadingOverlay
                    visible={loading}
                    loaderType="spinner"
                    loaderSize="lg"
                    message="Fetching data..."
                />
            </div>
        );
    },
};

export const CustomLoader: Story = {
    args: {
        visible: true,
        children: (
            <div style={{ textAlign: "center", color: "white" }}>
                <Icon
                    name="ClockIcon"
                    style={{ width: "48px", height: "48px", marginBottom: "16px" }}
                />
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>Please wait...</div>
            </div>
        ),
    },
    render: (args) => (
        <div style={{ position: "relative", height: "400px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <div style={{ padding: "20px" }}>
                <h3>Custom Loader Content</h3>
                <p>You can provide custom children instead of the default loaders.</p>
            </div>
            <LoadingOverlay {...args} />
        </div>
    ),
};
