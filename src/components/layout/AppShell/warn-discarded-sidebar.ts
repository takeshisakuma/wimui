import { isDev } from "../../../utilities/dev-utils";

/**
 * Composition API 利用中に `sidebar` prop を渡すと、描画経路が無く黙って捨てられる（T98）。
 * 開発時に一度だけ理由を出す。描画で救わないのは、composed ツリーのどこに置くかを
 * ライブラリ側では決められないため。
 *
 * このモジュールは `src/layout.ts` から re-export しない（テスト用 seam を公開 API に載せない）。
 */
let warned = false;

export function warnDiscardedSidebarProp(): void {
  if (!isDev || warned) return;
  warned = true;
  console.warn(
    "[wimui] AppShell ignored the `sidebar` prop because children use the " +
      "Composition API (AppShell.Body / .Main / .Sidebar / .Header / .Footer / .Navbar). " +
      "Pass the sidebar as `<AppShell.Sidebar>` inside `<AppShell.Body>` instead — " +
      "do not mix the `sidebar` prop with structural sub-components.",
  );
}

/** Test seam — the warn-once flag is module state. */
export function resetAppShellWarnings(): void {
  warned = false;
}
