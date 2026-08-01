import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "../feedback/Progress/Progress";
import { ProgressRing } from "../feedback/ProgressRing/ProgressRing";

/**
 * T53 の受け入れ条件は「名前を渡さないと**コンパイルエラーになる**こと」。
 * 型は実行時テストでは掴めないので `@ts-expect-error` で固定する ──
 * **型が緩んだ瞬間に「エラーが出るはずなのに出ていない」と tsc が落ちる**。
 *
 * 併せて、3 つの出所すべてが実際に名前になることを実行時にも確かめる。
 * `Progress` は長らく「名前の無い progressbar を作れる」状態で出荷され、
 * 全ストーリーがたまたま `label` を渡していたために a11y スイートが一度も
 * 鳴らなかった（ガードが見ていたのは API ではなくストーリーの書き方だった）。
 */
describe("progressbar accessible name", () => {
  it("rejects a progressbar with no name at compile time", () => {
    // @ts-expect-error 名前の出所（label / aria-label / aria-labelledby）が 1 つも無い
    const missing = <Progress value={50} />;
    // @ts-expect-error 同上（ProgressRing も同じ規則）
    const missingRing = <ProgressRing value={50} />;
    expect(missing).toBeTruthy();
    expect(missingRing).toBeTruthy();
  });

  it("accepts label as the name", () => {
    render(<Progress value={50} label="Uploading" />);
    expect(screen.getByRole("progressbar")).toHaveAccessibleName("Uploading");
  });

  it("accepts aria-label as the name", () => {
    render(<Progress value={50} aria-label="Syncing" />);
    expect(screen.getByRole("progressbar")).toHaveAccessibleName("Syncing");
  });

  it("accepts aria-labelledby as the name", () => {
    render(
      <>
        <span id="pb-name">Restoring</span>
        <Progress value={50} aria-labelledby="pb-name" />
      </>,
    );
    expect(screen.getByRole("progressbar")).toHaveAccessibleName("Restoring");
  });

  // 可視ラベルを描きつつ別の名前を付けたいときは `aria-label` が勝つ。
  // 両方が名前になると読み上げが重複する。
  it("lets aria-label win over label so the name is not doubled", () => {
    render(<Progress value={50} label="50%" aria-label="Upload progress" />);
    expect(screen.getByRole("progressbar")).toHaveAccessibleName("Upload progress");
  });

  it("applies the same rule to ProgressRing", () => {
    render(<ProgressRing value={50} aria-label="Quota used" />);
    expect(screen.getByRole("progressbar")).toHaveAccessibleName("Quota used");
  });
});
