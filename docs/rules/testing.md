# テストの書き方

> この文書は `SKILLS.md`（2026-09-21 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**手順です。

```tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

// useTranslation は必ずモックする
vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

## 規則

> この節は `AGENTS.md` から 2026-09-21 に移したものです（本文は書き換えていません）。`AGENTS.md` は毎セッション丸ごと読み込まれるので、作業のときだけ要る規則はこちらに置きます。

- `describe` / `it` パターンで記述してください。
- `useTranslation` は必ず `vi.mock("react-i18next", ...)` でモックしてください。
- テストを作成し、通過することを確認してください（`npm run test`）。
- UIに影響する変更を行った場合は、VRTも実行してください（`npm run test:vrt`）。

## e2e（`vrt/e2e.spec.ts` / `vrt/*.e2e.spec.ts`）

単体テスト（jsdom）にも VRT にも写らないものを、実物のブラウザで見るテストです ── キーボード操作、フォーカスの行き先、`headers` と描画位置の照合、仮想化の窓、途中のフレームに出る姿。

- 流し方: `npm run build-storybook` のあと `npm run test:e2e`（ローカルは `CI=1` を付けると静的ビルドを配信して流す。付けないと開発サーバを使う）。
- **CI では `e2e.yml` が流す**（CI-13・2026-10-02 から。それまでは、どのワークフローからも呼ばれておらず、`e2e.spec.ts` の 4 件が腐っていた）。新しい spec は、ファイル名を `*.e2e.spec.ts` にすれば拾われる。
- **やり直して通ったテストも赤になる**（`--fail-on-flaky-tests`）。e2e が見ているのは途中の姿や競合で、たまに落ちること自体が欠陥の出方だから。赤になったら、レポートで「毎回落ちる」のか「たまに落ちる」のかを先に見る。
- **待ちを決め打ちにしない。** 「2 フレーム待つ」「200ms 待つ」は、ローカル（Windows）で通っても CI（Linux）で外れる（PivotTable の仮想化のテストが、CI で初めて流した回に落ちた）。待つのは「窓が追いついた」「要素が現れた」などの状態にし、現れなかったときに落ちる検査を別に置く。
- **「1 回目だけ落ちて再試行で通る」は、PR を疑う前に main で同じ E2E を流して比べる**（`gh workflow run "E2E (keyboard, focus, layout)" --ref main`）。2026-10-03 は pivottable の「Tab のあとフォーカスが無い」「scrollHeight が 0」が main でも落ち、原因は**描いたストーリーの作り直し**だった（`storybook-react-i18next` が `languageChanged` で作り直す。遅い runner でだけ、初回描画の後に届く）。`.storybook/preview.ts` の `loaders` が翻訳の読み込みを待って止めており、`vrt/story-remount.e2e.spec.ts` が CPU を 6 倍遅くして見張る。**速い手元では再現しない競合は、CDP の `Emulation.setCPUThrottlingRate` で遅くして踏む。**
- **英語の文言で要素を引くので、ストーリーのデモの文言を変えたら e2e も流す**（腐っていた 4 件は、文言の差し替えにテストが付いていかなかった）。`e2e.yml` は全 PR で起動する（`E2E` は main の必須チェック。必須チェックのワークフローは paths で絞らない ── 絞ると、絞りから外れた PR がマージできなくなる。`check:ci-paths` が見張る）。
