import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Result } from "./Result";

// Mock i18next
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("Result", () => {
    it("renders title and subTitle", () => {
        render(<Result title="Success" subTitle="Operation completed" />);
        expect(screen.getByText("Success")).toBeInTheDocument();
        expect(screen.getByText("Operation completed")).toBeInTheDocument();
    });

    it("renders status class", () => {
        const { container } = render(<Result status="success" />);
        expect(container.firstChild).toHaveClass("wim-result--success");
    });

    it("renders children in content area", () => {
        render(<Result>Additional Info</Result>);
        expect(screen.getByText("Additional Info")).toBeInTheDocument();
    });
});
