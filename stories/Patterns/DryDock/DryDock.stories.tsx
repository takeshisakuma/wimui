import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Affix,
  AppShell,
  BackTop,
  Box,
  Container,
  Flex,
  FloatButton,
  Header,
  SpeedDial,
  Stack,
  Text,
  Title,
} from "wimui";

/**
 * 12 枚目の合成画面。**狙いは nav-utilities**（`Affix` / `BackTop` /
 * `FloatButton` / `SpeedDial`。カタログ 4 件、合成済み 0）。
 *
 * 4 つとも端に貼るクロームなので、1 画面に並べると主役が割れ、右下で
 * `FloatButton` / `SpeedDial` / `BackTop` が重なる。資料も「アクションが
 * 1 つなら `FloatButton`、複数なら `SpeedDial`」。`SpeedDial` の中は
 * `FloatButton` だが、タグ走査は外側しか数えないので、単一アクションの
 * 話では `<FloatButton>` を自分で書く。
 *
 * **題材は Kiyosumi とも盛岡の写真机とも被らせない。** 室蘭の乾ドックで、
 * 第三当直が船をブロックに載せている夜。
 *
 * ストーリー 3 本（仕事が違うので分ける）:
 * - Orders  長い当直規程。主役は文書。`Affix` が条を残し、`BackTop` で戻る
 * - Walk    ブロックの下を歩く。主役は呼び出し 1 つ＝`FloatButton`
 * - Cab     クレーンの運転席。主役は複数操作＝`SpeedDial`（開いたまま撮る）
 *
 * **VRT を決める指定**: Orders は Main を途中までスクロールして撮る（条が貼り、戻るが
 * 見える位相）。Cab は `open` と `trigger="click"`（hover は位相が定まらない）。
 *
 * **書いて分かった穴**:
 * ① **T173（済）** `SpeedDialAction.intent` は型にあるが `FloatButton` に渡していなかった。
 * ② **T174（済）** `aria-label` はラッパー `div` に落ち、トリガーにはアイコン名が残る。
 * ③ **T175（済）** ラベル付きアクションはトリガーより長い。静的 left だと
 *    言語によって右へはみ出す。縦展開は inline-end 揃え（コピーは短くしない）。
 */
const meta = {
  title: "Patterns/DryDock",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_recipes:dryDock.${k}`;

/**
 * ドック 2 の当直規程。**主役は長い文書。** 見出しは流し、いま効いている条
 * だけ残す。戻るは右下。FAB は置かない。
 *
 * `Affix` / `BackTop` の既定ターゲットは `window`。`AppShell.Main` がスクロール
 * するので、ここは Main を渡す。渡さないと条は貼らず、戻るも出ない。
 */
export const Orders: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const mainRef = useRef<HTMLElement>(null);
    const getMain = useCallback(() => mainRef.current, []);

    useLayoutEffect(() => {
      const el = mainRef.current;
      if (!el) return;
      el.scrollTop = 420;
    }, []);

    return (
      <AppShell>
        <AppShell.Header>
          <Header bordered background="surface-variant">
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main ref={mainRef}>
            <Container size="md">
              <Stack gap="xl">
                <Stack gap="2xs">
                  <Title tag="h1" size="md">
                    {t(ns("orders_title"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("orders_meta"))}
                  </Text>
                </Stack>
                <Text size="sm">{t(ns("orders_lead"))}</Text>
                <Affix offsetTop={0} target={getMain}>
                  <Box bg="surface-variant" p="sm" radius="md">
                    <Text size="sm">{t(ns("orders_affix"))}</Text>
                  </Box>
                </Affix>
                <Stack gap="lg">
                  <Text size="sm">{t(ns("orders_p1"))}</Text>
                  <Text size="sm">{t(ns("orders_p2"))}</Text>
                  <Text size="sm">{t(ns("orders_p3"))}</Text>
                  <Text size="sm">{t(ns("orders_p4"))}</Text>
                  <Text size="sm">{t(ns("orders_p5"))}</Text>
                  <Text size="sm">{t(ns("orders_p6"))}</Text>
                  <Text size="sm">{t(ns("orders_p7"))}</Text>
                  <Text size="sm">{t(ns("orders_p8"))}</Text>
                </Stack>
              </Stack>
            </Container>
            <BackTop
              target={getMain}
              visibilityHeight={200}
              aria-label={t(ns("back_top"))}
            />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * 左舷クォーターのブロックを見に行った席。**主役は呼び出し 1 つ。**
 * 写真が無い行を残す。SpeedDial も BackTop も置かない。
 */
export const Walk: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <AppShell>
        <AppShell.Header>
          <Header bordered background="surface-variant">
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Container size="sm">
              <Stack gap="xl">
                <Stack gap="2xs">
                  <Title tag="h1" size="md">
                    {t(ns("walk_title"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("walk_meta"))}
                  </Text>
                </Stack>
                <Stack gap="md">
                  <Stack gap="2xs">
                    <Text size="sm">{t(ns("walk_obs1"))}</Text>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("walk_obs1_meta"))}
                    </Text>
                  </Stack>
                  <Stack gap="2xs">
                    <Text size="sm">{t(ns("walk_obs2"))}</Text>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("walk_obs2_meta"))}
                    </Text>
                  </Stack>
                </Stack>
                <Text size="sm" color="text-secondary">
                  {t(ns("walk_note"))}
                </Text>
              </Stack>
            </Container>
            <FloatButton
              iconName="PhoneIcon"
              label={t(ns("walk_call"))}
              position="bottom-right"
            />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * クレーン 2 の運転席。**主役は複数操作。** 止めるのが先で、巻くのは出さない。
 * 4 つ（3 つに揃えない）。開いたまま撮る。FloatButton はタグとして書かない。
 * アクションは `SpeedDial` の縦展開既定（inline-end）で右揃え。短いラベルに逃げない。
 */
export const Cab: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <AppShell>
        <AppShell.Header>
          <Header bordered background="surface-variant">
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Stack h="100%" justify="between" gap="xl">
              <Container size="sm">
                <Stack gap="xl">
                  <Stack gap="2xs">
                    <Title tag="h1" size="md">
                      {t(ns("cab_title"))}
                    </Title>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("cab_meta"))}
                    </Text>
                  </Stack>
                  <Text size="sm">{t(ns("cab_note"))}</Text>
                </Stack>
              </Container>
              <Flex justify="end">
                <SpeedDial
                  trigger="click"
                  open
                  direction="up"
                  aria-label={t(ns("cab_dial"))}
                  actions={[
                    {
                      icon: "SquareIcon",
                      label: t(ns("cab_stop")),
                      intent: "danger",
                    },
                    {
                      icon: "PhoneIcon",
                      label: t(ns("cab_radio")),
                    },
                    {
                      icon: "SunIcon",
                      label: t(ns("cab_lights")),
                    },
                    {
                      icon: "DocumentIcon",
                      label: t(ns("cab_log")),
                    },
                  ]}
                />
              </Flex>
            </Stack>
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};
