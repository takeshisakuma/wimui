import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DateRangePicker } from "./DateRangePicker";

describe("DateRangePicker", () => {
    it("renders two date pickers", () => {
        render(
            <DateRangePicker
                startProps={{ placeholder: "Start Date" }}
                endProps={{ placeholder: "End Date" }}
            />
        );
        expect(screen.getByPlaceholderText("Start Date")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("End Date")).toBeInTheDocument();
        expect(screen.getByText("~")).toBeInTheDocument();
    });
});
