import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
    it("renders with search icon", () => {
        const { container } = render(<SearchInput />);
        // SearchIcon should be present (via Input component)
        expect(container.querySelector(".wim-input-icon--left")).toBeInTheDocument();
    });

    it("passes props to Input", () => {
        render(<SearchInput placeholder="Search items..." />);
        expect(screen.getByPlaceholderText("Search items...")).toBeInTheDocument();
    });
});
