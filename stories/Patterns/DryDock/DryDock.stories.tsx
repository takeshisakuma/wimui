import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Affix,
  AppShell,
  BackTop,
  Badge,
  Box,
  Button,
  Container,
  DescriptionList,
  DescriptionListDetails,
  DescriptionListItem,
  DescriptionListTerm,
  Flex,
  FloatButton,
  Header,
  Progress,
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
 * **初版は「どういうときに使う画面か分からない」と差し戻された**（2026-08-14）。
 * 3 枚とも地の文だけで、①いま何を頼まれているのか ②どこまで終わっているのか
 * ③次に押すものはどれか が画面に無かった。加えて Orders は文書が短く、
 * 1280×720 でスクロールが発生しないため **`Affix` が貼らず `BackTop` も出ない**
 * ＝実演したい挙動そのものが写らない状態だった。書き直しの方針は
 * 「1 枚に 1 つの用件（照会・巡回・吊り）を置き、状態と次の操作を画面に出す」。
 *
 * ストーリー 3 本（仕事が違うので分ける）:
 * - StandingOrders  20:58 の照会に規程で答える。`Affix` が効いている条と回答ボタンを
 *   連れて回り、`BackTop` で先頭へ戻る
 * - BlockRound      ブロック点検の巡回記録。自分では閉じられない 1 件があり、
 *   唯一の操作＝`FloatButton`（事務所へ電話）
 * - CraneCab        クレーンの運転席。下に人がいて名簿が古い。複数操作＝`SpeedDial`
 *
 * **VRT を決める指定**: StandingOrders は Main を途中までスクロールして撮る（条が貼り、
 * 戻るが見える位相）。CraneCab は `open` と `trigger="click"`（hover は位相が定まらない）。
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

const ns = (k: string) => `docs_stories_patterns:dryDock.${k}`;

/** ドック名と当直だけの帯。3 枚で同じものを載せる（同じ端末の同じ夜）。 */
const WatchHeader = () => {
  const { t } = useTranslation(ALL_NAMESPACES);

  return (
    <Header bordered background="surface-variant">
      <Header.Section>
        <Text size="sm" color="text-secondary">
          {t(ns("org"))}
        </Text>
      </Header.Section>
      <Header.Section align="end">
        <Text size="xs" color="text-tertiary">
          {t(ns("watch"))}
        </Text>
      </Header.Section>
    </Header>
  );
};

/**
 * 巡回の 1 行。状態はラベルの隣に置く（右端の列に揃えると、狭幅で
 * 名前の側が潰れるうえ、行が表のように均一になる）。
 */
const Station = ({
  name,
  note,
  state,
  intent,
}: {
  name: string;
  note: string;
  state: string;
  intent: "success" | "warning" | "danger" | "neutral";
}) => (
  <Stack gap="2xs">
    <Flex align="center" gap="sm" wrap="wrap">
      <Text size="sm">{name}</Text>
      <Badge intent={intent} variant="subtle" size="sm">
        {state}
      </Badge>
    </Flex>
    <Text size="xs" color="text-tertiary">
      {note}
    </Text>
  </Stack>
);

/**
 * **いつ使う画面か**: 長い規程を読みながら、いま来ている照会に答える席。
 * 主役は文書。読んでいるあいだ「効いている条」と「回答」だけを手元に残す。
 *
 * `Affix` / `BackTop` の既定ターゲットは `window`。`AppShell.Main` がスクロール
 * するので、ここは Main を渡す。渡さないと条は貼らず、戻るも出ない。
 */
export const StandingOrders: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const mainRef = useRef<HTMLElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const clausesRef = useRef<HTMLDivElement>(null);
    const getMain = useCallback(() => mainRef.current, []);

    /*
     * 貼っている位相で撮る。**固定値の scrollTop では位相が保証できない** ──
     * 初版は 420 を渡していたが、`Container size="md"`（960px）だと 1280×720 で
     * 文書が 811px しか無く、スクロール量が 156px しか出ないため
     * ①Affix は一度も貼らず ②BackTop（ここでは 200）も出ない、つまり実演したい
     * 挙動が両方写らなかった。位置は文書から計算する（言語で文の高さが変わるので、
     * en / ja / pt で同じ定数は使えない）。
     *
     * **測るのは条の一覧で、帯ではない。** `Affix` は貼ると中身を
     * `position: fixed` に移し、流れには同じ寸法の placeholder を残す。つまり
     * 貼ったあとの帯の rect.top は「main の上端」＝ scrollTop 相当になるので、
     * 帯を基準にすると `scrollTop = scrollTop + 余白` を繰り返して下端まで流れる
     * （2026-08-14 実測: 下端 585 に貼り付き、用件も条の頭も画面から消えていた。
     * clamp のおかげで結果だけは安定するので、VRT では気づけない）。
     * 一覧は fixed にならないので、何回測っても同じ位置に着く。
     */
    useEffect(() => {
      const main = mainRef.current;
      const bar = barRef.current;
      const clauses = clausesRef.current;
      if (!main || !bar || !clauses) return;

      const place = () => {
        const clausesTop =
          clauses.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop;
        // 条の頭が、貼った帯のすぐ下に来る高さ。帯の高さは言語で変わるので測る。
        main.scrollTop = clausesTop - bar.getBoundingClientRect().height - 24;
      };

      place();
      /*
       * 本文の高さは mount のあとにも動く（フォントの到着で字幅が変わり、
       * 翻訳リソースが後から届くこともある）。VRT はフォント待ちのあとに撮るので、
       * mount 時の 1 回だけだと位相がずれる。動いたら置き直し、落ち着いたら手を離す
       * （観測を続けると、実物を触る人のスクロールを奪う）。
       */
      const observer = new ResizeObserver(place);
      const content = main.firstElementChild;
      if (content) observer.observe(content);
      const release = window.setTimeout(() => observer.disconnect(), 2000);

      return () => {
        window.clearTimeout(release);
        observer.disconnect();
      };
    }, []);

    return (
      <AppShell>
        <AppShell.Header>
          <WatchHeader />
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main ref={mainRef}>
            {/* 長い規程は読む幅で置く（960px だと 1 条 1 行で、文書に見えない）。 */}
            <Container size="sm">
              <Stack gap="xl">
                <Stack gap="2xs">
                  <Title tag="h1" size="md">
                    {t(ns("orders_title"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("orders_meta"))}
                  </Text>
                </Stack>
                {/* 用件。Alert には格上げしない（警報ではなく、答えを待っている
                    問い合わせ 1 件）。面の段だけで文書から切る。 */}
                <Box bg="surface-variant" p="lg" radius="md">
                  <Stack gap="xs">
                    <Text size="xs" color="text-tertiary">
                      {t(ns("orders_ask_label"))}
                    </Text>
                    <Text size="md">{t(ns("orders_ask"))}</Text>
                    <Text size="xs" color="text-secondary">
                      {t(ns("orders_ask_by"))}
                    </Text>
                  </Stack>
                </Box>
                <Text size="sm">{t(ns("orders_lead"))}</Text>
                {/* 貼るのは「条文＋回答」。スクロールで用件が流れても、
                    根拠と操作は手元に残る。 */}
                <Affix offsetTop={0} target={getMain}>
                  <Box ref={barRef} bg="surface-variant" p="sm" radius="md">
                    <Flex justify="between" align="center" gap="md" wrap="wrap">
                      <Stack gap="2xs">
                        <Text size="xs" color="text-tertiary">
                          {t(ns("orders_affix_label"))}
                        </Text>
                        <Text size="sm">{t(ns("orders_affix"))}</Text>
                      </Stack>
                      <Button size="sm">{t(ns("orders_affix_action"))}</Button>
                    </Flex>
                  </Box>
                </Affix>
                <Stack gap="lg" ref={clausesRef}>
                  <Text size="sm">{t(ns("orders_p1"))}</Text>
                  <Text size="sm">{t(ns("orders_p2"))}</Text>
                  <Text size="sm">{t(ns("orders_p3"))}</Text>
                  <Text size="sm">{t(ns("orders_p4"))}</Text>
                  <Text size="sm">{t(ns("orders_p5"))}</Text>
                  <Text size="sm">{t(ns("orders_p6"))}</Text>
                  <Text size="sm">{t(ns("orders_p7"))}</Text>
                  <Text size="sm">{t(ns("orders_p8"))}</Text>
                  <Text size="sm">{t(ns("orders_p9"))}</Text>
                  <Text size="sm">{t(ns("orders_p10"))}</Text>
                  <Text size="sm">{t(ns("orders_p11"))}</Text>
                  <Text size="sm">{t(ns("orders_p12"))}</Text>
                </Stack>
                <Stack gap="sm">
                  <Title tag="h2" size="xs">
                    {t(ns("orders_amend_title"))}
                  </Title>
                  <Stack gap="xs">
                    <Text size="sm">{t(ns("orders_amend_1"))}</Text>
                    <Text size="sm">{t(ns("orders_amend_2"))}</Text>
                    <Text size="sm">{t(ns("orders_amend_3"))}</Text>
                  </Stack>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("orders_amend_note"))}
                  </Text>
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
 * **いつ使う画面か**: ブロックの下を歩きながら巡回を記録する手元の画面。
 * 主役は点検の一覧（どこまで終わって、どこで止まっているか）。
 * 押すものは 1 つしかないので `SpeedDial` ではなく `FloatButton`。
 */
export const BlockRound: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <AppShell>
        <AppShell.Header>
          <WatchHeader />
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Container size="sm">
              <Stack gap="xl">
                <Stack gap="2xs">
                  <Title tag="h1" size="md">
                    {t(ns("round_title"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("round_meta"))}
                  </Text>
                </Stack>
                <Progress
                  value={7}
                  max={9}
                  size="sm"
                  label={t(ns("round_progress"))}
                />
                <Stack gap="lg">
                  <Station
                    name={t(ns("round_r1_name"))}
                    note={t(ns("round_r1_note"))}
                    state={t(ns("round_r1_state"))}
                    intent="success"
                  />
                  <Station
                    name={t(ns("round_r2_name"))}
                    note={t(ns("round_r2_note"))}
                    state={t(ns("round_r2_state"))}
                    intent="success"
                  />
                  <Station
                    name={t(ns("round_r3_name"))}
                    note={t(ns("round_r3_note"))}
                    state={t(ns("round_r3_state"))}
                    intent="success"
                  />
                  <Station
                    name={t(ns("round_r4_name"))}
                    note={t(ns("round_r4_note"))}
                    state={t(ns("round_r4_state"))}
                    intent="warning"
                  />
                  <Station
                    name={t(ns("round_r5_name"))}
                    note={t(ns("round_r5_note"))}
                    state={t(ns("round_r5_state"))}
                    intent="neutral"
                  />
                  <Station
                    name={t(ns("round_r6_name"))}
                    note={t(ns("round_r6_note"))}
                    state={t(ns("round_r6_state"))}
                    intent="danger"
                  />
                  <Station
                    name={t(ns("round_r7_name"))}
                    note={t(ns("round_r7_note"))}
                    state={t(ns("round_r7_state"))}
                    intent="neutral"
                  />
                </Stack>
                <Text size="sm" color="text-secondary">
                  {t(ns("round_note"))}
                </Text>
              </Stack>
            </Container>
            <FloatButton
              iconName="PhoneIcon"
              label={t(ns("round_call"))}
              position="bottom-right"
            />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * **いつ使う画面か**: 巻上を止めたままの運転席。主役は吊りの状態
 * （荷・風・下にいる人・名簿）。操作は複数あって、手袋のまま右下から出す。
 *
 * アクションは 4 つ（3 つに揃えない）。止めるのが先で、巻くのは出さない。
 * 開いたまま撮る。`FloatButton` はタグとして書かない。アクションは
 * `SpeedDial` の縦展開既定（inline-end）で右揃え。短いラベルに逃げない。
 */
export const CraneCab: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <AppShell>
        <AppShell.Header>
          <WatchHeader />
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
                  <DescriptionList layout="compact" size="sm">
                    <DescriptionListItem>
                      <DescriptionListTerm>{t(ns("cab_dt_hoist"))}</DescriptionListTerm>
                      <DescriptionListDetails>{t(ns("cab_dd_hoist"))}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t(ns("cab_dt_load"))}</DescriptionListTerm>
                      <DescriptionListDetails>{t(ns("cab_dd_load"))}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t(ns("cab_dt_wind"))}</DescriptionListTerm>
                      <DescriptionListDetails>{t(ns("cab_dd_wind"))}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t(ns("cab_dt_list"))}</DescriptionListTerm>
                      <DescriptionListDetails>
                        <Flex align="center" gap="sm" wrap="wrap">
                          {t(ns("cab_dd_list"))}
                          <Badge intent="warning" variant="subtle" size="sm">
                            {t(ns("cab_list_state"))}
                          </Badge>
                        </Flex>
                      </DescriptionListDetails>
                    </DescriptionListItem>
                  </DescriptionList>
                  <Stack gap="xs">
                    <Text size="xs" color="text-tertiary">
                      {t(ns("cab_lifts_title"))}
                    </Text>
                    <Stack gap="2xs">
                      <Flex align="center" gap="sm" wrap="wrap">
                        <Text size="sm" color="text-secondary">
                          {t(ns("cab_lift1"))}
                        </Text>
                        <Badge intent="success" variant="subtle" size="sm">
                          {t(ns("cab_lift1_state"))}
                        </Badge>
                      </Flex>
                      <Flex align="center" gap="sm" wrap="wrap">
                        <Text size="sm" color="text-secondary">
                          {t(ns("cab_lift2"))}
                        </Text>
                        <Badge intent="success" variant="subtle" size="sm">
                          {t(ns("cab_lift2_state"))}
                        </Badge>
                      </Flex>
                      <Flex align="center" gap="sm" wrap="wrap">
                        <Text size="sm">{t(ns("cab_lift3"))}</Text>
                        <Badge intent="warning" variant="subtle" size="sm">
                          {t(ns("cab_lift3_state"))}
                        </Badge>
                      </Flex>
                      <Flex align="center" gap="sm" wrap="wrap">
                        <Text size="sm" color="text-secondary">
                          {t(ns("cab_lift4"))}
                        </Text>
                        <Badge intent="neutral" variant="subtle" size="sm">
                          {t(ns("cab_lift4_state"))}
                        </Badge>
                      </Flex>
                    </Stack>
                  </Stack>
                  <Stack gap="2xs">
                    <Flex align="center" gap="sm" wrap="wrap">
                      <Text size="sm">{t(ns("cab_under_title"))}</Text>
                      <Badge intent="danger" variant="subtle" size="sm">
                        {t(ns("cab_under_state"))}
                      </Badge>
                    </Flex>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("cab_under_1"))}
                    </Text>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("cab_under_2"))}
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
