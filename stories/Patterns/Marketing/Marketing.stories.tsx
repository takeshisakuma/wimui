import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Avatar,
  AvatarGroup,
  Badge,
  BentoGrid,
  BentoGridItem,
  Box,
  Button,
  Card,
  Code,
  Container,
  Grid,
  Group,
  Icon,
  List,
  ListItem,
  Progress,
  Stack,
  Stats,
  Text,
  Title,
  VisuallyHidden,
} from "wimui";
import { Sparkline } from "wimui/charts";
import { CheckIcon, CloseIcon } from "@/icon";

const meta: Meta = {
  title: "Patterns/Marketing",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const HeroSection: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          background: "var(--wim-color-surface-app)",
          padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)",
        }}
      >
        <Container>
          <Grid cols={{ base: 1, md: "3fr 2fr" }} gap={{ base: 32, lg: 64 }} align="center">
            <Stack gap="2xl">
              <Text content={t("hero.eyebrow")} size="sm" color="text-secondary" />
              <Stack gap="xl">
                <Title tag="h1" size="3xl" style={{ maxWidth: "22ch" }}>
                  {t("hero.title")}
                </Title>
                <Text
                  content={t("hero.desc")}
                  size="lg"
                  color="text-secondary"
                  style={{ maxWidth: "52ch" }}
                />
              </Stack>

              <Stack direction="row" align="center" gap="lg" wrap="wrap">
                <Button variant="solid" size="md">
                  {t("hero.btn_components")}
                </Button>
                <Button variant="ghost" size="md">
                  {t("hero.btn_tokens")}
                </Button>
              </Stack>

              <Stack direction="row" align="center" gap="md" wrap="wrap">
                <Code code="npm install wimui" />
                <Text content={t("hero.meta")} size="sm" color="text-tertiary" />
              </Stack>
            </Stack>

            <Stats>
              <Stack gap="lg">
                <Stack direction="row" justify="space-between" align="center">
                  <Stats.Label>{t("hero.card_label")}</Stats.Label>
                  <Badge intent="success" variant="subtle" content="+8.3%" />
                </Stack>
                <Stats.Value>24,807</Stats.Value>
                <Sparkline
                  data={[14, 16, 15, 19, 18, 17, 21, 24, 22, 26, 25, 29]}
                  type="area"
                  color="var(--wim-color-success)"
                  width="100%"
                  height={48}
                  showLastDot
                />
                <Stats.Description>{t("hero.card_caption")}</Stats.Description>
              </Stack>
            </Stats>
          </Grid>
        </Container>
      </div>
    );
  },
};

// AI-slop 監査（2026-08-22）で直したのは**コピーだけ**。
//
// 最初は「中央揃えの多用」も指摘して全部を左へ倒したが、**それは規則の読み違い**
// だった（ユーザー指摘）。DESIGN.md は「中央揃え**セクション**は 1 ページ 1 回まで」で、
// **1 つのグリッドの中で繰り返される 3 枚は、セクション 1 つに対する 1 つの整列判断**。
// カードごとに数えると「繰り返しの中では中央揃えを一切使えない」ことになり、
// 四原則の「反復」と衝突する。marketing の他のパターン（hero / feature-section /
// testimonial / cta-section）は全部左揃えなので、ここが中央でも 1 回に収まる。
//
// 実際に直したのは 2 つ:
//   ① 汎用マーケ調の説明文（"Perfect for individuals just getting started." 等）
//   ② 禁止表に名指しされている CTA "Get Started"
//
// 3 段という数と「推奨プランの強調」は**内容から来ている**ので据え置き。
export const PricingTable: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface-app)" }}
      >
        <style>{`
          .pricing-list {
            align-self: stretch;
            /* padding-left は置かない。3.5rem と書いてあったが List の
               ul.root { padding-left: 2rem } に詳細度で負けて**一度も効いていなかった**
               （List が @layer component の外にあったため）。T243 で List を層へ入れると
               初めて効くようになるが、実際に当てると「Dedicated account manager」が
               2 行に折り返してチェック記号とずれる。出荷され続けてきた 2rem を採る。 */
          }
          @media (max-width: 767px) {
            .pricing-list {
              width: fit-content !important;
              margin: 0 auto !important;
              padding-left: 2rem !important;
            }
          }
        `}</style>
        <Stack gap="md" style={{ marginBottom: "var(--wim-spacing-4xl)" }}>
          <Title tag="h2" size="xl">
            {t("pricing.title")}
          </Title>
          <Text content={t("pricing.subtitle")} color="text-secondary" />
        </Stack>

        <Grid
          cols={{ base: 1, md: 3 }}
          gap={{ base: 32, lg: 48, xl: 64 }}
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            gridTemplateRows: "auto auto auto auto auto",
          }}
        >
          <Card
            variant="outline"
            padding="xl"
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              gap: "var(--wim-spacing-md)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Title tag="h3" size="md" align="center" style={{ margin: 0 }}>
                {t("pricing.starter_title")}
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <Title
                tag="h4"
                size="4xl"
                style={{
                  margin: 0,
                  width: "auto",
                  fontSize: "var(--wim-font-size-5xl)",
                  letterSpacing: "-0.02em",
                }}
              >
                $0
              </Title>
              <Text
                content={t("pricing.period")}
                color="text-primary"
                size="lg"
                style={{ marginLeft: "-2px", fontWeight: 600 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                content={t("pricing.starter_desc")}
                size="sm"
                color="text-secondary"
                style={{ textAlign: "center", margin: 0 }}
              />
            </div>
            <List className="pricing-list" spacing="normal">
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.starter_feat_1")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.starter_feat_2")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.starter_feat_3")}
              </ListItem>
              <ListItem
                iconName="CheckIcon"
                className="wim-color-gray"
                style={{ opacity: 0.7 }}
              >
                {t("pricing.starter_feat_4")}
              </ListItem>
            </List>
            <Button variant="outline" style={{ width: "100%", alignSelf: "end" }}>
              {t("pricing.starter_btn")}
            </Button>
          </Card>

          {/* 推奨プランだけ枠をアクセント色にする。Card に「枠の色」を選ぶ API は
              無いが、これは既定値のリセットではなく意味の付与なので残す。 */}
          <Card
            variant="outline"
            padding="xl"
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              gap: "var(--wim-spacing-md)",
              position: "relative",
              borderColor: "var(--wim-color-primary)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Title tag="h3" size="md" align="center" style={{ margin: 0 }}>
                {t("pricing.pro_title")}
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <Title
                tag="h4"
                size="4xl"
                style={{
                  margin: 0,
                  width: "auto",
                  fontSize: "var(--wim-font-size-5xl)",
                  letterSpacing: "-0.02em",
                }}
              >
                $29
              </Title>
              <Text
                content={t("pricing.period")}
                color="text-primary"
                size="lg"
                style={{ marginLeft: "-2px", fontWeight: 600 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                content={t("pricing.pro_desc")}
                size="sm"
                color="text-secondary"
                style={{ textAlign: "center", margin: 0 }}
              />
            </div>
            <List className="pricing-list" spacing="normal">
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.pro_feat_1")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.pro_feat_2")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.pro_feat_3")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.pro_feat_4")}
              </ListItem>
            </List>
            <Button variant="solid" style={{ width: "100%", alignSelf: "end" }}>
              {t("pricing.pro_btn")}
            </Button>
          </Card>

          <Card
            variant="outline"
            padding="xl"
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              gap: "var(--wim-spacing-md)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Title tag="h3" size="md" align="center" style={{ margin: 0 }}>
                {t("pricing.ent_title")}
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <Title
                tag="h4"
                size="4xl"
                style={{
                  margin: 0,
                  width: "auto",
                  fontSize: "var(--wim-font-size-5xl)",
                  letterSpacing: "-0.02em",
                }}
              >
                $99
              </Title>
              <Text
                content={t("pricing.period")}
                color="text-primary"
                size="lg"
                style={{ marginLeft: "-2px", fontWeight: 600 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                content={t("pricing.ent_desc")}
                size="sm"
                color="text-secondary"
                style={{ textAlign: "center", margin: 0 }}
              />
            </div>
            <List className="pricing-list" spacing="normal">
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.ent_feat_1")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.ent_feat_2")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="success">
                {t("pricing.ent_feat_3")}
              </ListItem>
            </List>
            <Button variant="outline" style={{ width: "100%", alignSelf: "end" }}>
              {t("pricing.ent_btn")}
            </Button>
          </Card>
        </Grid>
      </Container>
    );
  },
};

export const Testimonial: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const people = [
      {
        name: t("testimonial.p1_name"),
        role: t("testimonial.p1_role"),
        text: t("testimonial.p1_text"),
      },
      {
        name: t("testimonial.p2_name"),
        role: t("testimonial.p2_role"),
        text: t("testimonial.p2_text"),
      },
      {
        name: t("testimonial.p3_name"),
        role: t("testimonial.p3_role"),
        text: t("testimonial.p3_text"),
      },
    ];
    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface-app)" }}
      >
        <Stack gap="md" style={{ maxWidth: "1100px", margin: "0 auto var(--wim-spacing-4xl)" }}>
          <Title tag="h2" size="xl">
            {t("testimonial.title")}
          </Title>
          <Text content={t("testimonial.subtitle")} color="text-secondary" />
        </Stack>
        <Grid
          cols={{ base: 1, md: 3 }}
          gap={32}
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {people.map((p, i) => (
            <Card key={i} variant="outline" padding="xl">
              <Stack gap="xl">
                <Text
                  content={`"${p.text}"`}
                  size="md"
                  style={{ lineHeight: 1.6 }}
                />
                <Stack direction="row" align="center" gap="md">
                  {/* 同じ灰色の人型アイコンを 3 枚並べると「置き換え待ち」に見える
                      （DESIGN.md のセルフレビュー）。名前からイニシャルを出す。 */}
                  <Avatar
                    size="md"
                    initials={p.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                    alt={p.name}
                  />
                  <Stack gap="none">
                    <Text
                      content={p.name}
                      size="sm"
                      style={{ fontWeight: 600 }}
                    />
                    <Text content={p.role} size="xs" color="text-secondary" />
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Container>
    );
  },
};

export const FeatureSection: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const demoWrap: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      minHeight: "6rem",
      padding: "var(--wim-spacing-xl)",
    };
    // アイコンにトークン準拠の左右余白（8px = spacing-md）を持たせて窮屈さを解消。
    // 上に少し余白（4px = spacing-2xs）を足し、アイコン上端を右の見出し文字の上端に揃える。
    // itemTitle は line-height:normal・font-size 固定で言語別の上書きが無いため、
    // この固定値で en/ja/pt とも同様に揃う。
    const iconWrap: React.CSSProperties = {
      display: "inline-flex",
      paddingInline: "var(--wim-spacing-md)",
      paddingTop: "var(--wim-spacing-2xs)",
    };
    const items = [
      {
        title: t("feature.item_1_title"),
        desc: t("feature.item_1_desc"),
        icon: (
          <span style={iconWrap}>
            <Icon name="ChartIcon" />
          </span>
        ),
        span: "wim-bento-grid-item--col-span-2",
        header: (
          <div style={demoWrap}>
            <Sparkline
              data={[9, 12, 11, 15, 13, 17, 16, 21, 19, 23, 26, 24]}
              type="area"
              color="var(--wim-color-primary)"
              width="100%"
              height={72}
              showLastDot
            />
          </div>
        ),
      },
      {
        title: t("feature.item_2_title"),
        desc: t("feature.item_2_desc"),
        icon: (
          <span style={iconWrap}>
            <Icon name="LoadingIcon" />
          </span>
        ),
        span: "wim-bento-grid-item--col-span-1",
        header: (
          <div style={demoWrap}>
            <Progress value={72} label={t("feature.item_2_demo_label")} />
          </div>
        ),
      },
      {
        title: t("feature.item_3_title"),
        desc: t("feature.item_3_desc"),
        icon: (
          <span style={iconWrap}>
            <Icon name="CheckIcon" />
          </span>
        ),
        span: "wim-bento-grid-item--col-span-1",
        header: (
          <div style={demoWrap}>
            <Group gap="sm" wrap="wrap" justify="center">
              <Badge
                intent="success"
                variant="subtle"
                content={t("feature.item_3_badge_1")}
              />
              <Badge
                intent="info"
                variant="subtle"
                content={t("feature.item_3_badge_2")}
              />
              <Badge
                intent="primary"
                variant="subtle"
                content={t("feature.item_3_badge_3")}
              />
            </Group>
          </div>
        ),
      },
      {
        title: t("feature.item_4_title"),
        desc: t("feature.item_4_desc"),
        icon: (
          <span style={iconWrap}>
            <Icon name="UserIcon" />
          </span>
        ),
        span: "wim-bento-grid-item--col-span-2",
        header: (
          <div style={demoWrap}>
            <AvatarGroup size="md" max={4}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} />
              ))}
            </AvatarGroup>
          </div>
        ),
      },
    ];
    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface-app)" }}
      >
        <Stack gap="md" style={{ marginBottom: "var(--wim-spacing-3xl)" }}>
          <Text content={t("feature.badge")} size="sm" color="text-secondary" />
          <Title tag="h2" size="xl">
            {t("feature.title")}
          </Title>
          <Text content={t("feature.subtitle")} color="text-secondary" />
        </Stack>
        <BentoGrid rowHeight="13rem">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.desc}
              header={item.header}
              className={item.span}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </Container>
    );
  },
};

export const CTASection: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const stats = [
      { value: "205", label: t("cta.stat_1_label") },
      { value: "3", label: t("cta.stat_2_label") },
      { value: "AA", label: t("cta.stat_3_label") },
    ];
    return (
      <div
        style={{
          background: "var(--wim-color-surface-app)",
          padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)",
        }}
      >
        <Container>
          <Card padding="xl" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <Grid cols={{ base: 1, md: "3fr 2fr" }} gap={{ base: 32, lg: 64 }} align="center">
              <Stack gap="2xl">
                <Stack gap="md">
                  <Title tag="h2" size="xl">
                    {t("cta.title")}
                  </Title>
                  <Text content={t("cta.desc")} color="text-secondary" />
                </Stack>
                <Stack direction="row" align="center" gap="lg" wrap="wrap">
                  <Button variant="solid" size="md">
                    {t("cta.btn_primary")}
                  </Button>
                  <Button variant="ghost" size="md">
                    {t("cta.btn_secondary")}
                  </Button>
                </Stack>
              </Stack>
              <Grid cols={3} gap={{ base: 16, lg: 32 }}>
                {stats.map((s, i) => (
                  <Stack key={i} gap="xs">
                    <Text content={s.value} size="xl" weight="bold" />
                    <Text content={s.label} size="sm" color="text-secondary" />
                  </Stack>
                ))}
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>
    );
  },
};

export const ComparisonTable: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const features = [
      {
        label: t("compare.feat_1"),
        free: true,
        pro: true,
        ent: true,
      },
      {
        label: t("compare.feat_2"),
        free: false,
        pro: true,
        ent: true,
      },
      {
        label: t("compare.feat_3"),
        free: false,
        pro: true,
        ent: true,
      },
      {
        label: t("compare.feat_4"),
        free: false,
        pro: false,
        ent: true,
      },
      {
        label: t("compare.feat_5"),
        free: false,
        pro: false,
        ent: true,
      },
      {
        label: t("compare.feat_6"),
        free: false,
        pro: true,
        ent: true,
      },
    ];
    const Check = () => (
      <Icon name="CheckIcon" size="sm" color="success" aria-label={t("docs_stories_recipes:feature_comparison.included")} />
    );
    // T205: 素の `<span>`（generic）に `aria-label` を付けても読まれる保証が
    // 無い（axe `aria-prohibited-attr`）。ダッシュは見た目だけにして、
    // 意味は読み上げ用テキストで渡す。
    const Dash = () => (
      <span style={{ color: "var(--wim-color-text-disabled)", fontWeight: 300 }}>
        <span aria-hidden="true">—</span>
        <VisuallyHidden>
          {t("docs_stories_recipes:feature_comparison.not_included")}
        </VisuallyHidden>
      </span>
    );
    const planCell = (included: boolean) => (included ? <Check /> : <Dash />);

    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface-app)" }}
      >
        <style>{`
          .compare-wrap { max-width: 800px; margin-inline: auto; }
          .compare-cards { display: none; flex-direction: column; gap: var(--wim-spacing-sm); }
          .compare-pro-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* intent-surface-ok: same Pro emphasis band as the matrix column. */
            background: var(--wim-color-primary-muted);
            margin-inline: calc(var(--wim-spacing-md) * -1);
            padding-inline: var(--wim-spacing-md);
            padding-block: var(--wim-spacing-2xs);
            border-radius: var(--wim-radius-component);
          }
          @media (max-width: 767px) {
            .compare-matrix { display: none; }
            .compare-cards { display: flex; }
          }
        `}</style>
        <Stack className="compare-wrap" gap="md" style={{ marginBottom: "var(--wim-spacing-3xl)" }}>
          <Title tag="h2" size="xl">
            {t("compare.title")}
          </Title>
          <Text content={t("compare.subtitle")} color="secondary" />
        </Stack>

        {/* Narrow: one card per feature — the 4-col matrix crushes below ~768. */}
        <div className="compare-wrap compare-cards">
          {features.map((f, i) => (
            <Card key={i} padding="md" variant="outline">
              <Stack gap="sm">
                <Text size="sm" weight="bold">
                  {f.label}
                </Text>
                <Group justify="between" align="center">
                  <Text size="sm" color="secondary">
                    {t("compare.col_free")}
                  </Text>
                  {planCell(f.free)}
                </Group>
                <div className="compare-pro-row">
                  <Text size="sm" weight="bold" color="text-accent">
                    {t("compare.col_pro")}
                  </Text>
                  {planCell(f.pro)}
                </div>
                <Group justify="between" align="center">
                  <Text size="sm" color="secondary">
                    {t("compare.col_enterprise")}
                  </Text>
                  {planCell(f.ent)}
                </Group>
              </Stack>
            </Card>
          ))}
        </div>

        <div
          className="compare-wrap compare-matrix"
          style={{
            overflow: "hidden",
            borderRadius: "var(--wim-radius-container)",
            border: "var(--wim-border-width-thin) solid var(--wim-color-border)",
            boxShadow: "var(--wim-shadow-sm)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              background: "var(--wim-color-surface)",
            }}
          >
            <thead>
                <tr
                style={{
                  borderBottom: "var(--wim-border-width-thin) solid var(--wim-color-border)",
                }}
              >
                <th
                  style={{
                    padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                    textAlign: "left",
                    fontWeight: 600,
                    background: "var(--wim-color-surface-subtle)",
                    fontSize: "var(--wim-font-size-sm)",
                  }}
                >
                  {t("compare.col_feature")}
                </th>
                <th
                  style={{
                    padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                    textAlign: "center",
                    fontWeight: 600,
                    background: "var(--wim-color-surface-subtle)",
                    fontSize: "var(--wim-font-size-sm)",
                  }}
                >
                  {t("compare.col_free")}
                </th>
                <th
                  style={{
                    padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                    textAlign: "center",
                    fontWeight: 700,
                    // intent-surface-ok: 比較表で薦めるプランの列に帯を敷いている。
                    // 「列を通して強調する」形の部品はライブラリに無く、Badge に
                    // 寄せると帯ではなく点になって列の対応が読めなくなる。
                    background: "var(--wim-color-primary-muted)",
                    fontSize: "var(--wim-font-size-sm)",
                    color: "var(--wim-color-text-accent)",
                  }}
                >
                  {t("compare.col_pro")}
                </th>
                <th
                  style={{
                    padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                    textAlign: "center",
                    fontWeight: 600,
                    background: "var(--wim-color-surface-subtle)",
                    fontSize: "var(--wim-font-size-sm)",
                  }}
                >
                  {t("compare.col_enterprise")}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom:
                      i < features.length - 1
                        ? "1px solid var(--wim-color-border)"
                        : "none",
                  }}
                >
                  <td
                    style={{
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      fontSize: "var(--wim-font-size-sm)",
                    }}
                  >
                    {f.label}
                  </td>
                  <td style={{ padding: "var(--wim-spacing-md) var(--wim-spacing-xl)", textAlign: "center" }}>
                    {planCell(f.free)}
                  </td>
                  <td
                    style={{
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      textAlign: "center",
                      // intent-surface-ok: 上のヘッダセルと同じ帯の続き。
                      // ここで切れると強調が列にならない。
                      background: "var(--wim-color-primary-muted)",
                    }}
                  >
                    {planCell(f.pro)}
                  </td>
                  <td style={{ padding: "var(--wim-spacing-md) var(--wim-spacing-xl)", textAlign: "center" }}>
                    {planCell(f.ent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    );
  },
};

export const FeatureComparison: StoryObj = {
  render: function Render() {
    const { t } = useTranslation([...ALL_NAMESPACES, "docs_stories_recipes"]);

    const features = [
      {
        category: t("docs_stories_recipes:feature_comparison.cat_core"),
        items: [
          {
            name: t("docs_stories_recipes:feature_comparison.feat_components"),
            starter: true,
            pro: true,
            enterprise: true,
          },
          {
            name: t("docs_stories_recipes:feature_comparison.feat_updates"),
            starter: true,
            pro: true,
            enterprise: true,
          },
          {
            name: t("docs_stories_recipes:feature_comparison.feat_support"),
            starter: "Community",
            pro: "Email",
            enterprise: "24/7 Phone",
          },
        ],
      },
      {
        category: t("docs_stories_recipes:feature_comparison.cat_advanced"),
        items: [
          {
            name: t("docs_stories_recipes:feature_comparison.feat_patterns"),
            starter: false,
            pro: true,
            enterprise: true,
          },
          {
            name: t("docs_stories_recipes:feature_comparison.feat_custom"),
            starter: false,
            pro: true,
            enterprise: true,
          },
          {
            name: t("docs_stories_recipes:feature_comparison.feat_analytics"),
            starter: false,
            pro: false,
            enterprise: true,
          },
        ],
      },
      {
        category: t("docs_stories_recipes:feature_comparison.cat_security"),
        items: [
          {
            name: t("docs_stories_recipes:feature_comparison.feat_sso"),
            starter: false,
            pro: false,
            enterprise: true,
          },
          {
            name: t("docs_stories_recipes:feature_comparison.feat_audit"),
            starter: false,
            pro: false,
            enterprise: true,
          },
          {
            name: t("docs_stories_recipes:feature_comparison.feat_sla"),
            starter: false,
            pro: "99%",
            enterprise: "99.9%",
          },
        ],
      },
    ];

    const Check = () => (
      <Icon
        component={CheckIcon}
        color="success"
        size="sm"
        aria-label={t("docs_stories_recipes:feature_comparison.included")}
      />
    );
    const Cross = () => (
      <Icon
        component={CloseIcon}
        color="disabled"
        size="sm"
        aria-label={t("docs_stories_recipes:feature_comparison.not_included")}
      />
    );

    const renderValue = (val: boolean | string) => {
      if (typeof val === "boolean") {
        return val ? <Check /> : <Cross />;
      }
      return (
        <Text size="sm" weight="bold">
          {val}
        </Text>
      );
    };

    return (
      <Box py="3xl" px="xl" style={{ background: "var(--wim-color-surface-app)" }}>
        <style>{`
          /* T216: 4 列の表は 768px を下回ると列が潰れる（実測 390px で機能名の
             列が 55.77px・1 行 116.53px。入れ子が深い Audit の一覧では
             列 26.08px・行 375.31px）。角丸のために表を overflow: hidden の箱へ
             直接入れているので横スクロールにも逃げられない。
             同じファイルの ComparisonTable と同じ「狭幅はカード」へ切り替える
             （DESIGN.md「テーブルは内部スクロールで済ませず狭幅モードを明示する」）。 */
          .fc-cards { display: none; flex-direction: column; gap: var(--wim-spacing-2xl); }
          .fc-card-group { display: flex; flex-direction: column; gap: var(--wim-spacing-sm); }
          .fc-card-row { display: flex; justify-content: space-between; align-items: center; }
          @media (max-width: 767px) {
            .fc-matrix { display: none; }
            .fc-cards { display: flex; }
          }
        `}</style>
        <Container style={{ maxWidth: "1000px" }}>
          <Stack gap="md" style={{ marginBottom: "var(--wim-spacing-3xl)" }}>
            <Title tag="h2" size="xl">
              {t("docs_stories_recipes:feature_comparison.title")}
            </Title>
            <Text color="secondary" size="sm">
              {t("docs_stories_recipes:feature_comparison.subtitle")}
            </Text>
          </Stack>

          {/* 狭幅: 機能 1 つ = カード 1 枚。4 列の表は 768px 未満で列が潰れる。 */}
          <div className="fc-cards">
            {features.map((cat, i) => (
              <div className="fc-card-group" key={i}>
                <Text size="xs" weight="bold" color="primary">
                  {cat.category}
                </Text>
                {cat.items.map((item, j) => (
                  <Card key={j} padding="md" variant="outline">
                    <Stack gap="sm">
                      <Text size="sm" weight="bold">
                        {item.name}
                      </Text>
                      <div className="fc-card-row">
                        <Text size="sm" color="secondary">
                          {t("docs_stories_recipes:feature_comparison.col_starter")}
                        </Text>
                        {renderValue(item.starter)}
                      </div>
                      <div className="fc-card-row">
                        <Text size="sm" color="secondary">
                          {t("docs_stories_recipes:feature_comparison.col_pro")}
                        </Text>
                        {renderValue(item.pro)}
                      </div>
                      <div className="fc-card-row">
                        <Text size="sm" color="secondary">
                          {t("docs_stories_recipes:feature_comparison.col_enterprise")}
                        </Text>
                        {renderValue(item.enterprise)}
                      </div>
                    </Stack>
                  </Card>
                ))}
              </div>
            ))}

            {/* 表の tfoot にある申し込み導線。狭幅でも落とさない。 */}
            <Card padding="md" variant="outline">
              <Stack gap="sm">
                <div className="fc-card-row">
                  <Text size="sm" weight="bold">
                    {t("docs_stories_recipes:feature_comparison.col_starter")}
                  </Text>
                  <Button variant="outline" size="sm">
                    {t("docs_stories_recipes:feature_comparison.btn_started")}
                  </Button>
                </div>
                <div className="fc-card-row">
                  <Text size="sm" weight="bold">
                    {t("docs_stories_recipes:feature_comparison.col_pro")}
                  </Text>
                  <Button variant="solid" size="sm">
                    {t("docs_stories_recipes:feature_comparison.btn_started")}
                  </Button>
                </div>
                <div className="fc-card-row">
                  <Text size="sm" weight="bold">
                    {t("docs_stories_recipes:feature_comparison.col_enterprise")}
                  </Text>
                  <Button variant="outline" size="sm">
                    {t("docs_stories_recipes:pricing.contact")}
                  </Button>
                </div>
              </Stack>
            </Card>
          </div>

          <Box
            className="fc-matrix"
            radius="container"
            shadow="sm"
            style={{
              overflow: "hidden",
              border: "var(--wim-border-width-thin) solid var(--wim-color-border)",
            }}
          >
            <table
              className="wim-feature-comparison-table"
              style={{
                width: "100%",
                borderCollapse: "separate",
                borderSpacing: 0,
                background: "var(--wim-color-surface)",
              }}
            >
              <thead>
                <tr style={{ background: "var(--wim-color-surface-subtle)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      borderBottom: "1px solid var(--wim-color-border)",
                    }}
                  >
                    <Text weight="bold" color="text-secondary" size="sm">
                      {t("docs_stories_recipes:feature_comparison.col_feature")}
                    </Text>
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      borderBottom: "1px solid var(--wim-color-border)",
                    }}
                  >
                    <Text weight="bold" size="sm">
                      {t(
                        "docs_stories_recipes:feature_comparison.col_starter",
                      )}
                    </Text>
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      borderBottom: "1px solid var(--wim-color-border)",
                    }}
                  >
                    <Text weight="bold" size="sm">
                      {t("docs_stories_recipes:feature_comparison.col_pro")}
                    </Text>
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      borderBottom: "1px solid var(--wim-color-border)",
                    }}
                  >
                    <Text weight="bold" size="sm">
                      {t(
                        "docs_stories_recipes:feature_comparison.col_enterprise",
                      )}
                    </Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((cat, i) => (
                  <React.Fragment key={i}>
                    <tr>
                      <td
                        colSpan={4}
                        style={{
                          padding: "var(--wim-feature-comparison-cat-padding, var(--wim-spacing-sm)) var(--wim-spacing-xl)",
                          background: "var(--wim-color-surface-variant)",
                          borderBottom: "1px solid var(--wim-color-border)",
                        }}
                      >
                        <Text size="xs" weight="bold" color="primary">
                          {cat.category}
                        </Text>
                      </td>
                    </tr>
                    {cat.items.map((item, j) => (
                      <tr key={j}>
                        <td
                          style={{
                            padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                            borderBottom: "1px solid var(--wim-color-border)",
                          }}
                        >
                          <Text size="sm">{item.name}</Text>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                            borderBottom: "1px solid var(--wim-color-border)",
                          }}
                        >
                          {renderValue(item.starter)}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                            borderBottom: "1px solid var(--wim-color-border)",
                          }}
                        >
                          {renderValue(item.pro)}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                            borderBottom: "1px solid var(--wim-color-border)",
                          }}
                        >
                          {renderValue(item.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    style={{
                      padding: "var(--wim-feature-comparison-footer-padding, var(--wim-spacing-xl))",
                    }}
                  />
                  <td
                    style={{
                      textAlign: "center",
                      padding: "var(--wim-feature-comparison-footer-padding, var(--wim-spacing-xl))",
                    }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      style={{ width: "100%" }}
                    >
                      {t("docs_stories_recipes:feature_comparison.btn_started")}
                    </Button>
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "var(--wim-feature-comparison-footer-padding, var(--wim-spacing-xl))",
                    }}
                  >
                    <Button variant="solid" size="sm" style={{ width: "100%" }}>
                      {t("docs_stories_recipes:feature_comparison.btn_started")}
                    </Button>
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "var(--wim-feature-comparison-footer-padding, var(--wim-spacing-xl))",
                    }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      style={{ width: "100%" }}
                    >
                      {t("docs_stories_recipes:pricing.contact")}
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </Box>
        </Container>
      </Box>
    );
  },
};
