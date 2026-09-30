import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover";

describe("Popover", () => {
  it("renders trigger and opens content on click", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Popover Content")).toBeInTheDocument();
  });

  it("closes when close button is clicked", async () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          Popover Content
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>,
    );

    expect(screen.getByText("Popover Content")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => {
      expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    });
  });

  it("names the dialog with the trigger when no name is given", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Set dimensions</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(
      screen.getByRole("dialog", { name: "Set dimensions" }),
    ).toBeInTheDocument();
  });

  it("still names the dialog when aria-labelledby is passed as undefined", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Set dimensions</PopoverTrigger>
        <PopoverContent aria-labelledby={undefined}>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(
      screen.getByRole("dialog", { name: "Set dimensions" }),
    ).toBeInTheDocument();
  });

  it("names the dialog with an asChild trigger and keeps its id", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button type="button" id="my-trigger">Filters</button>
        </PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );

    expect(screen.getByRole("button", { name: "Filters" })).toHaveAttribute("id", "my-trigger");
    expect(screen.getByRole("dialog", { name: "Filters" })).toHaveAttribute(
      "aria-labelledby",
      "my-trigger",
    );
  });

  it("lets a given aria-label or aria-labelledby win over the trigger", () => {
    render(
      <>
        <Popover defaultOpen>
          <PopoverTrigger>Open A</PopoverTrigger>
          <PopoverContent aria-label="Label A">A</PopoverContent>
        </Popover>
        <Popover defaultOpen>
          <PopoverTrigger>Open B</PopoverTrigger>
          <PopoverContent aria-labelledby="heading-b">
            <h2 id="heading-b">Heading B</h2>
          </PopoverContent>
        </Popover>
      </>,
    );

    expect(screen.getByRole("dialog", { name: "Label A" })).not.toHaveAttribute("aria-labelledby");
    expect(screen.getByRole("dialog", { name: "Heading B" })).toBeInTheDocument();
  });

  it("closes when clicking outside", async () => {
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <Popover defaultOpen>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Popover Content</PopoverContent>
        </Popover>
      </div>,
    );

    expect(screen.getByText("Popover Content")).toBeInTheDocument();
    fireEvent.pointerDown(screen.getByTestId("outside"));
    await waitFor(() => {
      expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
