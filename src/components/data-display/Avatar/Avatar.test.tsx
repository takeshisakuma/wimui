import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders image when src provided", () => {
    render(<Avatar src="image.jpg" alt="User Avatar" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image.jpg");
    expect(img).toHaveAttribute("alt", "User Avatar");
  });

  it("renders initials when no src", () => {
    const { container } = render(<Avatar initials="TS" />);
    expect(screen.getByText("TS")).toBeInTheDocument();
    expect(
      container.querySelector(".wim-avatar__initials"),
    ).toBeInTheDocument();
  });

  it("fallback container has role=img with initials as aria-label", () => {
    render(<Avatar initials="TS" />);
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("aria-label", "TS");
  });

  it("fallback container has role=img with alt as aria-label when both provided", () => {
    render(<Avatar initials="TS" alt="Takeshi Sakuma" />);
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("aria-label", "Takeshi Sakuma");
  });

  it("renders fallback icon when no src and no initials", () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("fallback icon container without label is decorative (no role=img)", () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).not.toHaveAttribute("role");
  });

  it("applies size and shape classes", () => {
    const { container } = render(<Avatar size="lg" shape="rounded" />);
    expect(container.firstChild).toHaveClass("wim-avatar--lg");
    expect(container.firstChild).toHaveClass("wim-avatar--rounded");
  });

  it("falls back to initials when image fails to load", () => {
    const { container } = render(<Avatar src="broken.jpg" initials="TS" />);
    fireEvent.error(container.querySelector("img")!);
    expect(screen.getByText("TS")).toBeInTheDocument();
  });

  it("falls back to default icon when image fails and no initials", () => {
    const { container } = render(<Avatar src="broken.jpg" alt="User" />);
    fireEvent.error(container.querySelector("img")!);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("fallback shows role=img and alt as aria-label after image error", () => {
    const { container } = render(<Avatar src="broken.jpg" alt="Broken" />);
    fireEvent.error(container.querySelector("img")!);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveAttribute("role", "img");
    expect(wrapper).toHaveAttribute("aria-label", "Broken");
  });

  it("renders custom icon when icon prop is provided", () => {
    const { container } = render(<Avatar icon={<span data-testid="custom-icon" />} />);
    expect(container.querySelector('[data-testid="custom-icon"]')).toBeInTheDocument();
  });

  it("applies intent class", () => {
    const { container } = render(<Avatar intent="primary" />);
    expect(container.firstChild).toHaveClass("wim-avatar--primary");
  });

  it("truncates initials to 2 characters", () => {
    render(<Avatar initials="ABC" />);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("fallback has no role or aria-label when alt and initials are both empty/absent", () => {
    const { container } = render(<Avatar />);
    const avatar = container.firstChild as HTMLElement;
    expect(avatar).not.toHaveAttribute("role");
    expect(avatar).not.toHaveAttribute("aria-label");
  });
});
