import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Avatar,
  Badge,
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
  Box,
  Button,
  ChatContainer,
  ChatInput,
  ChatMessage,
  ChatMessageList,
  CodeBlock,
  Countdown,
  EmptyState,
  Flex,
  Icon,
  IconButton,
  PullToRefresh,
  Stack,
  SwipeAction,
  TabBar,
  Tag,
  Text,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineSeparator,
  Title,
} from "wimui";

const meta: Meta = {
  title: "Patterns/OnCall",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

/**
 * 深夜に呼ばれた当直エンジニアが、スマホだけで一次対応する画面（T32 の 4 枚目）。
 *
 * **端末幅を画面側で固定している。** VRT は 1280px の Desktop Chrome で撮るため、
 * 流動レイアウトのまま置くと「モバイル前提の姿」は誰にも見張られない。ここで
 * 幅を固定すると、狭幅の回帰がスナップショットに出る。
 */
export const IncidentTriage: StoryObj = {
  render: function Render() {
    const { t } = useTranslation([...ALL_NAMESPACES, "docs_stories_recipes"]);
    const r = (key: string) => t(`docs_stories_recipes:oncall.${key}`);

    const [refreshing, setRefreshing] = useState(false);
    const [acked, setAcked] = useState<string[]>(["queue"]);
    const [snoozed, setSnoozed] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState("oncall");

    // Priya が貼ったコマンド。コードなので翻訳しない。
    const inspectCommand = "kubectl -n checkout get pods -l app=checkout-api -o wide";

    const alerts = [
      { id: "latency", name: r("a_latency"), meta: r("a_latency_meta") },
      { id: "5xx", name: r("a_5xx"), meta: r("a_5xx_meta") },
      // 名前が長く、担当も付いていない行。幸せパスだけにしないための 1 行。
      { id: "redis", name: r("a_redis"), meta: r("a_redis_meta"), unassigned: true },
      { id: "queue", name: r("a_queue"), meta: r("a_queue_meta") },
    ].filter((a) => !snoozed.includes(a.id));

    const handleRefresh = async () => {
      setRefreshing(true);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setRefreshing(false);
    };

    return (
      <div className="oncall-stage">
        <style>{`
          .oncall-stage {
            display: flex;
            justify-content: center;
            padding: var(--wim-spacing-2xl) var(--wim-spacing-lg);
            background: var(--wim-color-surface-app);
          }

          .oncall-frame {
            /* 端末の論理幅。390px は spacing でも width トークンでもなく、
               メディアクエリのブレークポイントと同じ「トークン化する対象が
               存在しない実寸」。ここを固定しないと、この画面は 1280px の
               姿でしか撮られない。 */
            inline-size: 390px;
            max-inline-size: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background: var(--wim-color-surface);
            border: var(--wim-border-width-thin) solid var(--wim-color-border);
            border-radius: var(--wim-radius-container);
          }

          /* 一覧は行間を詰め、区切りは線 1 本だけに任せる（見せ場は疎・データは密）。 */
          .oncall-alert-row {
            display: flex;
            gap: var(--wim-spacing-md);
            align-items: flex-start;
            padding: var(--wim-spacing-md) var(--wim-spacing-2xl);
            background: var(--wim-color-surface);
            border-top: var(--wim-border-width-thin) solid var(--wim-color-border-secondary);
          }

          .oncall-alert-dot {
            flex-shrink: 0;
            inline-size: var(--wim-spacing-sm);
            block-size: var(--wim-spacing-sm);
            margin-block-start: var(--wim-spacing-2xs);
            background: var(--wim-color-danger);
            border-radius: var(--wim-radius-full);
          }

          .oncall-alert-dot[data-quiet="true"] {
            background: var(--wim-color-text-tertiary);
          }
        `}</style>

        <div className="oncall-frame">
          {/* クローム。中身より声量を下げる（primary の面は置かない）。
              `Flex` は padding の prop を持たないので、余白は包む `Box` が持つ。
              左右とも他のセクションと同じ 16px。**`IconButton` はグリフが箱の
              8.9px 内側に入る**（実測）ので、グリフの見た目の位置は 26px ＝
              見出しの列（17px）より 9px 内側になる。数値を揃えることを優先した。
              上は左右と同じ 16px にして、枠の角丸から中身を離す。下だけ 8px
              なのは、すぐ下に見出しブロックの余白が続くため。 */}
          <Box pt="2xl" px="2xl" pb="md">
            <Flex align="center" justify="between" gap="sm">
              <Flex align="center" gap="2xs">
                <IconButton
                  variant="ghost"
                  size="sm"
                  aria-label={r("nav_back")}
                  iconName="ChevronLeftIcon"
                />
                <Text size="sm" color="text-secondary">
                  {r("incident_ref")}
                </Text>
              </Flex>
              <Badge content={r("sev")} intent="danger" variant="subtle" size="sm" />
            </Flex>
          </Box>

          {/* 主役。ここだけ声量を上げ、画面唯一の primary の面を置く。 */}
          <Stack gap="lg" px="2xl" pt="sm" pb="2xl">
            <Title tag="h1" size="lg">
              {r("title")}
            </Title>
            <Text size="sm" color="text-secondary">
              {r("paged_at")}
            </Text>
            <Text size="sm">{r("impact")}</Text>
            <Flex align="center" gap="sm" wrap="wrap">
              <Icon name="HourglassIcon" size="sm" color="danger" />
              <Text size="sm" color="text-secondary">
                {r("escalate_prefix")}
              </Text>
              {/* baseDate を渡して止める。渡さないと 1 秒ごとに絵が変わり、
                 VRT が撮る瞬間で結果が決まってしまう。 */}
              <Countdown
                target="2026-03-14T04:02:00Z"
                baseDate="2026-03-14T03:44:19Z"
                variant="digital"
                size="md"
              />
            </Flex>
            <Button variant="solid" fullWidth>
              {r("take")}
            </Button>
          </Stack>

          <Box px="2xl" pb="sm">
            <Flex align="baseline" justify="between" gap="sm">
              <Title tag="h2" size="xs">
                {r("alerts_title")}
              </Title>
              <Text size="xs" color="text-secondary" nowrap>
                {t("docs_stories_recipes:oncall.alerts_count", { n: alerts.length })}
              </Text>
            </Flex>
            <Text size="xs" color="text-tertiary">
              {r("refresh_hint")}
            </Text>
          </Box>

          <PullToRefresh onRefresh={handleRefresh} refreshing={refreshing}>
            {/* 空はスワイプで 4 件ともスヌーズすれば実際に到達する。空のときに
                何も描かないと「読み込み中なのか、無いのか」が区別できない。 */}
            {alerts.length === 0 && (
              <Box px="2xl" py="2xl">
                <EmptyState
                  variant="simple"
                  icon={<Icon name="CheckCircleIcon" size="lg" color="success" />}
                  title={r("empty_title")}
                  description={r("empty_desc")}
                  extra={
                    <Button variant="ghost" size="sm" onClick={() => setSnoozed([])}>
                      {r("empty_action")}
                    </Button>
                  }
                />
              </Box>
            )}
            {alerts.map((alert) => (
              <SwipeAction
                key={alert.id}
                leftActions={[
                  {
                    icon: "CheckIcon",
                    label: r("act_ack"),
                    intent: "success",
                    onClick: () => setAcked((prev) => [...prev, alert.id]),
                  },
                ]}
                rightActions={[
                  {
                    icon: "ClockIcon",
                    label: r("act_snooze"),
                    intent: "neutral",
                    onClick: () => setSnoozed((prev) => [...prev, alert.id]),
                  },
                ]}
              >
                <div className="oncall-alert-row">
                  <span
                    className="oncall-alert-dot"
                    data-quiet={acked.includes(alert.id)}
                    aria-hidden="true"
                  />
                  <Stack gap="3xs" style={{ flex: 1, minWidth: 0 }}>
                    <Text size="sm" weight="medium">
                      {alert.name}
                    </Text>
                    <Flex align="center" gap="sm" wrap="wrap">
                      <Text size="xs" color="text-secondary">
                        {alert.meta}
                      </Text>
                      {alert.unassigned && (
                        <Tag content={r("unassigned")} intent="neutral" variant="subtle" size="sm" />
                      )}
                      {acked.includes(alert.id) && (
                        <Tag content={r("acked_by")} intent="success" variant="subtle" size="sm" />
                      )}
                    </Flex>
                  </Stack>
                </div>
              </SwipeAction>
            ))}
          </PullToRefresh>

          <Box px="2xl" pt="2xl" pb="sm">
            <Title tag="h2" size="xs">
              {r("timeline_title")}
            </Title>
          </Box>
          {/* Timeline の item は `min-height: 70.4px`（実測）を持つので、最後の
              行は内容 44px + 余り 26px になる。下の余白はそのぶん引く。 */}
          <Box px="2xl" pb="md">
            <Timeline>
              {[
                { time: r("t1_time"), text: r("t1"), intent: "neutral" as const },
                { time: r("t2_time"), text: r("t2"), intent: "danger" as const },
                { time: r("t3_time"), text: r("t3"), intent: "neutral" as const },
                { time: r("t4_time"), text: r("t4"), intent: "neutral" as const, last: true },
              ].map((event) => (
                <TimelineItem key={event.time}>
                  <TimelineSeparator>
                    <TimelinePoint intent={event.intent} />
                    {!event.last && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack gap="3xs">
                      <Text size="xs" color="text-secondary">
                        {event.time}
                      </Text>
                      <Text size="sm">{event.text}</Text>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>

          <Box px="2xl" pb="sm">
            <Title tag="h2" size="xs">
              {r("warroom_title")}
            </Title>
          </Box>
          <Box px="2xl" pb="2xl">
            {/* ChatContainer 自身が枠と角丸を持つので Card では包まない。 */}
            <ChatContainer>
              <ChatMessageList>
                <ChatMessage
                  position="left"
                  senderName={r("sender_priya")}
                  timestamp="03:41"
                  avatar={<Avatar size="sm" initials="PR" intent="info" />}
                >
                  <Text size="sm">{r("msg_priya")}</Text>
                  <Box mt="sm">
                    <CodeBlock code={inspectCommand} language="bash" />
                  </Box>
                </ChatMessage>
                <ChatMessage
                  position="right"
                  senderName={r("sender_you")}
                  timestamp="03:43"
                  avatar={<Avatar size="sm" initials="ME" intent="neutral" />}
                >
                  <Text size="sm">{r("msg_you")}</Text>
                </ChatMessage>
              </ChatMessageList>
              <ChatInput placeholder={r("chat_placeholder")} />
            </ChatContainer>
          </Box>

          <Box px="2xl" pb="2xl">
            <BottomSheet>
              <BottomSheetTrigger asChild>
                <Button
                  variant="outline"
                  fullWidth
                  icon={<Icon name="DocumentIcon" size="sm" />}
                  iconPosition="left"
                >
                  {r("runbook_open")}
                </Button>
              </BottomSheetTrigger>
              <BottomSheetContent>
                <BottomSheetHeader>
                  <BottomSheetTitle>{r("runbook_title")}</BottomSheetTitle>
                  <BottomSheetDescription>{r("runbook_desc")}</BottomSheetDescription>
                </BottomSheetHeader>
                <BottomSheetBody>
                  <Stack gap="md">
                    <Text size="sm">{r("runbook_step_1")}</Text>
                    <Text size="sm">{r("runbook_step_2")}</Text>
                    <Text size="sm">{r("runbook_step_3")}</Text>
                  </Stack>
                </BottomSheetBody>
                <BottomSheetFooter>
                  <BottomSheetClose asChild>
                    <Button variant="ghost">{r("runbook_close")}</Button>
                  </BottomSheetClose>
                </BottomSheetFooter>
              </BottomSheetContent>
            </BottomSheet>
          </Box>

          {/* `fixed` の既定は `true` で、`position: fixed; left: 0` + `width: 100%`
              ＝ビューポートに貼り付く。実測: 既定のままだとこの枠から右へ **445px**
              はみ出し、1280px のページ下端に伸びていた。枠の中に置く画面では
              明示的に降ろす。 */}
          <TabBar bordered fixed={false}>
            <TabBar.Item
              active={activeTab === "oncall"}
              onClick={() => setActiveTab("oncall")}
              icon={<Icon name="BellIcon" />}
              label={r("tab_oncall")}
            />
            <TabBar.Item
              active={activeTab === "alerts"}
              onClick={() => setActiveTab("alerts")}
              icon={<Icon name="AlertCircleIcon" />}
              label={r("tab_alerts")}
              // 0 件のときにバッジを出すと「0 という報せ」になる。件数が無いことは
              // 数字ではなく不在で伝える。
              badge={alerts.length > 0 ? String(alerts.length) : undefined}
            />
            <TabBar.Item
              active={activeTab === "runbooks"}
              onClick={() => setActiveTab("runbooks")}
              icon={<Icon name="DocumentIcon" />}
              label={r("tab_runbooks")}
            />
            <TabBar.Item
              active={activeTab === "you"}
              onClick={() => setActiveTab("you")}
              icon={<Icon name="UserIcon" />}
              label={r("tab_you")}
            />
          </TabBar>
        </div>
      </div>
    );
  },
};
