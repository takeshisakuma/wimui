import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  ArtifactsOverlay,
  Button,
  CalendarHeatmap,
  ChatAvatar,
  ChatContainer,
  ChatInput,
  ChatMessage,
  ChatMessageList,
  JsonViewer,
  Leaderboard,
  Text,
  Title,
} from "wimui";
import { InteractiveGraph } from "wimui/ai/interactive-graph";
import { PieChart } from "wimui/charts";
import { JsonDiffViewer } from "wimui/data-display/json-diff-viewer";
import styles from "./probe.module.scss";

/**
 * T180 のプローブ。西荻窪の古本市。
 * Days = `CalendarHeatmap` / `Leaderboard` / `PieChart`。
 * Slip = `JsonViewer` / `JsonDiffViewer`。
 * Desk = `ChatUI` / `ArtifactsOverlay` / `InteractiveGraph`。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/NishiogiFair",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:ogi.${k}`;

const MARKETS: { date: string; count: number }[] = [
  { date: "2026-01-11", count: 8 },
  { date: "2026-01-25", count: 4 },
  { date: "2026-03-08", count: 11 },
  { date: "2026-03-22", count: 6 },
  { date: "2026-04-12", count: 9 },
  { date: "2026-04-19", count: 14 },
  { date: "2026-04-26", count: 7 },
  { date: "2026-05-03", count: 22 },
  { date: "2026-06-07", count: 5 },
  { date: "2026-06-21", count: 13 },
  { date: "2026-07-05", count: 3 },
  { date: "2026-07-19", count: 16 },
  { date: "2026-07-26", count: 8 },
  { date: "2026-08-02", count: 10 },
  { date: "2026-08-09", count: 7 },
  { date: "2026-08-16", count: 14 },
];

export const Days: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Title tag="h1" size="lg">
              {t(ns("days_title"))}
            </Title>
            <Text size="sm" color="secondary">
              {t(ns("days_line"))}
            </Text>
          </div>
          <div role="region" aria-label={t(ns("days"))}>
            <CalendarHeatmap data={MARKETS} year={2026} />
          </div>
          <div className={styles.below}>
            <div className={styles.board}>
              <Text size="sm" color="secondary">
                {t(ns("sold"))}
              </Text>
              <Leaderboard
                unit={t(ns("copies"))}
                entries={[
                  { id: "patel", name: t(ns("who_patel")), score: 47, highlight: true },
                  { id: "horiuchi", name: t(ns("who_horiuchi")), score: 31 },
                  { id: "miyake", name: t(ns("who_miyake")), score: 12 },
                  { id: "awning", name: t(ns("who_awning")), score: 4 },
                  { id: "okuda", name: t(ns("who_okuda")), score: 4 },
                ]}
              />
            </div>
            <div className={styles.leftover}>
              <Text size="sm" color="secondary">
                {t(ns("left"))}
              </Text>
              <PieChart
                data={[
                  { name: t(ns("paperbacks")), value: 18 },
                  { name: t(ns("zines")), value: 7 },
                  { name: t(ns("damaged")), value: 2 },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Slip: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const lastWeek = {
      isbn: "978-4-16-711012-3",
      title: t(ns("last_title")),
      author: t(ns("who_miyake")),
      price: 480,
      shelf: "B-3",
      note: "",
    };
    const [today, setToday] = React.useState({
      isbn: "978-4-16-711012-3",
      title: t(ns("slip_title")),
      author: t(ns("who_miyake")),
      price: 300,
      shelf: "B-3",
      note: t(ns("slip_note")),
      sold: false,
    });

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("fair"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("slip_line"))}
            </Text>
          </div>
          <div className={styles.slip}>
            <div className={styles.card}>
              <Text size="sm" color="secondary">
                {t(ns("today_card"))}
              </Text>
              <JsonViewer
                data={today}
                editable
                expandDepth={2}
                onChange={(next) => {
                  if (next && typeof next === "object") {
                    setToday(next as typeof today);
                  }
                }}
              />
            </div>
            <div className={styles.diff}>
              <Text size="sm" color="secondary">
                {t(ns("vs_last"))}
              </Text>
              <JsonDiffViewer
                before={lastWeek}
                after={today}
                filename="miyake-slip.json"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

type Line = { id: string; side: "left" | "right"; text: string };

export const Desk: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = React.useState(true);
    const [lines, setLines] = React.useState<Line[]>([
      { id: "k1", side: "right", text: t(ns("ask")) },
      { id: "d1", side: "left", text: t(ns("reply")) },
    ]);

    const nodes = React.useMemo(
      () => [
        { id: "desk", position: { x: 40, y: 80 }, data: { label: t(ns("n_desk")) } },
        { id: "a1", position: { x: 240, y: 20 }, data: { label: t(ns("n_a1")) } },
        { id: "a2", position: { x: 240, y: 160 }, data: { label: t(ns("n_a2")) } },
        { id: "jazz", position: { x: 460, y: 40 }, data: { label: t(ns("n_jazz")) } },
        {
          id: "mishima",
          position: { x: 460, y: 200 },
          data: { label: t(ns("n_mishima")) },
        },
      ],
      [t],
    );

    const edges = React.useMemo(
      () => [
        { id: "e-desk-a1", source: "desk", target: "a1" },
        { id: "e-desk-a2", source: "desk", target: "a2" },
        { id: "e-a1-jazz", source: "a1", target: "jazz" },
        { id: "e-a2-mishima", source: "a2", target: "mishima" },
      ],
      [],
    );

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("fair"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("desk_line"))}
            </Text>
          </div>
          <div className={styles.desk}>
            <ChatContainer className={styles.chatFill}>
              <ChatMessageList>
                {lines.map((line) =>
                  line.side === "right" ? (
                    <ChatMessage
                      key={line.id}
                      position="right"
                      showAvatar
                      avatar={<ChatAvatar fallback="K" alt={t(ns("kawai"))} />}
                      senderName={t(ns("kawai"))}
                    >
                      {line.text}
                    </ChatMessage>
                  ) : (
                    <ChatMessage
                      key={line.id}
                      position="left"
                      showAvatar
                      avatar={<ChatAvatar fallback="D" alt={t(ns("desk"))} />}
                      senderName={t(ns("desk"))}
                      actions={
                        <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
                          {t(ns("open_map"))}
                        </Button>
                      }
                    >
                      {line.text}
                    </ChatMessage>
                  ),
                )}
              </ChatMessageList>
              <ChatInput
                onSend={(message) => {
                  const text = message.trim();
                  if (!text) return;
                  setLines((prev) => [
                    ...prev,
                    { id: `k-${prev.length}`, side: "right", text },
                    { id: `d-${prev.length}`, side: "left", text: t(ns("still")) },
                  ]);
                }}
              />
            </ChatContainer>
          </div>
        </div>
        <ArtifactsOverlay
          open={open}
          onOpenChange={setOpen}
          title={t(ns("map_title"))}
          subtitle={t(ns("map_sub"))}
          showFullscreenToggle
        >
          <InteractiveGraph nodes={nodes} edges={edges} />
        </ArtifactsOverlay>
      </div>
    );
  },
};
