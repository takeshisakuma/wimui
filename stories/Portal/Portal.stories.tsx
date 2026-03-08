import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portal } from "@/components/Portal/Portal";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { Card } from "@/components/Card/Card";
import { Stack } from "@/components/Stack/Stack";
import { Textarea } from "@/components/Textarea/Textarea";
import { Badge } from "@/components/Badge/Badge";
import { Container } from "@/components/Container/Container";
import { Box } from "@/components/Box/Box";
import { Grid } from "@/components/Grid/Grid";
import { SimpleGrid } from "@/components/SimpleGrid/SimpleGrid";
import { Alert } from "@/components/Alert/Alert";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Portal> = {
  title: "Components/Utilities/Portal",
  component: Portal,
  parameters: {
    layout: "centered",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * overflow: hidden な親要素を突き抜ける例
 */
export const OverflowEscape: Story = {
  render: function Render() {
    const [show, setShow] = useState(false);
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Card
        variant="outline"
        padding="lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "250px",
          padding: "32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Card.Body
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <p
              dangerouslySetInnerHTML={{
                __html: t("story_portal_desc_overflow"),
              }}
            />
            <p>{t("story_portal_desc_escape")}</p>
          </div>

          <Button
            onClick={() => setShow(!show)}
            label={show ? t("story_portal_btn_hide") : t("story_portal_btn_show")}
            priority="primary"
          />

          {show && (
            <Portal>
              <Card
                variant="elevated"
                padding="lg"
                style={{
                  position: "fixed",
                  bottom: "40px",
                  right: "40px",
                  width: "280px",
                  maxWidth: "calc(100vw - 80px)",
                  zIndex: 10000,
                  animation: "popUp 0.3s ease-out",
                }}
              >
                <style>{`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              `}</style>
                <Stack gap="xs">
                  <h4 style={{ margin: "0 0 8px 0", color: "var(--wim-primary)" }}>
                    {t("story_portal_power_title")}
                  </h4>
                  <p
                    style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}
                    dangerouslySetInnerHTML={{ __html: t("story_portal_power_desc") }}
                  />
                  <Box mt="md" textAlign="right">
                    <Button
                      size="small"
                      label={t("story_portal_btn_ok")}
                      onClick={() => setShow(false)}
                    />
                  </Box>
                </Stack>
              </Card>
            </Portal>
          )}
        </Card.Body>
      </Card>
    );
  },
};

/**
 * 特定の DOM 要素へのレンダリング例
 */
export const CustomContainer: Story = {
  render: function Render() {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Container size="md">
        <p>{t("story_portal_container_desc")}</p>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" style={{ marginTop: "24px" }}>
          <Card variant="outline">
            <Card.Header>
              <strong>{t("story_portal_source_title")}</strong>
            </Card.Header>
            <Card.Body>
              <p style={{ fontSize: "12px" }}>
                {t("story_portal_source_desc")}
              </p>
              <Box mt="md" style={{ display: "flex", justifyContent: "center" }}>
                <Portal container={container}>
                  <Alert
                    variant="success"
                    icon={<Icon name="CheckCircleIcon" />}
                    style={{ width: "fit-content" }}
                  >
                    {t("story_portal_sent_success")}
                  </Alert>
                </Portal>
              </Box>
            </Card.Body>
          </Card>

          <Box
            ref={setContainer}
            bg="var(--wim-neutral-50, #f8fafc)"
            style={{
              border: "2px dashed var(--wim-primary, #3b82f6)",
              minHeight: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            <Box px="md">
              {/* ここに Portal の 中身が表示される */}
              {!container && (
                <Box textAlign="center" color="primary">
                  {t("story_portal_loading")}
                </Box>
              )}
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    );
  },
};

/**
 * 具体的なユースケース 1: 通知センター (ログ出力)
 * ページ内の特定のエリアを「通知受取用」として定義し、様々なコンポーネントから
 * 情報を Portal で送り込む例です。
 */
export const NotificationCenter: Story = {
  render: function Render() {
    const [logContainer, setLogContainer] = useState<HTMLDivElement | null>(
      null,
    );
    const [logs, setLogs] = useState<{ id: string; msg: string; type: any }[]>(
      [],
    );
    const { t } = useTranslation(["docs", "common", "components"]);

    const addLog = (msg: string, type: any = "info") => {
      const id = Math.random().toString(36).slice(2, 9);
      setLogs((prev) => [{ id, msg, type }, ...prev].slice(0, 10));
    };

    const SenderComponent = ({ name, type, color, displayName }: any) => {
      const [active, setActive] = useState(false);
      return (
        <Card variant="outline" padding="sm">
          <Stack gap="xs">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong>{displayName}</strong>
            </div>
            <Button
              size="small"
              priority={active ? "secondary" : "primary"}
              onClick={() => {
                const newState = !active;
                setActive(newState);
                addLog(
                  `${displayName}${newState ? t("story_portal_log_started") : t("story_portal_log_stopped")}`,
                  newState ? "success" : "warning",
                );
              }}
              label={active ? t("story_portal_btn_stop") : t("story_portal_btn_start")}
            />
            {active && (
              <Portal container={logContainer}>
                <div
                  style={{
                    padding: "8px 12px",
                    marginBottom: "8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    background: color,
                    border: "1px solid rgba(0,0,0,0.1)",
                    animation: "slideIn 0.2s ease-out",
                  }}
                >
                  <style>{`@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }`}</style>
                  <strong>[{displayName}]</strong> {t("story_portal_status_desc")}
                </div>
              </Portal>
            )}
          </Stack>
        </Card>
      );
    };

    return (
      <Container size="xl">
        <Grid cols={{ base: 1, md: "1fr 300px" }} gap="xl">
          <Stack gap="md">
            <h4>{t("story_portal_panel_title")}</h4>
            <p style={{ fontSize: "14px", color: "#666" }}>
              {t("story_portal_panel_desc")}
            </p>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <SenderComponent name="A" displayName={t("story_portal_sensor_a")} color="#ecfdf5" />
              <SenderComponent name="B" displayName={t("story_portal_sensor_b")} color="#eff6ff" />
              <SenderComponent name="C" displayName={t("story_portal_camera")} color="#fff7ed" />
              <SenderComponent name="D" displayName={t("story_portal_alarm")} color="#fef2f2" />
            </SimpleGrid>
          </Stack>

          <Card
            variant="flat"
            style={{
              background: "#1e293b",
              color: "#f8fafc",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card.Header
              style={{ borderBottom: "1px solid #334155", color: "#94a3b8" }}
            >
              <Stack direction="row" justify="between" align="center">
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {t("story_portal_monitor_title")}
                </span>
                <Badge content={t("story_portal_monitor_live")} color="error" size="small" />
              </Stack>
            </Card.Header>
            <Card.Body style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
              <Box
                ref={setLogContainer}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #334155",
                  paddingBottom: "16px",
                  minHeight: "20px",
                }}
              >
                {/* ここに Portal からの「稼働中メッセージ」が表示される */}
              </Box>
              <div style={{ fontSize: "11px", fontFamily: "monospace" }}>
                <div style={{ color: "#64748b", marginBottom: "8px" }}>
                  {t("story_portal_history_title")}
                </div>
                {logs.map((log) => (
                  <div
                    key={log.id}
                    style={{
                      marginBottom: "4px",
                      color:
                        log.type === "success"
                           ? "#4ade80"
                          : log.type === "warning"
                             ? "#fbbf24"
                            : "#94a3b8",
                    }}
                  >
                    {`> ${log.msg}`}
                  </div>
                ))}
                {logs.length === 0 && (
                  <div style={{ color: "#475569" }}>{t("story_portal_waiting")}</div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Grid>
      </Container>
    );
  },
};

/**
 * 具体的なユースケース 2: サイドパネル詳細表示
 * 複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が
 * 「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。
 */
export const SidePanelDetail: Story = {
  render: function Render() {
    const [panelContainer, setPanelContainer] = useState<HTMLDivElement | null>(
      null,
    );
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const { t } = useTranslation(["docs", "common", "components"]);

    const tasks = [
      {
        id: 1,
        title: t("story_portal_task1_title"),
        detail: t("story_portal_task1_detail"),
      },
      {
        id: 2,
        title: t("story_portal_task2_title"),
        detail: t("story_portal_task2_detail"),
      },
      {
        id: 3,
        title: t("story_portal_task3_title"),
        detail: t("story_portal_task3_detail"),
      },
    ];

    const TaskItem = ({ task, isSelected, onSelect, container }: any) => {
      const [note, setNote] = useState("");

      return (
        <div
          onClick={() => onSelect(task.id)}
          style={{
            padding: "16px",
            border: "1px solid",
            borderColor: isSelected ? "#3b82f6" : "#e2e8f0",
            marginBottom: "12px",
            cursor: "pointer",
            background: isSelected ? "#eff6ff" : "white",
            borderRadius: "8px",
            transition: "all 0.2s",
          }}
        >
          <Stack direction="row" justify="between" align="center">
            <strong>{task.title}</strong>
            <Icon
              name="ChevronRightIcon"
              style={{ color: isSelected ? "#3b82f6" : "#cbd5e1" }}
            />
          </Stack>

          {isSelected && (
            <Portal container={container}>
              <div style={{ animation: "fadeInUp 0.3s ease-out" }}>
                <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
                <Badge
                  content={`TASK-00${task.id}`}
                  variant="outline"
                  size="small"
                  style={{ marginBottom: "12px" }}
                />
                <h3 style={{ margin: "0 0 16px 0" }}>{task.title}</h3>

                <Card
                  variant="flat"
                  style={{ background: "#f8fafc", marginBottom: "20px" }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#334155",
                    }}
                  >
                    {task.detail}
                  </p>
                </Card>

                <Stack
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "column",
                  }}
                  gap="xs"
                >
                  <label
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      color: "#64748b",
                    }}
                  >
                    {t("story_portal_task_memo")}
                  </label>
                  <Textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={t("story_portal_memo_placeholder")}
                    rows={5}
                    fullWidth
                  />
                  <p style={{ fontSize: "11px", color: "#94a3b8" }}>
                    {t("story_portal_memo_note")}
                  </p>
                </Stack>
              </div>
            </Portal>
          )}
        </div>
      );
    };

    return (
      <Container size="xl">
        <Card variant="outline" padding="none" style={{ overflow: "hidden", height: "100%", minHeight: "550px" }}>
          <style>{`
            @media (min-width: 576px) {
              .sidebar-border { border-right: 1px solid var(--wim-neutral-200, #e2e8f0); border-bottom: none !important; }
            }
            @media (max-width: 575px) {
              .sidebar-border { border-bottom: 1px solid var(--wim-neutral-200, #e2e8f0); border-right: none !important; }
            }
          `}</style>
          <Stack direction={{ base: "column", sm: "row" }} gap="none" align="stretch" style={{ height: "100%", width: "100%" }}>
            {/* Sidebar */}
            <Box
              w={{ base: "100%", sm: 350 }}
              className="sidebar-border"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fcfcfd",
                height: "100%",
              }}
            >
              <Box p="md" style={{ borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)" }}>
                <h4 style={{ margin: 0 }}>{t("story_portal_task_mgmt")}</h4>
              </Box>
              <Box p="md" style={{ flex: 1, overflowY: "auto" }}>
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    isSelected={selectedId === task.id}
                    onSelect={setSelectedId}
                    container={panelContainer}
                  />
                ))}
              </Box>
            </Box>

            {/* Content Area */}
            <Box style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
              <Box
                p="md"
                bg="var(--wim-neutral-50, #f8fafc)"
                style={{
                  borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#64748b",
                  }}
                >
                  {t("story_portal_preview_title")}
                </span>
                {selectedId && (
                  <Button
                    size="small"
                    label={t("story_visuallyhidden_close")}
                    priority="secondary"
                    onClick={() => setSelectedId(null)}
                  />
                )}
              </Box>
              <Box
                ref={setPanelContainer}
                p="xl"
                style={{
                  flex: 1,
                  overflowY: "auto",
                  position: "relative",
                  minHeight: "400px"
                }}
              >
                {!selectedId && (
                  <Stack
                    align="center"
                    justify="center"
                    style={{ height: "100%", color: "#94a3b8", textAlign: "center" }}
                  >
                    <Icon
                      name="InfoCircleIcon"
                      style={{
                        width: "48px",
                        height: "48px",
                        marginBottom: "12px",
                        opacity: 0.5,
                      }}
                    />
                    <p>{t("story_portal_select_task")}</p>
                  </Stack>
                )}
              </Box>
            </Box>
          </Stack>
        </Card>
      </Container>
    );
  },
};
