import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  AppShell,
  Badge,
  Box,
  Button,
  Dialog,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Group,
  Header,
  Icon,
  Kanban,
  Sidebar,
  SortableList,
  Stack,
  Tag,
  Text,
  Title,
  Transfer,
  TreeView,
  VirtualList,
} from "wimui";

/**
 * 7 枚目の合成画面（T32 / T95 の候補 B）。**狙いは「一覧と編集」の層**で、
 * ドラッグ（`Kanban` / `SortableList`）・階層（`TreeView`）・割り当て（`Transfer`）・
 * 仮想化（`VirtualList`）を、無理なく同居する題材に載せる。
 *
 * **主役は 1 つ ── 進行ボード。** サイドバーの階層もツールバーもクロームなので声量を下げ、
 * primary の面は「入稿」ボタン 1 つだけに置く（DESIGN.md の必須ルール 1 / 6 / 12）。
 *
 * **7 コンポーネント全部は載せない。** 候補 B には `TransferList` と `SwipeableList` も
 * 含まれるが、前者は `Transfer` の内側、後者はモバイル固有の操作で、この画面に
 * 積むと「全部のスロットを埋める」ことになる（禁止パターン）。数は内容から決める。
 */
const meta = {
  title: "Patterns/Newsroom",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_recipes:newsroom.${k}`;

/** 進行中の記事。**幸せパスだけにしない** ── 長い見出し・担当未定・期限切れを混ぜる。 */
interface Article {
  id: string;
  headline: string;
  reporter?: string;
  due: string;
  overdue?: boolean;
  words?: number;
}

const useArticles = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return useMemo(
    () => ({
      reporting: [
        {
          id: "a-8841",
          headline: t(ns("h_ferry")),
          reporter: "宮下 玲奈",
          due: t(ns("due_1900")),
        },
        {
          id: "a-8836",
          headline: t(ns("h_budget")),
          due: t(ns("due_tomorrow")),
        },
      ],
      writing: [
        {
          id: "a-8829",
          headline: t(ns("h_election")),
          reporter: "Amara Osei",
          due: t(ns("due_2130")),
          words: 1840,
        },
        {
          id: "a-8812",
          headline: t(ns("h_longform")),
          reporter: "河合 拓真",
          due: t(ns("due_friday")),
          words: 4210,
        },
        {
          id: "a-8805",
          headline: t(ns("h_weather")),
          reporter: "Petra Novák",
          due: t(ns("due_1700")),
          overdue: true,
        },
      ],
      desk: [
        {
          id: "a-8798",
          headline: t(ns("h_transit")),
          reporter: "宮下 玲奈",
          due: t(ns("due_2000")),
          words: 920,
        },
      ],
      done: [
        {
          id: "a-8771",
          headline: t(ns("h_obituary")),
          reporter: "Luis Ferreira",
          due: t(ns("due_done")),
          words: 610,
        },
        {
          id: "a-8764",
          headline: t(ns("h_market")),
          reporter: "河合 拓真",
          due: t(ns("due_done")),
          words: 1130,
        },
        {
          id: "a-8752",
          headline: t(ns("h_sports")),
          reporter: "Amara Osei",
          due: t(ns("due_done")),
          words: 780,
        },
      ],
    }),
    [t],
  );
};

/**
 * ボードのカード。**装飾は引き算で検証する** ── アイコンは「期限切れ」だけに付ける。
 * 担当未定はバッジではなく文字の弱さで表す（色を増やさない）。
 */
const ArticleCard = ({ article }: { article: Article }) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <Stack gap="2xs">
      <Text size="sm">{article.headline}</Text>
      <Group gap="xs" align="center">
        <Text size="xs" color={article.reporter ? "secondary" : "tertiary"}>
          {article.reporter ?? t(ns("unassigned"))}
        </Text>
        {article.overdue ? (
          <Tag intent="danger" variant="subtle" size="sm">
            <Icon name="ClockIcon" size="sm" />
            {article.due}
          </Tag>
        ) : (
          <Text size="xs" color="tertiary">
            {article.due}
          </Text>
        )}
        {article.words ? (
          <Text size="xs" color="tertiary">
            {t(ns("words"), { count: article.words })}
          </Text>
        ) : null}
      </Group>
    </Stack>
  );
};

/** セクションの階層。フィルタなのでクローム側＝声量を落とす。 */
const SectionTree = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <TreeView
      defaultExpandedValues={["news", "news-local"]}
      aria-label={t(ns("tree_label"))}
    >
      <TreeView.Item value="news" label={t(ns("sec_news"))}>
        <TreeView.Item value="news-local" label={t(ns("sec_local"))}>
          <TreeView.Item value="news-local-city" label={t(ns("sec_city"))} />
          <TreeView.Item
            value="news-local-transit"
            label={t(ns("sec_transit"))}
          />
        </TreeView.Item>
        <TreeView.Item value="news-politics" label={t(ns("sec_politics"))} />
      </TreeView.Item>
      <TreeView.Item value="biz" label={t(ns("sec_business"))}>
        <TreeView.Item value="biz-markets" label={t(ns("sec_markets"))} />
      </TreeView.Item>
      <TreeView.Item value="sports" label={t(ns("sec_sports"))} />
      <TreeView.Item value="obit" label={t(ns("sec_obituaries"))} />
    </TreeView>
  );
};

/** 進行ボード（主役）。 */
const Board = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const articles = useArticles();

  const columns = [
    {
      id: "reporting",
      title: t(ns("col_reporting")),
      items: articles.reporting,
    },
    { id: "writing", title: t(ns("col_writing")), items: articles.writing },
    { id: "desk", title: t(ns("col_desk")), items: articles.desk },
    { id: "done", title: t(ns("col_done")), items: articles.done },
  ].map((c) => ({
    id: c.id,
    title: c.title,
    items: c.items.map((a) => ({
      id: a.id,
      content: <ArticleCard article={a} />,
    })),
  }));

  return <Kanban columns={columns} />;
};

export const Default: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <AppShell>
        <AppShell.Header>
          <Header>
            <Group justify="between" align="center">
              <Title tag="h1" size="md">
                {t(ns("title"))}
              </Title>
              <Group gap="sm" align="center">
                <Text size="sm" color="secondary">
                  {t(ns("deadline"))}
                </Text>
                <Button intent="default" variant="solid" size="sm">
                  {t(ns("file_copy"))}
                </Button>
              </Group>
            </Group>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Sidebar>
            <Sidebar>
              <Stack gap="sm">
                <Text size="xs" color="tertiary">
                  {t(ns("sections"))}
                </Text>
                <SectionTree />
              </Stack>
            </Sidebar>
          </AppShell.Sidebar>
          <AppShell.Main>
            <Board />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * 校閲の割り当て。`Transfer` は「候補から選ぶ」形が本来の用途なので、
 * ボードから離してダイアログに置く（画面の主役を割らない）。
 */
export const AssignDesk: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [targetKeys, setTargetKeys] = useState<string[]>([
      "d-ikeda",
      "d-santos",
    ]);
    const dataSource = [
      { key: "d-ikeda", title: "池田 さやか", description: t(ns("desk_city")) },
      {
        key: "d-santos",
        title: "Rafael Santos",
        description: t(ns("desk_politics")),
      },
      {
        key: "d-tanabe",
        title: "田辺 一志",
        description: t(ns("desk_markets")),
      },
      {
        key: "d-oyelaran",
        title: "Bisi Oyelaran",
        description: t(ns("desk_sports")),
      },
      {
        key: "d-mori",
        title: "森 千夏",
        description: t(ns("desk_night")),
        disabled: true,
      },
    ];

    return (
      <Box p="lg">
        <Dialog open onOpenChange={() => undefined}>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{t(ns("assign_title"))}</Dialog.Title>
              <Dialog.Description>{t(ns("assign_desc"))}</Dialog.Description>
            </Dialog.Header>
            <Transfer
              dataSource={dataSource}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
            />
            <Dialog.Footer>
              <Button variant="ghost">{t(ns("cancel"))}</Button>
              <Button variant="solid">{t(ns("assign_save"))}</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </Box>
    );
  },
};

/**
 * 1 面の組み。順序そのものが情報なので `SortableList` を使う。
 * **Drawer に置くのは、ボードと同時に主役を張らせないため。**
 */
export const FrontPageOrder: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [order, setOrder] = useState([
      { id: "a-8829", label: t(ns("h_election")), slot: t(ns("slot_lead")) },
      { id: "a-8798", label: t(ns("h_transit")), slot: t(ns("slot_second")) },
      { id: "a-8812", label: t(ns("h_longform")), slot: t(ns("slot_feature")) },
      { id: "a-8764", label: t(ns("h_market")), slot: t(ns("slot_below")) },
    ]);

    return (
      <Box p="lg">
        <Drawer open onOpenChange={() => undefined}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t(ns("front_title"))}</DrawerTitle>
              <DrawerDescription>{t(ns("front_desc"))}</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <SortableList
                onSortEnd={(from, to) =>
                  setOrder((prev) => {
                    const next = [...prev];
                    const [moved] = next.splice(from, 1);
                    next.splice(to, 0, moved);
                    return next;
                  })
                }
              >
                {order.map((item, index) => (
                  <SortableList.Item key={item.id} index={index}>
                    {/* ハンドルは項目の先頭に置く（SortableList 自身のストーリーと同じ）。
                        末尾に置くと掴む場所が行ごとに右端へ散り、テキストが右へ寄って見える。 */}
                    <SortableList.DragHandle />
                    <Stack gap="2xs">
                      <Text size="sm">{item.label}</Text>
                      <Text size="xs" color="tertiary">
                        {item.slot}
                      </Text>
                    </Stack>
                  </SortableList.Item>
                ))}
              </SortableList>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="ghost">{t(ns("cancel"))}</Button>
              <Button variant="solid">{t(ns("front_lock"))}</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  },
};

/**
 * 版の履歴。件数が多いので `VirtualList`。**等間隔の時刻にしない**
 * （DESIGN.md「数値・日付を内部整合させ、規則性を消す」）。
 */
export const RevisionLog: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const actors = [
      "宮下 玲奈",
      "Amara Osei",
      "池田 さやか",
      "河合 拓真",
      "Rafael Santos",
    ];
    const actions = [
      t(ns("log_edit")),
      t(ns("log_move")),
      t(ns("log_assign")),
      t(ns("log_kill")),
    ];
    const gaps = [3, 11, 2, 27, 5, 8, 1, 19];
    let minutes = 0;
    const entries = Array.from({ length: 420 }, (_, i) => {
      minutes += gaps[i % gaps.length];
      return {
        id: `r-${9412 - i}`,
        actor: actors[(i * 3) % actors.length],
        action: actions[(i * 5) % actions.length],
        ago: t(ns("minutes_ago"), { count: minutes }),
      };
    });

    return (
      <Box p="lg">
        <Stack gap="sm">
          <Title tag="h2" size="sm">
            {t(ns("log_title"))}
          </Title>
          <VirtualList
            items={entries}
            height={320}
            itemHeight={44}
            aria-label={t(ns("log_title"))}
            renderItem={(entry) => (
              <Group justify="between" align="center" wrap="nowrap">
                {/* 行は固定高さなので、狭いときは折り返さずに切り詰める。
                    320px では担当名と操作が入りきらず、以前は次の行に重なっていた。 */}
                <Group gap="sm" align="center" wrap="nowrap" style={{ minWidth: 0 }}>
                  <Text size="sm" truncate>
                    {entry.actor}
                  </Text>
                  <Text size="sm" color="secondary" truncate>
                    {entry.action}
                  </Text>
                  <Badge intent="neutral" variant="subtle" size="sm">
                    {entry.id}
                  </Badge>
                </Group>
                <Text size="xs" color="tertiary" nowrap>
                  {entry.ago}
                </Text>
              </Group>
            )}
          />
        </Stack>
      </Box>
    );
  },
};
