import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Popconfirm } from "./Popconfirm";

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

  it("does not show popover when disabled (element child)", () => {
    render(
      <Popconfirm title="Confirm?" disabled>
        <button>Action</button>
      </Popconfirm>,
    );

    fireEvent.click(screen.getByText("Action"));
    expect(screen.queryByText("Confirm?")).not.toBeInTheDocument();
    // child button should be disabled
    expect(screen.getByText("Action")).toBeDisabled();
  });

  it("disabled with non-element child renders children as-is", () => {
    render(
      <Popconfirm title="Confirm?" disabled>
        {"Plain text"}
      </Popconfirm>,
    );
    expect(screen.getByText("Plain text")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <Popconfirm title="Title" description="Extra details">
        <button>Trigger</button>
      </Popconfirm>,
    );
    fireEvent.click(screen.getByText("Trigger"));
    expect(screen.getByText("Extra details")).toBeInTheDocument();
  });

  it("renders JSX title", () => {
    render(
      <Popconfirm title={<strong>Bold Title</strong>}>
        <button>Trigger</button>
      </Popconfirm>,
    );
    fireEvent.click(screen.getByText("Trigger"));
    expect(screen.getByText("Bold Title")).toBeInTheDocument();
  });

  it("renders JSX description", () => {
    render(
      <Popconfirm title="T" description={<em>Italic desc</em>}>
        <button>Trigger</button>
      </Popconfirm>,
    );
    fireEvent.click(screen.getByText("Trigger"));
    expect(screen.getByText("Italic desc")).toBeInTheDocument();
  });

  it("renders custom okText and cancelText", () => {
    render(
      <Popconfirm title="Sure?" okText="Yes" cancelText="No">
        <button>Trigger</button>
      </Popconfirm>,
    );
    fireEvent.click(screen.getByText("Trigger"));
    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });
});
