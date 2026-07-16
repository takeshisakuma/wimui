import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Box,
  Button,
  Card,
  ChatInput,
  ChatMessage,
  ChatMessageList,
  CodeBlock,
  Flex,
  Icon,
  Stack,
  Tabs,
  Text,
  Title,
  Avatar,
  Badge,
} from "../../../src";
import { CopyIcon, DownloadIcon, ExternalLinkIcon, DocumentIcon, MonitorIcon, ChevronLeftIcon, ChevronRightIcon } from "@/icon";

const meta: Meta = {
  title: "Patterns/AI",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

interface ArtifactsCanvasArgs {
  isMobile?: boolean;
}

export const ArtifactsCanvas: StoryObj<ArtifactsCanvasArgs> = {
  render: function Render(args: ArtifactsCanvasArgs) {
    const { t } = useTranslation([...ALL_NAMESPACES, "docs_stories_recipes"]);
    const [activeTab, setActiveTab] = useState("preview");
    const [activeView, setActiveView] = useState<"chat" | "canvas">("chat");
    const [isMobileInternal, setIsMobileInternal] = useState(false);
    
    const isMobile = args?.isMobile !== undefined ? args.isMobile : isMobileInternal;

    useEffect(() => {
      if (args?.isMobile !== undefined) return;
      
      const checkMobile = () => setIsMobileInternal(window.innerWidth < 1200);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, [args?.isMobile]);

    const SAMPLE_REACT_CODE = `import React from 'react';
import { Card, Title, Text, Stack } from 'wimui';

export default function WelcomeCard() {
  return (
    <Card variant="glass" padding="xl">
      <Stack gap="md">
        <Title tag="h2" size="lg">${t("docs_stories_recipes:artifacts.hello_title")}</Title>
        <Text>${t("docs_stories_recipes:artifacts.hello_desc")}</Text>
      </Stack>
    </Card>
  );
}`;

    return (
      <Box style={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden", 
        background: "var(--wim-color-surface)" 
      }}>
        {/* Left Pane: Chat */}
        <Box
          style={{
            width: isMobile ? "100%" : "400px",
            height: isMobile ? (activeView === "chat" ? "100%" : "0") : "100%",
            display: isMobile && activeView !== "chat" ? "none" : "flex",
            borderRight: isMobile ? "none" : "1px solid var(--wim-color-border)",
            flexDirection: "column",
            flexShrink: 0,
            background: "var(--wim-color-surface-subtle-alpha)",
          }}
        >
          <Box p="md" style={{ borderBottom: "1px solid var(--wim-color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Title tag="h3" size="sm">{t("chat.ai_assistant")}</Title>
            {isMobile && (
              <Button variant="ghost" size="sm" onClick={() => setActiveView("canvas")}>
                <Flex align="center" gap="xs">
                  <Text size="xs" weight="bold">{t("docs_stories_recipes:artifacts.canvas")}</Text>
                  <Icon component={ChevronRightIcon} size="xs" />
                </Flex>
              </Button>
            )}
          </Box>
          
          <ChatMessageList style={{ flex: 1, padding: "var(--wim-spacing-md)" }}>
            <ChatMessage
              position="left"
              senderName="AI"
              avatar={<Avatar size="sm" intent="info" initials="AI" />}
            >
              <Text size="sm">
                {t("docs_stories_recipes:artifacts.assistant_message")}
              </Text>
              <Box mt="sm">
                <Card 
                  variant="outline" 
                  padding="sm" 
                  interactive 
                  style={{ background: "var(--wim-color-surface)", borderColor: "var(--wim-color-primary)" }}
                >
                  <Flex align="center" gap="sm">
                    <Icon component={DocumentIcon} size="sm" color="primary" />
                    <Box style={{ flex: 1 }}>
                      <Text size="xs" weight="bold">WelcomeCard.tsx</Text>
                      <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.react_component")}</Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            </ChatMessage>
            <ChatMessage
              position="right"
              senderName="You"
              avatar={<Avatar size="sm" intent="primary" initials="ME" />}
            >
              <Text size="sm">{t("docs_stories_recipes:artifacts.user_reply")}</Text>
            </ChatMessage>
            <ChatMessage isTyping position="left" />
          </ChatMessageList>

          <Box p="md" style={{ borderTop: "1px solid var(--wim-color-border)" }}>
            <ChatInput 
              placeholder={t("docs_stories_recipes:artifacts.chat_placeholder")} 
              showAttach 
            />
          </Box>
        </Box>

        {/* Right Pane: Canvas */}
        <Box style={{ 
          flex: 1, 
          display: isMobile && activeView !== "canvas" ? "none" : "flex", 
          flexDirection: "column", 
          minWidth: 0 
        }}>
          {/* Canvas Header */}
          {/* Canvas Header */}
          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "var(--wim-spacing-xs)",
              borderBottom: "1px solid var(--wim-color-border)",
              background: "var(--wim-color-surface)",
              flexShrink: 0
            }}
          >
            {/* Top Row: Title & Actions */}
            <div style={{
              height: "var(--wim-spacing-6xl)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 var(--wim-spacing-lg)",
              gap: "var(--wim-spacing-md)",
            }}>
              {/* Left: Title & Mobile Back */}
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "var(--wim-spacing-md)", minWidth: 0 }}>
                {isMobile && (
                  <Button variant="ghost" size="sm" onClick={() => setActiveView("chat")} style={{ paddingLeft: 0, flexShrink: 0 }}>
                    <Flex align="center" gap="xs">
                      <Icon component={ChevronLeftIcon} size="xs" />
                      <Text size="xs" weight="bold">{t("docs_stories_recipes:artifacts.chat")}</Text>
                    </Flex>
                  </Button>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "var(--wim-spacing-md)", minWidth: 0, overflow: "hidden", flex: 1 }}>
                  <Icon component={DocumentIcon} size="sm" color="primary" style={{ flexShrink: 0 }} />
                  <Title tag="h4" size="sm" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0, flex: 1 }}>WelcomeCard.tsx</Title>
                  {!isMobile && <Badge content="v2" size="sm" variant="subtle" style={{ flexShrink: 0 }} />}
                </div>
              </div>

              {/* Right: Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--wim-spacing-sm)", flexShrink: 0 }}>
                <Button variant="ghost" size="sm">
                  <Icon component={CopyIcon} size="sm" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon component={DownloadIcon} size="sm" />
                </Button>
                <Button variant="solid" size="sm" style={{ flexShrink: 0 }}>
                  {t("docs_stories_recipes:artifacts.btn_publish")}
                </Button>
              </div>
            </div>

            {/* Bottom Row: Tabs (Always visible on Canvas view) */}
            <div style={{ 
              height: "var(--wim-spacing-6xl)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              padding: "0 var(--wim-spacing-lg)",
              borderTop: "1px solid var(--wim-color-border-secondary)",
            }}>
              <Tabs 
                value={activeTab} 
                onChange={setActiveTab}
                style={{ width: "auto" }}
              >
                <Tabs.List>
                  <Tabs.Trigger value="preview" style={{ padding: "var(--wim-spacing-xs) var(--wim-spacing-lg)" }}>
                    {t("docs_stories_recipes:artifacts.tab_preview")}
                  </Tabs.Trigger>
                  <Tabs.Trigger value="code" style={{ padding: "var(--wim-spacing-xs) var(--wim-spacing-lg)" }}>
                    {t("docs_stories_recipes:artifacts.tab_code")}
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs>
            </div>
          </div>

          {/* Canvas Content */}
          <Box style={{ 
            flex: 1, 
            overflow: "auto", 
            padding: "var(--wim-spacing-4xl)", 
            background: "var(--wim-color-surface-variant)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {activeTab === "preview" ? (
              <Box style={{ 
                width: "100%",
                maxWidth: "600px", 
                background: "var(--wim-color-surface)", 
                borderRadius: "var(--wim-radius-lg)",
                boxShadow: "var(--wim-shadow-lg)",
                overflow: "hidden"
              }}>
                <Box
                  p="md"
                  style={{
                    borderBottom: "1px solid var(--wim-color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--wim-spacing-md)",
                  }}
                >
                  <Icon component={MonitorIcon} size="xs" color="secondary" />
                  <Text size="xs" color="text-secondary">
                    preview.wimui.dev
                  </Text>
                </Box>
                <Box p="5xl" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <Card 
                    variant="glass" 
                    style={{ 
                      textAlign: "center", 
                      border: "1px solid var(--wim-color-glass-border)", 
                      backdropFilter: "blur(var(--wim-blur-md))",
                      margin: "var(--wim-spacing-xl)",
                      padding: "var(--wim-spacing-4xl)"
                    }}
                  >
                      <Stack gap="xl" align="center">
                        <Title tag="h2" size="lg">{t("docs_stories_recipes:artifacts.hello_title")}</Title>
                        <Text>{t("docs_stories_recipes:artifacts.hello_desc")}</Text>
                        <Button variant="solid">{t("docs_stories_recipes:artifacts.get_started")}</Button>
                      </Stack>
                   </Card>
                </Box>
              </Box>
            ) : (
              <Box style={{ maxWidth: "800px", margin: "0 auto" }}>
                <CodeBlock 
                  code={SAMPLE_REACT_CODE} 
                  language="tsx" 
                  showLineNumbers 
                  style={{ background: "var(--wim-color-surface)", border: "1px solid var(--wim-color-border)" }} 
                />
              </Box>
            )}
          </Box>
          
          {/* Canvas Footer */}
          <Box 
            px="lg" 
            style={{ 
              height: "var(--wim-spacing-4xl)", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              borderTop: "1px solid var(--wim-color-border)",
              background: "var(--wim-color-surface)"
            }}
          >
            <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.status_updated")}</Text>
            <Flex gap="md">
               <Flex align="center" gap="xs">
                 <Icon component={MonitorIcon} size="xs" color="secondary" />
                 <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.device_desktop")}</Text>
               </Flex>
               <Flex align="center" gap="xs">
                 <Icon component={ExternalLinkIcon} size="xs" color="secondary" />
                 <Text size="xs" color="text-secondary">{t("docs_stories_recipes:artifacts.published")}</Text>
               </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  },
};
