import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  ArtifactsOverlay,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Terminal,
  Text,
  Title,
  VoiceVisualizer,
  type TerminalLine,
} from "wimui";
// 4 つは optional peer を持つので専用サブパスから取る（`wimui/ai` にも載るが、
// 利用者が入れるべき peer が名前から分かるのはこちら）。
// StreamingText / MarkdownRenderer → react-markdown・remark-gfm、
// CodeDiffViewer → diff、InteractiveGraph → @xyflow/react。
import { StreamingText } from "wimui/ai/streaming-text";
import { MarkdownRenderer } from "wimui/ai/markdown-renderer";
import { CodeDiffViewer } from "wimui/ai/code-diff-viewer";
import { InteractiveGraph } from "wimui/ai/interactive-graph";
// `Position` は React Flow 側の列挙。既定のハンドルは上下（縦フロー前提）なので、
// 左→右に並べた系統図では辺が節点を回り込んで読めなくなる。
import { Position } from "@xyflow/react";

/**
 * 10 枚目の合成画面（T32 / T110）。**狙いは ai 族の未合成 7 件** ──
 * `ArtifactsOverlay` / `CodeDiffViewer` / `InteractiveGraph` / `MarkdownRenderer` /
 * `StreamingText` / `Terminal` / `VoiceVisualizer`。
 *
 * **`ArtifactsOverlay` はこの画面を書こうとして初めて「import できない」と分かった。**
 * `components.json` にも `docs/Hierarchy.mdx` にも MDX にもストーリーにもあるのに、
 * どのバレルからも export されていなかった（0.22.0 の `dist/ai.d.ts` に名前が無い）。
 * `check:api` は**変化**しか見ないので、最初から載っていない部品は永久に緑になる。
 * 併せて `check:exports`（`scripts/check-documented-exports.js`）を足した。
 *
 * **題材は `sandbox/recipes/DeployAssistant` と被らせない。** 向こうは
 * 「障害の最中にデスクで会話する席」なので、こちらは**焙煎室で機械の前に立っている
 * 保守の人**にした（`Patterns/Roastery` と同じ Kiyosumi Roasters）。手は塞がっていて
 * 声で聞く、答えは読む、直す前に差分を承認する、という局面。
 *
 * **端末の出力（`DIAG_LINES`）と焙煎プロファイルの YAML は英語のまま置く ── 確定した判断**
 * （2026-08-13・ユーザー確認済み）。CLI の出力と設定ファイルは UI コピーではないので
 * `t()` に載せない（`stories/ai/Terminal` の既存ストーリーと同じ扱い）。
 * **pt / ja に切り替えても `Default` と `Profile` は英語の塊が残るが、それが正しい。**
 * 「多言語化の漏れ」と読んで直さないこと。
 *
 * **ストーリーを 4 つに割ったのは仕事が違うから**で、`Line` を独立させたのは
 * `InteractiveGraph`（React Flow）が **VRT で非決定的**だからでもある ──
 * `fitView` がノードを ResizeObserver で非同期計測してから transform を決めるので、
 * `components-visualization-nodegraph--` は既に prefix ごと除外されている。
 * 同じ理由でこのストーリーも落ちる可能性があり、**落ちるのを実際に見てから**
 * `vrt/vrt.spec.ts` の除外へ足すこと（Set の追加基準）。
 *
 * **ローカルでは 3 回とも緑だった**（Windows / `--update-snapshots` で自ベースラインを
 * 作ってから compare を 3 回、8 本すべて pass・flaky 0）。ただし **CI は Linux で
 * 描画も負荷も違い、この repo には「ローカルで 2 回通ったのを安定の証拠と読んで
 * 誤った」実績がある**（`components-media-video--rounded` のコメント）。
 * したがってこれは**除外しない根拠**であって、**除外が要らない証明ではない**。
 * CI で落ちたらそのときに足すこと。
 */
const meta = {
  title: "Patterns/RoasterService",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_recipes:roasterCare.${k}`;

/**
 * 口述の音量。**明示的に渡して idle アニメーションを止める**（`data` を省くと
 * `isActive` の間ずっと CSS アニメーションが回り、VRT が撮る位相が定まらない）。
 *
 * **点数は幅から決める。** waveform は `preserveAspectRatio="none"` で横に伸びるので、
 * 24 点だとページ幅では折れ線 1 本に見える（実測で 1346px に 24 点＝1 点 56px）。
 * 一息分の発話として 72 点にした。値は「立ち上がりが急で語尾に向かって落ちる」形で、
 * 途中に息継ぎの谷を 2 つ入れてある（等間隔にしない）。
 */
const SPOKEN_LEVELS = [
  0.08, 0.22, 0.51, 0.74, 0.63, 0.81, 0.69, 0.77, 0.58, 0.66, 0.72, 0.49, 0.61,
  0.7, 0.55, 0.42, 0.31, 0.18, 0.11, 0.09, 0.14, 0.26, 0.48, 0.67, 0.79, 0.71,
  0.83, 0.68, 0.59, 0.73, 0.64, 0.52, 0.61, 0.57, 0.44, 0.36, 0.29, 0.21, 0.13,
  0.1, 0.16, 0.33, 0.55, 0.7, 0.62, 0.76, 0.65, 0.71, 0.54, 0.6, 0.47, 0.58,
  0.5, 0.41, 0.46, 0.38, 0.34, 0.43, 0.37, 0.3, 0.35, 0.28, 0.24, 0.32, 0.26,
  0.2, 0.23, 0.17, 0.19, 0.13, 0.11, 0.07,
];

/**
 * コントローラに繋いだ診断ツールの出力。**CLI の出力は UI コピーではない**ので
 * `t()` に載せない（`stories/ai/Terminal` の既存ストーリーと同じ扱い）。
 * 排気だけが目標から離れていて、チャフセンサは 05:41 から黙っている。
 */
const DIAG_LINES: TerminalLine[] = [
  {
    id: "cmd",
    type: "input",
    content: "roastctl diag --machine R-2 --last 40m",
  },
  {
    id: "read",
    type: "output",
    content: "reading 2,418 samples from controller ... ok",
  },
  {
    id: "exh",
    type: "output",
    content: "exhaust   \x1b[33m214.6C\x1b[0m   target 196.0C   (+18.6)",
  },
  {
    id: "drum",
    type: "output",
    content: "drum      198.2C   target 197.5C   (+0.7)",
  },
  {
    id: "chaff",
    type: "error",
    content: "chaff sensor: no reading since 05:41",
  },
  {
    id: "air",
    type: "output",
    content:
      "airflow   damper \x1b[32m4/10\x1b[0m   fan \x1b[31m71%\x1b[0m of nominal",
  },
  {
    id: "svc",
    type: "info",
    content: "212 batches since collector service (2026-07-29, interval 150)",
  },
];

/**
 * 焙煎室から。**主役はテーマで入れ替わる** ── light では端末（地が
 * `rgb(229,229,229)` なので暗い面が唯一の高コントラスト帯になり、視線が先に落ちる）、
 * dark では答えの本文。両方スクショで確認した。
 *
 * 最初は「主役は答え」と書いていたが、light の実物では視線が先に端末へ行くので
 * 主張のほうを直した（CLAUDE.md の「合成画面の視覚判定を自己申告しない」）。
 * **どちらのテーマでも読み順は同じ**（言ったこと → 答え → 根拠 → まだ聞いている）
 * なので、起点が入れ替わっても画面は破綻しない。
 */
export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      /* 読むための幅に畳む。1920px の面にそのまま流すと本文の 1 行が 1,160px に
         なり、答えも端末も読めない。数値を書かずに測りを決める手段が
         `Container`（size="md" = 960px）。既存の Patterns がインライン style の
         最大幅で同じことをしているのが、`check:slop` の px ラチェット 47 件の中身。
         （書いている最中、このコメントに禁止例を引用したら 47 → 48 で赤くなった ──
         ガードが**ブロックコメントの 2 行目以降を素通り**していたため。T161 で直した。） */
      <Box p="2xl">
        <Container size="md">
          <Stack gap="xl">
            <Group justify="between" align="start" wrap="wrap" gap="md">
              <Stack gap="2xs">
                <Title tag="h1" size="md">
                  {t(ns("live_title"))}
                </Title>
                <Text size="xs" color="text-tertiary">
                  {t(ns("live_meta"))}
                </Text>
              </Stack>
              {/* 「普通の値」ではないので intent は warning。既定の primary に
                落とすと、ここが画面唯一のアクセントになって答えより目立つ。 */}
              <Badge intent="warning">{t(ns("live_state"))}</Badge>
            </Group>

            {/* 言ったことが先、答えが後 ── 声の UI の並びは時系列。 */}
            <Text size="sm" color="text-secondary">
              {t(ns("live_spoken"))}
            </Text>

            <StreamingText content={t(ns("live_answer"))} isStreaming />

            <Terminal
              lines={DIAG_LINES}
              /* 端末のウィンドウ名（プロセス名）。翻訳対象の UI コピーではない
               ── `check-stories-hardcoded` も小文字 1 語は語ではなく識別子として扱う。 */
              title="roastctl"
              /* `height` は渡さない ── 既定は「内容に合わせて伸びる」で、
               220px と書くと 7 行の下に理由の無い空きができる。 */
            />

            {/*
            マイクの帯。**画面の下端に横いっぱい**で置く（声の UI の入力はそこにある）。
            隣に文字を置いて横並びにするのは誤り ── `width: 100%` の SVG が flex の
            残り幅を全部取り、書き起こしが右端に押し出される（実測: 1346px 対 テキスト）。
            `aria-hidden` の装飾なので、読み上げに要る情報は上の書き起こしが持つ。
            `height` は既定（40px）に任せる＝数値を書かない。
          */}
            <Stack gap="2xs">
              <VoiceVisualizer mode="waveform" data={SPOKEN_LEVELS} />
              <Text size="xs" color="text-tertiary">
                {t(ns("live_listening"))}
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  },
};

/**
 * 手順書。**主役は横から開いた点検票**（`ArtifactsOverlay`）で、背後の手順は
 * 文脈として残る ── これがこの部品の存在理由（会話や作業を失わずに長い成果物を読む）。
 * 初期状態を開いた側にしてあるのは、閉じた画面では VRT が主役を撮れないため。
 */
export const Procedure: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(true);

    return (
      <Box p="2xl">
        <Container size="md">
          <Stack gap="xl">
            <Group justify="between" align="start" wrap="wrap" gap="md">
              <Stack gap="2xs">
                <Title tag="h1" size="md">
                  {t(ns("proc_title"))}
                </Title>
                <Text size="xs" color="text-tertiary">
                  {t(ns("proc_meta"))}
                </Text>
              </Stack>
              <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                {t(ns("proc_open"))}
              </Button>
            </Group>

            {/*
              ページ見出しは `md`。`baseLevel="md"` で markdown の `#` が同じ段、
              `##` が `sm` になる。既定の `2xl` のままだと `##` がページ見出しを上回る（T160）。
            */}
            <MarkdownRenderer content={t(ns("proc_body"))} baseLevel="md" />

            <ArtifactsOverlay
              open={open}
              onOpenChange={setOpen}
              title={t(ns("record_title"))}
              subtitle={t(ns("record_subtitle"))}
              showFullscreenToggle
            >
              {/* パネル見出し（ArtifactsOverlay の title）は `font-size-lg`。
                  `baseLevel="md"` なら `###` が `xs` で、パネル見出しを上回らない。 */}
              <MarkdownRenderer content={t(ns("record_body"))} baseLevel="md" />
            </ArtifactsOverlay>
          </Stack>
        </Container>
      </Box>
    );
  },
};

/**
 * 焙煎プロファイルの変更を承認する席。**主役は差分**。
 * `CodeDiffViewer` は 640px を切ると自分で unified へ落ちるので、狭幅の手当ては要らない。
 */
export const Profile: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [applied, setApplied] = useState(false);

    return (
      <Box p="2xl">
        {/* 読む幅は他の 2 枚より広く取る（`lg` = 1140px）。split の 2 面が
            それぞれ 570px 必要で、`md` まで畳むと自動で unified に落ちる。 */}
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("profile_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("profile_meta"))}
              </Text>
            </Stack>

            <Text size="sm" color="text-secondary">
              {t(ns("profile_note"))}
            </Text>

            <CodeDiffViewer
              filename="profiles/yirgacheffe-l2296.yaml"
              language="yaml"
              before={PROFILE_BEFORE}
              after={PROFILE_AFTER}
              isApplied={applied}
              onApply={() => setApplied(true)}
              onReject={() => setApplied(false)}
            />
          </Stack>
        </Container>
      </Box>
    );
  },
};

/* 焙煎プロファイル。CLI が読む設定ファイルなので英語のまま（UI コピーではない）。 */
const PROFILE_BEFORE = `name: Yirgacheffe L-2296
charge_temp: 196.0
damper:
  soak: 3
  maillard: 4
  development: 4
ror_target:
  - [0, 22.0]
  - [4, 12.5]
  - [8, 6.0]
drop:
  temp: 208.5
  time: "10:40"
`;

const PROFILE_AFTER = `name: Yirgacheffe L-2296
charge_temp: 196.0
damper:
  soak: 3
  maillard: 4
  # collector serviced 2026-08-13 — airflow back to nominal
  development: 5
ror_target:
  - [0, 22.0]
  - [4, 12.5]
  - [8, 5.2]
drop:
  temp: 208.5
  time: "10:05"
`;

/**
 * 設備の系統。**主役はグラフ**で、読み取ってほしいのは「冷却も脱石も、
 * 焙煎機 2 台と同じ排気ファン 1 台にぶら下がっている」こと ── R-2 だけの
 * 話に見えていたものが、実は共有部の話だと分かる図。
 *
 * ノードは既定の見た目のまま。**色で状態を塗り分けない**（意味を運ぶ色は
 * success / warning / danger に限る、が画面ごとの原則で、系統図の 8 節点を
 * 色分けすると虹色配色になる）。異常は節点のラベルが持つ。
 */
export const Line: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const nodes = [
      {
        id: "silo",
        position: { x: 0, y: 120 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_silo")) },
      },
      {
        id: "r1",
        position: { x: 200, y: 40 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_r1")) },
      },
      {
        id: "r2",
        position: { x: 200, y: 200 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_r2")) },
      },
      {
        id: "cooling",
        position: { x: 400, y: 40 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_cooling")) },
      },
      {
        id: "cyclone",
        position: { x: 400, y: 200 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_cyclone")) },
      },
      {
        id: "destoner",
        position: { x: 600, y: 40 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_destoner")) },
      },
      {
        id: "fan",
        position: { x: 600, y: 200 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_fan")) },
      },
      {
        id: "pack",
        position: { x: 800, y: 120 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: t(ns("node_pack")) },
      },
    ];

    /* 豆の流れは実線、排気は `animated`（同じ線種で 2 つの意味を運ばない）。 */
    const edges = [
      { id: "silo-r1", source: "silo", target: "r1" },
      { id: "silo-r2", source: "silo", target: "r2" },
      { id: "r1-cooling", source: "r1", target: "cooling" },
      { id: "r2-cooling", source: "r2", target: "cooling" },
      { id: "cooling-destoner", source: "cooling", target: "destoner" },
      { id: "destoner-pack", source: "destoner", target: "pack" },
      { id: "r1-cyclone", source: "r1", target: "cyclone", animated: true },
      { id: "r2-cyclone", source: "r2", target: "cyclone", animated: true },
      { id: "cyclone-fan", source: "cyclone", target: "fan", animated: true },
      { id: "cooling-fan", source: "cooling", target: "fan", animated: true },
    ];

    return (
      <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="2xs">
            <Title tag="h1" size="sm">
              {t(ns("line_title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("line_meta"))}
            </Text>
          </Stack>

          <InteractiveGraph
            nodes={nodes}
            edges={edges}
            height={420}
            showMiniMap={false}
          />
        </Stack>
      </Box>
    );
  },
};
