import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portal } from "@/components/Portal/Portal";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { Card } from "@/components/Card/Card";
import { Stack } from "@/components/Stack/Stack";
import { Textarea } from "@/components/Textarea/Textarea";
import { Badge } from "@/components/Badge/Badge";
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
    const { t } = useTranslation();
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "200px",
          border: "2px dashed #999",
          padding: "20px",
          position: "relative",
          overflow: "hidden", // これにより、通常の子要素はここからはみ出せない
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
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
            <div
              style={{
                position: "fixed",
                bottom: "40px",
                right: "40px",
                width: "280px",
                maxWidth: "calc(100vw - 80px)",
                backgroundColor: "#333",
                color: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                zIndex: 10000,
                border: "1px solid #444",
                animation: "popUp 0.3s ease-out",
              }}
            >
              <style>{`
                                @keyframes popUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            `}</style>
              <h4 style={{ margin: "0 0 8px 0", color: "#60a5fa" }}>
                {t("story_portal_power_title")}
              </h4>
              <p
                style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}
                dangerouslySetInnerHTML={{ __html: t("story_portal_power_desc") }}
              />
              <div style={{ marginTop: "12px", textAlign: "right" }}>
                <Button
                  size="small"
                  label={t("story_portal_btn_ok")}
                  onClick={() => setShow(false)}
                />
              </div>
            </div>
          </Portal>
        )}
      </div>
    );
  },
};

/**
 * 特定の DOM 要素へのレンダリング例
 */
export const CustomContainer: Story = {
  render: function Render() {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const { t } = useTranslation();
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <p>{t("story_portal_container_desc")}</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h4>{t("story_portal_source_title")}</h4>
            <p style={{ fontSize: "12px", color: "#666" }}>
              {t("story_portal_source_desc")}
            </p>
            <Portal container={container}>
              <div
                style={{
                  padding: "10px",
                  background: "#dcfce7",
                  border: "1px solid #166534",
                  color: "#166534",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Icon
                  name="CheckCircleIcon"
                  style={{ width: "20px", height: "20px" }}
                />
                {t("story_portal_sent_success")}
              </div>
            </Portal>
          </div>

          <div
            ref={setContainer}
            style={{
              flex: "1 1 200px",
              padding: "20px",
              border: "2px solid #3b82f6",
              borderRadius: "8px",
              background: "#eff6ff",
              minHeight: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* ここに Portal の中身が表示される */}
            {!container && (
              <span style={{ color: "#3b82f6" }}>{t("story_portal_loading")}</span>
            )}
          </div>
        </div>
      </div>
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
    const { t } = useTranslation();

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
              <Badge
                content={active ? t("story_portal_active") : t("story_portal_inactive")}
                color={active ? "success" : "neutral"}
                size="small"
              />
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
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <style>{`
                    .notification-grid {
                        display: grid;
                        grid-template-columns: 1fr 300px;
                        gap: 24px;
                    }
                    .sender-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                    }
                    @media (max-width: 768px) {
                        .notification-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                    @media (max-width: 480px) {
                        .sender-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
        <div className="notification-grid">
          <Stack gap="md">
            <h4>{t("story_portal_panel_title")}</h4>
            <p style={{ fontSize: "14px", color: "#666" }}>
              {t("story_portal_panel_desc")}
            </p>
            <div className="sender-grid">
              <SenderComponent name="A" displayName={t("story_portal_sensor_a")} color="#ecfdf5" />
              <SenderComponent name="B" displayName={t("story_portal_sensor_b")} color="#eff6ff" />
              <SenderComponent name="C" displayName={t("story_portal_camera")} color="#fff7ed" />
              <SenderComponent name="D" displayName={t("story_portal_alarm")} color="#fef2f2" />
            </div>
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
              <div
                ref={setLogContainer}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #334155",
                  paddingBottom: "16px",
                }}
              >
                {/* ここに Portal からの「稼働中メッセージ」が表示される */}
              </div>
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
        </div>
      </div>
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
    const { t } = useTranslation();

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

                <Stack gap="xs">
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
      <div style={{ width: "100%", maxWidth: "850px" }}>
        <style>{`
                    .portal-demo-card {
                        width: 100%;
                        height: 550px;
                        display: flex;
                        flex-direction: row;
                        overflow: hidden;
                    }
                    .portal-demo-sidebar {
                        flex: 0 0 350px;
                        border-right: 1px solid #e2e8f0;
                        display: flex;
                        flex-direction: column;
                        background: #fcfcfd;
                    }
                    .portal-demo-content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        min-width: 0;
                    }
                    @media (max-width: 600px) {
                        .portal-demo-card {
                            flex-direction: column;
                            height: auto;
                            min-height: 800px;
                        }
                        .portal-demo-sidebar {
                            flex: 0 0 auto;
                            border-right: none;
                            border-bottom: 1px solid #e2e8f0;
                            max-height: 350px;
                        }
                        .portal-demo-content {
                            height: 500px;
                        }
                    }
                `}</style>
        <Card variant="outline" padding="none" className="portal-demo-card">
          <div className="portal-demo-sidebar">
            <div style={{ padding: "20px", borderBottom: "1px solid #e2e8f0" }}>
              <h4 style={{ margin: 0 }}>{t("story_portal_task_mgmt")}</h4>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  isSelected={selectedId === task.id}
                  onSelect={setSelectedId}
                  container={panelContainer}
                />
              ))}
            </div>
          </div>

          <div className="portal-demo-content">
            <div
              style={{
                padding: "20px",
                borderBottom: "1px solid #e2e8f0",
                background: "#f8fafc",
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
            </div>
            <div
              ref={setPanelContainer}
              style={{
                flex: 1,
                padding: "30px",
                overflowY: "auto",
                position: "relative",
              }}
            >
              {!selectedId && (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    textAlign: "center",
                  }}
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
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  },
};
