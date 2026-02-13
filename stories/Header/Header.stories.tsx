import type { Meta, StoryObj } from "@storybook/react-vite";
import Header, { HeaderProps } from "@/components/Header/Header";

const meta: Meta<typeof Header> = {
    title: "Component/Layout/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>WIM UI</div>
                </Header.Section>
                <Header.Section align="center">
                    <nav style={{ display: "flex", gap: "20px" }}>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </nav>
                </Header.Section>
                <Header.Section align="end">
                    <button>Login</button>
                </Header.Section>
            </>
        ),
    },
};

export const Bordered: Story = {
    args: {
        bordered: true,
        children: Default.args?.children,
    },
};

export const Glass: Story = {
    parameters: {
        backgrounds: { default: "dark" },
    },
    args: {
        glass: true,
        background: "transparent",
        children: Default.args?.children,
    },
};

export const Sticky: Story = {
    render: (args: HeaderProps) => (
        <div style={{ height: "200vh" }}>
            <Header {...args} sticky bordered>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold" }}>Sticky Header</div>
                </Header.Section>
            </Header>
            <div style={{ padding: "20px" }}>Scroll down to see the sticky effect.</div>
        </div>
    ),
};
