import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  InputGroup,
  Rating,
  Stack,
  Stats,
  Text,
  Title,
} from "wimui";
import { Sparkline } from "wimui/charts";
import noImage from "@/media/no-image.png";

const meta: Meta = {
  title: "Patterns/Page",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const DashboardHeader: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          minHeight: "400px",
          backgroundColor: "var(--wim-color-surface-app)",
        }}
      >
        <style>{`
          @media (max-width: 992px) {
            .desktop-only { display: none !important; }
            .mobile-only { display: block !important; }
            .header-search { width: 100% !important; max-width: 160px; }
          }
          @media (min-width: 993px) {
            .mobile-only { display: none !important; }
            .header-search { width: 240px; }
          }
        `}</style>
        <Header
          bordered
          sticky
          background="primary"
          style={{ padding: "0 var(--wim-spacing-xl)" }}
        >
          <Header.Section
            align="start"
            style={{ gap: "var(--wim-spacing-2xl)", flex: 1, overflow: "hidden" }}
          >
            <button
              aria-label={t("docs_stories_recipes:page.toggle_menu")}
              className="mobile-only"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "var(--wim-spacing-lg)",
              }}
            >
              <Icon name="AlignJustifyIcon" size="md" color="secondary" />
            </button>
            <Stack
              direction="row"
              align="center"
              gap="sm"
              style={{ flexShrink: 0 }}
            >
              <div
                style={{
                  width: "var(--wim-spacing-4xl)",
                  height: "var(--wim-spacing-4xl)",
                  backgroundColor: "var(--wim-color-primary)",
                  borderRadius: "var(--wim-radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--wim-color-text-on-primary)",
                  fontWeight: "bold",
                }}
              >
                W
              </div>
              <span
                style={{
                  fontSize: "var(--wim-font-size-sm)",
                  fontWeight: "bold",
                  color: "var(--wim-color-text-primary)",
                }}
              >
                WIM UI
              </span>
            </Stack>

            <Stack
              asChild
              direction="row"
              gap="lg"
              className="desktop-only"
              style={{ marginLeft: "var(--wim-spacing-4xl)" }}
            >
              <nav>
                {[
                  t("dashboard.header_dashboard"),
                  t("dashboard.header_projects"),
                  t("dashboard.header_team"),
                  t("dashboard.header_settings"),
                ].map((label) => (
                  <a
                    key={label}
                    href="/"
                    style={{
                      color: "var(--wim-color-text-primary)",
                      textDecoration: "none",
                      fontSize: "var(--wim-font-size-sm)",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </Stack>
          </Header.Section>

          <Header.Section align="end" style={{ gap: "var(--wim-spacing-2xl)", flexShrink: 0 }}>
            <div className="header-search">
              <Input
                placeholder={t("dashboard.header_search_placeholder")}
                fullWidth
                leftIcon="SearchIcon"
              />
            </div>
            <Divider
              orientation="vertical"
              style={{ height: "var(--wim-spacing-4xl)" }}
            />
            <div
              style={{
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon
                name="BellIcon"
                size="md"
                color="secondary"
                aria-label={t("docs_stories_recipes:page.notifications")}
              />
              <Badge
                intent="danger"
                size="sm"
                content="3"
                style={{
                  position: "absolute",
                  top: "calc(-1 * var(--wim-spacing-sm))",
                  right: "calc(-1 * var(--wim-spacing-sm))",
                  minWidth: "var(--wim-spacing-xl)",
                  height: "var(--wim-spacing-xl)",
                  padding: 0,
                }}
              />
            </div>
            <Stack
              direction="row"
              align="center"
              gap="sm"
              style={{ cursor: "pointer" }}
            >
              <Avatar size="md" />
              <Stack gap="none" className="desktop-only">
                <span
                  style={{
                    fontSize: "var(--wim-font-size-sm)",
                    fontWeight: 600,
                    color: "var(--wim-color-text-primary)",
                  }}
                >
                  Aoi Tanaka
                </span>
                <span
                  style={{
                    fontSize: "var(--wim-font-size-xs)",
                    color: "var(--wim-color-text-secondary)",
                  }}
                >
                  {t("dashboard.header_admin")}
                </span>
              </Stack>
            </Stack>
          </Header.Section>
        </Header>

        <Container style={{ padding: "var(--wim-spacing-4xl)" }}>
          <Stack gap="xl">
            <Title tag="h2" size="xl">
              {t("dashboard.overview_title")}
            </Title>
            <Grid
              cols="repeat(auto-fit, minmax(280px, 1fr))"
              gap={24}
              justify="center"
            >
              {[
                {
                  label: t("dashboard.stats_revenue"),
                  value: "$45,231.89",
                  trend: "+12.5%",
                  intent: "success" as const,
                  spark: [28, 30, 29, 33, 32, 36, 38, 40, 42, 45],
                  sparkColor: "var(--wim-color-success)",
                },
                {
                  label: t("dashboard.stats_users"),
                  value: "2,405",
                  trend: "-2.4%",
                  intent: "danger" as const,
                  spark: [26, 25, 27, 24, 25, 23, 24, 22, 23, 24],
                  sparkColor: "var(--wim-color-danger)",
                },
                {
                  label: t("dashboard.stats_active"),
                  value: "1,203",
                  trend: "+5.1%",
                  intent: "success" as const,
                  spark: [10, 11, 10, 12, 11, 12, 11, 13, 12, 12],
                  sparkColor: "var(--wim-color-success)",
                },
              ].map((stat, i) => (
                <Stats key={i}>
                  <Stack gap="xs">
                    <Stack
                      justify="space-between"
                      align="center"
                      direction="row"
                    >
                      <Stats.Label>{stat.label}</Stats.Label>
                      <Badge
                        intent={stat.intent}
                        content={stat.trend}
                        size="lg"
                        variant="subtle"
                      />
                    </Stack>
                    <Stats.Value>{stat.value}</Stats.Value>
                  </Stack>
                  <Sparkline
                    data={stat.spark}
                    type="area"
                    color={stat.sparkColor}
                    width="100%"
                    height={36}
                    showLastDot
                  />
                  <Stats.Description>
                    {t("dashboard.stats_last_month")}
                  </Stats.Description>
                </Stats>
              ))}
            </Grid>
          </Stack>
        </Container>
      </div>
    );
  },
};

export const ErrorPage: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center
        style={{
          height: "100vh",
          backgroundColor: "var(--wim-color-surface-app)",
          padding: "var(--wim-spacing-2xl)",
        }}
      >
        <Stack
          align="center"
          gap="5xl"
          style={{ maxWidth: "600px", textAlign: "center" }}
        >
          <p
            aria-hidden="true"
            style={{
              fontSize: "var(--wim-font-size-7xl)",
              fontWeight: "900",
              color: "var(--wim-color-text-disabled)",
              lineHeight: "1",
              margin: "0",
            }}
          >
            404
          </p>
          <Stack gap="2xl" align="center">
            <Title tag="h1" size="xl" align="center">
              {t("error.title")}
            </Title>
            <Text
              content={t("error.desc")}
              color="text-secondary"
              style={{ textAlign: "center" }}
            />
          </Stack>
          <Alert
            intent="info"
            title={t("error.help_title")}
            titleTag="h2"
            style={{ textAlign: "left" }}
          >
            {t("error.help_desc")}
          </Alert>
          <Stack direction={{ base: "column", sm: "row" }} gap="xl">
            <Button variant="solid">{t("error.btn_home")}</Button>
            <Button variant="outline">{t("error.btn_support")}</Button>
          </Stack>
        </Stack>
      </Center>
    );
  },
};

export const MaintenancePage: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--wim-color-surface-app)",
          padding: "var(--wim-spacing-2xl)",
        }}
      >
        <Stack
          gap="3xl"
          align="center"
          style={{ maxWidth: "560px", textAlign: "center" }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "var(--wim-radius-full)",
              background: "var(--wim-color-warning-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="SettingsIcon" style={{ width: "40px", height: "40px", color: "var(--wim-color-warning, var(--wim-color-warning))" }} />
          </div>

          <Stack gap="md" align="center">
            <Title tag="h1" size="xl" align="center">
              {t("maintenance.title")}
            </Title>
            <Text
              content={t("maintenance.desc")}
              color="text-secondary"
              style={{ textAlign: "center" }}
            />
          </Stack>

          {/* h1 直後の見出しなので h2（axe: heading-order） */}
          <Alert intent="info" title={t("maintenance.eta_label")} titleTag="h2">
            {t("maintenance.eta")}
          </Alert>

          <Card
            style={{
              width: "100%",
              padding: "var(--wim-spacing-xl)",
              border: "1px solid var(--wim-color-border-secondary)",
            }}
          >
            <Stack gap="md">
              <Text
                content={t("maintenance.notify_title")}
                style={{ fontWeight: 600 }}
              />
              <InputGroup>
                <Input
                  id="notify-email"
                  placeholder={t("maintenance.notify_placeholder")}
                  fullWidth
                />
                <Button variant="solid">{t("maintenance.btn_notify")}</Button>
              </InputGroup>
            </Stack>
          </Card>

          <Text
            content={t("maintenance.status")}
            size="sm"
            color="text-secondary"
          />
        </Stack>
      </Center>
    );
  },
};

export const ProductCard: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const ratingLabels = {
      star: (count: number) => `${count} star${count !== 1 ? "s" : ""}`,
      readonly: (count: number, max: number) =>
        `Rating: ${count} out of ${max}`,
    };
    const products = [
      {
        name: t("product.item_1_name"),
        price: t("product.item_1_price"),
        category: t("product.item_1_category"),
        rating: 4,
        count: 128,
      },
      {
        name: t("product.item_2_name"),
        price: t("product.item_2_price"),
        category: t("product.item_2_category"),
        rating: 5,
        count: 84,
      },
      {
        name: t("product.item_3_name"),
        price: t("product.item_3_price"),
        category: t("product.item_3_category"),
        rating: 4,
        count: 56,
      },
      {
        name: t("product.item_4_name"),
        price: t("product.item_4_price"),
        category: t("product.item_4_category"),
        rating: 3,
        count: 210,
      },
    ];
    return (
      <Container
        style={{
          padding: "var(--wim-spacing-5xl) var(--wim-spacing-2xl)",
          background: "var(--wim-color-surface-app)",
        }}
      >
        <Title
          tag="h2"
          size="xl"
          style={{ marginBottom: "var(--wim-spacing-3xl)" }}
        >
          {t("product.title")}
        </Title>
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={24}>
          {products.map((p, i) => (
            <Card
              key={i}
              padding="none"
              style={{ overflow: "hidden" }}
            >
              <Image
                src={noImage}
                alt={t("product.image_alt")}
                height={180}
                width="100%"
                fit="cover"
                radius="none"
              />
              <Stack gap="sm" style={{ padding: "var(--wim-spacing-lg)" }}>
                <Badge
                  intent="primary"
                  content={p.category}
                  size="sm"
                  variant="subtle"
                  style={{ width: "fit-content" }}
                />
                <Title tag="h3" size="sm">
                  {p.name}
                </Title>
                <Stack direction="row" align="center" gap="xs">
                  <Rating
                    value={p.rating}
                    readOnly
                    size="sm"
                    labels={ratingLabels}
                  />
                  <Text
                    content={`(${p.count})`}
                    size="xs"
                    color="text-secondary"
                  />
                </Stack>
                <Stack
                  direction="row"
                  justify="space-between"
                  align="center"
                  style={{ marginTop: "var(--wim-spacing-xs)" }}
                >
                  <span
                    style={{
                      fontSize: "var(--wim-font-size-lg)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {p.price}
                  </span>
                  <Button size="sm" variant="solid">
                    {t("product.btn_add")}
                  </Button>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Container>
    );
  },
};

export const ShoppingCart: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = [
      { name: t("cart.item_1_name"), price: t("cart.item_1_price"), qty: 1 },
      { name: t("cart.item_2_name"), price: t("cart.item_2_price"), qty: 1 },
      { name: t("cart.item_3_name"), price: t("cart.item_3_price"), qty: 2 },
    ];
    const summaryRows = [
      { label: t("cart.subtotal"), value: "$567.00" },
      { label: t("cart.shipping"), value: t("cart.shipping_free") },
      { label: t("cart.tax"), value: "$56.70" },
    ];
    return (
      <Container
        style={{
          padding: "var(--wim-spacing-5xl) var(--wim-spacing-2xl)",
          background: "var(--wim-color-surface-app)",
          maxWidth: "960px",
        }}
      >
        <Title
          tag="h1"
          size="xl"
          style={{ marginBottom: "var(--wim-spacing-3xl)" }}
        >
          {t("cart.title")}
        </Title>
        <Grid cols={{ base: 1, lg: "1fr 340px" }} gap={32}>
          <Stack gap="md">
            {items.map((item, i) => (
              <Card
                key={i}
                style={{
                  padding: "var(--wim-spacing-lg)",
                  border: "1px solid var(--wim-color-border-secondary)",
                }}
              >
                <Stack direction="row" align="start" gap="lg">
                  <Box style={{ flexShrink: 0 }}>
                    <Image
                      src={noImage}
                      alt={t("cart.image_alt")}
                      width={80}
                      height={80}
                      fit="cover"
                      radius="lg"
                    />
                  </Box>
                  <Stack gap="md" style={{ flex: 1, minWidth: 0 }}>
                    <Stack gap="2xs">
                      <Text content={item.name} style={{ fontWeight: 600 }} />
                      <Text content={item.price} color="text-secondary" size="sm" />
                    </Stack>
                    <Stack direction="row" align="center" justify="space-between">
                      <Stack direction="row" align="center" gap="sm">
                        <Button
                          size="sm"
                          variant="outline"
                          aria-label={t("docs_stories_recipes:page.qty_decrease")}
                        >
                          <Icon name="MinusIcon" size="sm" />
                        </Button>
                        <Text content={String(item.qty)} />
                        <Button
                          size="sm"
                          variant="outline"
                          aria-label={t("docs_stories_recipes:page.qty_increase")}
                        >
                          <Icon name="PlusIcon" size="sm" />
                        </Button>
                      </Stack>
                      <Button
                        size="sm"
                        variant="ghost"
                        intent="danger"
                        aria-label={t("docs_stories_recipes:page.remove_item")}
                      >
                        <Icon name="CloseIcon" size="sm" />
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>

          <Card
            style={{
              padding: "var(--wim-spacing-xl)",
              border: "1px solid var(--wim-color-border-secondary)",
              alignSelf: "start",
            }}
          >
            <Stack gap="lg">
              {/* h1 直後の見出しなので h2（axe: heading-order）。見た目は size で維持 */}
              <Title tag="h2" size="md">
                {t("docs_stories_recipes:cart.order_summary")}
              </Title>
              <Divider />
              <Stack gap="sm">
                {summaryRows.map((row, i) => (
                  <Stack key={i} direction="row" justify="space-between">
                    <Text content={row.label} color="text-secondary" size="sm" />
                    <Text content={row.value} size="sm" />
                  </Stack>
                ))}
              </Stack>
              <Divider />
              <Stack direction="row" justify="space-between">
                <Text
                  content={t("cart.total")}
                  style={{ fontWeight: 700 }}
                />
                <Text content="$623.70" style={{ fontWeight: 700 }} />
              </Stack>
              <Stack gap="sm">
                <Text
                  content={t("cart.coupon_label")}
                  size="sm"
                  style={{ fontWeight: 600 }}
                />
                <InputGroup>
                  <Input
                    id="coupon"
                    placeholder={t("cart.coupon_placeholder")}
                    fullWidth
                  />
                  <Button variant="outline">{t("cart.btn_apply")}</Button>
                </InputGroup>
              </Stack>
              <Button variant="solid" style={{ width: "100%" }}>
                {t("cart.btn_checkout")}
              </Button>
              <Button variant="ghost" style={{ width: "100%" }}>
                {t("cart.btn_continue")}
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Container>
    );
  },
};
