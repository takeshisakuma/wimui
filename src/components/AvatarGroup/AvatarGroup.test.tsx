import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AvatarGroup } from "./AvatarGroup";
import { Avatar } from "../Avatar/Avatar";

describe("AvatarGroup", () => {
    it("renders children avatars", () => {
        render(
            <AvatarGroup>
                <Avatar initials="JD" />
                <Avatar initials="AS" />
            </AvatarGroup>
        );
        expect(screen.getByText("JD")).toBeInTheDocument();
        expect(screen.getByText("AS")).toBeInTheDocument();
    });

    it("limits the number of displayed avatars by max prop", () => {
        render(
            <AvatarGroup max={2}>
                <Avatar initials="A" />
                <Avatar initials="B" />
                <Avatar initials="C" />
                <Avatar initials="D" />
            </AvatarGroup>
        );
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("B")).toBeInTheDocument();
        expect(screen.queryByText("C")).not.toBeInTheDocument();
        expect(screen.getByText("+2")).toBeInTheDocument();
    });

    it("displays excess count based on total prop", () => {
        render(
            <AvatarGroup max={2} total={10}>
                <Avatar initials="A" />
                <Avatar initials="B" />
            </AvatarGroup>
        );
        expect(screen.getByText("+8")).toBeInTheDocument();
    });

    it("applies size to child avatars", () => {
        const { container } = render(
            <AvatarGroup size="lg">
                <Avatar initials="A" />
            </AvatarGroup>
        );
        const avatar = container.querySelector(".wim-avatar");
        expect(avatar).toHaveClass("wim-avatar--lg");
    });
});
