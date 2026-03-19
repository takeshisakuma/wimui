import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "./Dialog";

describe("Dialog", () => {
  it("opens and closes", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Dialog"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("closes on escape", async () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>Content</DialogContent>
      </Dialog>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("closes when overlay is clicked", async () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <div>Dialog Body</div>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByText("Dialog Body")).toBeInTheDocument();

    const overlay = document.querySelector(".wim-dialog-overlay");
    if (overlay) fireEvent.click(overlay);

    await waitFor(() => {
      expect(screen.queryByText("Dialog Body")).not.toBeInTheDocument();
    });
  });

  it("respects controlled open=true", () => {
    render(
      <Dialog open={true}>
        <DialogContent>
          <div>Controlled Content</div>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText("Controlled Content")).toBeInTheDocument();
  });

  it("does not open in controlled mode but calls onOpenChange", () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog open={false} onOpenChange={onOpenChange}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <div>Content</div>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("calls onOpenChange when opened in uncontrolled mode", () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog onOpenChange={onOpenChange}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <div>Content</div>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("opens with defaultOpen=true", () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <div>Default Open Content</div>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText("Default Open Content")).toBeInTheDocument();
  });
});

describe("DialogTrigger", () => {
  it("renders as button by default", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent><div>Content</div></DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("applies className to trigger button", () => {
    render(
      <Dialog>
        <DialogTrigger className="my-trigger">Open</DialogTrigger>
        <DialogContent><div>Content</div></DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole("button", { name: "Open" })).toHaveClass("my-trigger");
  });

  it("renders as child element when asChild is true", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <a href="/open">Open Link</a>
        </DialogTrigger>
        <DialogContent><div>Content</div></DialogContent>
      </Dialog>,
    );

    const link = screen.getByText("Open Link");
    expect(link.tagName).toBe("A");
    fireEvent.click(link);
    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  it("calls child's original onClick when asChild is true", async () => {
    const childClick = vi.fn();
    render(
      <Dialog>
        <DialogTrigger asChild>
          <button onClick={childClick}>Open</button>
        </DialogTrigger>
        <DialogContent><div>Content</div></DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(childClick).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  it("merges className when asChild is true", () => {
    render(
      <Dialog>
        <DialogTrigger asChild className="trigger-class">
          <button className="child-class">Open</button>
        </DialogTrigger>
        <DialogContent><div>Content</div></DialogContent>
      </Dialog>,
    );

    const btn = screen.getByText("Open");
    expect(btn).toHaveClass("trigger-class");
    expect(btn).toHaveClass("child-class");
  });
});

describe("DialogClose", () => {
  it("renders as button and closes the dialog", async () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <div>Content</div>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  it("applies className to close button", () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogClose className="my-close">Close</DialogClose>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByRole("button", { name: /close/i })).toHaveClass("my-close");
  });

  it("renders as child element when asChild is true", async () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <div>Content</div>
          <DialogClose asChild>
            <a href="/close">Close Link</a>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    const link = screen.getByText("Close Link");
    expect(link.tagName).toBe("A");
    fireEvent.click(link);

    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  it("calls child's original onClick when asChild is true", () => {
    const childClick = vi.fn();
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogClose asChild>
            <button onClick={childClick}>Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    fireEvent.click(screen.getByText("Close"));
    expect(childClick).toHaveBeenCalled();
  });
});

describe("Dialog section components", () => {
  it("renders DialogHeader with className", () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogHeader className="my-header">Header</DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    const header = screen.getByText("Header").closest(".wim-dialog-header");
    expect(header).toHaveClass("my-header");
  });

  it("renders DialogFooter with className", () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogFooter className="my-footer">Footer</DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    const footer = screen.getByText("Footer").closest(".wim-dialog-footer");
    expect(footer).toHaveClass("my-footer");
  });

  it("renders DialogTitle as h2", () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogTitle className="my-title">Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    const title = screen.getByText("Title");
    expect(title.tagName).toBe("H2");
    expect(title).toHaveClass("my-title");
  });

  it("renders DialogDescription as p", () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogDescription className="my-desc">Desc</DialogDescription>
        </DialogContent>
      </Dialog>,
    );
    const desc = screen.getByText("Desc");
    expect(desc.tagName).toBe("P");
    expect(desc).toHaveClass("my-desc");
  });
});
