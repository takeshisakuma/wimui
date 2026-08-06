import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Alert,
  Box,
  Button,
  Card,
  Code,
  DataGrid,
  EmptyState,
  ErrorBoundary,
  FieldError,
  Flex,
  Icon,
  LoadingOverlay,
  Progress,
  Result,
  Spinner,
  Stack,
  Tag,
  Text,
  Title,
} from "wimui";
import type { DataGridColumn } from "wimui";

const meta: Meta = {
  title: "Patterns/ImportJob",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

/** 取り込みジョブが取りうる状態。画面はこの 1 値でしか分岐しない。 */
type Phase = "idle" | "validating" | "review" | "committing" | "committed" | "rejected";

const TOTAL_ROWS = 1204;
const VALIDATED_ROWS = 868;
const FAILED_ROWS = 3;
const COMMITTED_ROWS = TOTAL_ROWS - FAILED_ROWS;

type Rejection = {
  line: number;
  column: string;
  value: string;
  reason: string;
};

/**
 * 入荷ロットの一括登録（T32 の 5 枚目）。empty / loading / error を主役に据えた画面。
 *
 * `IntakeQueue` と同じ世界のデータを使う。`CO-2607-K12` は向こうの一覧に実在する
 * ロット番号で、だからここでは重複として弾かれる。
 */
const ImportJobScreen = ({ initialPhase }: { initialPhase: Phase }) => {
  const { t } = useTranslation([...ALL_NAMESPACES, "docs_stories_recipes"]);
  const r = (key: string) => t(`docs_stories_recipes:import.${key}`);

  const [phase, setPhase] = useState<Phase>(initialPhase);

  const rejections: Rejection[] = [
    {
      line: 41,
      column: "producer",
      // 長い値。折り返しと truncate を幸せパスの外で確認するための 1 行。
      value: "Kochere Konga Washing Station, Block 2 — Yirgacheffe, Gedeo Zone",
      reason: r("reject_producer"),
    },
    {
      line: 407,
      column: "weight_kg",
      // 小数点がカンマの表記。取引先が pt-BR のロケールで書き出すと出る。
      value: "1.240,5",
      reason: r("reject_weight"),
    },
    {
      line: 1180,
      column: "lot_id",
      value: "CO-2607-K12",
      reason: r("reject_duplicate"),
    },
  ];

  const columns: DataGridColumn<Rejection>[] = [
    {
      key: "line",
      title: r("col_line"),
      width: "6rem",
      render: (_value, row) => (
        <Text size="sm" color="text-secondary" nowrap>
          {row.line.toLocaleString("en-US")}
        </Text>
      ),
    },
    {
      key: "column",
      title: r("col_column"),
      width: "9rem",
      render: (_value, row) => <Code>{row.column}</Code>,
    },
    {
      key: "value",
      title: r("col_value"),
      width: "16rem",
      // `truncate` は使わない。DataGrid は `<th>` に `width` と `min-width` を
      // 同値で出すうえ `table-layout: auto` なので、**幅は下限にしかならない**。
      // nowrap の長い値は宣言 256px を 474px まで押し広げ（実測）、省略記号は
      // 出ないまま理由列を 180px に絞ってしまう。折り返せば列は宣言どおりに
      // 収まる。直す値そのものを省略しないほうが、この画面では正しくもある。
      render: (_value, row) => <Text size="sm">{row.value}</Text>,
    },
    {
      key: "reason",
      title: r("col_reason"),
      // 幅は指定しない。ここを固定すると列の合計がコンテナを超えてグリッドが
      // 内部スクロールする（実測 1034 > 896）。余りを全部この列に流すことで、
      // `lang.scss` の `hyphens: auto`（en/pt は意図的に有効）が
      // "deci-mal" のように単語を割るのを避ける。
      // 値のすぐ隣に理由を置く。フォームのバリデーションと同じ表現を使うことで、
      // 「どこを直せば通るか」を行から離さない。
      render: (_value, row) => <FieldError content={row.reason} />,
    },
  ];

  const commit = () => {
    setPhase("committing");
    window.setTimeout(() => setPhase("committed"), 1100);
  };

  return (
    <div className="importjob-page">
      <style>{`
        .importjob-page {
          padding: var(--wim-spacing-3xl) var(--wim-spacing-2xl);
          background: var(--wim-color-surface-app);
        }

        .importjob-column {
          /* 読み幅の上限。1280px いっぱいに伸ばすと、主役の状態パネルが
             ただの横帯になって視線の起点が消える。 */
          inline-size: min(56rem, 100%);
          margin-inline: auto;
        }

        /* 過去のジョブ。行間を詰め、区切りは線 1 本に任せる（主役は疎・履歴は密）。 */
        .importjob-run {
          display: flex;
          gap: var(--wim-spacing-md);
          align-items: baseline;
          justify-content: space-between;
          padding-block: var(--wim-spacing-sm);
          border-top: var(--wim-border-width-thin) solid var(--wim-color-border-secondary);
        }
      `}</style>

      <div className="importjob-column">
        <Stack gap="2xl">
          {/* クローム。primary の面は置かない（主役は下のパネル）。 */}
          <Stack gap="3xs">
            <Text size="sm" color="text-secondary">
              {r("breadcrumb")}
            </Text>
            <Title tag="h1" size="lg">
              {r("title")}
            </Title>
          </Stack>

          {/* 主役。状態ごとに中身が丸ごと入れ替わる。
              `position="relative"` は LoadingOverlay のため（`fixed={false}` は
              `position: absolute` なので、位置を持つ祖先が無いと画面全体に広がる）。 */}
          <Box position="relative">
            <Card variant="outline" padding="2xl">
              {phase === "idle" && (
                <EmptyState
                  icon={<Icon name="UploadIcon" size="lg" color="text-tertiary" />}
                  title={r("idle_title")}
                  description={r("idle_desc")}
                  extra={
                    <Stack gap="sm" align="center">
                      <Button variant="solid" onClick={() => setPhase("validating")}>
                        {r("idle_action")}
                      </Button>
                      <Text size="xs" color="text-tertiary">
                        {r("idle_hint")}
                      </Text>
                    </Stack>
                  }
                />
              )}

              {phase === "validating" && (
                <Stack gap="lg">
                  <Stack gap="3xs">
                    <Text size="sm" color="text-secondary">
                      {r("file_meta")}
                    </Text>
                    <Title tag="h2" size="sm">
                      {r("validating_title")}
                    </Title>
                  </Stack>
                  <Progress
                    value={VALIDATED_ROWS}
                    max={TOTAL_ROWS}
                    label={t("docs_stories_recipes:import.validating_label", {
                      done: VALIDATED_ROWS.toLocaleString("en-US"),
                      total: TOTAL_ROWS.toLocaleString("en-US"),
                    })}
                    showValue
                  />
                  <Flex align="center" gap="sm" wrap="wrap">
                    <Spinner size="sm" />
                    <Text size="sm" color="text-secondary">
                      {r("validating_step")}
                    </Text>
                  </Flex>
                  <Flex>
                    <Button variant="ghost" onClick={() => setPhase("idle")}>
                      {r("validating_cancel")}
                    </Button>
                  </Flex>
                </Stack>
              )}

              {(phase === "review" || phase === "committing") && (
                <Stack gap="lg">
                  <Stack gap="3xs">
                    <Text size="sm" color="text-secondary">
                      {r("file_meta")}
                    </Text>
                    <Title tag="h2" size="sm">
                      {t("docs_stories_recipes:import.review_title", { failed: FAILED_ROWS })}
                    </Title>
                  </Stack>
                  {/* 部分成功は成功でも失敗でもない。danger にすると
                      「1,201 行は通っている」ほうが読めなくなる。
                      `Banner` ではなく `Alert`。Banner は「ページ全体に効く
                      恒久的な告知をページ上部に出す」もので、docs も
                      `banner_choice_alert_when` で「特定の文脈の中の一時的な
                      警告（入力バリデーションエラー）」を Alert 側に振っている。
                      これはこのジョブ 1 件の検証結果なので Alert が正しい。 */}
                  <Alert
                    intent="warning"
                    title={t("docs_stories_recipes:import.review_alert_title", {
                      failed: FAILED_ROWS,
                      total: TOTAL_ROWS.toLocaleString("en-US"),
                    })}
                    description={t("docs_stories_recipes:import.review_alert_desc", {
                      ok: COMMITTED_ROWS.toLocaleString("en-US"),
                    })}
                  />
                  <Flex gap="sm" wrap="wrap">
                    <Button variant="solid" onClick={commit}>
                      {t("docs_stories_recipes:import.review_commit", {
                        ok: COMMITTED_ROWS.toLocaleString("en-US"),
                      })}
                    </Button>
                    <Button variant="ghost" onClick={() => setPhase("idle")}>
                      {r("review_reupload")}
                    </Button>
                  </Flex>
                </Stack>
              )}

              {phase === "committed" && (
                <Result
                  intent="success"
                  title={t("docs_stories_recipes:import.done_title", {
                    ok: COMMITTED_ROWS.toLocaleString("en-US"),
                  })}
                  description={t("docs_stories_recipes:import.done_desc", {
                    failed: FAILED_ROWS,
                  })}
                  extra={
                    <Flex gap="sm" wrap="wrap" justify="center">
                      <Button variant="outline">{r("done_export")}</Button>
                      <Button variant="ghost" onClick={() => setPhase("idle")}>
                        {r("done_back")}
                      </Button>
                    </Flex>
                  }
                />
              )}

              {phase === "rejected" && (
                <Result
                  intent="danger"
                  title={r("rejected_title")}
                  description={r("rejected_desc")}
                  extra={
                    <Flex gap="sm" wrap="wrap" justify="center">
                      <Button variant="outline">{r("rejected_template")}</Button>
                      <Button variant="ghost" onClick={() => setPhase("idle")}>
                        {r("done_back")}
                      </Button>
                    </Flex>
                  }
                />
              )}
            </Card>

            {/* 登録中は同じ面を塞ぐ。別画面へ飛ばさないのは、いま何が起きているかを
                さっきまで読んでいた場所で見せるため。 */}
            <LoadingOverlay visible={phase === "committing"} message={r("committing_message")} />
          </Box>

          {/* 弾かれた行。DataGrid 自身が枠を持つので Card では包まない。 */}
          {(phase === "review" || phase === "committing") && (
            <Stack gap="sm">
              <Title tag="h2" size="xs">
                {t("docs_stories_recipes:import.rejects_title", { failed: FAILED_ROWS })}
              </Title>
              {/* 取り込みの結果は取引先の CSV 次第で、想定していない形が来る。
                  プレビューが 1 行で壊れてもページごと落とさない。 */}
              <ErrorBoundary>
                <DataGrid<Rejection>
                  columns={columns}
                  data={rejections}
                  rowKey={(row) => String(row.line)}
                  mobileCard
                  aria-label={r("rejects_grid_label")}
                />
              </ErrorBoundary>
            </Stack>
          )}

          {/* 過去のジョブ。件数も結果も不揃いにする。 */}
          <Stack gap="2xs">
            <Title tag="h2" size="xs">
              {r("history_title")}
            </Title>
            <div>
              <div className="importjob-run">
                <Text size="sm">{r("run_1")}</Text>
                <Tag content={r("run_1_result")} intent="neutral" variant="subtle" size="sm" />
              </div>
              <div className="importjob-run">
                <Text size="sm">{r("run_2")}</Text>
                <Tag content={r("run_2_result")} intent="danger" variant="subtle" size="sm" />
              </div>
              <div className="importjob-run">
                <Text size="sm">{r("run_3")}</Text>
                <Tag content={r("run_3_result")} intent="neutral" variant="subtle" size="sm" />
              </div>
            </div>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

/** 部分失敗のレビュー。この画面でいちばん情報量が多い状態を既定にする。 */
export const BulkUpload: StoryObj = {
  render: () => <ImportJobScreen initialPhase="review" />,
};

/** まだ 1 度も取り込んでいない。0 件と読み込み中と未実行は別の状態。 */
export const NotStarted: StoryObj = {
  render: () => <ImportJobScreen initialPhase="idle" />,
};

/** 検証中。進捗は行数で出す（「しばらくお待ちください」では待てるか判断できない）。 */
export const Validating: StoryObj = {
  render: () => <ImportJobScreen initialPhase="validating" />,
};

/** 部分成功。成功の顔で出すが、落ちた 3 行への導線を必ず残す。 */
export const Committed: StoryObj = {
  render: () => <ImportJobScreen initialPhase="committed" />,
};

/** 全行が弾かれた場合。部分成功とは別の顔にする。 */
export const AllRowsRejected: StoryObj = {
  render: () => <ImportJobScreen initialPhase="rejected" />,
};
