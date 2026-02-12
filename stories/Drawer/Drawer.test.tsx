import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerTitle, DrawerDescription } from "./Drawer";

describe("Drawer", () => {
    it("opens and closes", async () => {
        render(
            <Drawer side="right">
                <DrawerTrigger>Open Drawer</DrawerTrigger>
                <DrawerContent>
                    <DrawerTitle>Title</DrawerTitle>
                    <DrawerClose>Close</DrawerClose>
                </DrawerContent>
            </Drawer>
        );

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

        fireEvent.click(screen.getByText("Open Drawer"));

        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText("Title")).toBeInTheDocument();

        fireEvent.click(screen.getByText("Close"));

        await waitFor(() => {
            expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        });
    });

    it("applies side class", () => {
        render(
            <Drawer side="left" defaultOpen>
                <DrawerContent>hello</DrawerContent>
            </Drawer>
        );
        const content = screen.getByRole("dialog");
        expect(content).toHaveClass("wim-drawer-content--left");
    });
});
