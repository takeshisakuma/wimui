import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Popconfirm } from "./Popconfirm";

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("Popconfirm", () => {
  it("renders trigger and shows popover when clicked", () => {
    render(
      <Popconfirm title="Are you sure?">
        <button>Delete</button>
      </Popconfirm>,
    );

    const trigger = screen.getByText("Delete");
    fireEvent.click(trigger);

    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(screen.getByText("OK")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onConfirm when OK is clicked", () => {
    const handleConfirm = vi.fn();
    render(
      <Popconfirm title="Confirm?" onConfirm={handleConfirm}>
        <button>Action</button>
      </Popconfirm>,
    );

    fireEvent.click(screen.getByText("Action"));
    fireEvent.click(screen.getByText("OK"));

    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onCancel when Cancel is clicked", () => {
    const handleCancel = vi.fn();
    render(
      <Popconfirm title="Confirm?" onCancel={handleCancel}>
        <button>Action</button>
      </Popconfirm>,
    );

    fireEvent.click(screen.getByText("Action"));
    fireEvent.click(screen.getByText("Cancel"));

    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it("does not show popover when disabled", () => {
    render(
      <Popconfirm title="Confirm?" disabled>
        <button>Action</button>
      </Popconfirm>,
    );

    fireEvent.click(screen.getByText("Action"));
    expect(screen.queryByText("Confirm?")).not.toBeInTheDocument();
  });
});
