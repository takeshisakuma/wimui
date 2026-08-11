import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  AppShell,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  ColorInput,
  ColorPicker,
  Combobox,
  Container,
  CreditCardInput,
  DateRangePicker,
  Divider,
  FieldTemplate,
  Grid,
  Group,
  Header,
  ImageCropper,
  Input,
  InputGroup,
  InputGroupText,
  LinkButton,
  Mentions,
  QueryBuilder,
  RadioGroup,
  RangeSlider,
  RichTextEditor,
  SegmentedControl,
  SignaturePad,
  Slider,
  SmartSearchInput,
  SplitButton,
  Stack,
  SwitchGroup,
  TagInput,
  Text,
  ThemeToggle,
  Title,
  ToggleGroup,
} from "wimui";

/**
 * 8 枚目の合成画面（T32 / T109）。**狙いは「重い入力」の層**で、
 * 単体では成立していても隣り合わせると崩れやすい部品
 * （`RichTextEditor` / `ImageCropper` / `QueryBuilder` / `SignaturePad` /
 * `CreditCardInput` / `ColorPicker`）を、無理なく同居する題材に載せる。
 *
 * 題材は `Patterns/Admin` `Patterns/Form` と同じ Kiyosumi Roasters の採用側。
 * **1 画面に全部は載せない** ── 求人票を書く / 掲載先と支払い / 採用ページの体裁 /
 * 応募者の抽出 / 内定の署名、と**作業ごとにストーリーを分ける**。
 *
 * **主役はストーリーごとに 1 つ**（Default = 本文のエディタ、PageStyle = 写真、
 * TalentPool = 条件式）。primary の面もそれぞれ 1 箇所に絞る。
 *
 * **載せなかったもの**: `FloatButton`（この 5 画面はどれもデスクトップの編集作業で、
 * 画面に浮かせる操作が無い＝置くと「スロットを埋める」ことになる）と `InputBase`
 * （入力の殻そのもので、`Input` / `Combobox` 等の内側で必ず通る）。
 */
const meta = {
  title: "Patterns/Hiring",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_recipes:hiring.${k}`;

/** VRT を決定的にするため、日付は固定値で持つ。 */
const OPENS_AT = new Date("2026-08-17T00:00:00+09:00");
const CLOSES_AT = new Date("2026-09-14T00:00:00+09:00");

/**
 * 求人票を書く画面。**主役は本文のエディタ**で、右のレールは条件欄。
 * 密度のコントラスト（エディタは疎・レールは密）で視線の起点を作る。
 */
export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    /** 社内メモで呼べる相手。並びは役職順でも五十音順でもない。 */
    const teammates = [
      { id: "u-tsuzuki", display: "都築 和真" },
      { id: "u-kowalczyk", display: "Marta Kowalczyk" },
      { id: "u-tokano", display: "戸叶 ひかる" },
      { id: "u-adeyemi", display: "Samuel Adeyemi" },
    ];

    return (
      <AppShell>
        <AppShell.Header>
          {/* `Header` は高さ 64px 固定で、収まらない中身は折り返しも切り詰めもせず
              上下にはみ出す（768px で 19px、390px で 55px 出た）。
              **クロームに置くのは畳めるものだけにする** ── 見出しと状態は本文側へ。 */}
          <Header>
            {/* 左右に振るのは `Header.Section` の役目。`Header` の中身は
                flex アイテムなので、`Group justify="between"` で包むと
                グループ自体が内容幅に縮み、両端揃えが**黙って効かない**。 */}
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
            <Header.Section align="end">
              <Group gap="sm" align="center">
                <SplitButton
                  size="sm"
                  toggleLabel={t(ns("publish_more"))}
                  actions={[
                    { label: t(ns("publish_schedule")) },
                    { label: t(ns("publish_share")) },
                    { label: t(ns("publish_withdraw")), disabled: true },
                  ]}
                >
                  {t(ns("publish"))}
                </SplitButton>
                {/* この画面はホスト（Storybook）のテーマに従う。
                    既定の ThemeToggle は document へ書き戻すので、
                    埋め込むときは applyToDocument / storageKey を切る。 */}
                <ThemeToggle
                  size="sm"
                  applyToDocument={false}
                  storageKey={null}
                  labels={{
                    light: t(ns("theme_light")),
                    dark: t(ns("theme_dark")),
                    toggle: t(ns("theme_toggle")),
                  }}
                />
              </Group>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Stack gap="xl">
              {/* `Title` は `width: 100%` なので、`Group` に入れても隣は次の行へ回る
                  （`justify="between"` は効かない）。素直に縦に積む。 */}
              <Stack gap="2xs">
                <Title tag="h1" size="md">
                  {t(ns("role"))}
                </Title>
                {/* 保存済みの表示はクローム。Alert に格上げしない（必須ルール 12）。 */}
                <Group gap="sm" align="center">
                  <Text size="xs" color="text-tertiary">
                    {t(ns("autosaved"))}
                  </Text>
                  <LinkButton href="#" variant="ghost" size="sm">
                    {t(ns("preview"))}
                  </LinkButton>
                </Group>
              </Stack>
              <Grid
                cols={{ base: 1, lg: "minmax(0, 1fr) minmax(0, 21rem)" }}
                gap="2xl"
              >
              <Stack gap="md">
                <Stack gap="3xs">
                  <Title tag="h2" size="sm">
                    {t(ns("body_heading"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("body_hint"))}
                  </Text>
                </Stack>
                {/* 入力の既定幅は 320px（`max-width` で頭打ち）。カラムを埋める
                    面にするなら `fullWidth` が要る ── `TagInput` も同じ。 */}
                <RichTextEditor
                  fullWidth
                  defaultValue={t(ns("body_html"))}
                  minHeight={320}
                  labels={{
                    toolbar: t(ns("editor_toolbar")),
                    bold: t(ns("editor_bold")),
                    italic: t(ns("editor_italic")),
                    underline: t(ns("editor_underline")),
                    strikethrough: t(ns("editor_strike")),
                    ul: t(ns("editor_ul")),
                    ol: t(ns("editor_ol")),
                    link: t(ns("editor_link")),
                    unlink: t(ns("editor_unlink")),
                    removeFormat: t(ns("editor_clear")),
                  }}
                  aria-label={t(ns("body_heading"))}
                />
                <TagInput
                  fullWidth
                  label={t(ns("skills_label"))}
                  defaultValue={[
                    t(ns("skill_roasting")),
                    t(ns("skill_cupping")),
                    t(ns("skill_early")),
                  ]}
                  placeholder={t(ns("skills_placeholder"))}
                />
              </Stack>

              {/* 条件欄。関連するものを近づけ、群と群の間だけを空ける（近接）。 */}
              <Stack gap="xl">
                <Stack gap="md">
                  {/* `defaultValue` は**入力欄の初期テキスト**で、`options` の
                      `value` ではない。`"roasting"` を渡すと生の値が表示される。 */}
                  <Combobox
                    label={t(ns("family_label"))}
                    defaultValue={t(ns("family_roasting"))}
                    fullWidth
                    options={[
                      { label: t(ns("family_roasting")), value: "roasting" },
                      { label: t(ns("family_floor")), value: "floor" },
                      { label: t(ns("family_delivery")), value: "delivery" },
                      { label: t(ns("family_qc")), value: "qc" },
                    ]}
                    placeholder={t(ns("family_placeholder"))}
                  />
                  <RadioGroup
                    label={t(ns("contract_label"))}
                    defaultValue="fixed"
                    options={[
                      { label: t(ns("contract_permanent")), value: "permanent" },
                      { label: t(ns("contract_fixed")), value: "fixed" },
                      { label: t(ns("contract_part")), value: "part" },
                    ]}
                  />
                </Stack>

                <Stack gap="md">
                  {/* 単位付きの欄は InputGroup で 1 つの塊にし、
                      ラベルとエラーは FieldTemplate 側が持つ。 */}
                  <FieldTemplate
                    label={t(ns("pay_label"))}
                    error={t(ns("pay_error"))}
                    htmlFor="hiring-pay"
                  >
                    <InputGroup fullWidth>
                      <InputGroupText>{t(ns("pay_currency"))}</InputGroupText>
                      <Input
                        id="hiring-pay"
                        defaultValue="1,150"
                        intent="danger"
                        inputMode="numeric"
                        fullWidth
                      />
                      <InputGroupText>{t(ns("pay_unit"))}</InputGroupText>
                    </InputGroup>
                  </FieldTemplate>
                  <RangeSlider
                    label={t(ns("hours_label"))}
                    min={8}
                    max={40}
                    step={2}
                    defaultValue={[24, 36]}
                  />
                </Stack>

                {/* `startProps.label` / `endProps.label` は `DateRangePicker` が
                    `label={undefined}` で**上書きして捨てる**ため、内側の 2 つの入力に
                    名前が付かず axe の `label`（critical）が鳴る。`aria-label` は
                    `{...props}` で input まで届くので、そちらで名前を与える。 */}
                <DateRangePicker
                  label={t(ns("window_label"))}
                  startProps={{
                    defaultValue: OPENS_AT,
                    "aria-label": t(ns("window_start")),
                  }}
                  endProps={{
                    defaultValue: CLOSES_AT,
                    "aria-label": t(ns("window_end")),
                  }}
                />

                <Mentions
                  label={t(ns("memo_label"))}
                  options={teammates}
                  defaultValue={t(ns("memo_value"))}
                  placeholder={t(ns("memo_placeholder"))}
                  rows={3}
                  fullWidth
                />
              </Stack>
              </Grid>
            </Stack>
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * 掲載先と出稿の支払い。**主役は媒体の一覧**で、支払いはその結果。
 * 有料媒体を切るまで金額が動かないので、順番どおりに縦に置く。
 */
export const Distribution: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [boards, setBoards] = useState(["own", "minna"]);

    return (
      <Box p="2xl">
        <Container size="sm" fluid={false}>
        <Stack gap="2xl">
          <Stack gap="3xs">
            <Title tag="h2" size="sm">
              {t(ns("dist_title"))}
            </Title>
            <Text size="sm" color="text-secondary">
              {t(ns("dist_lead"))}
            </Text>
          </Stack>

          <SwitchGroup
            value={boards}
            onChange={setBoards}
            label={t(ns("dist_boards_label"))}
            options={[
              { label: t(ns("board_own")), value: "own" },
              { label: t(ns("board_minna")), value: "minna" },
              { label: t(ns("board_baristas")), value: "baristas" },
              { label: t(ns("board_hw")), value: "hw", disabled: true },
            ]}
          />

          <Divider />

          <Stack gap="md">
            <Text size="sm" color="text-secondary">
              {t(ns("dist_charge"), { amount: "12,800" })}
            </Text>
            <CreditCardInput
              label={t(ns("card_label"))}
              defaultValue="4111111111111111"
              width="md"
            />
            <RadioGroup
              label={t(ns("bill_label"))}
              defaultValue="company"
              direction="horizontal"
              options={[
                { label: t(ns("bill_company")), value: "company" },
                { label: t(ns("bill_reimburse")), value: "reimburse" },
              ]}
            />
          </Stack>

          <Group gap="sm" align="center">
            <Button variant="solid">{t(ns("dist_submit"))}</Button>
            <Text size="xs" color="text-tertiary">
              {t(ns("dist_footnote"))}
            </Text>
          </Group>
        </Stack>
        </Container>
      </Box>
    );
  },
};

/**
 * 採用ページの体裁。**主役は写真**で、色はその上に載る帯の設定。
 * 比率は排他の選択なので `ToggleGroup`（選択状態が要る）。
 */
export const PageStyle: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [ratio, setRatio] = useState(16 / 9);

    return (
      <Box p="2xl">
        <Grid
          cols={{ base: 1, lg: "minmax(0, 1fr) minmax(0, 18rem)" }}
          gap="2xl"
        >
          <Stack gap="md">
            <Stack gap="3xs">
              <Title tag="h2" size="sm">
                {t(ns("style_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("style_hint"))}
              </Text>
            </Stack>
            <ImageCropper
              src="./images/sample-landscape.png"
              aspectRatio={ratio}
              applyLabel={t(ns("style_apply"))}
            />
          </Stack>

          <Stack gap="xl">
            {/* 排他の選択なので `ToggleGroup`。`ButtonGroup` は操作を束ねるもので
                選択状態を持たないため、3 つとも同じ見た目のまま残る。 */}
            <ToggleGroup
              label={t(ns("ratio_label"))}
              defaultValue="wide"
              size="sm"
              onChange={(v) =>
                setRatio(v === "square" ? 1 : v === "classic" ? 4 / 3 : 16 / 9)
              }
              options={[
                { label: t(ns("ratio_wide")), value: "wide" },
                { label: t(ns("ratio_classic")), value: "classic" },
                { label: t(ns("ratio_square")), value: "square" },
              ]}
            />

            <Stack gap="md">
              <ColorPicker
                label={t(ns("band_color_label"))}
                defaultValue="#123f35"
                fullWidth
              />
              <Slider
                label={t(ns("band_opacity_label"))}
                min={0}
                max={100}
                step={4}
                defaultValue={68}
              />
              <ColorInput
                label={t(ns("headline_color_label"))}
                defaultValue="#f3ece1"
                fullWidth
              />
            </Stack>

            <Text size="xs" color="text-tertiary">
              {t(ns("style_contrast_note"))}
            </Text>
          </Stack>
        </Grid>
      </Box>
    );
  },
};

/**
 * 応募者の抽出。**主役は条件式**で、検索欄と選考段階の切替はその入口。
 * 件数は条件と内部整合させる（27 ≤ 184）。
 */
export const TalentPool: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [stage, setStage] = useState("screening");

    return (
      <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="3xs">
            <Title tag="h2" size="sm">
              {t(ns("pool_title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("pool_hint"))}
            </Text>
          </Stack>

          {/* 入力の `width` は **max-width** として効くので（`--wim-input-width`）、
              flex 行に置くと内容幅（228px）まで縮み、placeholder が 2 行になって
              左のアイコンが 2 行目の高さに残る。列を作って `fullWidth` で埋める。 */}
          <Grid cols={{ base: 1, sm: "minmax(0, 22rem) auto" }} gap="md" align="end">
            <SmartSearchInput
              fullWidth
              placeholder={t(ns("pool_search_placeholder"))}
            />
            {/* 見ているデータの切り替え（即時反映）は `SegmentedControl`。
                `ToggleGroup` は「チェックボックス／ラジオのボタン版」＝**値を持つ
                入力**で、ツールバーや設定の側（この画面では PageStyle の切り抜き比率）。
                docs の design intent が両者をこう分けている。 */}
            <SegmentedControl
              value={stage}
              onChange={setStage}
              options={[
                { label: t(ns("stage_applied")), value: "applied" },
                { label: t(ns("stage_screening")), value: "screening" },
                { label: t(ns("stage_interview")), value: "interview" },
              ]}
              size="sm"
            />
          </Grid>

          <QueryBuilder
            fields={[
              { name: "applied_on", label: t(ns("field_applied")), type: "date" },
              { name: "years", label: t(ns("field_years")), type: "number" },
              { name: "shift", label: t(ns("field_shift")), type: "string" },
              { name: "commute", label: t(ns("field_commute")), type: "number" },
              { name: "licence", label: t(ns("field_licence")), type: "boolean" },
            ]}
            /* `operator` は記号で渡す（`>=` / `<=` / `=`）。`greater_equal` の
               ような語を渡すと、演算子の Select が**空のまま黙って描画される**。 */
            defaultQuery={{
              id: "root",
              combinator: "and",
              not: false,
              rules: [
                { id: "r-1", field: "years", operator: ">=", value: 2 },
                {
                  id: "r-2",
                  field: "shift",
                  operator: "contains",
                  value: "early",
                },
                {
                  id: "g-1",
                  combinator: "or",
                  not: false,
                  rules: [
                    { id: "r-3", field: "commute", operator: "<=", value: 45 },
                    { id: "r-4", field: "licence", operator: "=", value: true },
                  ],
                },
              ],
            }}
          />

          {/* 同じ結果集合に対する 2 つの操作なので束ねる。**`ButtonGroup` は
              `width: 100%`**（`joined` では子も `flex: 1 1 auto`）なので、
              行に直接置くと横いっぱいに伸びる。列を与えて幅を決める。 */}
          <Grid
            cols={{ base: 1, sm: "auto minmax(0, 20rem)" }}
            gap="md"
            align="center"
          >
            <Text size="sm" color="text-secondary">
              {t(ns("pool_count"), { matched: 27, total: 184 })}
            </Text>
            <ButtonGroup joined variant="outline">
              <Button size="sm">{t(ns("pool_save"))}</Button>
              <Button size="sm">{t(ns("pool_export"))}</Button>
            </ButtonGroup>
          </Grid>
        </Stack>
      </Box>
    );
  },
};

/**
 * 内定通知の返送。**主役は署名**なので、条件は上に短く置いて読ませる。
 */
export const Offer: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="3xs">
            <Title tag="h2" size="sm">
              {t(ns("offer_title"))}
            </Title>
            <Text size="sm" color="text-secondary">
              {t(ns("offer_terms"))}
            </Text>
          </Stack>

          {/* `width` は canvas にしか効かず、消去ボタンの行は親いっぱいに広がる。
              列そのものを canvas 幅に合わせないと、ボタンが 670px 離れて座る。 */}
          <Grid cols={{ base: "minmax(0, 1fr)", sm: "20rem" }}>
            <SignaturePad
              label={t(ns("offer_sign_label"))}
              width={320}
              height={160}
              canvasAriaLabel={t(ns("offer_sign_aria"))}
              clearLabel={t(ns("offer_sign_clear"))}
            />
          </Grid>

          <Checkbox defaultChecked={false}>{t(ns("offer_confirm"))}</Checkbox>

          <Group gap="sm" align="center">
            <Button variant="solid">{t(ns("offer_submit"))}</Button>
            <Text size="xs" color="text-tertiary">
              {t(ns("offer_footnote"))}
            </Text>
          </Group>
        </Stack>
      </Box>
    );
  },
};
