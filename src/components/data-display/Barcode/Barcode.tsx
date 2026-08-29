import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { encodeBarcode, toRuns, type BarcodeFormat } from "./encode";
import { warnUnencodableValue } from "./warn-unencodable-value";
import localStyles from "./barcode.module.scss";

/** 体系の表示名。規格そのものの呼び名（GS1 / ISO の名称）なので翻訳しない。 */
const FORMAT_NAMES: Record<BarcodeFormat, string> = {
  // i18n-ignore-next-line 規格名。ja/pt でも "Code 128" と表記する
  code128: "Code 128",
  ean13: "EAN-13",
};

/**
 * 左右の静止空白（quiet zone）。ここが狭いとスキャナがシンボルの端を見つけられず、
 * **バーは正しいのに読めない**という壊れ方をする。Code 128 は最小 10 モジュール、
 * EAN-13 は左 11 / 右 7 モジュールなので、両方を満たす 11 を既定にする。
 */
const QUIET_ZONE_MODULES = 11;

/**
 * EAN-13 の印字の帯（T233）。**ガードバーはこの帯の底まで伸び**、数字はこの中に置く。
 * 高さを X 寸法（モジュール幅）に比例させるのは、規格の寸法が X で決まるため
 * ── 器の高さに比例させると、細いシンボルで数字だけが不自然に大きくなる。
 */
const PRINT_BAND_MODULES = 8;

/**
 * ただし低い器では帯が図を食い潰すので、全体高さに対する上限も持つ。
 * これが効くのは `moduleWidth` に対して `height` が小さいときだけ。
 */
const PRINT_BAND_MAX_RATIO = 0.35;

/** 1 桁が占めるモジュール数。数字を自分のバーの真下に置くために要る。 */
const EAN_DIGIT_MODULES = 7;

export type { BarcodeFormat };

export type BarcodeProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
  /**
   * Value to encode. For `ean13`, 12 digits (the check digit is calculated) or
   * 13 digits (the check digit is verified).
   */
  value: string;
  /**
   * Symbology to encode `value` in.
   * @default "code128"
   */
  format?: BarcodeFormat;
  /**
   * Height of the bars, in px.
   * @default 64
   */
  height?: number;
  /**
   * Width of the narrowest bar, in px. Below 2 most phone cameras stop reading
   * the symbol on screen.
   * @default 2
   */
  moduleWidth?: number;
  /**
   * Whether the value is printed under the bars.
   * @default true
   */
  showValue?: boolean;
  /**
   * Accessible name. Defaults to the value, so that a screen reader can read out
   * what a scanner would read.
   */
  label?: string;
};

/**
 * Draws a scannable 1D barcode — Code 128 for logistics, tickets and internal
 * SKUs, EAN-13 for retail product codes.
 *
 * Two things are deliberate. **The symbol keeps dark bars on a light background
 * in both themes**: laser and CCD scanners are built for that polarity and read
 * an inverted symbol unreliably, so following the theme here would produce a
 * barcode that looks right and does not scan. And **a value that cannot be
 * encoded is never drawn** — an approximate barcode scans to the wrong thing,
 * which is worse than one that is visibly missing. For the same reason the
 * symbol is never scaled down to fit a narrow container: it scrolls instead,
 * because a squeezed symbol looks identical and stops being read.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const Barcode = React.forwardRef<HTMLDivElement, BarcodeProps>(
  (
    {
      value,
      format = "code128",
      height = 64,
      moduleWidth = 2,
      showValue = true,
      label,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const encoded = encodeBarcode(value, format);

    /*
     * 器に収まらないとき、シンボルは**縮まずにスクロールする**（縮めると
     * モジュール幅が黙って細くなり、見た目そのままで読めなくなる）。
     * スクロールできる領域はキーボードでも辿れなければならない（WCAG 2.1.1・
     * axe の `scrollable-region-focusable`）ので、**はみ出しているときだけ**
     * タブ位置にする。収まっているあいだは余計なタブ停止を増やさない。
     */
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [scrollable, setScrollable] = React.useState(false);

    React.useLayoutEffect(() => {
      const element = rootRef.current;
      if (!element || typeof ResizeObserver === "undefined") return;
      const measure = () => setScrollable(element.scrollWidth > element.clientWidth);
      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(element);
      return () => observer.disconnect();
    }, [encoded?.modules, moduleWidth]);

    const mergedRef = useMergedRef(ref, rootRef);

    if (!encoded) {
      warnUnencodableValue(value, format, FORMAT_NAMES[format]);
      const message = t("barcode.invalid", { format: FORMAT_NAMES[format] });
      return (
        <div
          ref={mergedRef}
          data-invalid="true"
          className={classNames("wim-barcode", localStyles.root, localStyles.invalid, className)}
          {...props}
        >
          <span className={localStyles.invalidMessage}>{message}</span>
          <span className={localStyles.invalidValue}>{value}</span>
        </div>
      );
    }

    const totalModules = encoded.modules.length + QUIET_ZONE_MODULES * 2;
    const width = totalModules * moduleWidth;

    let x = QUIET_ZONE_MODULES;
    const bars = toRuns(encoded.modules).map(([isBar, runWidth]) => {
      const start = x;
      x += runWidth;
      return isBar ? { x: start, width: runWidth, module: start - QUIET_ZONE_MODULES } : null;
    });

    /*
     * 正規の印字を持つ体系だけ、数字を SVG の中へ入れる（T233）。Code 128 は
     * 割り付けを持たないので、これまでどおりバーの下に 1 本の文字列で置く。
     *
     * **座標系を分ける必要がある。** 既定の `viewBox` は x がモジュール・y が画素の
     * 混ざった空間で、`preserveAspectRatio="none"` で横に引き伸ばしている。そこへ
     * `<text>` を置くと**文字まで横に伸びる**ので、印字する版は画素座標で描く
     * （幾何は同じなのでバーの見え方は変わらない）。
     */
    const print = format === "ean13" && showValue ? encoded.print : undefined;
    const band = print
      ? Math.min(PRINT_BAND_MODULES * moduleWidth, height * PRINT_BAND_MAX_RATIO)
      : 0;
    const dataBottom = height - band;
    const isGuard = (bar: { module: number; width: number }) =>
      print
        ? print.guards.some(
            ([from, to]) => bar.module >= from && bar.module + bar.width <= to,
          )
        : false;

    /** 1 桁ずつ、自分のバーの真下へ置く（まとめて字送りで散らすと 1 桁ずれる）。 */
    const digitMarks = print
      ? [
          ...[...print.left.text].map((digit, index) => ({
            key: `l${index}`,
            digit,
            module: print.left.from + index * EAN_DIGIT_MODULES + EAN_DIGIT_MODULES / 2,
          })),
          ...[...print.right.text].map((digit, index) => ({
            key: `r${index}`,
            digit,
            module: print.right.from + index * EAN_DIGIT_MODULES + EAN_DIGIT_MODULES / 2,
          })),
        ]
      : [];

    return (
      <div
        ref={mergedRef}
        role="img"
        // 収まらないときだけスクロール可能になるので、そのときだけタブ位置にする
        tabIndex={scrollable ? 0 : undefined}
        // 走査すれば読める値を、支援技術にも同じだけ渡す。中の数字は
        // role="img" の内側なので読み上げられない ── 名前が値を持つ。
        aria-label={label ?? t("barcode.aria_label", { value: encoded.text })}
        data-format={format}
        className={classNames("wim-barcode", localStyles.root, className)}
        {...props}
      >
        {print ? (
          <svg
            className={localStyles.symbol}
            width={width}
            height={height}
            // 画素座標。文字を入れるので x と y の尺度を揃える。
            viewBox={`0 0 ${width} ${height}`}
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            {bars.map((bar) =>
              bar ? (
                <rect
                  key={bar.x}
                  x={bar.x * moduleWidth}
                  y={0}
                  width={bar.width * moduleWidth}
                  // ガードだけ数字の帯の底まで伸ばす ── これが正規の印字の目印。
                  height={isGuard(bar) ? height : dataBottom}
                  data-guard={isGuard(bar) ? "true" : undefined}
                />
              ) : null,
            )}
            {/* 先頭桁はシンボルの左外（静止空白の中）。 */}
            <text
              className={localStyles.printedDigit}
              x={(QUIET_ZONE_MODULES - 1) * moduleWidth}
              y={height}
              textAnchor="end"
              fontSize={band * 0.86}
            >
              {print.lead}
            </text>
            {digitMarks.map((mark) => (
              <text
                key={mark.key}
                className={localStyles.printedDigit}
                x={(QUIET_ZONE_MODULES + mark.module) * moduleWidth}
                y={height}
                textAnchor="middle"
                fontSize={band * 0.86}
              >
                {mark.digit}
              </text>
            ))}
          </svg>
        ) : (
          <svg
            className={localStyles.symbol}
            width={width}
            height={height}
            viewBox={`0 0 ${totalModules} ${height}`}
            preserveAspectRatio="none"
            // バーの縁をぼかさない。アンチエイリアスは細いバーの幅を狂わせる。
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            {bars.map((bar) =>
              bar ? (
                <rect key={bar.x} x={bar.x} y={0} width={bar.width} height={height} />
              ) : null,
            )}
          </svg>
        )}
        {showValue && !print ? (
          <span className={localStyles.value}>{encoded.text}</span>
        ) : null}
      </div>
    );
  },
);

Barcode.displayName = "Barcode";
