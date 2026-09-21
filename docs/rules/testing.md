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
