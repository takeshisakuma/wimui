import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "../feedback/Alert/Alert";
import { Banner } from "../feedback/Banner/Banner";
import { Notification } from "../feedback/Notification/Notification";
import { Snackbar } from "../feedback/Snackbar/Snackbar";
import { Toast } from "../feedback/Toast/Toast";
import { Icon } from "../media/Icon/Icon";
import { FeedbackIntent } from "../../types/tokens";
import { CircleIcon } from "@/icon";

/**
 * VRT はこの 5 つのアイコン変更を検出できない。`vrt/vrt.spec.ts` の
 * `maxDiffPixels: 400` は fullPage スクショに対する閾値だが、これらの
 * アイコンは実測 14〜16px 角＝最大でも 196〜256px しか動かないため、
 * 閾値を数学的に超えられない（#142 で VRT が落ちたのは 80x80 の Result だけで、
 * Alert / Banner / Notification / Snackbar / Toast は緑のまま通過した）。
 * intent ごとに別のグリフが出ることは、VRT ではなくここで担保する。
 */

const glyphOf = (container: HTMLElement) =>
  container.querySelector("svg.wim-icon")?.innerHTML ?? null;

/** 既定のフォールバック＝ただの塗り丸。修正前は success 以外が全部これに落ちていた。 */
const plainCircle = () => glyphOf(render(<Icon component={CircleIcon} />).container);

interface Consumer {
  name: string;
  /** そのコンポーネントが実際に既定アイコンを出す intent だけを並べる。 */
  intents: readonly FeedbackIntent[];
  render: (intent: FeedbackIntent) => HTMLElement;
}

const consumers: Consumer[] = [
  {
    name: "Alert",
    intents: ["success", "danger", "warning", "info"],
    render: (intent) =>
      render(<Alert intent={intent} title="title" description="description" />).container,
  },
  {
    name: "Banner",
    intents: ["success", "danger", "warning", "info"],
    render: (intent) =>
      render(<Banner intent={intent} title="title" description="description" />).container,
  },
  {
    name: "Notification",
    intents: ["success", "danger", "warning", "info"],
    render: (intent) =>
      render(<Notification intent={intent} title="title" description="description" />).container,
  },
  {
    // Snackbar だけは info でアイコンを出さない（Snackbar.tsx の分岐が
    // success / warning / danger のみ）。
    name: "Snackbar",
    intents: ["success", "danger", "warning"],
    render: (intent) => render(<Snackbar open intent={intent} message="message" />).container,
  },
  {
    name: "Toast",
    intents: ["success", "danger", "warning", "info"],
    render: (intent) =>
      render(<Toast intent={intent} title="title" description="description" />).container,
  },
];

describe("feedback components render an intent-specific glyph", () => {
  for (const consumer of consumers) {
    it(`${consumer.name} never falls back to the plain circle`, () => {
      const fallback = plainCircle();

      for (const intent of consumer.intents) {
        const glyph = glyphOf(consumer.render(intent));

        expect(glyph, `${consumer.name} / ${intent} rendered no icon`).not.toBeNull();
        expect(
          glyph,
          `${consumer.name} / ${intent} fell back to the plain filled circle`,
        ).not.toBe(fallback);
      }
    });
  }

  // warning と danger は同じグリフ（三角のアイコンが無く、区別は色が担う）ため
  // 対象外。info と danger が同じに見えるのは 0.6.0 で出荷した退行そのもの。
  for (const consumer of consumers.filter((c) => c.intents.includes("info"))) {
    it(`${consumer.name} tells danger and info apart`, () => {
      expect(glyphOf(consumer.render("danger"))).not.toBe(glyphOf(consumer.render("info")));
    });
  }
});
