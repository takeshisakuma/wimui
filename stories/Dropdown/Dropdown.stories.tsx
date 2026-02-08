import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "./Dropdown";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof Dropdown> = {
    title: "Component/Selection Controls/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
    render: (args) => (
        <Dropdown {...args}>
            <DropdownTrigger>
                <Button label="Open Menu" />
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem onClick={() => console.log("Profile clicked")}>Profile</DropdownItem>
                <DropdownItem onClick={() => console.log("Settings clicked")}>Settings</DropdownItem>
                <DropdownItem onClick={() => console.log("Logout clicked")}>Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ),
};

export const WithIcons: Story = {
    render: (args) => (
        <Dropdown {...args}>
            <DropdownTrigger>
                <Button priority="secondary" label="Options" />
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem>
                    <Icon name="CheckIcon" size="small" /> Edit
                </DropdownItem>
                <DropdownItem>
                    <Icon name="CopyIcon" size="small" /> Duplicate
                </DropdownItem>
                <DropdownItem disabled>
                    <Icon name="CloseIcon" size="small" /> Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ),
};

export const AlignmentRight: Story = {
    render: (args) => (
        <div style={{ paddingLeft: "200px" }}>
            <Dropdown {...args}>
                <DropdownTrigger>
                    <Button label="Right Aligned" />
                </DropdownTrigger>
                <DropdownMenu align="right">
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownItem>Item 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    ),
};
