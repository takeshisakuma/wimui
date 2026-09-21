import { describe, it, expect } from "vitest";
import { needsChangeset } from "./check-changeset-needed.mjs";

/**
 * changeset の付け忘れの警告（changeset-reminder）。
 *
 * 入力は実際にマージされた PR のファイル一覧（squash コミットの `git show --name-only`）。
 * CI の単体テストは浅い clone で走るので、git から読まずに一覧をそのまま持つ。
 *
 * 鳴るべき経路 = 0.30.0 以降に changeset 無しで入った 3 本（#657 / #659 / #674）。
 * 鳴ってはいけない経路 = docs だけ / changeset を足した PR / 空の changeset を足した
 * コメントだけの PR / テストだけ。
 */
const PR = {
  657: ["src/components/data-display/Carousel/Carousel.test.tsx", "src/components/data-display/Carousel/Carousel.tsx", "src/components/data-display/Carousel/carousel.module.scss", "stories/data-display/Carousel/Carousel.stories.tsx"],
  659: ["src/components/overlay/Dropdown/Dropdown.test.tsx", "src/components/overlay/Dropdown/Dropdown.tsx", "stories/overlay/Dropdown/Dropdown.stories.tsx"],
  674: ["src/components/_internal/StatusContent.tsx", "src/components/_internal/status-content.module.scss", "src/components/data-display/EmptyState/EmptyState.tsx", "src/components/data-display/Stats/Stats.tsx", "IMPROVEMENTS.md"],
  // #641: コメントの張り替えだけ（src の 5 ファイル）
  641: ["src/components/form/PasswordInput/PasswordInput.tsx", "src/components/media/Audio/audio.module.scss", "AGENTS.md"],
  // #678: changeset を同梱した
  678: [".changeset/marquee-keyboard-pause.md", "src/components/data-display/Marquee/Marquee.tsx", "src/components/data-display/Marquee/marquee.module.scss"],
  // #682: docs だけ
  682: ["IMPROVEMENTS.md", "docs/history/improvements-archive.md"],
};

describe("check-changeset-needed", () => {
  it.each([657, 659, 674])("changeset 無しで入った #%i は鳴る", (n) => {
    expect(needsChangeset(PR[n], []).needed).toBe(true);
  });

  it("changeset を同梱した #678 は鳴らない", () => {
    expect(needsChangeset(PR[678], [".changeset/marquee-keyboard-pause.md"]).needed).toBe(false);
  });

  it("docs だけの #682 は鳴らない", () => {
    expect(needsChangeset(PR[682], []).needed).toBe(false);
  });

  it("コメントだけの #641 は鳴るが、空の changeset を足せば通る", () => {
    expect(needsChangeset(PR[641], []).needed).toBe(true);
    expect(needsChangeset([...PR[641], ".changeset/quiet-comments.md"], [".changeset/quiet-comments.md"]).needed).toBe(false);
  });

  it("テストだけの変更は鳴らない", () => {
    expect(needsChangeset(["src/components/form/Button/Button.test.tsx"], []).needed).toBe(false);
  });

  it("トークンの変更は鳴る", () => {
    expect(needsChangeset(["tokens/color/semantic.json"], []).needed).toBe(true);
  });

  it("changeset の README や設定を触っただけでは changeset と数えない", () => {
    expect(needsChangeset(["src/index.ts", ".changeset/README.md"], [".changeset/README.md"]).needed).toBe(true);
  });
});
