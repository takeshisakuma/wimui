#!/usr/bin/env bash
#
# CI-8 — **`playwright install --with-deps` の apt が固まったとき、job タイムアウトまで
# 戻ってこない**事故への対処。
#
# 2026-08-19 の実測（#453 / #454）: `archive.ubuntu.com` の `InRelease` を取りに行った
# ところから 1 行も進まず、**a11y が 30 分 / tap-target が 60 分**の job タイムアウトまで
# 戻らなかった（3 ワークフロー・計 6 ジョブ）。**同じ run の健全なシャードでは同じ
# ステップが 74 秒**なので、遅いのではなく止まっている。
#
# ── ここでやること ────────────────────────────────────────────────────
#   **ブラウザ本体を入れるだけ**（`playwright install`）。**apt を触らない**ので、
#   apt が死んでいる日でも通る。失敗したら諦める（ブラウザが無ければ何も撮れない）。
#
# **2026-08-21（CI-8 ②）に `playwright install-deps` を外した。** ここには長らく
# 「apt は飛ばせない（フォントが 9 つ入るので字形が変わる）」と書いてあったが、
# **その依存を実測して自前配信に置き換えた**（末尾のコメントに内訳）。
#
# **再試行では apt の障害は越えられなかった。** 実測: `--with-deps` のまま 3 回試して
# 3 回とも同じ 240s で固まった（12m57s で失敗）。だから「早く諦める」ではなく
# 「そもそも触らない」へ進めた。
#
# 使い方:
#   bash scripts/ci-install-playwright.sh              # 既定（ブラウザ本体）
#   bash scripts/ci-install-playwright.sh sleep 999    # 任意のコマンド（試験用）
#
# 環境変数:
#   PLAYWRIGHT_INSTALL_ATTEMPTS  試行回数（既定 3）
#   PLAYWRIGHT_INSTALL_TIMEOUT   1 回あたりの秒数（既定 240 = 健全な実測 74 秒の 3 倍強）
set -uo pipefail

ATTEMPTS="${PLAYWRIGHT_INSTALL_ATTEMPTS:-3}"
PER_ATTEMPT="${PLAYWRIGHT_INSTALL_TIMEOUT:-240}"

warn() {
  # GitHub Actions では run のサマリに出る。ローカルではただの標準エラー。
  echo "::warning::$*" >&2
}

# 1 回ぶんを時間で縛る。124 / 137 は「応答しなかった」＝ハング。
run_once() {
  local seconds="$1"
  shift
  timeout --kill-after=30 "$seconds" "$@"
}

# 縛りつき + 再試行。戻り値は最後の試行のもの。
run_with_retry() {
  local label="$1" seconds="$2"
  shift 2
  local attempt status
  for attempt in $(seq 1 "$ATTEMPTS"); do
    run_once "$seconds" "$@"
    status=$?

    if [ "$status" -eq 0 ]; then
      [ "$attempt" -gt 1 ] && warn "${label} は $attempt 回目で成功した。"
      return 0
    fi

    if [ "$status" -eq 124 ] || [ "$status" -eq 137 ]; then
      warn "${label} が ${seconds}s で応答しなかった（$attempt/$ATTEMPTS）。CI-8 の apt ハングの可能性が高い。"
    else
      warn "${label} が exit $status で失敗した（$attempt/$ATTEMPTS）。"
    fi

    if [ "$attempt" -eq "$ATTEMPTS" ]; then
      return "$status"
    fi

    sleep $((attempt * 10))
  done
}

# 引数があれば、それを必須の 1 本として走らせる（試験用）。
if [ "$#" -gt 0 ]; then
  run_with_retry "コマンド" "$PER_ATTEMPT" "$@"
  status=$?
  if [ "$status" -ne 0 ]; then
    echo "✗ コマンドが $ATTEMPTS 回とも失敗した（最後の exit=$status）。" >&2
  fi
  exit "$status"
fi

# 1) ブラウザ本体 — apt を触らない。ここが落ちたら先へ進めない。
run_with_retry "playwright install（ブラウザ）" "$PER_ATTEMPT" npx playwright install chromium
status=$?
if [ "$status" -ne 0 ]; then
  echo "✗ ブラウザの導入が $ATTEMPTS 回とも失敗した（最後の exit=$status）。" >&2
  exit "$status"
fi

# 2) OS 依存（apt）は **もう踏まない**（CI-8 ②・2026-08-21）。
#
# ここには長らく `npx playwright install-deps chromium` があった。理由は
# 「`install-deps` は共有ライブラリだけでなく**フォントを 9 つ**入れるので、
# 飛ばすと字形の代替が変わってベースラインと合わない」── 実際 2026-08-19 に
# 飛ばした回は VRT が落ちている。
#
# **その依存を測って、外した。**（dispatch run 32473587835 / 32475747762）
#   - 全 1007 ストーリーのうち apt に依存していたのは **9 枚**だけ
#   - 供給していたのは **2 ファミリー**: `WenQuanYi Zen Hei`（日本語 178 文字 ×
#     ストーリー）と `FreeSerif`（`⎋` U+238B の 1 文字）
#   - 日本語は `.storybook/fonts-cjk-fallback.ts` で**自前配信に置き換えた**
#     （`Noto Sans` / `Noto Sans Mono` に `unicode-range` で CJK の面を足す）
#   - `⎋` は apt を抜くと `DejaVu Sans Mono` になる。**DejaVu は runner image に
#     最初から入っている**（apt で消えない 19 ファミリーの 1 つ）ので、apt には
#     依存しない。`⌫`(U+232B) と `⌘`(U+2318) も同じく DejaVu で、こちらは apt の
#     有無で 1 文字も変わらなかった
#
# **共有ライブラリは runner image に揃っている。** `install-deps` を飛ばした条件で
# chromium は起動し、1007 ストーリーすべてを描画できている（上の 2 ラン）。
# ただしこれは **image が変わると変わりうる前提** ── `MAINTENANCE.md` 11
# （runner image の四半期点検）で見る。壊れ方は「ブラウザが起動しない」で派手なので、
# 黙って腐る形ではない。
#
# 効果: apt が落ちている日でも **CI が緑になる**（従来は 30〜60 分ハング → ① の
# 改修後で 13 分の明確なエラー → 今回で **そもそも触らない**）。
exit 0
