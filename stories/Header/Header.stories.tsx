import type { Meta, StoryObj } from "@storybook/react-vite";
import Header, { HeaderProps } from "@/components/Header/Header";

const meta: Meta<typeof Header> = {
    title: "Component/Navigation/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: [],
    argTypes: {
        fixed: { control: "boolean", description: "ヘッダーを上部に固定します" },
        sticky: { control: "boolean", description: "スクロール時にヘッダーを上部に粘着させます" },
        bordered: { control: "boolean", description: "下部に境界線を表示します" },
        glass: { control: "boolean", description: "背景にぼかし効果（グラスモーフィズム）を適用します" },
        background: {
            control: "select",
            options: ["primary", "secondary", "transparent"],
            description: "背景色を指定します",
        },
        children: { table: { disable: true } },
    },
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
        <div style={{ height: "200vh", background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)" }}>
            <Header {...args} sticky bordered>
                <Header.Section align="start">
                    <div style={{ fontWeight: "bold" }}>Sticky Header</div>
                </Header.Section>
                <Header.Section align="end">
                    <button>Action</button>
                </Header.Section>
            </Header>
            <div style={{ padding: "20px" }}>
                <p>Scroll down to see the sticky effect.</p>
                {Array.from({ length: 10 }).map((_, i) => (
                    <p key={i} style={{ margin: "20px 0" }}>Content block {i + 1}</p>
                ))}
            </div>
        </div>
    ),
};

export const Playground: Story = {
    args: {
        ...Default.args,
        bordered: true,
        glass: false,
        background: "primary",
    },
    render: (args) => (
        <div style={{ height: "300px", position: "relative", border: "1px dashed #ccc" }}>
            <Header {...args} style={{ position: "absolute", top: 0, left: 0, width: "100%" }} />
            <div style={{ padding: "60px 20px 20px" }}>
                <p>Header content is displayed above.</p>
                <p>Change controls to see effects.</p>
            </div>
        </div>
    ),
};
