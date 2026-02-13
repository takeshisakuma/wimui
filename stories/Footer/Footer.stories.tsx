import type { Meta, StoryObj } from "@storybook/react";
import Footer from "@/components/Footer/Footer";

const meta: Meta<typeof Footer> = {
    title: "Component/Layout/Footer",
    component: Footer,
    parameters: {
        layout: "fullscreen",
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        bordered: true,
        children: (
            <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
                    <Footer.Section title="Product">
                        <span>Features</span>
                        <span>Pricing</span>
                        <span>API</span>
                    </Footer.Section>
                    <Footer.Section title="Company">
                        <span>About</span>
                        <span>Careers</span>
                        <span>Contact</span>
                    </Footer.Section>
                    <Footer.Section title="Resources">
                        <span>Documentation</span>
                        <span>Blog</span>
                        <span>Support</span>
                    </Footer.Section>
                    <Footer.Section title="Legal">
                        <span>Privacy</span>
                        <span>Terms</span>
                        <span>Cookie Policy</span>
                    </Footer.Section>
                </div>
                <Footer.Bottom>
                    <div>© 2026 WIM UI. All rights reserved.</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <span>Twitter</span>
                        <span>GitHub</span>
                    </div>
                </Footer.Bottom>
            </>
        ),
    },
};

export const Dark: Story = {
    args: {
        background: "dark",
        children: Default.args?.children,
    },
};
