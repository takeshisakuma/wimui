import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "@/components/Footer/Footer";

import { SimpleGrid } from "@/components/SimpleGrid/SimpleGrid";

const meta: Meta<typeof Footer> = {
    title: "Components/Application Shell/Footer",
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
                <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing={40}>
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
                </SimpleGrid>
                <Footer.Bottom>
                    <div>© 2026 WIM UI. All rights reserved.</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <span>X</span>
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
