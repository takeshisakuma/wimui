import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const SimpleAccordion = ({ collapsible = true, type = "single" as "single" | "multiple", defaultValue = undefined as string | string[] | undefined, value = undefined as string | string[] | undefined, onChange = undefined as ((v: string | string[]) => void) | undefined }) => (
  <Accordion type={type} collapsible={collapsible} defaultValue={defaultValue} value={value} onChange={onChange}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Item 1</AccordionTrigger>
      <AccordionContent>Content 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Item 2</AccordionTrigger>
      <AccordionContent>Content 2</AccordionContent>
    </AccordionItem>
  </Accordion>
);

describe("Accordion", () => {
  it("renders children", () => {
    render(
      <Accordion>
        <div data-testid="child">Child</div>
      </Accordion>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("handles single selection", async () => {
    render(<SimpleAccordion />);

    fireEvent.click(screen.getByText("Item 1"));

    await waitFor(() => {
      expect(screen.getByText("Content 1").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
    });

    fireEvent.click(screen.getByText("Item 2"));

    await waitFor(() => {
      expect(screen.getByText("Content 2").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
    });
  });

  it("handles multiple selection", async () => {
    render(<SimpleAccordion type="multiple" />);

    fireEvent.click(screen.getByText("Item 1"));
    fireEvent.click(screen.getByText("Item 2"));

    await waitFor(() => {
      expect(screen.getByText("Content 1").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
      expect(screen.getByText("Content 2").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
    });
  });

  it("multiple: clicking open item removes it", async () => {
    render(<SimpleAccordion type="multiple" defaultValue={["item-1", "item-2"]} />);
    await waitFor(() => {
      expect(screen.getByText("Content 1").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
    });

    fireEvent.click(screen.getByText("Item 1"));
    await waitFor(() => {
      expect(screen.getByText("Content 1").closest(".wim-accordion__content")).not.toHaveClass("wim-accordion__content--open");
    });
  });

  it("respects default string value", async () => {
    render(<SimpleAccordion defaultValue="item-1" />);
    await waitFor(() => {
      expect(screen.getByText("Content 1").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
    });
  });

  it("respects default array value", async () => {
    render(<SimpleAccordion type="multiple" defaultValue={["item-1", "item-2"]} />);
    await waitFor(() => {
      expect(screen.getByText("Content 1").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
      expect(screen.getByText("Content 2").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
    });
  });

  it("collapsible=false: does not close open item", () => {
    render(<SimpleAccordion collapsible={false} defaultValue="item-1" />);
    fireEvent.click(screen.getByText("Item 1"));
    expect(screen.getByText("Content 1").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
  });

  it("controlled mode: renders open item", () => {
    render(<SimpleAccordion value="item-2" />);
    expect(screen.getByText("Content 2").closest(".wim-accordion__content")).toHaveClass("wim-accordion__content--open");
  });

  it("calls onChange when item toggled", () => {
    const onChange = vi.fn();
    render(<SimpleAccordion onChange={onChange} />);
    fireEvent.click(screen.getByText("Item 1"));
    expect(onChange).toHaveBeenCalledWith("item-1");
  });

  it("handles disabled item", () => {
    render(
      <Accordion>
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.click(screen.getByText("Item 1"));
    expect(screen.getByText("Content 1").closest(".wim-accordion__content")).not.toHaveClass("wim-accordion__content--open");
  });

  it("disabled item: keydown is ignored", () => {
    const onChange = vi.fn();
    render(
      <Accordion onChange={onChange}>
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    fireEvent.keyDown(screen.getByText("Item 1").closest("button")!, { key: "ArrowDown" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("keyboard navigation: ArrowDown moves focus", () => {
    render(<SimpleAccordion />);
    const trigger1 = screen.getByText("Item 1").closest("button") as HTMLElement;
    const trigger2 = screen.getByText("Item 2").closest("button") as HTMLElement;
    trigger1.focus();
    fireEvent.keyDown(trigger1, { key: "ArrowDown" });
    expect(document.activeElement).toBe(trigger2);
  });

  it("keyboard navigation: ArrowUp moves focus", () => {
    render(<SimpleAccordion />);
    const trigger1 = screen.getByText("Item 1").closest("button") as HTMLElement;
    const trigger2 = screen.getByText("Item 2").closest("button") as HTMLElement;
    trigger2.focus();
    fireEvent.keyDown(trigger2, { key: "ArrowUp" });
    expect(document.activeElement).toBe(trigger1);
  });

  it("keyboard navigation: Home moves to first item", () => {
    render(<SimpleAccordion />);
    const trigger1 = screen.getByText("Item 1").closest("button") as HTMLElement;
    const trigger2 = screen.getByText("Item 2").closest("button") as HTMLElement;
    trigger2.focus();
    fireEvent.keyDown(trigger2, { key: "Home" });
    expect(document.activeElement).toBe(trigger1);
  });

  it("keyboard navigation: End moves to last item", () => {
    render(<SimpleAccordion />);
    const trigger1 = screen.getByText("Item 1").closest("button") as HTMLElement;
    const trigger2 = screen.getByText("Item 2").closest("button") as HTMLElement;
    trigger1.focus();
    fireEvent.keyDown(trigger1, { key: "End" });
    expect(document.activeElement).toBe(trigger2);
  });

  it("uses custom id when provided", () => {
    const { container } = render(
      <Accordion id="my-accordion">
        <AccordionItem value="item-1">
          <AccordionTrigger>T</AccordionTrigger>
          <AccordionContent>C</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = container.querySelector("button");
    expect(trigger?.id).toContain("my-accordion");
  });
});
