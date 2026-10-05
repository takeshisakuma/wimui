import React, { useState, useRef, useEffect, useId, forwardRef } from "react";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate/FieldTemplate";
import { Icon } from "../../media/Icon/Icon";
import { Transition } from "../../layout/Transition/Transition";
import styles from "./phone-input.module.scss";
import { ChevronDownIcon } from "@/icon";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { formNs } from "@/i18n/generated/form";

// ─── Country Data ─────────────────────────────────────────────────────────────

// 国名は翻訳キー（form:phone.countries.<コード>）が持つ。コードを足したら、en / ja / pt の 3 つにも足すこと
// （型がキーの実在を見るので、足し忘れるとコンパイルで落ちる）。
type CountryCode = "US" | "JP" | "GB" | "AU" | "DE" | "FR" | "CN" | "KR" | "IN" | "BR";

interface Country {
  code: CountryCode;
  dialCode: string;
  flag: string;
}

export const PHONE_COUNTRIES: Country[] = [
  { code: "US", dialCode: "1", flag: "🇺🇸" },
  { code: "JP", dialCode: "81", flag: "🇯🇵" },
  { code: "GB", dialCode: "44", flag: "🇬🇧" },
  { code: "AU", dialCode: "61", flag: "🇦🇺" },
  { code: "DE", dialCode: "49", flag: "🇩🇪" },
  { code: "FR", dialCode: "33", flag: "🇫🇷" },
  { code: "CN", dialCode: "86", flag: "🇨🇳" },
  { code: "KR", dialCode: "82", flag: "🇰🇷" },
  { code: "IN", dialCode: "91", flag: "🇮🇳" },
  { code: "BR", dialCode: "55", flag: "🇧🇷" },
];

// ─── PhoneInput ────────────────────────────────────────────────────────────────

export type PhoneInputProps = {
  /** Phone number value (the number part, excluding the country dial code). */
  value?: string;
  /** Callback when the phone number changes. */
  onChange?: (value: string) => void;
  /** Selected country code (e.g. "JP", "US"). */
  countryCode?: string;
  /** Callback when the country code changes. */
  onCountryChange?: (countryCode: string) => void;
  /** Placeholder for the phone number input. */
  placeholder?: string;
  /** Whether the field is disabled. */
  disabled?: boolean;
  /** Error message. */
  error?: string;
  /** Whether to show the required indicator. */
  required?: boolean;
  /** Field label. */
  label?: string;
  /** Layout direction of label and field. */
  layout?: "vertical" | "horizontal";
  /** Additional class names. */
  className?: string;
  /** Whether to take full width of parent. */
  fullWidth?: boolean;
};

/**
 * Component combining a country dial-code selector with a phone number input.
 * Uses a custom dropdown for a polished design.
 */
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value = "",
      onChange,
      countryCode = "US",
      onCountryChange,
      placeholder = "000-0000-0000",
      disabled = false,
      error,
      required = false,
      label,
      layout = "vertical",
      className,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = `wim-phone-input-${generatedId}`;
    const labelId = label ? `${inputId}-label` : undefined;
    // 国の引き金と、開いたリストの両方に同じ名前を付ける。フィールドの label は番号の入力欄の名前なので、
    // 国の選択には使わない（以前は label があると、国の引き金まで「電話番号」と読まれていた）。
    const { t } = useWimTranslation(formNs);
    const countryAriaLabel = t("phone.select_country");
    const listboxId = `${inputId}-countries`;
    const optionId = (index: number) => `${inputId}-country-${index}`;
    const errorId = error ? `${inputId}-error` : undefined;

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    // 頭文字の検索（typeahead）。続けて打った文字をためて、間が空いたら捨てる。
    const typeahead = useRef<{ text: string; timer: ReturnType<typeof setTimeout> | null }>({ text: "", timer: null });

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const selectedCountry =
      PHONE_COUNTRIES.find((c) => c.code === countryCode) ?? PHONE_COUNTRIES[0];

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const lastIndex = PHONE_COUNTRIES.length - 1;
    const openList = (at?: number) => {
      const selectedIndex = PHONE_COUNTRIES.findIndex((c) => c.code === selectedCountry.code);
      setActiveIndex(at ?? Math.max(selectedIndex, 0));
      setIsOpen(true);
    };
    const selectCountry = (index: number) => {
      const country = PHONE_COUNTRIES[index];
      if (!country) return;
      onCountryChange?.(country.code);
      setIsOpen(false);
    };

    // 国名は翻訳キー（form:phone.countries.<コード>。en / ja / pt）から引く。
    const countryName = (c: Country) => t(`phone.countries.${c.code}`);
    // 英語の国名（表示言語によらない）。頭文字の検索の 2 段目で使う。
    const englishCountryName = (c: Country) => {
      const en = formNs.resources.en as { phone?: { countries?: Record<string, string> } } | undefined;
      return en?.phone?.countries?.[c.code] ?? "";
    };

    // 打った文字で国へ飛ぶ。前方一致（大文字小文字を区別しない）。数字（先頭の + は無視）は国番号で照合する。
    // 文字は 3 段で照合し、**当たりが出た最初の段だけ**を使う:
    //   1. 表示している言語の国名
    //   2. 英語の国名（日本語の表示では、IME の変換中のキー入力は届かないので、国名を直接は打てない）
    //   3. 国コード（jp / kr など）
    // 段を分けるのは、表示名で当たるものを先にするため（英語の表示で "g" は Germany。国コードの GB より先）。
    // 同じ 1 文字を続けて打ったときは、その段の中で、その文字で始まる国を順に巡る。
    const findByText = (text: string, from: number) => {
      const query = text.toLowerCase().replace(/^\+/, "");
      if (query === "") return -1;
      const byDial = /^[0-9]+$/.test(query);
      // 国番号では巡らない（"44" は 4 で始まる番号の 2 つ目ではなく、44 そのもの）。
      const repeated = !byDial && query.length > 1 && query.split("").every((ch) => ch === query[0]);
      const q = repeated ? query[0] : query;
      // 打ち始め・同じ文字の繰り返しは「いまの次」から、続きの文字は「いま」から探す（いまの項目に留まれる）。
      const start = repeated || query.length === 1 ? from + 1 : from;
      const tiers: ((c: Country) => string)[] = byDial
        ? [(c) => c.dialCode]
        : [(c) => countryName(c).toLowerCase(), (c) => englishCountryName(c).toLowerCase(), (c) => c.code.toLowerCase()];
      for (const textOf of tiers) {
        for (let i = 0; i < PHONE_COUNTRIES.length; i++) {
          const index = (Math.max(start, 0) + i) % PHONE_COUNTRIES.length;
          if (textOf(PHONE_COUNTRIES[index]).startsWith(q)) return index;
        }
      }
      return -1;
    };

    const handleTypeahead = (char: string) => {
      const state = typeahead.current;
      if (state.timer) clearTimeout(state.timer);
      state.text += char;
      state.timer = setTimeout(() => {
        state.text = "";
        state.timer = null;
      }, 500);
      const index = findByText(state.text, isOpen ? activeIndex : -1);
      if (index < 0) return;
      if (isOpen) setActiveIndex(index);
      else openList(index);
    };

    // 引き金は select-only の combobox。フォーカスは引き金に残し、キーは全部ここで受ける
    // （ModelSelector と同じ形）。以前は各項目が Tab の停止点で、矢印キーも Esc も効かなかった。
    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      switch (e.key) {
        case "ArrowDown":
        case "ArrowUp":
          e.preventDefault();
          if (!isOpen) openList();
          else {
            const delta = e.key === "ArrowDown" ? 1 : -1;
            setActiveIndex((prev) => (prev + delta + PHONE_COUNTRIES.length) % PHONE_COUNTRIES.length);
          }
          break;
        case "Home":
        case "End":
          e.preventDefault();
          if (isOpen) setActiveIndex(e.key === "Home" ? 0 : lastIndex);
          else openList(e.key === "Home" ? 0 : lastIndex);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          // 検索の途中の Space は文字として扱う（"united k" と打てるように）。
          if (e.key === " " && typeahead.current.text !== "") handleTypeahead(" ");
          else if (!isOpen) openList();
          else selectCountry(activeIndex);
          break;
        case "Escape":
          if (isOpen) {
            e.preventDefault();
            setIsOpen(false);
          }
          break;
        case "Tab":
          setIsOpen(false);
          break;
        default:
          // 印字できる 1 文字（修飾キーなし）だけを検索に回す。
          if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            handleTypeahead(e.key);
          }
      }
    };

    useEffect(() => {
      const state = typeahead.current;
      return () => {
        if (state.timer) clearTimeout(state.timer);
      };
    }, []);

    useEffect(() => {
      if (isOpen && activeIndex >= 0) {
        const items = listRef.current?.querySelectorAll('[role="option"]');
        (items?.[activeIndex] as HTMLElement | undefined)?.scrollIntoView?.({ block: "nearest" });
      }
    }, [activeIndex, isOpen]);

    return (
      <FieldTemplate
        label={label}
        labelId={labelId}
        htmlFor={inputId}
        required={required}
        error={error}
        errorId={errorId}
        layout={layout}
        className={className}
      >
        <div
          ref={containerRef}
          className={classNames("wim-phone-input", 
            styles.root,
            fullWidth && styles.fullWidth,
            disabled && styles.disabled,
            error && styles.danger,
          )}
          data-testid="phone-input-root"
          {...props}
        >
          <div className={styles.countryWrapper}>
            <button
              type="button"
              // 名前は aria-label、値は中の文字（国番号）。
              role="combobox"
              className={styles.countryTrigger}
              onClick={() => {
                if (disabled) return;
                if (isOpen) setIsOpen(false);
                else openList();
              }}
              onKeyDown={handleTriggerKeyDown}
              // Space の click は keyup で起きるブラウザがある。keydown で選んだ直後に開き直さないよう止める。
              onKeyUp={(e) => {
                if (e.key === " ") e.preventDefault();
              }}
              disabled={disabled}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              // リストは開くまで DOM に無い。閉じているあいだは指さない（壊れた参照になる）。
              aria-controls={isOpen ? listboxId : undefined}
              aria-activedescendant={isOpen && activeIndex >= 0 ? optionId(activeIndex) : undefined}
              aria-label={countryAriaLabel}
            >
              <span aria-hidden="true" style={{ fontSize: "1.2em" }}>{selectedCountry.flag}</span>
              {/* 旗・番号・シェブロンの間隔はセレクタの gap が作る（T58） */}
              <span>+{selectedCountry.dialCode}</span>
              <Icon
                component={ChevronDownIcon}
                size="sm"
                className={classNames(
                  styles.chevron,
                  isOpen && styles.chevronOpen,
                )}
              />
            </button>

            <Transition show={isOpen} preset="fade" className={styles.dropdown}>
              {/* リストにも名前を付ける（引き金と同じ）。名前の無い listbox は axe の aria-input-field-name（serious）。
                  フォーカスは引き金に残すので、項目は Tab の停止点にしない（押してもフォーカスを奪わないよう、
                  mousedown の既定の動作を止める）。 */}
              <ul
                ref={listRef}
                id={listboxId}
                className={styles.countryList}
                role="listbox"
                aria-label={countryAriaLabel}
                // スクロールする要素は、Chrome では tabindex が無くても Tab の停止点になる。-1 で外す
                // （外さないと、Tab がこのリストへ入り、閉じるアニメーションの終わりでリストごと消えて
                // フォーカスが body へ落ちる）。
                tabIndex={-1}
                onMouseDown={(e) => e.preventDefault()}
              >
                {PHONE_COUNTRIES.map((country, index) => (
                  // キー操作は引き金（combobox）で受ける。項目ごとのキーのハンドラは要らない。
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  <li
                    key={country.code}
                    id={optionId(index)}
                    className={classNames(
                      styles.countryOption,
                      index === activeIndex && styles.active,
                      selectedCountry.code === country.code && styles.selected,
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectCountry(index)}
                    role="option"
                    aria-selected={selectedCountry.code === country.code}
                  >
                    <span aria-hidden="true">{country.flag}</span>
                    <span className={styles.countryName}>{countryName(country)}</span>
                    {/* 文字としての区切り（flex なので描かれない）。無いと、国名と国番号がつながって読まれる。 */}
                    {" "}
                    <span className={styles.countryCode}>+{country.dialCode}</span>
                  </li>
                ))}
              </ul>
            </Transition>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <input
            id={inputId}
            ref={ref}
            type="tel"
            value={value}
            onChange={handleNumberChange}
            placeholder={placeholder}
            disabled={disabled}
            className={styles.number}
            aria-invalid={!!error}
            aria-describedby={errorId}
          />
        </div>
      </FieldTemplate>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
