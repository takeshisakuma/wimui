import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  AppShell,
  Box,
  Button,
  CommandPalette,
  CommandPaletteContent,
  CommandPaletteEmpty,
  CommandPaletteGroup,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
  ContextMenu,
  ContextMenuItem,
  Dialog,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Group,
  Header,
  Menubar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Sidebar,
  Stack,
  Table,
  Tag,
  Text,
  Title,
} from "wimui";

/**
 * 6 枚目の合成画面（T32 / T95 の候補 A）。**狙いはアプリの外枠とオーバーレイ**で、
 * `AppShell` / `Menubar` / `CommandPalette` / `ContextMenu` / `Drawer` / `Dialog` /
 * `Popover` はここまでの 5 枚が一度も使っていなかった。
 *
 * **題材に字幕の校閲を選んだ理由。** `Menubar` が自然に成立する形が web の管理画面には
 * ほとんど無く（デスクトップ的なエディタくらい）、字幕は**尺・話者・行の長さが最初から
 * 不揃い**なので、実在感のあるデータを作るのに嘘をつかなくて済む。
 *
 * **主役は cue の表**（DESIGN.md 必須ルール 1）。メニューバー・サイドバー・ステータス
 * バーはクロームなので、ルール 12 に従って声量を落としてある ── 面を持たせない、
 * primary を置かない、表の上に KPI タイルを並べない。
 */
const meta: Meta = {
  title: "Patterns/Captions",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Cue = {
  id: string;
  tc: string;
  dur: string;
  /** 話者が拾えていない行が実際に混じる（DESIGN.md「不完全な行」） */
  speaker?: string;
  text: string;
  /** 読了速度が速すぎる cue。校閲で最初に見る対象 */
  flagged?: boolean;
};

/**
 * 尺・話者・行長を意図的に不揃いにしている。等間隔のタイムコードや連番の話者名は
 * 「置き換え待ちのプレースホルダ」に見える（DESIGN.md 13）。
 */
const CUES: Cue[] = [
  { id: "0041", tc: "00:04:12.180", dur: "1.9s", speaker: "波多野", text: "潮が引くまで待て。" },
  {
    id: "0042",
    tc: "00:04:14.060",
    dur: "4.2s",
    speaker: "Iris Ferreira",
    text: "The tide chart says 6:40, but the harbour master moved it twice this week already.",
    flagged: true,
  },
  { id: "0043", tc: "00:04:18.300", dur: "2.4s", text: "（無線のノイズ）" },
  { id: "0044", tc: "00:04:20.740", dur: "3.1s", speaker: "陳 立文", text: "二番倉庫の鍵、まだ返してない。" },
  {
    id: "0045",
    tc: "00:04:23.880",
    dur: "1.2s",
    speaker: "波多野",
    text: "それは明日でいい。",
  },
  {
    id: "0046",
    tc: "00:04:25.100",
    dur: "5.6s",
    speaker: "Iris Ferreira",
    text: "I filed the incident report under the old vessel number, so it will not show up in the weekly export until someone re-keys it.",
    flagged: true,
  },
];

/** クロームのメニュー。項目は製品文脈のあるものだけに絞る（装飾で埋めない）。 */
const CueMenubar = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <Menubar>
      <Menubar.Menu value="file">
        <Menubar.Trigger>{t("docs_stories_recipes:captions.menu_file")}</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>{t("docs_stories_recipes:captions.menu_file_import")}</Menubar.Item>
          <Menubar.Item>{t("docs_stories_recipes:captions.menu_file_export")}</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>{t("docs_stories_recipes:captions.menu_file_conform")}</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu value="timing">
        <Menubar.Trigger>{t("docs_stories_recipes:captions.menu_timing")}</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>{t("docs_stories_recipes:captions.menu_timing_shift")}</Menubar.Item>
          <Menubar.Item>{t("docs_stories_recipes:captions.menu_timing_snap")}</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  );
};

const CueRow = ({
  cue,
  onOpenDetail,
  onDiscard,
}: {
  cue: Cue;
  onOpenDetail: () => void;
  onDiscard: () => void;
}) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <ContextMenu
      asChild
      menu={
        <>
          <ContextMenuItem onClick={onOpenDetail}>
            {t("docs_stories_recipes:captions.row_menu_history")}
          </ContextMenuItem>
          <ContextMenuItem onClick={onDiscard}>
            {t("docs_stories_recipes:captions.row_menu_discard")}
          </ContextMenuItem>
        </>
      }
    >
      <Table.Row onClick={onOpenDetail}>
        <Table.Cell>
          <Text size="sm" nowrap>
            {cue.tc}
          </Text>
        </Table.Cell>
        <Table.Cell>
          <Text size="sm" color="secondary" nowrap>
            {cue.dur}
          </Text>
        </Table.Cell>
        <Table.Cell>
          {cue.speaker ? (
            <Text size="sm" nowrap>
              {cue.speaker}
            </Text>
          ) : (
            <Text size="sm" color="tertiary" nowrap>
              {t("docs_stories_recipes:captions.speaker_unknown")}
            </Text>
          )}
        </Table.Cell>
        <Table.Cell>
          <Text size="sm">{cue.text}</Text>
        </Table.Cell>
        <Table.Cell>
          {cue.flagged ? (
            <Popover>
              {/* `asChild` を付けない ── `PopoverTrigger` は既定で素の
                  `<button>`（padding 0・背景なし）を出す。`asChild` + `Tag` にすると
                  `aria-expanded` / `aria-haspopup` がロールの無い span に乗り、
                  axe の `aria-allowed-attr` が critical で鳴る（実測）うえ、
                  span はフォーカスできないのでキーボードから開けない */}
              <PopoverTrigger>
                <Tag intent="warning" variant="subtle" size="sm">
                  {t("docs_stories_recipes:captions.flag_reading_rate")}
                </Tag>
              </PopoverTrigger>
              <PopoverContent>
                <Text size="sm">{t("docs_stories_recipes:captions.flag_explain")}</Text>
              </PopoverContent>
            </Popover>
          ) : null}
        </Table.Cell>
      </Table.Row>
    </ContextMenu>
  );
};

const CaptionReviewScreen = ({
  paletteOpen = false,
  drawerOpen = false,
  discardOpen = false,
}: {
  paletteOpen?: boolean;
  drawerOpen?: boolean;
  discardOpen?: boolean;
}) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [palette, setPalette] = useState(paletteOpen);
  const [drawer, setDrawer] = useState(drawerOpen);
  const [discard, setDiscard] = useState(discardOpen);

  return (
    <AppShell
      header={
        // クロームの余白は `Header` が持つ。素の `Group` を渡すと
        // `AppShell` 側に padding が無いので、内容が画面の端に貼り付く
        <Header fluid bordered>
          <Header.Section align="start">
            <CueMenubar />
          </Header.Section>
          <Header.Section align="end">
            <Group gap="sm" align="center">
              <Text size="sm" color="secondary" nowrap>
                {t("docs_stories_recipes:captions.reel_label")}
              </Text>
              <Button variant="ghost" size="sm" onClick={() => setPalette(true)}>
                {t("docs_stories_recipes:captions.jump_hint")}
              </Button>
            </Group>
          </Header.Section>
        </Header>
      }
      footer={
        // ステータスバーはページの `Footer` ではない（あちらは 2xl/xl の余白を持つ）。
        // 高さを詰めた帯として自前で組む
        <Box px="xl" py="xs" bg="surface">
          <Group gap="lg" align="center">
            <Text size="xs" color="secondary">
              {t("docs_stories_recipes:captions.status_fps")}
            </Text>
            <Text size="xs" color="secondary">
              {t("docs_stories_recipes:captions.status_saved")}
            </Text>
          </Group>
        </Box>
      }
    >
      {/* `sidebar` prop と `AppShell.Main` は混ぜられない ── children に
          構造サブコンポーネントがあると props の `sidebar` は黙って捨てられる。
          サイドバーを使う構成は Composition API で組む */}
      <AppShell.Body>
        <Sidebar width={200} bordered>
          <Sidebar.Content>
            {/* 本文の内側余白（2xl）に合わせる。`Sidebar.Content` 自身は
                左右 0 なので、ここで入れないとリールが画面の端に貼り付く */}
            <Box px="2xl" py="xl">
              <Stack gap="xs">
                <Text size="xs" color="tertiary">
                  {t("docs_stories_recipes:captions.sidebar_heading")}
                </Text>
                <Text size="sm">{t("docs_stories_recipes:captions.reel_1")}</Text>
                <Text size="sm">{t("docs_stories_recipes:captions.reel_2")}</Text>
                <Text size="sm" color="secondary">
                  {t("docs_stories_recipes:captions.reel_3")}
                </Text>
              </Stack>
            </Box>
          </Sidebar.Content>
        </Sidebar>
        <AppShell.Main>
          <Stack gap="md">
            <Stack gap="2xs">
              <Title tag="h3" size="lg">{t("docs_stories_recipes:captions.title")}</Title>
              <Text size="sm" color="secondary">
                {t("docs_stories_recipes:captions.subtitle")}
              </Text>
            </Stack>

            <Table card>
              <Table.Header>
                <Table.Row>
                  <Table.Head>{t("docs_stories_recipes:captions.col_tc")}</Table.Head>
                  <Table.Head>{t("docs_stories_recipes:captions.col_dur")}</Table.Head>
                  <Table.Head>{t("docs_stories_recipes:captions.col_speaker")}</Table.Head>
                  <Table.Head>{t("docs_stories_recipes:captions.col_text")}</Table.Head>
                  <Table.Head>{t("docs_stories_recipes:captions.col_flag")}</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {CUES.map((cue) => (
                  <CueRow
                    key={cue.id}
                    cue={cue}
                    onOpenDetail={() => setDrawer(true)}
                    onDiscard={() => setDiscard(true)}
                  />
                ))}
              </Table.Body>
            </Table>
          </Stack>
        </AppShell.Main>
      </AppShell.Body>

      <CommandPalette open={palette} onOpenChange={setPalette}>
        <CommandPaletteContent>
          <CommandPaletteInput placeholder={t("docs_stories_recipes:captions.palette_placeholder")} />
          <CommandPaletteList>
            <CommandPaletteEmpty>
              {t("docs_stories_recipes:captions.palette_empty")}
            </CommandPaletteEmpty>
            <CommandPaletteGroup heading={t("docs_stories_recipes:captions.palette_group_jump")}>
              <CommandPaletteItem>
                {t("docs_stories_recipes:captions.palette_next_flag")}
              </CommandPaletteItem>
              <CommandPaletteItem>
                {t("docs_stories_recipes:captions.palette_unknown_speaker")}
              </CommandPaletteItem>
            </CommandPaletteGroup>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>

      <Drawer open={drawer} onOpenChange={setDrawer}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("docs_stories_recipes:captions.drawer_title")}</DrawerTitle>
            <DrawerDescription>
              {t("docs_stories_recipes:captions.drawer_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <Stack gap="sm">
            <Text size="sm">{t("docs_stories_recipes:captions.drawer_change_1")}</Text>
            <Text size="sm">{t("docs_stories_recipes:captions.drawer_change_2")}</Text>
          </Stack>
          <DrawerFooter>
            <Button variant="outline" onClick={() => setDrawer(false)}>
              {t("docs_stories_recipes:captions.drawer_close")}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Dialog open={discard} onOpenChange={setDiscard}>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{t("docs_stories_recipes:captions.discard_title")}</Dialog.Title>
            <Dialog.Description>
              {t("docs_stories_recipes:captions.discard_desc")}
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Button variant="outline" onClick={() => setDiscard(false)}>
              {t("docs_stories_recipes:captions.discard_cancel")}
            </Button>
            <Button intent="danger" onClick={() => setDiscard(false)}>
              {t("docs_stories_recipes:captions.discard_confirm")}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </AppShell>
  );
};

export const CaptionReview: StoryObj = {
  render: () => <CaptionReviewScreen />,
};

/** クロームからしか辿れない導線を撮る（`⌘K` は VRT では押せない）。 */
export const JumpPalette: StoryObj = {
  render: () => <CaptionReviewScreen paletteOpen />,
};

/** 破棄の確認。**取り消せない操作**なので danger を出すのはここだけ。 */
export const DiscardTake: StoryObj = {
  render: () => <CaptionReviewScreen discardOpen />,
};
