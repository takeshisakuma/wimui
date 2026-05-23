import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
import type { DashboardWidget } from "./Dashboard";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: Record<string, unknown>) => {
      if (opts && "title" in opts) return `${key}:${opts.title}`;
      return key;
    },
  }),
}));

const sampleWidgets: DashboardWidget[] = [
  { id: "w1", title: "Revenue", content: <p>$1,200</p> },
  { id: "w2", title: "Users", description: "Active users", content: <p>342</p> },
  { id: "w3", title: "Tasks", content: <p>12 pending</p> },
];

describe("Dashboard", () => {
  it("renders all widgets", () => {
    render(<Dashboard widgets={sampleWidgets} />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });

  it("renders widget descriptions", () => {
    render(<Dashboard widgets={sampleWidgets} />);
    expect(screen.getByText("Active users")).toBeInTheDocument();
  });

  it("renders widget content", () => {
    render(<Dashboard widgets={sampleWidgets} />);
    expect(screen.getByText("$1,200")).toBeInTheDocument();
  });

  it("shows edit toggle button by default", () => {
    render(<Dashboard widgets={sampleWidgets} />);
    expect(screen.getByRole("button", { name: "dashboard_widget.enter_edit" })).toBeInTheDocument();
  });

  it("hides edit toggle when showEditToggle is false", () => {
    render(<Dashboard widgets={sampleWidgets} showEditToggle={false} />);
    expect(screen.queryByRole("button", { name: "dashboard_widget.enter_edit" })).not.toBeInTheDocument();
  });

  it("enters edit mode when edit button is clicked", () => {
    render(<Dashboard widgets={sampleWidgets} onRemove={vi.fn()} />);
    const editBtn = screen.getByRole("button", { name: "dashboard_widget.enter_edit" });
    fireEvent.click(editBtn);
    const removeBtns = screen.getAllByRole("button", { name: /dashboard_widget\.remove_widget/i });
    expect(removeBtns).toHaveLength(3);
  });

  it("calls onRemove when remove button is clicked in edit mode", () => {
    const onRemove = vi.fn();
    render(
      <Dashboard
        widgets={sampleWidgets}
        editable
        onRemove={onRemove}
      />,
    );
    const removeBtns = screen.getAllByRole("button", { name: /dashboard_widget\.remove_widget/i });
    fireEvent.click(removeBtns[0]);
    expect(onRemove).toHaveBeenCalledWith("w1");
  });

  it("shows add button when editable and onAdd is provided", () => {
    render(
      <Dashboard
        widgets={sampleWidgets}
        editable
        onAdd={vi.fn()}
      />,
    );
    expect(screen.getByRole("button", { name: "dashboard_widget.add_widget" })).toBeInTheDocument();
  });

  it("calls onAdd when add button is clicked", () => {
    const onAdd = vi.fn();
    render(<Dashboard widgets={sampleWidgets} editable onAdd={onAdd} />);
    fireEvent.click(screen.getByRole("button", { name: "dashboard_widget.add_widget" }));
    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it("supports controlled editable prop", () => {
    const onEditChange = vi.fn();
    render(
      <Dashboard
        widgets={sampleWidgets}
        editable={false}
        onEditChange={onEditChange}
        onRemove={vi.fn()}
      />,
    );
    expect(screen.queryByRole("button", { name: /remove/i })).not.toBeInTheDocument();
  });

  it("renders label as heading when provided", () => {
    render(<Dashboard widgets={sampleWidgets} label="My Dashboard" />);
    expect(screen.getByText("My Dashboard")).toBeInTheDocument();
  });

  it("renders children when widgets prop is not provided", () => {
    render(
      <Dashboard>
        <p>Custom widget content</p>
      </Dashboard>,
    );
    expect(screen.getByText("Custom widget content")).toBeInTheDocument();
  });
});
