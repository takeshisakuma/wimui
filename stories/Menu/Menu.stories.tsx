import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuItem, MenuItemGroup, SubMenu, MenuDivider } from "./Menu";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof Menu> = {
    title: "Component/Navigation/Menu",
    component: Menu,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
    render: (args) => (
        <Menu {...args}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Menu>
    ),
};

export const WithIcons: Story = {
    render: (args) => (
        <Menu {...args}>
            <MenuItem icon={<Icon name="CheckIcon" size="small" />}>
                Dashboard
            </MenuItem>
            <MenuItem icon={<Icon name="CopyIcon" size="small" />}>
                Projects
            </MenuItem>
            <MenuItem icon={<Icon name="CloseIcon" size="small" />}>
                Settings
            </MenuItem>
        </Menu>
    ),
};

export const WithSubMenu: Story = {
    render: (args) => (
        <Menu {...args} defaultOpenKeys={["sub1"]}>
            <MenuItem icon={<Icon name="CheckIcon" size="small" />}>
                Dashboard
            </MenuItem>
            <SubMenu
                itemKey="sub1"
                title="Products"
                icon={<Icon name="CopyIcon" size="small" />}
            >
                <MenuItem>Product 1</MenuItem>
                <MenuItem>Product 2</MenuItem>
                <MenuItem>Product 3</MenuItem>
            </SubMenu>
            <SubMenu
                itemKey="sub2"
                title="Services"
                icon={<Icon name="CloseIcon" size="small" />}
            >
                <MenuItem>Service A</MenuItem>
                <MenuItem>Service B</MenuItem>
            </SubMenu>
            <MenuItem>Contact</MenuItem>
        </Menu>
    ),
};

export const WithGroups: Story = {
    render: (args) => (
        <Menu {...args}>
            <MenuItemGroup title="Main Pages">
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuItemGroup>
            <MenuDivider />
            <MenuItemGroup title="User Actions">
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuItemGroup>
        </Menu>
    ),
};

export const Horizontal: Story = {
    render: (args) => (
        <Menu {...args} mode="horizontal">
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Menu>
    ),
};

export const Inline: Story = {
    render: (args) => (
        <Menu {...args} mode="inline" defaultOpenKeys={["sub1"]}>
            <MenuItem icon={<Icon name="CheckIcon" size="small" />}>
                Dashboard
            </MenuItem>
            <SubMenu
                itemKey="sub1"
                title="Settings"
                icon={<Icon name="CopyIcon" size="small" />}
            >
                <MenuItem>Profile Settings</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Privacy Settings</MenuItem>
            </SubMenu>
            <MenuItem icon={<Icon name="CloseIcon" size="small" />}>
                Logout
            </MenuItem>
        </Menu>
    ),
};

export const WithDisabledItems: Story = {
    render: (args) => (
        <Menu {...args}>
            <MenuItem>Active Item</MenuItem>
            <MenuItem disabled>Disabled Item</MenuItem>
            <MenuItem>Another Active Item</MenuItem>
        </Menu>
    ),
};
