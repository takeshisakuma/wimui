import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    ContextMenu,
    ContextMenuItem,
    ContextMenuDivider,
    ContextMenuGroup,
} from "./ContextMenu";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof ContextMenu> = {
    title: "Component/Navigation/ContextMenu",
    component: ContextMenu,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Basic: Story = {
    render: (args) => (
        <ContextMenu
            {...args}
            menu={
                <>
                    <ContextMenuItem onClick={() => console.log("Edit clicked")}>
                        Edit
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => console.log("Copy clicked")}>
                        Copy
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => console.log("Paste clicked")}>
                        Paste
                    </ContextMenuItem>
                    <ContextMenuDivider />
                    <ContextMenuItem
                        onClick={() => console.log("Delete clicked")}
                        danger
                    >
                        Delete
                    </ContextMenuItem>
                </>
            }
        >
            <div
                style={{
                    padding: "60px 100px",
                    backgroundColor: "#f0f0f0",
                    border: "2px dashed #ccc",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                }}
            >
                Right-click here
            </div>
        </ContextMenu>
    ),
};

export const WithIcons: Story = {
    render: (args) => (
        <ContextMenu
            {...args}
            menu={
                <>
                    <ContextMenuItem
                        icon={<Icon name="CheckIcon" size="small" />}
                        onClick={() => console.log("Edit clicked")}
                    >
                        Edit
                    </ContextMenuItem>
                    <ContextMenuItem
                        icon={<Icon name="CopyIcon" size="small" />}
                        onClick={() => console.log("Copy clicked")}
                    >
                        Copy
                    </ContextMenuItem>
                    <ContextMenuItem
                        icon={<Icon name="CheckIcon" size="small" />}
                        onClick={() => console.log("Paste clicked")}
                    >
                        Paste
                    </ContextMenuItem>
                    <ContextMenuDivider />
                    <ContextMenuItem
                        icon={<Icon name="CloseIcon" size="small" />}
                        onClick={() => console.log("Delete clicked")}
                        danger
                    >
                        Delete
                    </ContextMenuItem>
                </>
            }
        >
            <div
                style={{
                    padding: "60px 100px",
                    backgroundColor: "#e0f2fe",
                    border: "2px dashed #0ea5e9",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                }}
            >
                Right-click for menu with icons
            </div>
        </ContextMenu>
    ),
};

export const WithGroups: Story = {
    render: (args) => (
        <ContextMenu
            {...args}
            menu={
                <>
                    <ContextMenuGroup title="Edit Actions">
                        <ContextMenuItem>Cut</ContextMenuItem>
                        <ContextMenuItem>Copy</ContextMenuItem>
                        <ContextMenuItem>Paste</ContextMenuItem>
                    </ContextMenuGroup>
                    <ContextMenuDivider />
                    <ContextMenuGroup title="File Actions">
                        <ContextMenuItem>Rename</ContextMenuItem>
                        <ContextMenuItem>Move</ContextMenuItem>
                        <ContextMenuItem danger>Delete</ContextMenuItem>
                    </ContextMenuGroup>
                </>
            }
        >
            <div
                style={{
                    padding: "60px 100px",
                    backgroundColor: "#fef3c7",
                    border: "2px dashed #f59e0b",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                }}
            >
                Right-click for grouped menu
            </div>
        </ContextMenu>
    ),
};

export const WithDisabledItems: Story = {
    render: (args) => (
        <ContextMenu
            {...args}
            menu={
                <>
                    <ContextMenuItem>Cut</ContextMenuItem>
                    <ContextMenuItem>Copy</ContextMenuItem>
                    <ContextMenuItem disabled>Paste (disabled)</ContextMenuItem>
                    <ContextMenuDivider />
                    <ContextMenuItem>Select All</ContextMenuItem>
                </>
            }
        >
            <div
                style={{
                    padding: "60px 100px",
                    backgroundColor: "#dcfce7",
                    border: "2px dashed #22c55e",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                }}
            >
                Right-click (with disabled item)
            </div>
        </ContextMenu>
    ),
};

export const OnImage: Story = {
    render: (args) => (
        <ContextMenu
            {...args}
            menu={
                <>
                    <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>
                        Open in new tab
                    </ContextMenuItem>
                    <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>
                        Copy image
                    </ContextMenuItem>
                    <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>
                        Copy image address
                    </ContextMenuItem>
                    <ContextMenuDivider />
                    <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>
                        Save image as...
                    </ContextMenuItem>
                </>
            }
        >
            <div
                style={{
                    width: "300px",
                    height: "200px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                Right-click this image
            </div>
        </ContextMenu>
    ),
};


