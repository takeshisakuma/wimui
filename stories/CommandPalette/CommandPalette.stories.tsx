import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
    CommandPalette,
    CommandPaletteInput,
    CommandPaletteList,
    CommandPaletteGroup,
    CommandPaletteItem,
    CommandPaletteEmpty,
    CommandPaletteFooter,
    CommandPaletteTrigger,
    CommandPaletteContent,
} from "@/components/CommandPalette/CommandPalette";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof CommandPalette> = {
    title: "Components/Overlays/CommandPalette",
    component: CommandPalette,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

const DefaultTemplate = () => {
    const [search, setSearch] = useState("");

    const items = [
        { id: "1", label: "New Project", icon: "CheckIcon", group: "Actions", shortcut: ["⌘", "N"] },
        { id: "2", label: "Open Project", icon: "ChevronRightIcon", group: "Actions", shortcut: ["⌘", "O"] },
        { id: "3", label: "Save File", icon: "UploadIcon", group: "Actions", shortcut: ["⌘", "S"] },
        { id: "4", label: "Settings", icon: "SquareIcon", group: "Settings", shortcut: ["⌘", ","] },
        { id: "5", label: "Profile", icon: "CircleIcon", group: "Settings" },
        { id: "6", label: "Theme: Dark", icon: "EyeOffIcon", group: "Preferences" },
        { id: "7", label: "Theme: Light", icon: "EyeIcon", group: "Preferences" },
    ];

    const filteredItems = items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
    );

    const groups = Array.from(new Set(filteredItems.map((item) => item.group)));

    return (
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
            <CommandPalette>
                <CommandPaletteTrigger>
                    <Icon name="SearchIcon" size="small" />
                    <span>Search Commands...</span>
                    <kbd style={{ marginLeft: "12px", fontSize: "0.8em", opacity: 0.6 }}>⌘K</kbd>
                </CommandPaletteTrigger>

                <CommandPaletteContent>
                    <CommandPaletteInput
                        placeholder="Type a command or search..."
                        onChange={setSearch}
                    />
                    <CommandPaletteList>
                        <CommandPaletteEmpty />
                        {groups.map((group) => (
                            <CommandPaletteGroup key={group} heading={group}>
                                {filteredItems
                                    .filter((item) => item.group === group)
                                    .map((item) => (
                                        <CommandPaletteItem
                                            key={item.id}
                                            onSelect={() => console.log(`Selected: ${item.label}`)}
                                            shortcut={item.shortcut}
                                            icon={<Icon name={item.icon as any} size="small" />}
                                        >
                                            {item.label}
                                        </CommandPaletteItem>
                                    ))}
                            </CommandPaletteGroup>
                        ))}
                    </CommandPaletteList>
                    <CommandPaletteFooter>
                        <div className="wim-command-palette-shortcut-hint">
                            <kbd className="wim-kbd wim-kbd--sm">↵</kbd> to select
                        </div>
                        <div className="wim-command-palette-shortcut-hint">
                            <kbd className="wim-kbd wim-kbd--sm">↑</kbd>
                            <kbd className="wim-kbd wim-kbd--sm">↓</kbd> to navigate
                        </div>
                        <div className="wim-command-palette-shortcut-hint">
                            <kbd className="wim-kbd wim-kbd--sm">esc</kbd> to close
                        </div>
                    </CommandPaletteFooter>
                </CommandPaletteContent>
            </CommandPalette>
        </div>
    );
};

export const Default: Story = {
    render: () => <DefaultTemplate />,
};

const ControlledTemplate = () => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
            <button
                onClick={() => setOpen(true)}
                style={{
                    padding: "10px 20px",
                    background: "var(--color-primary)",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
            >
                Open Controlled Palette
            </button>

            <CommandPalette open={open} onOpenChange={setOpen}>
                <CommandPaletteContent>
                    <CommandPaletteInput placeholder="Search..." />
                    <CommandPaletteList>
                        <CommandPaletteGroup heading="Quick Links">
                            <CommandPaletteItem onSelect={() => { }} icon={<Icon name="SearchIcon" size="small" />}>Search Docs</CommandPaletteItem>
                            <CommandPaletteItem onSelect={() => { }} icon={<Icon name="CopyIcon" size="small" />}>Copy Link</CommandPaletteItem>
                            <CommandPaletteItem onSelect={() => { }} icon={<Icon name="StarIcon" size="small" />}>Add to Favorites</CommandPaletteItem>
                        </CommandPaletteGroup>
                    </CommandPaletteList>
                </CommandPaletteContent>
            </CommandPalette>
        </div>
    );
};

export const Controlled: Story = {
    render: () => <ControlledTemplate />,
};


