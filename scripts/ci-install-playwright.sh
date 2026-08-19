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
#   1. **ブラウザ本体**を入れる（`playwright install`）。**apt を触らない**ので、
#      apt が死んでいる日でも通る。**これは必須** ── 失敗したら諦める。
#   2. **OS 依存**を入れる（`playwright install-deps`）。ここが apt。**任意扱い**で、
#      応答しなければ警告を出して先へ進む。
#
# 2 段に割った理由: 最初は `--with-deps` のまま再試行だけを付けて CI に出したが、
# **apt が落ちている間は 3 回とも同じように固まった**（実測 12m57s で失敗）。
# 時間は縛れても、apt が死んでいる日は緑にできない。runner image は chromium が要る
# 共有ライブラリをおおむね積んでいるので、**apt はあくまで保険**という置き方にする。
#
# 依存の導入を飛ばした日に image 側にも無いライブラリがあれば、**この後ブラウザの
# 起動で落ちる**。そのときのために、飛ばしたことを `::warning::` で残す
# （タイムアウトした job は GitHub 上 `cancelled`＝灰色で目に入らないため、
#  何が起きたかを run のサマリに必ず残す方針）。
#
# 使い方:
#   bash scripts/ci-install-playwright.sh              # 既定（ブラウザ必須 + 依存は任意）
#   bash scripts/ci-install-playwright.sh sleep 999    # 任意のコマンド（試験用。必須扱い）
#
# 環境変数:
#   PLAYWRIGHT_INSTALL_ATTEMPTS  試行回数（既定 3）
#   PLAYWRIGHT_INSTALL_TIMEOUT   1 回あたりの秒数（既定 240 = 健全な実測 74 秒の 3 倍強）
#   PLAYWRIGHT_DEPS_TIMEOUT      OS 依存側の秒数（既定 120。apt が死んでいる日の待ち代）
set -uo pipefail

ATTEMPTS="${PLAYWRIGHT_INSTALL_ATTEMPTS:-3}"
PER_ATTEMPT="${PLAYWRIGHT_INSTALL_TIMEOUT:-240}"
DEPS_TIMEOUT="${PLAYWRIGHT_DEPS_TIMEOUT:-120}"

warn() {
  # GitHub Actions では run のサマリに出る。ローカルではただの標準エラー。
  echo "::warning::$*" >&2
}

# **timeout は直の子しか殺さない。** playwright は apt-get を root 側の別プロセスとして
# 起こすので、打ち切っても **apt-get が生き残って lock を握り続ける** ── 実測
# （2026-08-19、#454）: 2 回目・3 回目が即座に
# `E: Could not get lock /var/lib/apt/lists/lock. It is held by process 2074 (apt-get)`
# で落ちた。握っている相手を落として lock を外してから次に行く。
# この runner は使い捨てで、握っているのは今こちらが打ち切った相手なので消してよい。
recover_apt() {
  command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null || return 0
  sudo pkill -9 -x apt-get 2>/dev/null || true
  sudo pkill -9 -x apt 2>/dev/null || true
  sudo pkill -9 -x dpkg 2>/dev/null || true
  sudo rm -f /var/lib/apt/lists/lock /var/lib/dpkg/lock /var/lib/dpkg/lock-frontend /var/cache/apt/archives/lock 2>/dev/null || true
  sudo dpkg --configure -a 2>/dev/null || true
  echo "apt の後始末をした（残っていた apt-get / dpkg を落として lock を外した）。"
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

    recover_apt
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

# 2) OS 依存 — apt。**落ちても止めない**（image が積んでいれば要らない）。
run_once "$DEPS_TIMEOUT" npx playwright install-deps chromium
deps_status=$?
if [ "$deps_status" -eq 0 ]; then
  exit 0
fi
recover_apt
if [ "$deps_status" -eq 124 ] || [ "$deps_status" -eq 137 ]; then
  warn "OS 依存の導入が ${DEPS_TIMEOUT}s で応答しなかったので飛ばした（CI-8 の apt ハング）。runner image に必要な共有ライブラリが無ければ、この後ブラウザの起動で落ちる。"
else
  warn "OS 依存の導入が exit ${deps_status} で失敗したので飛ばした。runner image に必要な共有ライブラリが無ければ、この後ブラウザの起動で落ちる。"
fi
exit 0
