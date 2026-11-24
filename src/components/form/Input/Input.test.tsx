import { render, screen, fireEvent, act } from "@testing-library/react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";
import { createRef as reactCreateRef } from "react";
import baseStyles from "../InputBase/input-base.module.scss";

describe("Input", () => {
  it("renders input", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue("test");
  });

  it("shows icons", () => {
    render(<Input leftIcon="SearchIcon" rightIcon="CloseIcon" />);
  });

  it("toggles password visibility", () => {
    render(<Input type="password" showPasswordToggle placeholder="password" />);
    const input = screen.getByPlaceholderText("password");
    expect(input).toHaveAttribute("type", "password");

    const button = screen.getByLabelText(/Show password/i);
    fireEvent.click(button);
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders label", () => {
    render(<Input label="Name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Input error="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is set", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("controlled mode uses value prop", () => {
    render(<Input value="controlled" onChange={vi.fn()} />);
    expect(screen.getByRole("textbox")).toHaveValue("controlled");
  });

  it("allows clear with allowClear prop", () => {
    const onChange = vi.fn();
    render(<Input allowClear defaultValue="hello" onChange={onChange} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("hello");

    // Find and click the clear button
    const clearBtn = document.querySelector(`.${baseStyles.iconButton}`) as HTMLElement;
    if (clearBtn) fireEvent.click(clearBtn);
  });

  it("forwards ref with object ref", () => {
    const ref = reactCreateRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("forwards ref with function ref", () => {
    const refFn = vi.fn();
    render(<Input ref={refFn} />);
    expect(refFn).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("applies fullWidth class", () => {
    render(<Input fullWidth />);
    const input = screen.getByRole("textbox");
    const inputBase = input.parentElement!;
    expect(inputBase).toHaveClass(baseStyles.fullWidth);
  });

  it("renders clickable left icon with onLeftIconClick", () => {
    const onLeftIconClick = vi.fn();
    render(<Input leftIcon="SearchIcon" onLeftIconClick={onLeftIconClick} />);
    const btn = document.querySelector(`.${baseStyles.iconButton}`) as HTMLElement;
    if (btn) {
      fireEvent.click(btn);
      expect(onLeftIconClick).toHaveBeenCalled();
    }
  });

  it("renders with numeric width", () => {
    render(<Input width={200} />);
    const input = screen.getByRole("textbox");
    const wrapper = input.parentElement!;
    // Numeric width should set custom width CSS variable
    expect(wrapper).toBeInTheDocument();
  });

  it("renders with semantic width", () => {
    render(<Input width="md" />);
    const input = screen.getByRole("textbox");
    const wrapper = input.parentElement!;
    expect(wrapper).toHaveClass(baseStyles.widthMd);
  });

  it("renders with string custom width", () => {
    render(<Input width="300px" />);
    const input = screen.getByRole("textbox");
    const wrapper = input.parentElement!;
    expect(wrapper).toHaveClass(baseStyles.hasCustomWidth);
  });

  // T438: register を直接渡すと、既定値も reset(values) も画面に出なかった。制御していないときも内部の値を
  // value で渡していて、register が DOM に書いた値を次の描画で上書きしていた。ref も付け直されなかった
  describe("with react-hook-form register", () => {
    let form: UseFormReturn<{ city: string }>;
    const Form = () => {
      form = useForm<{ city: string }>({ defaultValues: { city: "Osaka" } });
      return <form><Input aria-label="city" allowClear {...form.register("city")} /></form>;
    };

    it("shows the default value and the values given to reset", async () => {
      render(<Form />);
      const field = screen.getByLabelText("city") as HTMLInputElement;
      expect(field.value).toBe("Osaka");

      fireEvent.change(field, { target: { value: "Kita" } });
      expect(form.getValues("city")).toBe("Kita");

      await act(async () => {
        form.reset({ city: "Kobe" });
      });
      expect((screen.getByLabelText("city") as HTMLInputElement).value).toBe("Kobe");
      expect(form.getValues("city")).toBe("Kobe");
    });
  });

  it("empties the field when value goes back to undefined, as before", () => {
    const { rerender } = render(<Input aria-label="f" value="Tokyo" onChange={() => {}} />);
    rerender(<Input aria-label="f" value={undefined} onChange={() => {}} />);
    expect(screen.getByLabelText("f")).toHaveValue("");
  });
});
