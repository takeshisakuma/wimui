import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FocusTrap } from "./FocusTrap";

describe("FocusTrap", () => {
    it("renders children", () => {
        render(
            <FocusTrap>
                <button>Click</button>
            </FocusTrap>
        );
        expect(screen.getByText("Click")).toBeInTheDocument();
    });

    it("auto focuses first element", () => {
        render(
            <FocusTrap>
                <button>First</button>
                <button>Second</button>
            </FocusTrap>
        );
        expect(screen.getByText("First")).toHaveFocus();
    });
});
