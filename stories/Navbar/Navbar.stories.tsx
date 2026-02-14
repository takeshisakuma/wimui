import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { HamburgerMenu } from "@/components/HamburgerMenu/HamburgerMenu";

const meta: Meta<typeof Navbar> = {
    title: "Component/Navigation/Navbar",
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

export const BuiltInResponsive: Story = {
    render: () => (
        <div style={{ height: "400px", position: "relative", overflow: "hidden", border: "1px solid #ccc" }}>
            <Navbar bordered style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
                <Navbar.Brand>
                    <span>RESPONSIVE</span>
                </Navbar.Brand>
                <Navbar.Content justify="end" hiddenOnMobile>
                    <Navbar.Link href="#">Dashboard</Navbar.Link>
                    <Navbar.Link href="#">Settings</Navbar.Link>
                    <Navbar.Link href="#">Profile</Navbar.Link>
                </Navbar.Content>
                <Navbar.Toggle />
                <Navbar.Menu>
                    <Navbar.MenuItem>Dashboard</Navbar.MenuItem>
                    <Navbar.MenuItem>Settings</Navbar.MenuItem>
                    <Navbar.MenuItem>Profile</Navbar.MenuItem>
                </Navbar.Menu>
            </Navbar>
            <div style={{ padding: "80px 20px" }}>
                <p>Resize the window to see the responsive behavior.</p>
                <p>On mobile (md and below), the links hide and a hamburger menu appears.</p>
            </div>
        </div>
    ),
};

