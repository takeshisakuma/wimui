import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PhoneInput, PHONE_COUNTRIES } from "./PhoneInput";
import styles from "./phone-input.module.scss";
import { setWimLocale, getWimLocale } from "@/i18n/instance";

describe("PhoneInput", () => {
  it("renders the phone number input", () => {
    render(<PhoneInput placeholder="090-0000-0000" />);
    expect(screen.getByPlaceholderText("090-0000-0000")).toBeInTheDocument();
  });

  it("renders the country code selector button", () => {
    render(<PhoneInput />);
    expect(screen.getByRole("combobox", { name: "Select country" })).toBeInTheDocument();
  });

  it("shows default country US dial code", () => {
    render(<PhoneInput />);
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByText("🇺🇸")).toBeInTheDocument();
  });

  it("shows selected country dial code when countryCode prop is provided", () => {
    render(<PhoneInput countryCode="JP" />);
    expect(screen.getByText("+81")).toBeInTheDocument();
    expect(screen.getByText("🇯🇵")).toBeInTheDocument();
  });

  it("calls onChange when phone number input changes", () => {
    const onChange = vi.fn();
    render(<PhoneInput onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "09012345678" } });
    expect(onChange).toHaveBeenCalledWith("09012345678");
  });

  it("calls onCountryChange when a country is selected from the dropdown", async () => {
    const onCountryChange = vi.fn();
    render(<PhoneInput onCountryChange={onCountryChange} />);
    
    // Open dropdown
    fireEvent.click(screen.getByRole("combobox", { name: "Select country" }));
    
    // Select Japan
    const japanOption = screen.getByText("Japan");
    fireEvent.click(japanOption);
    
    expect(onCountryChange).toHaveBeenCalledWith("JP");
  });

  it("disables both button and input when disabled", () => {
    render(<PhoneInput disabled />);
    expect(screen.getByRole("combobox", { name: "Select country" })).toBeDisabled();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders label when provided", () => {
    render(<PhoneInput label="Phone Number" />);
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<PhoneInput error="Invalid phone number" />);
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  it("marks input as aria-invalid when error is set", () => {
    render(<PhoneInput error="Invalid" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("contains all countries in the dropdown when opened", async () => {
    render(<PhoneInput />);
    
    // Open dropdown
    fireEvent.click(screen.getByRole("combobox", { name: "Select country" }));
    
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(PHONE_COUNTRIES.length);
  });

  it("applies error class when error is set", () => {
    render(<PhoneInput error="Error" />);
    const root = screen.getByTestId("phone-input-root");
    expect(root).toHaveClass(styles.danger);
  });

  it("applies disabled class when disabled", () => {
    render(<PhoneInput disabled />);
    const root = screen.getByTestId("phone-input-root");
    expect(root).toHaveClass(styles.disabled);
  });

  it("names the country trigger and the open list in the active locale", () => {
    const original = getWimLocale();
    try {
      setWimLocale("ja");
      render(<PhoneInput />);
      const trigger = screen.getByRole("combobox", { name: "国を選択" });
      fireEvent.click(trigger);
      expect(screen.getByRole("listbox", { name: "国を選択" })).toBeInTheDocument();
    } finally {
      setWimLocale(original);
    }
  });

  it("exposes the country trigger as a combobox whose value is the dial code", () => {
    render(<PhoneInput countryCode="JP" label="Phone Number" />);
    // フィールドの label は番号の入力欄の名前。国の選択は自分の名前を持つ
    const trigger = screen.getByRole("combobox", { name: "Select country" });
    expect(trigger).toHaveTextContent("+81");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).not.toHaveAttribute("aria-controls");
    expect(screen.getByRole("textbox", { name: "Phone Number" })).toBeInTheDocument();
  });

  it("moves the active option from the trigger with arrow keys, Home and End", () => {
    render(<PhoneInput />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    const options = screen.getAllByRole("option");
    const selected = options.findIndex((o) => o.getAttribute("aria-selected") === "true");
    expect(trigger).toHaveAttribute("aria-controls", screen.getByRole("listbox").id);
    // 開いたときは、選択中の国を指す
    expect(trigger).toHaveAttribute("aria-activedescendant", options[selected].id);
    fireEvent.keyDown(trigger, { key: "End" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[options.length - 1].id);
    // 末尾から下で先頭へ回る
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[0].id);
    fireEvent.keyDown(trigger, { key: "ArrowUp" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[options.length - 1].id);
    fireEvent.keyDown(trigger, { key: "Home" });
    expect(trigger).toHaveAttribute("aria-activedescendant", options[0].id);
  });

  it("selects the active country with Enter and closes", () => {
    const onCountryChange = vi.fn();
    render(<PhoneInput onCountryChange={onCountryChange} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "Enter" });
    fireEvent.keyDown(trigger, { key: "Home" });
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(onCountryChange).toHaveBeenCalledWith(PHONE_COUNTRIES[0].code);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("closes with Escape without changing the country", () => {
    const onCountryChange = vi.fn();
    render(<PhoneInput onCountryChange={onCountryChange} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: " " });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  // 国旗は aria-hidden。国名と国番号の間に文字としての区切りが無いと、つながって読まれる。
  it("separates the country name and the dial code in each option's text", () => {
    render(<PhoneInput />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("option", { name: "Japan +81" })).toBeInTheDocument();
  });

  it("keeps the options out of the tab order", () => {
    render(<PhoneInput />);
    fireEvent.click(screen.getByRole("combobox"));
    for (const option of screen.getAllByRole("option")) {
      expect(option).not.toHaveAttribute("tabindex");
    }
  });

  describe("typeahead", () => {
    const activeName = (trigger: HTMLElement) => {
      const id = trigger.getAttribute("aria-activedescendant");
      return id ? document.getElementById(id)?.textContent : null;
    };
    const type = (trigger: HTMLElement, text: string) => {
      for (const key of text) fireEvent.keyDown(trigger, { key });
    };

    it("opens the list and jumps to the first country starting with the typed letter", () => {
      render(<PhoneInput />);
      const trigger = screen.getByRole("combobox");
      type(trigger, "j");
      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(activeName(trigger)).toContain("Japan");
    });

    it("narrows with the following letters, including a space", () => {
      render(<PhoneInput />);
      const trigger = screen.getByRole("combobox");
      type(trigger, "united k");
      expect(activeName(trigger)).toContain("United Kingdom");
      // 検索の途中の Space は選択ではない
      expect(trigger).toHaveAttribute("aria-expanded", "true");
    });

    it("cycles through the matches when the same letter is repeated", () => {
      render(<PhoneInput countryCode="JP" />);
      const trigger = screen.getByRole("combobox");
      type(trigger, "u");
      expect(activeName(trigger)).toContain("United States");
      type(trigger, "u");
      expect(activeName(trigger)).toContain("United Kingdom");
      type(trigger, "u");
      expect(activeName(trigger)).toContain("United States");
    });

    it("matches the dial code when digits are typed", () => {
      render(<PhoneInput />);
      const trigger = screen.getByRole("combobox");
      type(trigger, "+44");
      expect(activeName(trigger)).toContain("United Kingdom");
    });

    // 文字は 3 段で照合する: 表示している国名 → 英語の国名 → 国コード。当たった最初の段だけを使う。
    it("prefers the displayed name over the country code", () => {
      render(<PhoneInput />);
      const trigger = screen.getByRole("combobox");
      // "g" は国コード GB（United Kingdom）にも当たるが、表示名の Germany が先
      type(trigger, "g");
      expect(activeName(trigger)).toContain("Germany");
    });

    it("falls back to the country code when no name matches", () => {
      render(<PhoneInput />);
      const trigger = screen.getByRole("combobox");
      type(trigger, "gb");
      expect(activeName(trigger)).toContain("United Kingdom");
    });

    it("matches the English name and the country code when another language is displayed", () => {
      const original = getWimLocale();
      try {
        setWimLocale("ja");
        const { unmount } = render(<PhoneInput />);
        let trigger = screen.getByRole("combobox");
        // 日本語の国名は IME なしでは打てない。英語名の頭文字で当たる
        type(trigger, "j");
        expect(activeName(trigger)).toContain("日本");
        unmount();

        render(<PhoneInput />);
        trigger = screen.getByRole("combobox");
        // 英語名（South Korea）には当たらず、国コード（KR）で当たる
        type(trigger, "kr");
        expect(activeName(trigger)).toContain("韓国");
      } finally {
        setWimLocale(original);
      }
    });

    it("starts a new search after a pause", () => {
      vi.useFakeTimers();
      try {
        render(<PhoneInput />);
        const trigger = screen.getByRole("combobox");
        type(trigger, "j");
        expect(activeName(trigger)).toContain("Japan");
        act(() => {
          vi.advanceTimersByTime(600);
        });
        type(trigger, "b");
        expect(activeName(trigger)).toContain("Brazil");
      } finally {
        vi.useRealTimers();
      }
    });

    it("leaves the active country alone when nothing matches, and ignores modified keys", () => {
      const onCountryChange = vi.fn();
      render(<PhoneInput onCountryChange={onCountryChange} />);
      const trigger = screen.getByRole("combobox");
      type(trigger, "j");
      type(trigger, "z");
      expect(activeName(trigger)).toContain("Japan");
      fireEvent.keyDown(trigger, { key: "b", ctrlKey: true });
      expect(activeName(trigger)).toContain("Japan");
      fireEvent.keyDown(trigger, { key: "Enter" });
      expect(onCountryChange).toHaveBeenCalledWith("JP");
    });
  });
});
