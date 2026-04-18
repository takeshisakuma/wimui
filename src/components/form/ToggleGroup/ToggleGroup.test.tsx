import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { ToggleGroup } from "./ToggleGroup";
import styles from "./toggle-group.module.scss";

describe("ToggleGroup", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  const originalRAF = window.requestAnimationFrame;

  beforeAll(() => {
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 0;
    };
  });

  afterAll(() => {
    window.requestAnimationFrame = originalRAF;
  });

  it("renders all options", async () => {
    await act(async () => {
      render(<ToggleGroup options={options} defaultValue="opt1" />);
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("handles single selection", async () => {
    const handleChange = vi.fn();
    await act(async () => {
      render(<ToggleGroup options={options} onChange={handleChange} defaultValue="opt1" />);
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));

    await act(async () => {
      fireEvent.click(screen.getByText("Option 2"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(handleChange).toHaveBeenCalledWith("opt2");
    await waitFor(() => {
      expect(screen.getByText("Option 2").closest(`.${styles.item}`)).toHaveClass(
        styles.active,
      );
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Option 2"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(handleChange).toHaveBeenCalledWith("");
  });

  it("handles multiple selection", async () => {
    const handleChange = vi.fn();
    await act(async () => {
      render(
        <ToggleGroup
          options={options}
          selectionMode="multiple"
          onChange={handleChange}
          defaultValue={["opt1"]}
        />,
      );
    });
    await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));

    await act(async () => {
      fireEvent.click(screen.getByText("Option 2"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"]);

    await act(async () => {
      fireEvent.click(screen.getByText("Option 1"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(handleChange).toHaveBeenCalledWith(["opt2"]);
  });

  it("applies size and fullWidth classes", async () => {
    let container: HTMLElement = null!;
    await act(async () => {
      const result = render(
        <ToggleGroup options={options} size="lg" fullWidth defaultValue="opt1" />,
      );
      container = result.container;
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    expect(container.firstChild).toHaveClass(styles.lg);
    expect(container.firstChild).toHaveClass(styles.fullWidth);
  });

  it("disables options when disabled prop is set", async () => {
    const optionsWithDisabled = [
      { label: "Disabled", value: "d", disabled: true },
    ];
    await act(async () => {
      render(<ToggleGroup options={optionsWithDisabled} />);
    });
    await act(async () => {
      await new Promise(r => setTimeout(r, 0));
    });
    expect(screen.getByText("Disabled").parentElement).toBeDisabled();
  });

  describe("ARIA roles", () => {
    it("uses role=radiogroup for single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} selectionMode="single" defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("uses role=toolbar for multiple mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} selectionMode="multiple" defaultValue={["opt1"]} />);
      });
      await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));
      expect(screen.getByRole("toolbar")).toBeInTheDocument();
    });

    it("items have role=radio in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} selectionMode="single" defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(3);
    });

    it("items have aria-checked in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} value="opt2" selectionMode="single" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");
      expect(radios[1]).toHaveAttribute("aria-checked", "true");
      expect(radios[0]).toHaveAttribute("aria-checked", "false");
    });

    it("items have aria-pressed in multiple mode", async () => {
      await act(async () => {
        render(
          <ToggleGroup
            options={options}
            value={["opt1", "opt3"]}
            selectionMode="multiple"
          />,
        );
      });
      await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));
      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveAttribute("aria-pressed", "true");
      expect(buttons[1]).toHaveAttribute("aria-pressed", "false");
      expect(buttons[2]).toHaveAttribute("aria-pressed", "true");
    });
  });

  describe("roving tabindex", () => {
    it("gives tabIndex=0 to the selected item in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} value="opt2" selectionMode="single" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");
      expect(radios[1]).toHaveAttribute("tabindex", "0");
    });

    it("gives tabIndex=0 to first non-disabled item when nothing is selected", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} selectionMode="single" />);
      });
      await act(async () => { await new Promise(r => setTimeout(r, 0)); });
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });
  });

  it("handles uncontrolled state with defaultValue", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(<ToggleGroup options={options} defaultValue="opt2" onChange={onChange} />);
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const radios = screen.getAllByRole("radio");
    expect(radios[1]).toHaveClass(styles.active);
    
    await act(async () => {
      fireEvent.click(radios[0]);
      await new Promise(r => setTimeout(r, 0));
    });
    expect(onChange).toHaveBeenCalledWith("opt1");
    expect(radios[0]).toHaveClass(styles.active);
  });

  it("toggles off in single mode when clicking active item", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(<ToggleGroup options={options} value="opt1" onChange={onChange} />);
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    await act(async () => {
      fireEvent.click(screen.getByText("Option 1"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("renders items with icons only", async () => {
    const iconOptions = [
      { value: "bold", iconName: "CircleIcon" as const },
      { value: "italic", iconName: "SquareIcon" as const },
    ];
    await act(async () => {
      render(<ToggleGroup options={iconOptions} defaultValue="bold" />);
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const buttons = screen.getAllByRole("radio");
    expect(buttons[0]).toHaveClass(styles.iconOnly);
  });

  it("applies aria-label to container", async () => {
    await act(async () => {
      render(<ToggleGroup options={options} aria-label="Text alignment" />);
    });
    await act(async () => { await new Promise(r => setTimeout(r, 0)); });
    expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-label", "Text alignment");
  });

  it("applies aria-labelledby to container", async () => {
    await act(async () => {
      render(<ToggleGroup options={options} aria-labelledby="group-label" />);
    });
    await act(async () => { await new Promise(r => setTimeout(r, 0)); });
    expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-labelledby", "group-label");
  });

  it("global disabled prop disables all buttons", async () => {
    await act(async () => {
      render(<ToggleGroup options={options} disabled />);
    });
    await act(async () => { await new Promise(r => setTimeout(r, 0)); });
    const radios = screen.getAllByRole("radio");
    radios.forEach((radio) => expect(radio).toBeDisabled());
  });

  it("handles multiple mode with string defaultValue (treats as empty array)", async () => {
    const onChange = vi.fn();
    await act(async () => {
      render(
        <ToggleGroup
          options={options}
          selectionMode="multiple"
          defaultValue="opt1"
          onChange={onChange}
        />,
      );
    });
    // String defaultValue in multiple mode causes no active item, so ready class won't apply
    await act(async () => { await new Promise(r => setTimeout(r, 0)); });
    await act(async () => {
      fireEvent.click(screen.getByText("Option 2"));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(onChange).toHaveBeenCalledWith(["opt2"]);
  });

  it("updates focusedIndex when controlled value changes (effect sync)", async () => {
    let rerender!: ReturnType<typeof render>["rerender"];
    await act(async () => {
      const result = render(
        <ToggleGroup options={options} value="opt1" selectionMode="single" />,
      );
      rerender = result.rerender;
    });
    await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("tabindex", "0");

    await act(async () => {
      rerender(<ToggleGroup options={options} value="opt3" selectionMode="single" />);
      await new Promise(r => setTimeout(r, 0));
    });
    expect(radios[2]).toHaveAttribute("tabindex", "0");
  });

  describe("keyboard navigation", () => {
    it("ArrowRight moves focus to next item and selects in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "ArrowRight" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[1]).toHaveAttribute("tabindex", "0");
      expect(radios[1]).toHaveClass(styles.active);
    });

    it("ArrowLeft moves focus to previous item and selects in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt2" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[1], { key: "ArrowLeft" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
      expect(radios[0]).toHaveClass(styles.active);
    });

    it("ArrowDown is equivalent to ArrowRight in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "ArrowDown" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[1]).toHaveAttribute("tabindex", "0");
    });

    it("ArrowUp is equivalent to ArrowLeft in single mode", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt2" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[1], { key: "ArrowUp" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });

    it("Home key moves focus to first non-disabled item", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt3" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[2], { key: "Home" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });

    it("End key moves focus to last non-disabled item", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "End" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[2]).toHaveAttribute("tabindex", "0");
    });

    it("ArrowRight wraps from last item to first", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt3" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[2], { key: "ArrowRight" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
      expect(radios[0]).toHaveClass(styles.active);
    });

    it("ArrowLeft wraps from first item to last", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "ArrowLeft" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[2]).toHaveAttribute("tabindex", "0");
    });

    it("ArrowRight skips disabled items", async () => {
      const optionsWithDisabledMiddle = [
        { label: "Opt A", value: "a" },
        { label: "Opt B", value: "b", disabled: true },
        { label: "Opt C", value: "c" },
      ];
      await act(async () => {
        render(<ToggleGroup options={optionsWithDisabledMiddle} defaultValue="a" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "ArrowRight" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[2]).toHaveAttribute("tabindex", "0");
      expect(radios[2]).toHaveClass(styles.active);
    });

    it("findNextIndex returns current when all other options are disabled", async () => {
      const allDisabledButFirst = [
        { label: "A", value: "a" },
        { label: "B", value: "b", disabled: true },
        { label: "C", value: "c", disabled: true },
      ];
      await act(async () => {
        render(<ToggleGroup options={allDisabledButFirst} defaultValue="a" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "ArrowRight" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });

    it("ArrowRight in multiple mode moves focus without auto-selecting", async () => {
      const onChange = vi.fn();
      await act(async () => {
        render(
          <ToggleGroup
            options={options}
            selectionMode="multiple"
            defaultValue={["opt1"]}
            onChange={onChange}
          />,
        );
      });
      await waitFor(() => expect(screen.getByRole("toolbar")).toHaveClass(styles.ready));
      const buttons = screen.getAllByRole("button");

      await act(async () => {
        fireEvent.keyDown(buttons[0], { key: "ArrowRight" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(buttons[1]).toHaveAttribute("tabindex", "0");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("Home key does nothing when first item is already focused", async () => {
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt1" />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "Home" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
    });

    it("ignores unrecognized keys", async () => {
      const onChange = vi.fn();
      await act(async () => {
        render(<ToggleGroup options={options} defaultValue="opt1" onChange={onChange} />);
      });
      await waitFor(() => expect(screen.getByRole("radiogroup")).toHaveClass(styles.ready));
      const radios = screen.getAllByRole("radio");

      await act(async () => {
        fireEvent.keyDown(radios[0], { key: "Tab" });
        await new Promise(r => setTimeout(r, 0));
      });

      expect(radios[0]).toHaveAttribute("tabindex", "0");
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
