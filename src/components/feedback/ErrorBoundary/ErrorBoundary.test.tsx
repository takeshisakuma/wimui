import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ErrorBoundary } from "./ErrorBoundary";
import React from "react";

const ThrowError = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test Error");
  }
  return <div>No Error</div>;
};

describe("ErrorBoundary", () => {
  it("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <div>Safe Content</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Safe Content")).toBeInTheDocument();
  });

  it("renders default fallback on error", () => {
    // Prevent console.error from cluttering output during test
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>,
    );

    // The title should be in the document (it might be the translation key if not initialized in test, or the real string)
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Error/)).toBeInTheDocument();

    // Verify detail toggle button exists
    const detailButton = screen.getByText(/Show details/i);
    expect(detailButton).toBeInTheDocument();

    // Toggle details
    fireEvent.click(detailButton);
    expect(screen.getByText(/hide details/i)).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it("renders custom fallback", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div>Custom Error UI</div>}>
        <ThrowError shouldThrow />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Custom Error UI")).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
