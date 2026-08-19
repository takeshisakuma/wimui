#!/usr/bin/env bash
#
# CI-8 — **`playwright install --with-deps` の apt が固まったとき、job タイムアウトまで
# 戻ってこない**事故への対処。1 回あたりの時間を縛って再試行する。
#
# 2026-08-19 の実測（#453 の 1 回の push）: `archive.ubuntu.com` の `InRelease` を
# 取りに行ったところから 1 行も進まず、**a11y が 30 分 / tap-target が 60 分**の job
# タイムアウトまで戻らなかった（3 ワークフロー・計 6 ジョブ）。**同じ run の健全な
# シャードでは同じステップが 74 秒**なので、遅いのではなく止まっている。
#
# ここで apt が消えるわけではない（それは CI-8 の案②で、runner image の実測が要る）。
# **戻ってくるまでの時間を 30〜60 分から数分にするだけ**の手当て。
#
# タイムアウトした job の conclusion は GitHub 上 `cancelled`（灰色）になり赤より
# 目に入らないので、ここでは `::warning::` を出して run のサマリに残す。
#
# 使い方:
#   bash scripts/ci-install-playwright.sh                 # 既定のコマンドを実行
#   bash scripts/ci-install-playwright.sh sleep 999       # 任意のコマンド（試験用）
#
# 環境変数:
#   PLAYWRIGHT_INSTALL_ATTEMPTS  試行回数（既定 3）
#   PLAYWRIGHT_INSTALL_TIMEOUT   1 回あたりの秒数（既定 240 = 健全な実測 74 秒の 3 倍強）
set -uo pipefail

ATTEMPTS="${PLAYWRIGHT_INSTALL_ATTEMPTS:-3}"
PER_ATTEMPT="${PLAYWRIGHT_INSTALL_TIMEOUT:-240}"

if [ "$#" -gt 0 ]; then
  CMD=("$@")
else
  CMD=(npx playwright install --with-deps chromium)
fi

# **timeout は直の子しか殺さない。** playwright は apt-get を root 側の別プロセスとして
# 起こすので、1 回目を打ち切っても **apt-get が生き残って lock を握り続ける**
# ── 実測（2026-08-19、#454 の tap-target）: 2 回目・3 回目が即座に
# `E: Could not get lock /var/lib/apt/lists/lock. It is held by process 2074 (apt-get)`
# で落ちた。再試行を意味のあるものにするには、握っている相手を落として lock を外す。
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

warn() {
  # GitHub Actions では run のサマリに出る。ローカルではただの標準エラー。
  echo "::warning::$*" >&2
}

for attempt in $(seq 1 "$ATTEMPTS"); do
  # SIGTERM で降りなければ 30 秒後に SIGKILL（apt はしばしば TERM を無視する）。
  timeout --kill-after=30 "$PER_ATTEMPT" "${CMD[@]}"
  status=$?

  if [ "$status" -eq 0 ]; then
    [ "$attempt" -gt 1 ] && warn "playwright install は $attempt 回目で成功した。"
    exit 0
  fi

  if [ "$status" -eq 124 ] || [ "$status" -eq 137 ]; then
    warn "playwright install が ${PER_ATTEMPT}s で応答しなかった（$attempt/$ATTEMPTS）。CI-8 の apt ハングの可能性が高い。"
  else
    warn "playwright install が exit $status で失敗した（$attempt/$ATTEMPTS）。"
  fi

  if [ "$attempt" -eq "$ATTEMPTS" ]; then
    echo "✗ playwright install が $ATTEMPTS 回とも失敗した（最後の exit=$status）。" >&2
    exit "$status"
  fi

  recover_apt

  sleep $((attempt * 10))
done
