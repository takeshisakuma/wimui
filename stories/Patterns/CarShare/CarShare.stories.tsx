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
  Checkbox,
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
 * **題材は「借りて返すまで」。** カーシェアを 1 台借りて返す 1 日。
 *
 * **画面に無い操作の結果は出さない**（合成ルール 14）。カバレッジのために
 * 「傷を報告したあと」「写真を上げたあと」を先に置くと、入力手段が無いのに
 * 結果だけが見える。初版の PreDrive がそれで、ユーザーに 3 度差し戻された
 * （2026-08-14）。届くのは ①この画面のコントロールを触った結果 ②車や予約が
 * 最初から持っている値（残燃料、枠番号、予約の時間）だけ。
 *
 * ストーリー 3 本:
 * - Terms      規約を読んで末尾で予約する。`Affix` は予約の要約、`BackTop` は先頭へ
 * - PreDrive   乗る前の項目を付けている途中。チェックが入力。`FloatButton` は常時の電話
 * - Return     返す直前。残燃料は車の値。`SpeedDial` は今できる操作（開いたのは押した位相）
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
 * チェックの 1 行。客の入力はこのボックスだけ。
 */
const CheckRow = ({
  name,
  checked,
}: {
  name: string;
  checked?: boolean;
}) => (
  <Checkbox defaultChecked={checked}>{name}</Checkbox>
);

/**
 * **いつ使う画面か**: 予約を確定する前に規約を読んでいるところ。主役は規約。
 *
 * **貼るのは「何に同意するのか」だけで、同意のボタンは規約の末尾に置く。**
 * 初版は帯の中に「同意して予約する」を入れていたが、**下まで来ていない人の手元に
 * 確定ボタンがある**形になり、同意フローとしては見ない UI だった（ユーザー指摘、
 * 2026-08-14）。同意の操作は読み終わりに置き、貼るのは対象（車・時間・料金）の
 * 提示に限る。これは合成ルール 12（クロームは黙らせる ── クローム側に primary の
 * 面を置かない）と同じ向きで、**この画面の primary は末尾のボタン 1 つだけ**になる。
 *
 * `Affix` / `BackTop` の既定ターゲットは `window`。`AppShell.Main` がスクロール
 * するので、ここは Main を渡す。渡さないと帯は貼らず、戻るも出ない。
 */
export const Terms: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const mainRef = useRef<HTMLElement>(null);
    const getMain = useCallback(() => mainRef.current, []);

    /*
     * **読み終わりの位相で撮る** ── 帯が貼っていて、末尾の同意ボタンに届いていて、
     * `BackTop` が出ている状態。「下まで来て初めてボタンに届く」ことが 1 枚で分かる。
     *
     * 下端は `scrollHeight` で置く（ブラウザが clamp する）。**要素を測って
     * 位置を出すのは避ける** ── `Affix` は貼ると中身を `position: fixed` に移し、
     * 流れには placeholder を残すので、貼ったあとの帯の rect.top は「main の上端」＝
     * scrollTop 相当になる。帯を基準に置き直すと `scrollTop = scrollTop + 余白` を
     * 繰り返して下へ流れる（2026-08-14 実測。clamp のおかげで結果だけは安定するので
     * VRT では気づけない。T176）。下端指定ならその罠に入らない。
     */
    useEffect(() => {
      const main = mainRef.current;
      if (!main) return;

      const place = () => {
        main.scrollTop = main.scrollHeight;
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
                {/* 貼るのは同意の対象（何をいくらで借りるのか）。条を読み進めて
                    見出しが流れても、何についての規約かが手元に残る。操作は入れない。 */}
                <Affix offsetTop={0} target={getMain}>
                  <Box bg="surface-variant" p="sm" radius="md">
                    <Stack gap="2xs">
                      <Text size="xs" color="text-tertiary">
                        {t(ns("terms_affix_label"))}
                      </Text>
                      <Text size="sm">{t(ns("terms_affix"))}</Text>
                    </Stack>
                  </Box>
                </Affix>
                <Stack gap="lg">
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
                {/* 同意は読み終わりに置く。ここがこの画面の唯一の primary。 */}
                <Stack gap="2xs" align="start">
                  <Button>{t(ns("terms_agree"))}</Button>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("terms_agree_note"))}
                  </Text>
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
 * **いつ使う画面か**: 客が借りた車の横で、乗る前の項目を付けている途中。
 * 入力はチェックだけ。4 つ付いているのは、この画面で付けた結果。左後ろのドアは
 * まだ見ていない。電話は貸出中いつでもできる操作で、傷の報告の結果ではない。
 * 押すものは電話 1 つなので `SpeedDial` ではなく `FloatButton`。
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
                  max={5}
                  size="sm"
                  label={t(ns("check_progress"))}
                />
                <Stack gap="lg">
                  <CheckRow name={t(ns("check_r1_name"))} checked />
                  <CheckRow name={t(ns("check_r2_name"))} checked />
                  <CheckRow name={t(ns("check_r3_name"))} checked />
                  <CheckRow name={t(ns("check_r4_name"))} checked />
                  <CheckRow name={t(ns("check_r5_name"))} />
                </Stack>
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
 * **いつ使う画面か**: 枠に停めて、返却を押す直前の車内。残燃料・走行・枠番号は
 * 車と予約が持っている値で、この画面では打たない。半分より下なので返却は止まる。
 * 今できる操作が複数ある＝`SpeedDial`。開いているのは押した位相（VRT 用。
 * hover は定まらないので `trigger="click"` + `open`）。
 *
 * 主たる操作（返却する）は画面の中。右下は「今できること」。
 * `FloatButton` はタグとして書かない。
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
