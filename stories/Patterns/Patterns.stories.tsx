import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Input } from "@/components/form/Input/Input";
import { Button } from "@/components/form/Button/Button";
import { Card } from "@/components/data-display/Card/Card";
import { Checkbox } from "@/components/form/Checkbox/Checkbox";
import { Link } from "@/components/navigation/Link/Link";
import { Title } from "@/components/typography/Title/Title";
import { Stack } from "@/components/layout/Stack/Stack";
import { Center } from "@/components/layout/Center/Center";
import { Container } from "@/components/layout/Container/Container";
import Header from "@/components/layout/Header/Header";
import { Avatar } from "@/components/data-display/Avatar/Avatar";
import { AvatarGroup } from "@/components/data-display/AvatarGroup/AvatarGroup";
import { Badge } from "@/components/data-display/Badge/Badge";
import { Divider } from "@/components/layout/Divider/Divider";
import { Selectbox } from "@/components/form/Selectbox/Selectbox";
import { RadioGroup } from "@/components/form/RadioGroup/RadioGroup";
import { Textarea } from "@/components/form/Textarea/Textarea";
import { Switch } from "@/components/form/Switch/Switch";
import { Grid } from "@/components/layout/Grid/Grid";
import { Text } from "@/components/typography/Text/Text";
import { Alert } from "@/components/feedback/Alert/Alert";
import { Icon } from "@/components/media/Icon/Icon";
import { Label } from "@/components/typography/Label/Label";
import { Stats } from "@/components/data-display/Stats/Stats";
import { List, ListItem } from "@/components/data-display/List/List";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { Skeleton } from "@/components/feedback/Skeleton/Skeleton";
import { Group } from "@/components/layout/Group/Group";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta = {
  title: "Patterns/Recipes",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const LoginForm: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center style={{ height: "100vh", backgroundColor: "var(--wim-color-surface)" }}>
        <Card
          style={{
            width: "var(--wim-spacing-5xl)", // Close to 400px? No, 5xl is 2.2rem. 400px is 25rem.
            maxWidth: "400px",
            padding: "var(--wim-spacing-3xl)",
            border: "1px solid", borderColor: "var(--wim-color-border-secondary)",
          }}
        >
          <Stack gap="xl">
            <Stack align="center" gap="md">
              <Title tag="h2" size="xl" align="center" style={{ lineHeight: 1 }}>
                {t("login.title")}
              </Title>
              <Text
                content={t("login.subtitle")}
                color="deepgray"
                size="sm"
              />
            </Stack>

            <form onSubmit={(e) => e.preventDefault()}>
              <Stack gap="lg">
                <Label label={t("login.email")} htmlFor="login-email">
                  <Input
                    id="login-email"
                    placeholder={t("login.email_placeholder")}
                    fullWidth
                  />
                </Label>

                <Label label={t("login.password")} htmlFor="login-password">
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    fullWidth
                  />
                </Label>

                <Stack direction="column" gap="sm" align="start">
                  <label
                    htmlFor="remember-me"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--wim-spacing-md)",
                      fontSize: "var(--wim-font-size-sm)",
                      cursor: "pointer",
                      color: "var(--wim-color-text-secondary)",
                    }}
                  >
                    <Checkbox id="remember-me" />
                    {t("login.remember_me")}
                  </label>
                  <Link href="#" style={{ fontSize: "var(--wim-font-size-sm)" }}>
                    {t("login.forgot_password")}
                  </Link>
                </Stack>

                <Stack gap="sm">
                  <Button variant="solid"
                    style={{ width: "100%" }}>{t("login.sign_in")}</Button>

                  <Button
                    variant="outline"
                    style={{ width: "100%" }}
                    onClick={() => {}}
                  >{t("login.sign_in_google")}</Button>
                </Stack>
              </Stack>
            </form>

            <Stack direction="row" justify="center" gap="2xs">
              <Text
                content={t("login.no_account")}
                size="sm"
                color="gray"
              />
              <Link href="#" style={{ fontSize: "0.875rem" }}>
                {t("login.sign_up")}
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Center>
    );
  },
};

export const DashboardHeader: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ minHeight: "400px", backgroundColor: "var(--wim-color-surface)" }}>
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
            style={{ gap: "16px", flex: 1, overflow: "hidden" }}
          >
            <button
              aria-label="Toggle Menu"
              className="mobile-only"
              style={{
                background: "none",
                border: "none",
                fontSize: "var(--wim-font-size-lg)",
                cursor: "pointer",
                padding: "var(--wim-spacing-lg)",
              }}
            >
              ☰
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
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  color: "var(--wim-color-text-primary)",
                }}
              >
                WIM UI
              </span>
            </Stack>

            <Stack
              as="nav"
              direction="row"
              gap="lg"
              className="desktop-only"
              style={{ marginLeft: "var(--wim-spacing-4xl)" }}
            >
              <Link
                href="#"
                priority="secondary"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {t("dashboard.header_dashboard")}
              </Link>
              <Link
                href="#"
                priority="secondary"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {t("dashboard.header_projects")}
              </Link>
              <Link
                href="#"
                priority="secondary"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {t("dashboard.header_team")}
              </Link>
              <Link
                href="#"
                priority="secondary"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {t("dashboard.header_settings")}
              </Link>
            </Stack>
          </Header.Section>

          <Header.Section align="end" style={{ gap: "16px", flexShrink: 0 }}>
            <div className="header-search">
              <Input placeholder={t("dashboard.header_search_placeholder")} fullWidth leftIcon="SearchIcon" />
            </div>

            <Divider orientation="vertical" style={{ height: "var(--wim-spacing-4xl)" }} />

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
                aria-label="Notifications"
              />
              <Badge
                status="secondary"
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
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--wim-color-text-primary)",
                  }}
                >
                  John Doe
                </span>
                <span
                  style={{ fontSize: "0.75rem", color: "var(--wim-color-text-secondary)" }}
                >
                  {t("dashboard.header_admin")}
                </span>
              </Stack>
            </Stack>
          </Header.Section>
        </Header>

        <Container style={{ padding: "32px" }}>
          <Stack gap="xl">
            <Title tag="h2" size="xl">
              {t("dashboard.overview_title")}
            </Title>
            <Grid
              cols="repeat(auto-fit, minmax(280px, 1fr))"
              gap={24}
              justify="center"
            >
              {[1, 2, 3].map((i) => (
                <Stats
                  key={i}
                  style={{
                    border: "1px solid", borderColor: "var(--wim-color-border-secondary)",
                  }}
                >
                  <Stack justify="space-between" align="center" direction="row">
                    <Stats.Label>{t("dashboard.stats_revenue")}</Stats.Label>
                    <Badge status="neutral" content="+12.5%" size="sm" />
                  </Stack>
                  <Stats.Value>
                    <Title tag="h3" size="xl" style={{ whiteSpace: "nowrap" }}>
                      $45,231.89
                    </Title>
                  </Stats.Value>
                  <Stats.Description>{t("dashboard.stats_last_month")}</Stats.Description>
                </Stats>
              ))}
            </Grid>
          </Stack>
        </Container>
      </div>
    );
  },
};

export const UserProfileForm: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center style={{ backgroundColor: "var(--wim-color-surface)", padding: "var(--wim-spacing-xl)" }}>
        <Card
          style={{
            maxWidth: "1000px",
            width: "100%",
            padding: "0",
            overflow: "hidden",
            border: "1px solid", borderColor: "var(--wim-color-border-secondary)",
          }}
        >
          <div
            style={{
              padding: "var(--wim-spacing-xl)",
              borderBottom: "1px solid var(--wim-color-border-secondary)",
            }}
          >
            <Title tag="h2" size="lg">
              {t("profile.title")}
            </Title>
            <Text
              content={t("profile.subtitle")}
              color="deepgray"
              style={{ marginTop: "var(--wim-spacing-xs)" }}
            />
          </div>

          <Grid
            cols={{ base: 1, md: "250px 1fr" }}
            gap={0}
            style={{ minHeight: "600px" }}
          >
            {/* Sidebar Navigation */}
            <div
              style={{
                borderRight: "1px solid var(--wim-color-border-secondary)",
                backgroundColor: "var(--wim-color-surface)",
              }}
            >
              <div style={{ padding: "var(--wim-spacing-xl)" }}>
                <Stack gap="sm" align="stretch">
                  <Sidebar.Item active>{t("profile.nav_general")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_security")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_notifications")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_billing")}</Sidebar.Item>
                </Stack>
              </div>
            </div>

            {/* Main Form Content */}
            <div style={{ padding: "32px", overflowX: "hidden" }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <Stack gap="xl">
                  {/* Profile Picture Section */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--wim-spacing-xl)",
                      flexWrap: "wrap",
                    }}
                  >
                    <Avatar
                      size="lg"
                      style={{ width: "var(--wim-spacing-5xl)", height: "var(--wim-spacing-5xl)", fontSize: "var(--wim-font-size-2xl)" }}
                    />
                    <Stack gap="xs">
                      <Title tag="h3" size="sm">
                        {t("profile.pic_title")}
                      </Title>
                      <div style={{ display: "flex", gap: "var(--wim-spacing-md)" }}>
                        <Button size="sm"
                          variant="outline">{t("profile.btn_change")}</Button>
                        <Button size="sm" variant="ghost">{t("profile.btn_remove")}</Button>
                      </div>
                    </Stack>
                  </div>

                  <Divider />

                  {/* Personal Information */}
                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.info_title")}
                    </Title>

                    <Stack gap="lg">
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "var(--wim-spacing-xl)",
                        }}
                      >
                        <Label label={t("profile.first_name")} htmlFor="profile-first-name">
                          <Input
                            id="profile-first-name"
                            defaultValue="John"
                            fullWidth
                          />
                        </Label>
                        <Label label={t("profile.last_name")} htmlFor="profile-last-name">
                          <Input
                            id="profile-last-name"
                            defaultValue="Doe"
                            fullWidth
                          />
                        </Label>
                      </div>

                      <Label label={t("profile.email")} htmlFor="profile-email">
                        <Input
                          id="profile-email"
                          type="email"
                          defaultValue="john.doe@example.com"
                          fullWidth
                        />
                      </Label>

                      <Label label={t("profile.bio")} htmlFor="profile-bio">
                        <Textarea
                          id="profile-bio"
                          placeholder={t("profile.bio_placeholder")}
                          rows={4}
                          fullWidth
                          defaultValue="I am a software engineer based in Tokyo."
                        />
                        <Text
                          content={t("profile.bio_char_count")}
                          size="sm"
                          color="gray"
                          style={{ textAlign: "right" }}
                        />
                      </Label>
                    </Stack>
                  </Stack>

                  <Divider />

                  {/* Regional Settings */}
                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.reg_title")}
                    </Title>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "var(--wim-spacing-xl)",
                      }}
                    >
                      <Selectbox
                        label={t("profile.lang_label")}
                        options={[
                          { label: t("profile.lang_en"), value: "en" },
                          { label: t("profile.lang_ja"), value: "ja" },
                          { label: t("profile.lang_es"), value: "es" },
                        ]}
                        defaultValue="en"
                      />
                      <Selectbox
                        label={t("profile.tz_label")}
                        options={[
                          { label: "UTC", value: "utc" },
                          { label: "JST (Japan Standard Time)", value: "jst" },
                          { label: "EST (Eastern Standard Time)", value: "est" },
                        ]}
                        defaultValue="jst"
                      />
                    </div>
                  </Stack>

                  <Divider />

                  {/* Preferences */}
                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.pref_title")}
                    </Title>

                    <Stack gap="lg">
                      <Label label={t("profile.visibility")}>
                        <RadioGroup
                          name="visibility"
                          defaultValue="public"
                          options={[
                            {
                              label: t("profile.visibility_public"),
                              value: "public",
                            },
                            {
                              label: t("profile.visibility_private"),
                              value: "private",
                            },
                            {
                              label:
                                t("profile.visibility_friends"),
                              value: "friends",
                            },
                          ]}
                        />
                      </Label>

                      <Label label={t("profile.notif_label")}>
                        <Stack gap="sm">
                          <Switch defaultChecked>{t("profile.notif_email")}</Switch>
                          <Switch >{t("profile.notif_push")}</Switch>
                        </Stack>
                      </Label>
                    </Stack>
                  </Stack>

                  <Divider />
                  <Group justify="end" gap="md">
                    <Button variant="ghost">{t("profile.btn_cancel")}</Button>
                    <Button variant="solid">{t("profile.btn_save")}</Button>
                  </Group>
                </Stack>
              </form>
            </div>
          </Grid>
        </Card>
      </Center>
    );
  },
};

export const PricingTable: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container style={{ padding: "80px 24px", background: "var(--wim-color-surface)" }}>
          <Stack align="center" gap="3xl" style={{ marginBottom: "64px" }}>
            <Title tag="h2" size="xl" align="center">
              {t("pricing.title")}
            </Title>
            <Container size="sm">
              <Text
                content={t("pricing.subtitle")}
                color="deepgray"
                style={{ textAlign: "center" }}
              />
            </Container>
          </Stack>

        <Grid
          cols={{ base: 1, md: 3 }}
          gap={{ base: 32, lg: 48, xl: 64 }}
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <Card
            style={{
              padding: "32px",
              border: "2px solid", borderColor: "var(--wim-color-border-secondary)",
            }}
          >
            <Stack gap="lg" style={{ height: "100%" }}>
              <Stack gap="lg" align="center" style={{ flex: 1 }}>
                <Stack gap="xs" align="center">
                  <div
                    style={{
                      minHeight: "48px",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Title
                      tag="h3"
                      size="sm"
                      align="center"
                      style={{ margin: 0 }}
                    >
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
                    <Title tag="h4" size="2xl" style={{ margin: 0 }}>
                      $0
                    </Title>
                    <Text
                      content={t("pricing.period")}
                      color="gray"
                      size="sm"
                      style={{ marginLeft: "2px" }}
                    />
                  </div>
                </Stack>
                <div
                  style={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    content={t("pricing.starter_desc")}
                    size="sm"
                    color="deepgray"
                    style={{ textAlign: "center", margin: 0 }}
                  />
                </div>

                <List
                  spacing="normal"
                  style={{ marginTop: "var(--wim-spacing-xl)", alignSelf: "stretch" }}
                >
                  <ListItem iconName="CheckIcon">{t("pricing.starter_feat_1")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.starter_feat_2")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.starter_feat_3")}</ListItem>
                  <ListItem
                    iconName="CheckIcon"
                    className="wim-color-gray"
                    style={{ opacity: 0.5 }}
                  >
                    {t("pricing.starter_feat_4")}
                  </ListItem>
                </List>
              </Stack>

              <Button variant="outline" style={{ width: "100%" }}>{t("pricing.starter_btn")}</Button>
            </Stack>
          </Card>

          <Card
            style={{
              padding: "var(--wim-spacing-xl)",
              border: "var(--wim-border-width-thick) solid var(--wim-color-primary)",
              position: "relative",
            }}
          >

            <Stack gap="lg" style={{ height: "100%" }}>
              <Stack gap="lg" align="center" style={{ flex: 1 }}>
                <Stack gap="xs" align="center">
                  <div
                    style={{
                      minHeight: "48px",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Title
                      tag="h3"
                      size="sm"
                      align="center"
                      style={{ margin: 0 }}
                    >
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
                    <Title tag="h4" size="2xl" style={{ margin: 0 }}>
                      $29
                    </Title>
                    <Text
                      content={t("pricing.period")}
                      color="gray"
                      size="sm"
                      style={{ marginLeft: "2px" }}
                    />
                  </div>
                </Stack>
                <div
                  style={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    content={t("pricing.pro_desc")}
                    size="sm"
                    color="deepgray"
                    style={{ textAlign: "center", margin: 0 }}
                  />
                </div>

                <List
                  spacing="normal"
                  style={{ marginTop: "var(--wim-spacing-xl)", alignSelf: "stretch" }}
                >
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_1")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_2")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_3")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_4")}</ListItem>
                </List>
              </Stack>

              <Button variant="solid" style={{ width: "100%" }}>{t("pricing.pro_btn")}</Button>
            </Stack>
          </Card>

          <Card
            style={{
              padding: "var(--wim-spacing-xl)",
              border: "var(--wim-border-width-thick) solid", borderColor: "var(--wim-color-border-secondary)",
            }}
          >
            <Stack gap="lg" style={{ height: "100%" }}>
              <Stack gap="lg" align="center" style={{ flex: 1 }}>
                <Stack gap="xs" align="center">
                  <div
                    style={{
                      minHeight: "48px",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Title
                      tag="h3"
                      size="sm"
                      align="center"
                      style={{ margin: 0 }}
                    >
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
                    <Title tag="h4" size="2xl" style={{ margin: 0 }}>
                      $99
                    </Title>
                    <Text
                      content={t("pricing.period")}
                      color="gray"
                      size="sm"
                      style={{ marginLeft: "2px" }}
                    />
                  </div>
                </Stack>
                <div
                  style={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    content={t("pricing.ent_desc")}
                    size="sm"
                    color="deepgray"
                    style={{ textAlign: "center", margin: 0 }}
                  />
                </div>

                <List
                  spacing="normal"
                  style={{ marginTop: "var(--wim-spacing-xl)", alignSelf: "stretch" }}
                >
                  <ListItem iconName="CheckIcon">{t("pricing.ent_feat_1")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.ent_feat_2")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.ent_feat_3")}</ListItem>
                </List>
              </Stack>

              <Button variant="outline" style={{ width: "100%" }}>{t("pricing.ent_btn")}</Button>
            </Stack>
          </Card>
        </Grid>
      </Container>
    );
  },
};

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
                  status="primary"
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
                  <Text
                    content={t("hero.desc")}
                    size="lg"
                    color="deepgray"
                  />
                </Stack>
              </Stack>

              <Group gap="xl" wrap="wrap" justify="evenly">
                <Button variant="solid"
                  size="md">{t("hero.btn_started")}</Button>
                <Button variant="outline"
                  size="md">{t("hero.btn_docs")}</Button>
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
                  color="deepgray"
                />
              </Stack>
            </Stack>

            <div style={{ position: "relative" }}>
              <Card
                style={{
                  padding: "0",
                  borderRadius: "24px",
                  boxShadow:
                    "var(--wim-shadow-lg)",
                  overflow: "hidden",
                }}
              >
                <Stack gap="none">
                  <Stack
                    direction="row"
                    gap="xs"
                    align="center"
                    style={{
                      height: "var(--wim-spacing-4xl)",
                      background: "var(--wim-color-bg-secondary)",
                      borderBottom: "1px solid var(--wim-color-border)",
                      padding: "0 var(--wim-spacing-md)",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "var(--wim-radius-full)",
                        background: "var(--wim-color-destructive)",
                      }}
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "var(--wim-radius-full)",
                        background: "var(--wim-color-caution)",
                      }}
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "var(--wim-radius-full)",
                        background: "var(--wim-color-positive)",
                      }}
                    />
                  </Stack>
                  <div style={{ padding: "24px" }}>
                    <Stack gap="lg">
                      <Skeleton variant="text" height={20} width="100%" />
                      <Skeleton variant="text" height={20} width="80%" />
                      <Grid cols={2} gap={16}>
                        <Skeleton
                          variant="rect"
                          height={100}
                          style={{ borderRadius: "8px" }}
                        />
                        <Skeleton
                          variant="rect"
                          height={100}
                          style={{ borderRadius: "8px" }}
                        />
                      </Grid>
                      <Skeleton
                        variant="rect"
                        height={80}
                        width="100%"
                        style={{ borderRadius: "4px" }}
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

export const ErrorPage: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center
        style={{ height: "100vh", backgroundColor: "var(--wim-color-surface)", padding: "24px" }}
      >
        <Stack
          align="center"
          gap="5xl"
          style={{ maxWidth: "600px", textAlign: "center" }}
        >
          <p
            aria-hidden="true"
            style={{
              fontSize: "var(--wim-spacing-5xl)", // Use a large token if possible, or rem
              fontWeight: "900",
              color: "var(--wim-color-border-secondary)",
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
              color="gray"
              style={{ textAlign: "center" }}
            />
          </Stack>

          <Alert status="info" title={t("error.help_title")} style={{ textAlign: "left" }}>
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
