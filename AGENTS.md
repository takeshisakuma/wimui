プロジェクトの基本ルールは `RULES.md` を参照してください。
構築に必要な実践知識は `SKILLS.md` を参照してください。
未着手の改善・再開ポイントは `IMPROVEMENTS.md` を参照してください。
よく使うコマンド・アーキテクチャ概要・コンポーネント新規作成手順は `CLAUDE.md` を参照してください。
複数コンポーネントを組み合わせて画面・パターン・デモを作るとき、**および部品の既定値（props の既定・`.module.scss` の既定の面）やカタログの `Default` ストーリーを書くとき**は、必ず `docs/design/composition.md`（コンポジションガイドライン）に従ってください。部品を素で置いた姿は、その部品を使う画面すべてに出るため、既定が禁止パターンなら画面ではなく既定の失敗です（必須ルール 15 `default_anatomy`）。
CI・PR 運用でユーザー確認なしに実行してよい操作の範囲は `CLAUDE.md` の「エージェントへの委任ポリシー（常設）」に従ってください。
AI エージェント向けの skill は `.agents/skills/` が実体です（Codex / Cursor などはここを直接読みます）。Claude Code は `.claude/skills/` しか見ないため、`npm install` 時に `prepare` が自動で繋ぎます（`npm run skills:link` / 検証は `npm run check:skills-mirror`）。
