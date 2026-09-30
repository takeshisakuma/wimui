import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Card,
  Skeleton,
  Stack,
  Box,
  Text,
  Title,
  Grid,
  Header,
  Button,
  Avatar,
  Group,
  Flex
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/AestheticsFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

/**
 * モーションのトークンはどれも `transition` ショートハンドの値
 * （`--wim-transition-entrance` / `-exit` は `<duration> <easing>`、`--wim-layout-transition` は
 * `all <duration> <easing>`）。`animation` に渡すと、Layout は `all` が 2 つ目のアニメーション名と
 * 読まれて宣言ごと無効になり、Entrance / Exit はトークンの時間が `animation-delay` と読まれて
 * 曲線しか見えなかった。本来の使い方どおり、`transition` を当てた要素の位置を一定間隔で
 * 切り替えて見せる（Audit は VRT の撮影対象外なのでタイマーで揺れない）。
 *
 * T285: 時間は一定なので、溝を幅いっぱいにすると移動距離が画面の幅に比例し、PC では約 1,200px を
 * 0.25 秒で動いて違いが見えなかった。溝は実際の移動（オーバーレイ・カードの数十〜百数十 px）に近い
 * 長さで固定し、終点を溝の端から離して Entrance の行き過ぎて戻る動き（out-back）が切り取られないようにする。
 */
const MotionTokenDemo = ({ transition }: { transition: string }) => {
  const [atEnd, setAtEnd] = React.useState(false);

  React.useEffect(() => {
    const id = window.setInterval(() => setAtEnd((prev) => !prev), 1500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Box className="motion-track">
      <Box
        className="motion-ball"
        style={{
          left: atEnd ? "var(--motion-travel)" : 0,
          transition,
        }}
      />
    </Box>
  );
};

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:aesthetics_family_title")}>
        {/* Glassmorphism Levels */}
        <ComparisonGrid title={t("audit:glass_tokenization_variants")}>
          <ComponentGroup label={t("audit:glass_levels_label")} align="stretch">
            <Box style={{ 
              backgroundImage: "linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, #fff 25%, #fff 75%, #f3f4f6 75%, #f3f4f6)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
              padding: "2rem",
              borderRadius: "var(--wim-radius-lg)"
            }}>
              <Stack gap="xl">
                {/* i18n-ignore-start — Glass/Shadow はトークン名の表示のため英語のまま */}
                <Card className="glass-sm" padding="md">
                  <Title tag="h4" size="md">Glass Sm</Title>
                  <Text size="sm">{t("audit:aesthetics_glass_sm_desc")}</Text>
                </Card>
                <Card className="glass-md" padding="md">
                  <Title tag="h4" size="md">Glass Md</Title>
                  <Text size="sm">{t("audit:aesthetics_glass_md_desc")}</Text>
                </Card>
                <Card className="glass-lg" padding="md">
                  <Title tag="h4" size="md">Glass Lg</Title>
                  <Text size="sm">{t("audit:aesthetics_glass_lg_desc")}</Text>
                </Card>
                {/* i18n-ignore-end */}
              </Stack>
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:interactive_glass_label")} align="stretch">
             <Grid cols={2} gap="md">
                <Card variant="glass" interactive padding="md">
                   <Text weight="bold">{t("audit:aesthetics_hover_me")}</Text>
                   <Text size="xs">{t("audit:aesthetics_hover_me_desc")}</Text>
                </Card>
                <Card variant="glass" interactive padding="md">
                   <Text weight="bold">{t("audit:aesthetics_tap_me")}</Text>
                   <Text size="xs">{t("audit:aesthetics_tap_me_desc")}</Text>
                </Card>
             </Grid>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Skeleton & Motion */}
        <ComparisonGrid title={t("audit:refined_skeleton_motion")}>
          <ComponentGroup label={t("audit:skeleton_shimmer_refinement")} align="stretch">
            <Card padding="md">
              <Stack gap="md">
                <Group gap="md">
                  <Skeleton variant="circle" width={48} height={48} animation="wave" />
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" height={20} animation="wave" />
                    <Skeleton variant="text" width="40%" height={16} animation="wave" />
                  </Stack>
                </Group>
                <Skeleton variant="rect" height={120} animation="wave" />
                <Skeleton variant="text" height={16} animation="wave" />
                <Skeleton variant="text" height={16} animation="wave" />
                <Skeleton variant="text" width="80%" height={16} animation="wave" />
              </Stack>
            </Card>
          </ComponentGroup>

          <ComponentGroup label={t("audit:motion_easing_emphasized")} align="stretch">
             <Stack gap="md">
                <Box>
                  <Text size="xs" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("audit:aesthetics_motion_entrance")}</Text>
                  <MotionTokenDemo transition="var(--wim-transition-entrance)" />
                </Box>
                
                <Box>
                  <Text size="xs" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("audit:aesthetics_motion_exit")}</Text>
                  <MotionTokenDemo transition="var(--wim-transition-exit)" />
                </Box>

                <Box>
                  <Text size="xs" style={{ marginBottom: "var(--wim-spacing-xs)" }}>{t("audit:aesthetics_motion_layout")}</Text>
                  <MotionTokenDemo transition="var(--wim-layout-transition)" />
                </Box>

                <style>{`
                  .motion-track {
                    --motion-travel: 12.5rem; /* 移動距離 200px（PC とスマホで同じ） */
                    height: 8px;
                    width: 17.5rem; /* 280px ＝ 移動 200px ＋ 玉 40px ＋ 行き過ぎの余白 40px */
                    max-width: 100%;
                    background: var(--wim-color-surface-variant);
                    border-radius: 4px;
                    position: relative;
                    overflow: hidden;
                  }
                  .motion-ball {
                    position: absolute;
                    height: 100%;
                    width: 40px;
                    background: var(--wim-color-primary);
                    border-radius: 4px;
                  }
                `}</style>
             </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Dynamic Shadows */}
        <ComparisonGrid title={t("audit:aesthetics_oklch_shadows_title")}>
          <ComponentGroup label={t("audit:aesthetics_standard_shadows_label")} direction="row" wrap gap="xl">
            {/* i18n-ignore-start — Shadow はトークン名の表示のため英語のまま */}
            <Box p="lg" radius="md" style={{ background: "var(--wim-color-surface)", boxShadow: "var(--wim-shadow-sm)" }}>
              <Text size="xs">Shadow SM</Text>
            </Box>
            <Box p="lg" radius="md" style={{ background: "var(--wim-color-surface)", boxShadow: "var(--wim-shadow-md)" }}>
              <Text size="xs">Shadow MD</Text>
            </Box>
            <Box p="lg" radius="md" style={{ background: "var(--wim-color-surface)", boxShadow: "var(--wim-shadow-lg)" }}>
              <Text size="xs">Shadow LG</Text>
            </Box>
            {/* i18n-ignore-end */}
          </ComponentGroup>
        </ComparisonGrid>

        {/* Real World Example */}
        <ComparisonGrid title={t("audit:integrated_application_label")}>
          <ComponentGroup label={t("audit:glass_header_skeleton_content")} align="stretch">
            <Box style={{ 
              height: "400px", 
              border: "1px solid var(--wim-color-border)", 
              borderRadius: "var(--wim-radius-lg)",
              overflow: "hidden",
              position: "relative",
              background: "url(./images/sample-landscape.png) center / cover no-repeat",
            }}>
              <Header glass fixed={false} style={{ position: "absolute", top: 0 }}>
                <Flex align="center" justify="between" style={{ height: "100%", paddingLeft: "var(--wim-spacing-md)", paddingRight: "var(--wim-spacing-md)", width: "100%" }}>
                   {/* T205: `text-on-primary`（白）を置いていたが、light の
                       `--wim-color-glass-bg` は rgba(255,255,255,.7) ＝ **白の上に白**。
                       axe は fg #ffffff / bg #ffffff / 1:1 と測ったうえで
                       incomplete（＝要目視）に落としていたので、violations だけを
                       見ていた CI では 4 か月見えないままだった。ガラスの面は
                       テーマで明暗が反転するので、意味トークンに任せる。 */}
                   {/* i18n-ignore-next-line — ブランド名 */}
                   <Title tag="h4" size="md">WIM UI</Title>
                   <Avatar size="sm" initials="WU" />
                </Flex>
              </Header>
              <Box p="xl" pt="80px">
                 <Stack gap="lg">
                    <Card variant="glass" padding="md">
                       <Stack gap="sm">
                          <Skeleton variant="text" width="30%" height={24} animation="wave" />
                          <Skeleton variant="text" width="100%" height={16} animation="wave" />
                          <Skeleton variant="text" width="100%" height={16} animation="wave" />
                          <Skeleton variant="text" width="60%" height={16} animation="wave" />
                          <Button size="sm" variant="solid" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
                             {t("audit:aesthetics_action_button")}
                          </Button>
                       </Stack>
                    </Card>
                    <Grid cols={2} gap="md">
                       <Card variant="glass" padding="sm">
                          <Skeleton variant="rect" height={60} animation="wave" />
                       </Card>
                       <Card variant="glass" padding="sm">
                          <Skeleton variant="rect" height={60} animation="wave" />
                       </Card>
                    </Grid>
                 </Stack>
              </Box>
            </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
