import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "./Dropdown";

describe("Dropdown", () => {
  it("toggles menu on click", async () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
  });

  it("closes on item click", async () => {
    const handleClick = vi.fn();
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={handleClick}>Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    fireEvent.click(screen.getByText("Toggle"));
    fireEvent.click(screen.getByText("Action"));

    expect(handleClick).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.queryByText("Action")).not.toBeInTheDocument();
    });
  });

  it("closes on outside click", async () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    fireEvent.click(screen.getByText("Toggle"));
    expect(screen.getByText("Item")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    await waitFor(() => {
      expect(screen.queryByText("Item")).not.toBeInTheDocument();
    });
  });
});
