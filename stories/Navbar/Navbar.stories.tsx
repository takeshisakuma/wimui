import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { Button } from "../Button/Button";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

const meta: Meta<typeof Navbar> = {
    title: "Navigation/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },

    argTypes: {
        fixed: { control: "boolean" },
        sticky: { control: "boolean" },
        transparent: { control: "boolean" },
        glass: { control: "boolean" },
        bordered: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    render: (args) => (
        <Navbar {...args}>
            <Navbar.Brand>
                <span>LOGO</span>
            </Navbar.Brand>
            <Navbar.Content justify="end">
                <Navbar.Link href="#" active>Home</Navbar.Link>
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content justify="end">
                <Button priority="secondary" size="small">Login</Button>
            </Navbar.Content>
        </Navbar>
    ),
    args: {
        bordered: true,
    },
};

export const GlassEffect: Story = {
    render: (args) => (
        <div style={{
            height: "400px",
            background: "linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
            position: "relative"
        }}>
            <Navbar {...args} glass fixed style={{ position: "absolute" }}>
                <Navbar.Brand>
                    <span>Glass UI</span>
                </Navbar.Brand>
                <Navbar.Content justify="end">
                    <Navbar.Link href="#">Design</Navbar.Link>
                    <Navbar.Link href="#">Components</Navbar.Link>
                    <Navbar.Link href="#">Docs</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            <div style={{ paddingTop: "80px", paddingLeft: "24px", color: "white" }}>
                <h1>Glassmorphism Header</h1>
                <p>Scroll to see the effect overlay content</p>
            </div>
        </div>
    ),
};

export const WithMobileMenu: Story = {
    render: () => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <Navbar bordered>
                <Navbar.Brand>
                    <span>Mobile App</span>
                </Navbar.Brand>
                <Navbar.Content justify="end" className="hidden-mobile">
                    {/* These would be hidden on mobile via CSS usually, simulating here */}
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <Navbar.Link href="#">Overview</Navbar.Link>
                        <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </Navbar.Content>
            </Navbar>
        );
    },
};

export const CenteredLinks: Story = {
    render: (args) => (
        <Navbar {...args} bordered>
            <Navbar.Brand>
                <span>CENTER</span>
            </Navbar.Brand>
            <Navbar.Content justify="center">
                <Navbar.Link href="#" active>Product</Navbar.Link>
                <Navbar.Link href="#">Solutions</Navbar.Link>
                <Navbar.Link href="#">Resources</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content justify="end">
                <Button priority="tertiary" size="small">Sign In</Button>
                <Button priority="primary" size="small">Sign Up</Button>
            </Navbar.Content>
        </Navbar>
    ),
};

