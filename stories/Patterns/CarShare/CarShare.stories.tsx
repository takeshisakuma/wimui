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
 * **題材は「借りて返すまで」。** カーシェアを 1 台借りて返す 1 日で、
 * ①予約を確定する前 ②出発前 ③返す直前 の 3 つの席を書く。スマホ 1 台で
 * 完結し、部品はどれも一度は触ったことのある位置に出る。
 *
 * **初版（室蘭の乾ドックの当直）は 2 度差し戻された**（2026-08-14）。
 * 1 度目は「どういうときに使う画面か分からない」で、状態と次の操作を
 * 画面に出して直したが、2 度目は**題材そのもの**が通らなかった ── 当直規程・
 * キール歩行・ブロックの詰めを先に理解しないと、部品の話に届かない。
 * **実在感は「読み手が知っている世界」の中で作る**（`DESIGN.md` の合成ルール
 * 13 に追記した）。専門用語は状態や操作を運ぶ場所に置かない。
 *
 * ストーリー 3 本（仕事が違うので分ける）:
 * - Terms      長い規約を読みながら予約を確定する。`Affix` が予約の要約と
 *              確定ボタンを連れて回り、`BackTop` で先頭へ戻る
 * - PreDrive   出発前の車体チェック。記録に無い傷が 1 件あり、
 *              唯一の操作＝`FloatButton`（サポートに電話）
 * - Return     返却の直前。給油が足りず返却が止まっている。複数操作＝`SpeedDial`
 *
 * **3 枚は規約で繋がる** ── 2 条（給油は半分より上）が Return を止め、
 * 3 条（傷は走り出す前に）が PreDrive の 1 件を説明する。読み手が
 * 「なぜこの画面でこれを押すのか」を、規約を覚えていなくても追える。
 *
 * **VRT を決める指定**: Terms は Main を途中までスクロールして撮る（帯が貼り、
 * 戻るが見える位相）。Return は `open` と `trigger="click"`（hover は位相が
 * 定まらない）。
 */
const meta = {
  title: "Patterns/CarShare",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_patterns:carShare.${k}`;

/** サービス名とステーションだけの帯。3 枚で同じものを載せる（同じ 1 台の同じ日）。 */
const StationHeader = () => {
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
          {t(ns("where"))}
        </Text>
      </Header.Section>
    </Header>
  );
};

/**
 * チェックの 1 行。状態はラベルの隣に置く（右端の列に揃えると、狭幅で
 * 名前の側が潰れるうえ、行が表のように均一になる）。
 */
const CheckRow = ({
  name,
  note,
  state,
  intent,
}: {
  name: string;
  note: string;
  state: string;
  intent: "success" | "warning" | "neutral";
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
 * **いつ使う画面か**: 予約を確定する前に規約を読んでいるところ。主役は規約で、
 * 読んでいるあいだ「何をいくらで借りるのか」と「確定」だけを手元に残す。
 *
 * `Affix` / `BackTop` の既定ターゲットは `window`。`AppShell.Main` がスクロール
 * するので、ここは Main を渡す。渡さないと帯は貼らず、戻るも出ない。
 */
export const Terms: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const mainRef = useRef<HTMLElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const clausesRef = useRef<HTMLDivElement>(null);
    const getMain = useCallback(() => mainRef.current, []);

    /*
     * 貼っている位相で撮る。**固定値の scrollTop では位相が保証できない**
     * （言語で文の高さが変わるので、en / ja / pt で同じ定数は使えない）。
     *
     * **測るのは条の一覧で、帯ではない。** `Affix` は貼ると中身を
     * `position: fixed` に移し、流れには同じ寸法の placeholder を残す。つまり
     * 貼ったあとの帯の rect.top は「main の上端」＝ scrollTop 相当になるので、
     * 帯を基準にすると `scrollTop = scrollTop + 余白` を繰り返して下端まで流れる
     * （2026-08-14 実測。clamp のおかげで結果だけは安定するので VRT では
     * 気づけない。T176）。一覧は fixed にならないので、何回測っても同じ位置に着く。
     */
    useEffect(() => {
      const main = mainRef.current;
      const bar = barRef.current;
      const clauses = clausesRef.current;
      if (!main || !bar || !clauses) return;

      const place = () => {
        const clausesTop =
          clauses.getBoundingClientRect().top -
          main.getBoundingClientRect().top +
          main.scrollTop;
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
          <StationHeader />
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main ref={mainRef}>
            {/* 長い規約は読む幅で置く（960px だと 1 条 1 行で、文書に見えない）。 */}
            <Container size="sm">
              <Stack gap="xl">
                <Stack gap="2xs">
                  <Title tag="h1" size="md">
                    {t(ns("terms_title"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("terms_meta"))}
                  </Text>
                </Stack>
                <Text size="sm">{t(ns("terms_lead"))}</Text>
                {/* 貼るのは「予約の要約＋確定」。スクロールで見出しが流れても、
                    何をいくらで借りるのかと操作は手元に残る。 */}
                <Affix offsetTop={0} target={getMain}>
                  <Box ref={barRef} bg="surface-variant" p="sm" radius="md">
                    <Flex justify="between" align="center" gap="md" wrap="wrap">
                      <Stack gap="2xs">
                        <Text size="xs" color="text-tertiary">
                          {t(ns("terms_affix_label"))}
                        </Text>
                        <Text size="sm">{t(ns("terms_affix"))}</Text>
                      </Stack>
                      <Button size="sm">{t(ns("terms_affix_action"))}</Button>
                    </Flex>
                  </Box>
                </Affix>
                <Stack gap="lg" ref={clausesRef}>
                  <Text size="sm">{t(ns("terms_p1"))}</Text>
                  <Text size="sm">{t(ns("terms_p2"))}</Text>
                  <Text size="sm">{t(ns("terms_p3"))}</Text>
                  <Text size="sm">{t(ns("terms_p4"))}</Text>
                  <Text size="sm">{t(ns("terms_p5"))}</Text>
                  <Text size="sm">{t(ns("terms_p6"))}</Text>
                  <Text size="sm">{t(ns("terms_p7"))}</Text>
                  <Text size="sm">{t(ns("terms_p8"))}</Text>
                  <Text size="sm">{t(ns("terms_p9"))}</Text>
                  <Text size="sm">{t(ns("terms_p10"))}</Text>
                  <Text size="sm">{t(ns("terms_p11"))}</Text>
                  <Text size="sm">{t(ns("terms_p12"))}</Text>
                </Stack>
                <Stack gap="sm">
                  <Title tag="h2" size="xs">
                    {t(ns("terms_cancel_title"))}
                  </Title>
                  <Stack gap="2xs">
                    <Text size="sm">{t(ns("terms_cancel_1"))}</Text>
                    <Text size="sm">{t(ns("terms_cancel_2"))}</Text>
                    <Text size="sm">{t(ns("terms_cancel_3"))}</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Container>
            {/* 既定の 400px はこの丈の文書では出ない（12 条でスクロールできる量は
                1280 幅で 238px しかない）。しきい値は文書の長さに合わせる。 */}
            <BackTop
              target={getMain}
              visibilityHeight={100}
              aria-label={t(ns("back_top"))}
            />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * **いつ使う画面か**: 借りた車の横に立って、乗る前のチェックを記録している
 * ところ。主役はチェックの一覧（どこまで見て、どこで止まっているか）。
 * 押すものは 1 つしかないので `SpeedDial` ではなく `FloatButton`。
 */
export const PreDrive: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <AppShell>
        <AppShell.Header>
          <StationHeader />
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Container size="sm">
              <Stack gap="xl">
                <Stack gap="2xs">
                  <Title tag="h1" size="md">
                    {t(ns("check_title"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("check_meta"))}
                  </Text>
                </Stack>
                <Progress
                  value={4}
                  max={6}
                  size="sm"
                  label={t(ns("check_progress"))}
                />
                <Stack gap="lg">
                  <CheckRow
                    name={t(ns("check_r1_name"))}
                    note={t(ns("check_r1_note"))}
                    state={t(ns("check_r1_state"))}
                    intent="success"
                  />
                  <CheckRow
                    name={t(ns("check_r2_name"))}
                    note={t(ns("check_r2_note"))}
                    state={t(ns("check_r2_state"))}
                    intent="success"
                  />
                  <CheckRow
                    name={t(ns("check_r3_name"))}
                    note={t(ns("check_r3_note"))}
                    state={t(ns("check_r3_state"))}
                    intent="success"
                  />
                  <CheckRow
                    name={t(ns("check_r4_name"))}
                    note={t(ns("check_r4_note"))}
                    state={t(ns("check_r4_state"))}
                    intent="success"
                  />
                  <CheckRow
                    name={t(ns("check_r5_name"))}
                    note={t(ns("check_r5_note"))}
                    state={t(ns("check_r5_state"))}
                    intent="warning"
                  />
                  <CheckRow
                    name={t(ns("check_r6_name"))}
                    note={t(ns("check_r6_note"))}
                    state={t(ns("check_r6_state"))}
                    intent="neutral"
                  />
                </Stack>
                <Text size="sm" color="text-secondary">
                  {t(ns("check_note"))}
                </Text>
              </Stack>
            </Container>
            <FloatButton
              iconName="PhoneIcon"
              label={t(ns("check_call"))}
              position="bottom-right"
            />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * **いつ使う画面か**: 枠に停めて、返却を押す直前の車内。主役は返却の状態
 * （給油・走行・枠・忘れ物）。給油が 2 条の線に足りないので返却は止まっていて、
 * ここから先の道が複数ある＝`SpeedDial`。
 *
 * 主たる操作（返却する）は画面の中に置く。右下に出すのは「何かあったとき」の
 * 操作で、赤いものは押したくない 1 つだけ（`intent="danger"`）。
 * `FloatButton` はタグとして書かない。開いたまま撮る。
 */
export const Return: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <AppShell>
        <AppShell.Header>
          <StationHeader />
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Stack h="100%" justify="between" gap="xl">
              <Container size="sm">
                <Stack gap="xl">
                  <Stack gap="2xs">
                    <Title tag="h1" size="md">
                      {t(ns("return_title"))}
                    </Title>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("return_meta"))}
                    </Text>
                  </Stack>
                  <DescriptionList layout="compact" size="sm">
                    <DescriptionListItem>
                      <DescriptionListTerm>
                        {t(ns("return_dt_fuel"))}
                      </DescriptionListTerm>
                      <DescriptionListDetails>
                        <Flex align="center" gap="sm" wrap="wrap">
                          {t(ns("return_dd_fuel"))}
                          <Badge intent="warning" variant="subtle" size="sm">
                            {t(ns("return_fuel_state"))}
                          </Badge>
                        </Flex>
                      </DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>
                        {t(ns("return_dt_distance"))}
                      </DescriptionListTerm>
                      <DescriptionListDetails>
                        {t(ns("return_dd_distance"))}
                      </DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>
                        {t(ns("return_dt_slot"))}
                      </DescriptionListTerm>
                      <DescriptionListDetails>
                        {t(ns("return_dd_slot"))}
                      </DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>
                        {t(ns("return_dt_items"))}
                      </DescriptionListTerm>
                      <DescriptionListDetails>
                        {t(ns("return_dd_items"))}
                      </DescriptionListDetails>
                    </DescriptionListItem>
                  </DescriptionList>
                  {/* 返却は止まっている。理由をボタンの下に 1 行で置く
                      （Alert に格上げしない ── 警報ではなく、次にやることの案内）。 */}
                  <Stack gap="2xs" align="start">
                    <Button disabled>{t(ns("return_action"))}</Button>
                    <Text size="xs" color="text-tertiary">
                      {t(ns("return_blocked"))}
                    </Text>
                  </Stack>
                  <Text size="sm" color="text-secondary">
                    {t(ns("return_note"))}
                  </Text>
                </Stack>
              </Container>
              <Flex justify="end">
                <SpeedDial
                  trigger="click"
                  open
                  direction="up"
                  aria-label={t(ns("return_dial"))}
                  actions={[
                    { icon: "CreditCardIcon", label: t(ns("return_fuel_log")) },
                    { icon: "ClockIcon", label: t(ns("return_extend")) },
                    { icon: "ImageIcon", label: t(ns("return_damage")) },
                    {
                      icon: "AlertTriangleIcon",
                      label: t(ns("return_trouble")),
                      intent: "danger",
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
