import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DescriptionList, DescriptionListItem, DescriptionListTerm, DescriptionListDetails } from "./DescriptionList";

// Mock translation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("DescriptionList", () => {
    it("renders list items", () => {
        render(
            <DescriptionList>
                <DescriptionListItem>
                    <DescriptionListTerm>Term 1</DescriptionListTerm>
                    <DescriptionListDetails>Details 1</DescriptionListDetails>
                </DescriptionListItem>
            </DescriptionList>
        );
        expect(screen.getByText("Term 1")).toBeInTheDocument();
        expect(screen.getByText("Details 1")).toBeInTheDocument();
    });

    it("applies layout class", () => {
        render(
            <DescriptionList layout="vertical">
                <DescriptionListItem>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                </DescriptionListItem>
            </DescriptionList>
        );
        // We need to look at the DL element
        // Since DescriptionList renders a 'dl', we can find it by tagName or check container
        // But testing-library encourages roles. 'dl' doesn't have a specific implicit role like 'list' (ul/ol only).
        // So allow selecting by text closest.
        const term = screen.getByText("Term");
        const dl = term.closest("dl");
        expect(dl).toHaveClass("wim-description-list--vertical");
    });
});
