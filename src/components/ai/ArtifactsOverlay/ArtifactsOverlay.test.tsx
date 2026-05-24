import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ArtifactsOverlay } from "./ArtifactsOverlay";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      // Handle namespace-prefixed keys (e.g., "form:artifact_overlay.maximize")
      const bare = key.includes(":") ? key.split(":")[1] : key;
      const map: Record<string, string> = {
        "a11y.close": "Close",
        "artifact_overlay.maximize": "Maximize",
        "artifact_overlay.minimize": "Minimize",
      };
      return map[bare] ?? key;
    },
  }),
}));

describe("ArtifactsOverlay", () => {
  it("renders title when open", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="My Artifact">
        <p>Content</p>
      </ArtifactsOverlay>,
    );
    expect(screen.getByText("My Artifact")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="Title" subtitle="v1.0">
        <p>Content</p>
      </ArtifactsOverlay>,
    );
    expect(screen.getByText("v1.0")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="Title">
        <p>Content</p>
      </ArtifactsOverlay>,
    );
    expect(screen.queryByText("v1.0")).not.toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="Title">
        <p>Artifact body</p>
      </ArtifactsOverlay>,
    );
    expect(screen.getByText("Artifact body")).toBeInTheDocument();
  });

  it("does not render fullscreen toggle by default", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="Title">
        <p>Content</p>
      </ArtifactsOverlay>,
    );
    expect(screen.queryByLabelText("Maximize")).not.toBeInTheDocument();
  });

  it("renders fullscreen toggle when showFullscreenToggle is true", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="Title" showFullscreenToggle>
        <p>Content</p>
      </ArtifactsOverlay>,
    );
    expect(screen.getByLabelText("Maximize")).toBeInTheDocument();
  });

  it("toggles fullscreen label when toggle is clicked", () => {
    render(
      <ArtifactsOverlay open onOpenChange={vi.fn()} title="Title" showFullscreenToggle>
        <p>Content</p>
      </ArtifactsOverlay>,
    );
    fireEvent.click(screen.getByLabelText("Maximize"));
    expect(screen.getByLabelText("Minimize")).toBeInTheDocument();
  });

  it("does not render content when closed", () => {
    render(
      <ArtifactsOverlay open={false} onOpenChange={vi.fn()} title="Hidden Title">
        <p>Hidden content</p>
      </ArtifactsOverlay>,
    );
    expect(screen.queryByText("Hidden Title")).not.toBeInTheDocument();
  });
});
