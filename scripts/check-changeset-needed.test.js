import fs from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { needsChangeset, readNameStatus, UNSHIPPED_DATA, SHIPPED_DATA } from "./check-changeset-needed.mjs";

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
  // #1110: Registry の列。src/ に触れたのは、出荷されない生成データだけ（空の changeset を足して通した）
  1110: ["MAINTENANCE.md", "package.json", "public/locales/en/docs_common.json", "scripts/audit-all.js", "scripts/generate-responsive.js", "src/data/component-responsive.json", "stories/ComponentDashboard.tsx"],
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

  it("出荷されない src/data だけの #1110 は鳴らない", () => {
    expect(needsChangeset(PR[1110], []).needed).toBe(false);
  });

  it("llms.txt を通って出荷される src/data は鳴る", () => {
    expect(needsChangeset(["src/data/components.json"], []).needed).toBe(true);
    expect(needsChangeset(["src/data/not-planned.json"], []).needed).toBe(true);
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

  // 警告を 12 日・78 本の PR で振り返って見つけた誤検出（2026-10-03）。#763 は、まだ公開していない
  // 機能の changeset を**書き換えて**変更を説明していたのに、「足した」ファイルしか数えていなかった
  // ので警告が出た。入力は `git diff --name-status` の行（実物の #763 の抜粋）。
  describe("git の出力からの読み取り", () => {
    const PR_763 = [
      "M\t.changeset/rich-text-editor-markdown.md",
      "M\tsrc/components/form/RichTextEditor/RichTextEditor.tsx",
      "M\tsrc/components/form/RichTextEditor/markdown.ts",
      "M\tIMPROVEMENTS.md",
    ];
    const check = (lines) => {
      const { changed, written } = readNameStatus(lines);
      return needsChangeset(changed, written).needed;
    };

    it("既存の changeset を書き換えた #763 は鳴らない", () => {
      expect(check(PR_763)).toBe(false);
    });

    it("足した changeset も、これまでどおり数える", () => {
      expect(check(["A\t.changeset/new-one.md", "M\tsrc/index.ts"])).toBe(false);
    });

    it("changeset を消しただけでは数えない", () => {
      expect(check(["D\t.changeset/old-one.md", "M\tsrc/index.ts"])).toBe(true);
    });

    it("changeset に触れていなければ鳴る", () => {
      expect(check(PR_763.slice(1))).toBe(true);
    });

    it("改名は、新しい側の名前で出荷物かどうかを見る", () => {
      expect(check(["R100\tdocs/old.ts\tsrc/new.ts"])).toBe(true);
      expect(check(["R090\t.changeset/a.md\t.changeset/b.md", "M\tsrc/index.ts"])).toBe(false);
    });
  });

  // UNSHIPPED_DATA は手で持つ一覧なので、実物とずれたら落とす。
  describe("src/data の分類", () => {
    const root = path.resolve(import.meta.dirname, "..");
    const dataDir = path.join(root, "src", "data");
    // docgen_*.json と .docgen-cache.json は gitignore された生成物で、PR の差分に出てこない
    const tracked = fs
      .readdirSync(dataDir)
      .filter((name) => name.endsWith(".json") && !name.startsWith("docgen_") && !name.startsWith("."))
      .map((name) => `src/data/${name}`);

    it("src/data のファイルは、出荷される / されないのどちらかに載っている", () => {
      const listed = (file) => Object.hasOwn(UNSHIPPED_DATA, file) || Object.hasOwn(SHIPPED_DATA, file);
      expect(tracked.filter((file) => !listed(file))).toEqual([]);
    });

    it("一覧に、もう無いファイルが残っていない", () => {
      const listed = [...Object.keys(UNSHIPPED_DATA), ...Object.keys(SHIPPED_DATA)];
      expect(listed.filter((file) => !tracked.includes(file))).toEqual([]);
    });

    it("出荷されないファイルを、ライブラリのコードと llms.txt の生成が読んでいない", () => {
      const sources = [path.join(root, "scripts", "generate-llms.js")];
      const walk = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            if (full !== dataDir) walk(full);
          } else if (/\.[cm]?[jt]sx?$/.test(entry.name) && !/\.(test|stories)\./.test(entry.name)) {
            sources.push(full);
          }
        }
      };
      walk(path.join(root, "src"));
      const readers = [];
      for (const file of sources) {
        const text = fs.readFileSync(file, "utf8");
        for (const data of Object.keys(UNSHIPPED_DATA)) {
          // import 文・readJSON の引数のどちらでも、パスの末尾は「data/<名前>」になる
          if (text.includes(`data/${path.basename(data)}`) || text.includes(`data/${path.basename(data, ".json")}"`)) {
            readers.push(`${path.relative(root, file)} -> ${data}`);
          }
        }
      }
      expect(readers).toEqual([]);
    });
  });
});
