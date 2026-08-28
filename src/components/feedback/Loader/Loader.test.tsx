import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders loader", () => {
    const { container } = render(<Loader />);
    expect(container.querySelector(".wim-loader")).toBeInTheDocument();
  });

  it("applies variant and size", () => {
    const { container } = render(<Loader variant="dots" size="lg" />);
    const loader = container.firstChild as HTMLElement;
    expect(loader).toHaveClass(/dots/);
    expect(loader).toHaveClass(/lg/);
  });

  // T228: 中身が変化しない live region は何も読み上げないので、素の装飾として
  // 置く。伝えたい呼び出し側が自分で live region を用意できるよう、role は
  // 渡されたものが勝つ。
  it("is not a live region on its own", () => {
    render(<Loader />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("lets the caller opt into a role", () => {
    render(<Loader role="status" aria-label="Loading" />);
    expect(screen.getByRole("status")).toHaveAccessibleName("Loading");
  });
});
