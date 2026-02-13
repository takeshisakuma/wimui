import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
    it("renders with default pulse animation and text variant", () => {
        const { container } = render(<Skeleton />);
        expect(container.firstChild).toHaveClass("wim-skeleton");
        expect(container.firstChild).toHaveClass("wim-skeleton--text");
        expect(container.firstChild).toHaveClass("wim-skeleton--pulse");
    });

    it("renders circle variant", () => {
        const { container } = render(<Skeleton variant="circle" />);
        expect(container.firstChild).toHaveClass("wim-skeleton--circle");
    });

    it("applies height and width", () => {
        const { container } = render(<Skeleton width={100} height={50} />);
        const skeleton = container.firstChild as HTMLElement;
        expect(skeleton.style.width).toBe("100px");
        expect(skeleton.style.height).toBe("50px");
    });
});
