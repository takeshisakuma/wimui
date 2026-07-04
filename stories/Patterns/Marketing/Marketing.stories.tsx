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
  Container,
  Grid,
  Group,
  Icon,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
  Title,
} from "wimui";
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
          background:
            "linear-gradient(135deg, var(--wim-color-primary-light) 0%, var(--wim-color-surface) 100%)",
          padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)",
        }}
      >
        <Container>
          <Grid cols={{ base: 1, md: "1fr 1fr" }} gap={48} align="center">
            <Stack gap="3xl">
              <Stack gap="3xl">
                <Badge
                  intent="primary"
                  content={t("hero.badge")}
                  style={{ width: "fit-content" }}
                />
                <Stack gap="2xl">
                  <Title
                    tag="h1"
                    size="2xl"
                    style={{ lineHeight: "1", fontWeight: "800" }}
                  >
                    {t("hero.title")}
                  </Title>
                  <Text content={t("hero.desc")} size="lg" color="text-secondary" />
                </Stack>
              </Stack>

              <Group gap="xl" wrap="wrap" justify="evenly">
                <Button variant="solid" size="md">
                  {t("hero.btn_started")}
                </Button>
                <Button variant="outline" size="md">
                  {t("hero.btn_docs")}
                </Button>
              </Group>

              <Stack direction="row" align="center" gap="md">
                <AvatarGroup size="sm">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} />
                  ))}
                </AvatarGroup>
                <Text
                  content={t("hero.dev_count")}
                  size="sm"
                  color="text-secondary"
                />
              </Stack>
            </Stack>

            <div style={{ position: "relative" }}>
              <Card
                style={{
                  padding: "0",
                  borderRadius: "0",
                  boxShadow: "var(--wim-shadow-md)",
                  overflow: "hidden",
                }}
              >
                <Stack gap="none">
                  <div style={{ padding: "var(--wim-spacing-xl)" }}>
                    <Stack gap="lg">
                      <Skeleton variant="text" height={20} width="100%" />
                      <Skeleton variant="text" height={20} width="80%" />
                      <Grid cols={2} gap={16}>
                        <Skeleton
                          variant="rect"
                          height={100}
                          style={{ borderRadius: "var(--wim-radius-lg)" }}
                        />
                        <Skeleton
                          variant="rect"
                          height={100}
                          style={{ borderRadius: "var(--wim-radius-lg)" }}
                        />
                      </Grid>
                      <Skeleton
                        variant="rect"
                        height={80}
                        width="100%"
                        style={{ borderRadius: "var(--wim-radius-md)" }}
                      />
                    </Stack>
                  </div>
                </Stack>
              </Card>
            </div>
          </Grid>
        </Container>
      </div>
    );
  },
};

export const PricingTable: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface)" }}
      >
        <style>{`
          .pricing-list {
            align-self: stretch;
            padding-left: 3.5rem;
          }
          @media (max-width: 767px) {
            .pricing-list {
              width: fit-content !important;
              margin: 0 auto !important;
              padding-left: 2rem !important;
            }
          }
        `}</style>
        <Stack align="center" gap="3xl" style={{ marginBottom: "var(--wim-spacing-4xl)" }}>
          <Title tag="h2" size="xl" align="center">
            {t("pricing.title")}
          </Title>
          <Container size="sm">
            <Text
              content={t("pricing.subtitle")}
              color="text-secondary"
              style={{ textAlign: "center" }}
            />
          </Container>
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
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              gap: "var(--wim-spacing-md)",
              padding: "var(--wim-spacing-xl)",
              border: "2px solid var(--wim-color-border-secondary)",
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
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.starter_feat_1")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.starter_feat_2")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
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

          <Card
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              gap: "var(--wim-spacing-md)",
              padding: "var(--wim-spacing-xl)",
              border: "var(--wim-border-width-thick) solid var(--wim-color-primary)",
              position: "relative",
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
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.pro_feat_1")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.pro_feat_2")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.pro_feat_3")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.pro_feat_4")}
              </ListItem>
            </List>
            <Button variant="solid" style={{ width: "100%", alignSelf: "end" }}>
              {t("pricing.pro_btn")}
            </Button>
          </Card>

          <Card
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              gap: "var(--wim-spacing-md)",
              padding: "var(--wim-spacing-xl)",
              border: "var(--wim-border-width-thick) solid var(--wim-color-border-secondary)",
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
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.ent_feat_1")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
                {t("pricing.ent_feat_2")}
              </ListItem>
              <ListItem iconName="CheckIcon" iconColor="positive">
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
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface)" }}
      >
        <Stack align="center" gap="2xl" style={{ marginBottom: "56px" }}>
          <Title tag="h2" size="xl" align="center">
            {t("testimonial.title")}
          </Title>
          <Text
            content={t("testimonial.subtitle")}
            color="text-secondary"
            style={{ textAlign: "center" }}
          />
        </Stack>
        <Grid
          cols={{ base: 1, md: 3 }}
          gap={32}
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {people.map((p, i) => (
            <Card
              key={i}
              style={{
                padding: "var(--wim-spacing-xl)",
                border: "1px solid var(--wim-color-border-secondary)",
              }}
            >
              <Stack gap="xl">
                <Text
                  content={`"${p.text}"`}
                  size="md"
                  style={{ lineHeight: 1.6 }}
                />
                <Stack direction="row" align="center" gap="md">
                  <Avatar size="md" />
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
    const SkeletonBox = () => (
      <div
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          minHeight: "6rem",
          borderRadius: "var(--wim-radius-lg)",
          background: "var(--wim-color-surface-variant)",
        }}
      />
    );
    const items = [
      {
        title: t("feature.item_1_title"),
        desc: t("feature.item_1_desc"),
        icon: <Icon name="ExternalLinkIcon" />,
        span: "wim-bento-grid-item--col-span-2",
      },
      {
        title: t("feature.item_2_title"),
        desc: t("feature.item_2_desc"),
        icon: <Icon name="CircleIcon" />,
        span: "wim-bento-grid-item--col-span-1",
      },
      {
        title: t("feature.item_3_title"),
        desc: t("feature.item_3_desc"),
        icon: <Icon name="SquareIcon" />,
        span: "wim-bento-grid-item--col-span-1",
      },
      {
        title: t("feature.item_4_title"),
        desc: t("feature.item_4_desc"),
        icon: <Icon name="CheckIcon" />,
        span: "wim-bento-grid-item--col-span-2",
      },
    ];
    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface)" }}
      >
        <Stack align="center" gap="2xl" style={{ marginBottom: "var(--wim-spacing-3xl)" }}>
          <Badge intent="primary" content={t("feature.badge")} />
          <Title tag="h2" size="xl" align="center">
            {t("feature.title")}
          </Title>
          <Text
            content={t("feature.subtitle")}
            color="text-secondary"
            style={{ textAlign: "center" }}
          />
        </Stack>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.desc}
              header={<SkeletonBox />}
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
      { value: t("cta.stat_1_value"), label: t("cta.stat_1_label") },
      { value: t("cta.stat_2_value"), label: t("cta.stat_2_label") },
      { value: t("cta.stat_3_value"), label: t("cta.stat_3_label") },
    ];
    return (
      <div
        style={{
          background: "var(--wim-color-primary)",
          padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)",
          textAlign: "center",
        }}
      >
        <Container>
          <Stack align="center" gap="3xl">
            <Stack align="center" gap="xl">
              <Title
                tag="h2"
                size="2xl"
                align="center"
                style={{ color: "var(--wim-color-text-on-primary)" }}
              >
                {t("cta.title")}
              </Title>
              <Container size="sm">
                <Text
                  content={t("cta.desc")}
                  style={{ color: "oklch(from var(--wim-color-text-on-primary) l c h / 0.85)", textAlign: "center" }}
                />
              </Container>
            </Stack>
            <Group gap="xl" wrap="wrap" justify="center">
              <Button
                variant="solid"
                size="lg"
                style={{
                  background: "var(--wim-color-bg-component)",
                  color: "var(--wim-color-primary)",
                  border: "none",
                }}
              >
                {t("cta.btn_primary")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{
                  background: "transparent",
                  borderColor: "oklch(from var(--wim-color-text-on-primary) l c h / 0.6)",
                  color: "var(--wim-color-text-on-primary)",
                }}
              >
                {t("cta.btn_secondary")}
              </Button>
            </Group>
            <Grid
              cols={3}
              gap={48}
              style={{ maxWidth: "600px", margin: "var(--wim-spacing-3xl) auto 0" }}
            >
              {stats.map((s, i) => (
                <Stack key={i} align="center" gap="xs">
                  <span
                    style={{
                      fontSize: "var(--wim-font-size-2xl)",
                      fontWeight: 800,
                      color: "var(--wim-color-text-on-primary)",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.value}
                  </span>
                  <Text
                    content={s.label}
                    size="sm"
                    style={{ color: "oklch(from var(--wim-color-text-on-primary) l c h / 0.7)" }}
                  />
                </Stack>
              ))}
            </Grid>
          </Stack>
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
      <Icon name="CheckIcon" size="sm" color="positive" aria-label={t("docs_stories_recipes:feature_comparison.included")} />
    );
    const Dash = () => (
      <span
        style={{ color: "var(--wim-color-text-disabled)", fontWeight: 300 }}
        aria-label={t("docs_stories_recipes:feature_comparison.not_included")}
      >
        —
      </span>
    );
    return (
      <Container
        style={{ padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface)" }}
      >
        <Stack align="center" gap="2xl" style={{ marginBottom: "var(--wim-spacing-3xl)" }}>
          <Title tag="h2" size="xl" align="center">
            {t("compare.title")}
          </Title>
          <Text content={t("compare.subtitle")} color="secondary" />
        </Stack>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
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
                    background: "var(--wim-color-bg-subtle)",
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
                    background: "var(--wim-color-bg-subtle)",
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
                    background: "var(--wim-color-primary-light)",
                    fontSize: "var(--wim-font-size-sm)",
                    color: "var(--wim-color-primary)",
                  }}
                >
                  {t("compare.col_pro")}
                </th>
                <th
                  style={{
                    padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                    textAlign: "center",
                    fontWeight: 600,
                    background: "var(--wim-color-bg-subtle)",
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
                    {f.free ? <Check /> : <Dash />}
                  </td>
                  <td
                    style={{
                      padding: "var(--wim-spacing-md) var(--wim-spacing-xl)",
                      textAlign: "center",
                      background: "var(--wim-color-primary-light)",
                    }}
                  >
                    {f.pro ? <Check /> : <Dash />}
                  </td>
                  <td style={{ padding: "var(--wim-spacing-md) var(--wim-spacing-xl)", textAlign: "center" }}>
                    {f.ent ? <Check /> : <Dash />}
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
      <Icon component={CheckIcon} color="positive" size="sm" />
    );
    const Cross = () => (
      <Icon component={CloseIcon} color="disabled" size="sm" />
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
      <Box style={{ padding: "var(--wim-spacing-3xl) var(--wim-spacing-xl)", background: "var(--wim-color-surface)" }}>
        <style>{`
          @media (max-width: 480px) {
            .wim-feature-comparison-table td,
            .wim-feature-comparison-table th {
              padding: var(--wim-spacing-md) var(--wim-spacing-sm) !important;
            }
            .wim-feature-comparison-table button {
              padding-left: var(--wim-spacing-sm) !important;
              padding-right: var(--wim-spacing-sm) !important;
              font-size: var(--wim-font-size-xs) !important;
            }
          }
        `}</style>
        <Container style={{ maxWidth: "1000px" }}>
          <Stack
            gap="md"
            align="center"
            style={{ textAlign: "center", marginBottom: "var(--wim-spacing-3xl)" }}
          >
            <Title tag="h2" size="xl">
              {t("docs_stories_recipes:feature_comparison.title")}
            </Title>
            <Text color="secondary" size="sm">
              {t("docs_stories_recipes:feature_comparison.subtitle")}
            </Text>
          </Stack>

          <Box
            style={{
              overflow: "hidden",
              borderRadius: "var(--wim-radius-container)",
              border: "var(--wim-border-width-thin) solid var(--wim-color-border)",
              boxShadow: "var(--wim-shadow-sm)",
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
                <tr style={{ background: "var(--wim-color-bg-subtle)" }}>
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
