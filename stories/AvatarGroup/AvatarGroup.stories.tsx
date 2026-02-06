import type { Meta, StoryObj } from "@storybook/react";
import { AvatarGroup } from "./AvatarGroup";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof AvatarGroup> = {
    title: "Component/Data Display/AvatarGroup",
    component: AvatarGroup,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const users = [
    { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80", initials: "JD" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80", initials: "SA" },
    { src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80", initials: "ML" },
    { src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80", initials: "BW" },
];

export const Default: Story = {
    render: (args) => (
        <AvatarGroup {...args}>
            {users.map((u, i) => (
                <Avatar key={i} src={u.src} initials={u.initials} />
            ))}
        </AvatarGroup>
    ),
};

export const MaxDisplayed: Story = {
    args: {
        max: 3,
    },
    render: (args) => (
        <AvatarGroup {...args}>
            {users.map((u, i) => (
                <Avatar key={i} src={u.src} initials={u.initials} />
            ))}
        </AvatarGroup>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <AvatarGroup {...args} size="sm">
                {users.map((u, i) => (
                    <Avatar key={i} initials={u.initials} color="primary" />
                ))}
            </AvatarGroup>
            <AvatarGroup {...args} size="md">
                {users.map((u, i) => (
                    <Avatar key={i} initials={u.initials} color="secondary" />
                ))}
            </AvatarGroup>
            <AvatarGroup {...args} size="lg">
                {users.map((u, i) => (
                    <Avatar key={i} initials={u.initials} color="neutral" />
                ))}
            </AvatarGroup>
        </div>
    ),
};

export const TotalCount: Story = {
    args: {
        max: 2,
        total: 10,
    },
    render: (args) => (
        <AvatarGroup {...args}>
            {users.slice(0, 2).map((u, i) => (
                <Avatar key={i} src={u.src} initials={u.initials} />
            ))}
        </AvatarGroup>
    ),
};
