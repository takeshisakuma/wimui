import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  BottomSheet,
  BottomSheetTrigger,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetBody,
} from "./BottomSheet";

describe("BottomSheet", () => {
  it("renders trigger and opens content when clicked", async () => {
    render(
      <BottomSheet>
        <BottomSheetTrigger>Open Sheet</BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>Sheet Title</BottomSheetTitle>
          </BottomSheetHeader>
          <div>Sheet Body Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );

    expect(screen.queryByText("Sheet Title")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Sheet"));

    await waitFor(() => {
      expect(screen.getByText("Sheet Title")).toBeInTheDocument();
      expect(screen.getByText("Sheet Body Content")).toBeInTheDocument();
    });
  });

  it("closes when the overlay is clicked", async () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <div>Sheet Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );

    expect(screen.getByText("Sheet Content")).toBeInTheDocument();

    const overlay = document.querySelector(".wim-bottom-sheet-overlay");
    if (overlay) fireEvent.click(overlay);

    await waitFor(() => {
      expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
    });
  });

  it("closes when Escape key is pressed", async () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <div>Sheet Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );

    expect(screen.getByText("Sheet Content")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
    });
  });

  // 制御モード
  it("respects controlled open prop", async () => {
    render(
      <BottomSheet open={true}>
        <BottomSheetContent>
          <div>Controlled Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );
    expect(screen.getByText("Controlled Content")).toBeInTheDocument();
  });

  it("does not open in controlled mode when trigger is clicked", () => {
    const onOpenChange = vi.fn();
    render(
      <BottomSheet open={false} onOpenChange={onOpenChange}>
        <BottomSheetTrigger>Open</BottomSheetTrigger>
        <BottomSheetContent>
          <div>Controlled Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    // 制御モードなので内部状態は変わらず、コンテンツは表示されない
    expect(screen.queryByText("Controlled Content")).not.toBeInTheDocument();
  });

  it("calls onOpenChange when opened in uncontrolled mode", () => {
    const onOpenChange = vi.fn();
    render(
      <BottomSheet onOpenChange={onOpenChange}>
        <BottomSheetTrigger>Open</BottomSheetTrigger>
        <BottomSheetContent>
          <div>Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("opens with defaultOpen=true", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <div>Default Open Content</div>
        </BottomSheetContent>
      </BottomSheet>,
    );
    expect(screen.getByText("Default Open Content")).toBeInTheDocument();
  });
});

describe("BottomSheetTrigger", () => {
  it("renders as button by default", () => {
    render(
      <BottomSheet>
        <BottomSheetTrigger>Open</BottomSheetTrigger>
        <BottomSheetContent><div>Content</div></BottomSheetContent>
      </BottomSheet>,
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
  });

  it("applies className to the trigger button", () => {
    render(
      <BottomSheet>
        <BottomSheetTrigger className="my-trigger">Open</BottomSheetTrigger>
        <BottomSheetContent><div>Content</div></BottomSheetContent>
      </BottomSheet>,
    );
    expect(screen.getByRole("button", { name: "Open" })).toHaveClass("my-trigger");
  });

  it("renders as child element when asChild is true", async () => {
    render(
      <BottomSheet>
        <BottomSheetTrigger asChild>
          <a href="/open">Open Link</a>
        </BottomSheetTrigger>
        <BottomSheetContent><div>Content</div></BottomSheetContent>
      </BottomSheet>,
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
      <BottomSheet>
        <BottomSheetTrigger asChild>
          <button onClick={childClick}>Open</button>
        </BottomSheetTrigger>
        <BottomSheetContent><div>Content</div></BottomSheetContent>
      </BottomSheet>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(childClick).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  it("merges className when asChild is true", () => {
    render(
      <BottomSheet>
        <BottomSheetTrigger asChild className="trigger-class">
          <button className="child-class">Open</button>
        </BottomSheetTrigger>
        <BottomSheetContent><div>Content</div></BottomSheetContent>
      </BottomSheet>,
    );

    const btn = screen.getByText("Open");
    expect(btn).toHaveClass("trigger-class");
    expect(btn).toHaveClass("child-class");
  });
});

describe("BottomSheetClose", () => {
  it("renders as button and closes the sheet", async () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <div>Content</div>
          <BottomSheetClose>Close</BottomSheetClose>
        </BottomSheetContent>
      </BottomSheet>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  it("applies className to the close button", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetClose className="my-close">Close</BottomSheetClose>
        </BottomSheetContent>
      </BottomSheet>,
    );
    expect(screen.getByRole("button", { name: "Close" })).toHaveClass("my-close");
  });

  it("renders as child element when asChild is true", async () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <div>Content</div>
          <BottomSheetClose asChild>
            <a href="/close">Close Link</a>
          </BottomSheetClose>
        </BottomSheetContent>
      </BottomSheet>,
    );

    const link = screen.getByText("Close Link");
    expect(link.tagName).toBe("A");
    fireEvent.click(link);

    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  it("calls child's original onClick when asChild is true", async () => {
    const childClick = vi.fn();
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetClose asChild>
            <button onClick={childClick}>Close</button>
          </BottomSheetClose>
        </BottomSheetContent>
      </BottomSheet>,
    );

    fireEvent.click(screen.getByText("Close"));
    expect(childClick).toHaveBeenCalled();
  });
});

describe("BottomSheet section components", () => {
  it("renders BottomSheetHeader with className", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetHeader className="my-header">Header</BottomSheetHeader>
        </BottomSheetContent>
      </BottomSheet>,
    );
    const header = screen.getByText("Header").closest(".wim-bottom-sheet-header");
    expect(header).toHaveClass("my-header");
  });

  it("renders BottomSheetFooter", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetFooter className="my-footer">Footer</BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>,
    );
    const footer = screen.getByText("Footer").closest(".wim-bottom-sheet-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("my-footer");
  });

  it("renders BottomSheetTitle", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetTitle className="my-title">Title</BottomSheetTitle>
        </BottomSheetContent>
      </BottomSheet>,
    );
    const title = screen.getByText("Title");
    expect(title.tagName).toBe("H2");
    expect(title).toHaveClass("my-title");
  });

  it("renders BottomSheetDescription", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetDescription className="my-desc">Desc</BottomSheetDescription>
        </BottomSheetContent>
      </BottomSheet>,
    );
    const desc = screen.getByText("Desc");
    expect(desc.tagName).toBe("P");
    expect(desc).toHaveClass("my-desc");
  });

  it("renders BottomSheetBody", () => {
    render(
      <BottomSheet defaultOpen={true}>
        <BottomSheetContent>
          <BottomSheetBody className="my-body">Body</BottomSheetBody>
        </BottomSheetContent>
      </BottomSheet>,
    );
    const body = screen.getByText("Body").closest(".wim-bottom-sheet-body");
    expect(body).toBeInTheDocument();
    expect(body).toHaveClass("my-body");
  });
});
