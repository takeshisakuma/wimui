import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VirtualList } from "./VirtualList";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

describe("VirtualList", () => {
  it("renders visible items", () => {
    render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
      />,
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("renders with role list", () => {
    render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
      />,
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders listitems", () => {
    render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
      />,
    );
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("does not render all items at once", () => {
    render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
      />,
    );
    // 100アイテム全てはDOMに存在しない（仮想化により）
    expect(screen.queryByText("Item 100")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
        className="custom-class"
      />,
    );
    expect(container.querySelector(".wim-virtual-list.custom-class")).toBeInTheDocument();
  });

  it("applies aria-setsize with total items length", () => {
    const { container } = render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
      />,
    );
    expect(container.querySelector("[aria-setsize='100']")).toBeInTheDocument();
  });

  it("updates visible items on scroll", () => {
    const { container } = render(
      <VirtualList
        items={items}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item}</span>}
      />,
    );
    const list = container.querySelector(".wim-virtual-list")!;
    fireEvent.scroll(list, { target: { scrollTop: 2000 } });
    // スクロール後は後半のアイテムが表示される
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("renders empty list without error", () => {
    const { container } = render(
      <VirtualList
        items={[]}
        itemHeight={40}
        height={200}
        renderItem={(item) => <span>{item as string}</span>}
      />,
    );
    expect(container.querySelector(".wim-virtual-list")).toBeInTheDocument();
  });
});
