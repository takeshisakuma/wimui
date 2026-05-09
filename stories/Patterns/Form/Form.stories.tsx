import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Alert,
  Button,
  Card,
  Center,
  Checkbox,
  DescriptionList,
  DescriptionListDetails,
  DescriptionListItem,
  DescriptionListTerm,
  Divider,
  Group,
  Input,
  Label,
  Link,
  PasswordInput,
  PasswordStrength,
  Progress,
  RadioGroup,
  Selectbox,
  Sidebar,
  Stack,
  Stepper,
  Switch,
  Text,
  Textarea,
  Title,
} from "wimui";

const meta: Meta = {
  title: "Patterns/Form",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const LoginForm: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center
        style={{ height: "100vh", backgroundColor: "var(--wim-color-surface)" }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "var(--wim-spacing-3xl)",
            border: "1px solid",
            borderColor: "var(--wim-color-border-secondary)",
          }}
        >
          <Stack gap="xl">
            <Stack align="center" gap="md">
              <Title tag="h2" size="xl" align="center" style={{ lineHeight: 1 }}>
                {t("login.title")}
              </Title>
              <Text content={t("login.subtitle")} color="text-secondary" size="sm" />
            </Stack>

            <form onSubmit={(e) => e.preventDefault()}>
              <Stack gap="lg">
                <Input
                  id="login-email"
                  label={t("login.email")}
                  placeholder={t("login.email_placeholder")}
                  fullWidth
                />
                <Input
                  id="login-password"
                  label={t("login.password")}
                  type="password"
                  placeholder="••••••••"
                  fullWidth
                />
                <Stack direction="column" gap="sm" align="start">
                  <Checkbox id="remember-me">{t("login.remember_me")}</Checkbox>
                  <Link
                    href="#"
                    style={{ fontSize: "var(--wim-font-size-sm)" }}
                  >
                    {t("login.forgot_password")}
                  </Link>
                </Stack>
                <Stack gap="sm">
                  <Button variant="solid" style={{ width: "100%" }}>
                    {t("login.sign_in")}
                  </Button>
                  <Button
                    variant="outline"
                    style={{ width: "100%" }}
                    onClick={() => {}}
                  >
                    {t("login.sign_in_google")}
                  </Button>
                </Stack>
              </Stack>
            </form>

            <Stack direction="row" justify="center" gap="2xs">
              <Text
                content={t("login.no_account")}
                size="sm"
                color="text-tertiary"
              />
              <Link href="#" style={{ fontSize: "var(--wim-font-size-sm)" }}>
                {t("login.sign_up")}
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Center>
    );
  },
};

export const SignupForm: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [password, setPassword] = useState("");

    const calculateScore = (pwd: string): 0 | 1 | 2 | 3 | 4 => {
      if (!pwd) return 0;
      let s = 0;
      if (pwd.length > 8) s++;
      if (/[A-Z]/.test(pwd)) s++;
      if (/[0-9]/.test(pwd)) s++;
      if (/[^A-Za-z0-9]/.test(pwd)) s++;
      return s as 0 | 1 | 2 | 3 | 4;
    };

    return (
      <Center
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--wim-color-surface)",
          padding: "24px",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "var(--wim-spacing-3xl)",
            border: "1px solid var(--wim-color-border-secondary)",
          }}
        >
          <Stack gap="xl">
            <Stack align="center" gap="sm">
              <Title tag="h2" size="xl" align="center">
                {t("signup.title")}
              </Title>
              <Text
                content={t("signup.subtitle")}
                color="text-secondary"
                size="sm"
                style={{ textAlign: "center" }}
              />
            </Stack>

            <form onSubmit={(e) => e.preventDefault()}>
              <Stack gap="lg">
                <Input
                  id="signup-name"
                  label={t("signup.name")}
                  placeholder={t("signup.name_placeholder")}
                  fullWidth
                />
                <Input
                  id="signup-email"
                  label={t("signup.email")}
                  type="email"
                  placeholder={t("signup.email_placeholder")}
                  fullWidth
                />
                <Stack gap="xs">
                  <PasswordInput
                    id="signup-password"
                    label={t("signup.password")}
                    placeholder={t("signup.password_placeholder")}
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password && (
                    <PasswordStrength
                      score={calculateScore(password)}
                      showLabel
                    />
                  )}
                </Stack>
                <Input
                  id="signup-confirm"
                  label={t("signup.confirm_password")}
                  type="password"
                  placeholder={t("signup.confirm_placeholder")}
                  fullWidth
                />
                <Checkbox id="signup-terms">{t("signup.terms")}</Checkbox>
                <Button variant="solid" style={{ width: "100%" }}>
                  {t("signup.btn")}
                </Button>
              </Stack>
            </form>

            <Stack direction="row" justify="center" gap="2xs">
              <Text
                content={t("signup.have_account")}
                size="sm"
                color="text-tertiary"
              />
              <Link href="#" style={{ fontSize: "var(--wim-font-size-sm)" }}>
                {t("signup.sign_in")}
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Center>
    );
  },
};

const WIDE = "(min-width: 560px)";

export const MultiStepForm: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [step, setStep] = useState(0);
    const [isWide, setIsWide] = useState(
      () => typeof window !== "undefined" && window.matchMedia(WIDE).matches
    );

    React.useEffect(() => {
      const mq = window.matchMedia(WIDE);
      const handler = (e: MediaQueryListEvent) => setIsWide(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }, []);

    const steps = [
      { title: t("multistep.step_account") },
      { title: t("multistep.step_profile") },
      { title: t("multistep.step_review") },
    ];

    const formData = {
      email: "john@example.com",
      name: "John Doe",
      company: "Acme Inc.",
      role: "Developer",
    };

    return (
      <Center
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--wim-color-surface)",
          padding: "24px",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "560px",
            padding: "var(--wim-spacing-3xl)",
            border: "1px solid var(--wim-color-border-secondary)",
          }}
        >
          <Stack gap="3xl">
            <Title tag="h2" size="lg" align="center">
              {t("multistep.title")}
            </Title>

            <Stepper
              steps={steps}
              current={step}
              direction={isWide ? "horizontal" : "vertical"}
            />

            <form onSubmit={(e) => e.preventDefault()}>
              {step === 0 && (
                <Stack gap="lg">
                  <Input
                    id="ms-email"
                    label={t("multistep.email")}
                    type="email"
                    defaultValue={formData.email}
                    fullWidth
                  />
                  <Input
                    id="ms-password"
                    label={t("multistep.password")}
                    type="password"
                    defaultValue="••••••••"
                    fullWidth
                  />
                </Stack>
              )}

              {step === 1 && (
                <Stack gap="lg">
                  <Input
                    id="ms-name"
                    label={t("multistep.display_name")}
                    defaultValue={formData.name}
                    fullWidth
                  />
                  <Input
                    id="ms-company"
                    label={t("multistep.company")}
                    defaultValue={formData.company}
                    fullWidth
                  />
                  <Input
                    id="ms-role"
                    label={t("multistep.role")}
                    defaultValue={formData.role}
                    fullWidth
                  />
                </Stack>
              )}

              {step === 2 && (
                <Stack gap="lg">
                  <Title tag="h3" size="sm">
                    {t("multistep.review_title")}
                  </Title>
                  <DescriptionList>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_email")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.email}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_name")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.name}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_company")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.company}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_role")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.role}</DescriptionListDetails>
                    </DescriptionListItem>
                  </DescriptionList>
                </Stack>
              )}
            </form>

            <Group justify="between">
              <Button
                variant="outline"
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
              >
                {t("multistep.btn_back")}
              </Button>
              {step < 2 ? (
                <Button
                  variant="solid"
                  onClick={() => setStep(step + 1)}
                >
                  {t("multistep.btn_next")}
                </Button>
              ) : (
                <Button variant="solid">{t("multistep.btn_submit")}</Button>
              )}
            </Group>
          </Stack>
        </Card>
      </Center>
    );
  },
};

export const WelcomeScreen: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const steps = [
      {
        num: "1",
        title: t("welcome.step_1_title"),
        desc: t("welcome.step_1_desc"),
      },
      {
        num: "2",
        title: t("welcome.step_2_title"),
        desc: t("welcome.step_2_desc"),
      },
      {
        num: "3",
        title: t("welcome.step_3_title"),
        desc: t("welcome.step_3_desc"),
      },
    ];
    return (
      <Center
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--wim-color-surface)",
          padding: "24px",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "48px",
            border: "1px solid var(--wim-color-border-secondary)",
          }}
        >
          <Stack gap="3xl" align="center">
            <div
              style={{
                width: "64px",
                height: "64px",
              borderRadius: "var(--wim-radius-xl)",
                background: "var(--wim-color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--wim-color-text-on-primary)",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              W
            </div>

            <Stack gap="md" align="center">
              <Title tag="h1" size="xl" align="center">
                {t("welcome.title")}
              </Title>
              <Text
                content={t("welcome.subtitle")}
                color="text-secondary"
                style={{ textAlign: "center" }}
              />
            </Stack>

            <Divider style={{ width: "100%" }} />

            <Stack gap="xl" style={{ width: "100%" }}>
              {steps.map((s) => (
                <Stack key={s.num} direction="row" gap="lg" align="start">
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--wim-radius-lg)",
                      background: "var(--wim-color-primary-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Text
                      content={s.num}
                      style={{
                        fontWeight: 700,
                        color: "var(--wim-color-primary)",
                      }}
                    />
                  </div>
                  <Stack gap="2xs">
                    <Text content={s.title} style={{ fontWeight: 600 }} />
                    <Text content={s.desc} size="sm" color="text-secondary" />
                  </Stack>
                </Stack>
              ))}
            </Stack>

            <Group gap="md">
              <Button variant="solid" size="lg">
                {t("welcome.btn_start")}
              </Button>
              <Button variant="outline" size="lg">
                {t("welcome.btn_tour")}
              </Button>
            </Group>
          </Stack>
        </Card>
      </Center>
    );
  },
};

export const ProgressChecklist: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [checked, setChecked] = useState([true, false, false, false, false]);
    const completedCount = checked.filter(Boolean).length;
    const total = checked.length;
    const items = [
      t("checklist.item_1"),
      t("checklist.item_2"),
      t("checklist.item_3"),
      t("checklist.item_4"),
      t("checklist.item_5"),
    ];

    return (
      <Center
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--wim-color-surface)",
          padding: "24px",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "var(--wim-spacing-3xl)",
            border: "1px solid var(--wim-color-border-secondary)",
          }}
        >
          <Stack gap="2xl">
            <Stack gap="sm">
              <Title tag="h2" size="lg">
                {t("checklist.title")}
              </Title>
              <Text
                content={t("checklist.subtitle")}
                color="text-secondary"
                size="sm"
              />
            </Stack>

            <Stack gap="md">
              <Stack direction="row" justify="space-between" align="center">
                <Text
                  content={`${completedCount} / ${total}`}
                  size="sm"
                  color="text-secondary"
                />
                <Text
                  content={`${Math.round((completedCount / total) * 100)}%`}
                  size="sm"
                  style={{ fontWeight: 600 }}
                />
              </Stack>
              <Progress
                value={(completedCount / total) * 100}
                intent={completedCount === total ? "success" : "primary"}
              />
            </Stack>

            <Stack gap="sm">
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "var(--wim-spacing-md) var(--wim-spacing-lg)",
                    borderRadius: "var(--wim-radius-lg)",
                    background: checked[i]
                      ? "var(--wim-color-surface-variant)"
                      : "transparent",
                    border: "1px solid var(--wim-color-border-secondary)",
                    transition: "background 0.2s",
                  }}
                >
                  <Checkbox
                    id={`task-${i}`}
                    checked={checked[i]}
                    onChange={(e) => {
                      const next = [...checked];
                      next[i] = e.target.checked;
                      setChecked(next);
                    }}
                  >
                    <span
                      style={{
                        textDecoration: checked[i] ? "line-through" : "none",
                        color: checked[i]
                          ? "var(--wim-color-text-disabled)"
                          : "inherit",
                      }}
                    >
                      {item}
                    </span>
                  </Checkbox>
                </div>
              ))}
            </Stack>

            {completedCount === total && (
              <Alert intent="success" title={t("checklist.btn_view")} />
            )}
          </Stack>
        </Card>
      </Center>
    );
  },
};

export const UserProfileForm: StoryObj = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center
        style={{
          backgroundColor: "var(--wim-color-surface)",
          padding: "var(--wim-spacing-xl)",
        }}
      >
        <Card
          style={{
            maxWidth: "1000px",
            width: "100%",
            padding: "0",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "var(--wim-color-border-secondary)",
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
              color="text-secondary"
              style={{ marginTop: "var(--wim-spacing-xs)" }}
            />
          </div>

          <style>{`
            .wim-profile-layout {
              display: flex;
              flex-wrap: wrap;
              min-height: 600px;
              container-type: inline-size;
            }
            .wim-profile-sidebar {
              flex: 0 0 250px;
              background-color: var(--wim-color-surface);
              border-right: 1px solid var(--wim-color-border-secondary);
            }
            .wim-profile-content {
              flex: 1 1 350px;
              min-width: 0;
              background-color: var(--wim-color-bg-component);
            }
            @container (max-width: 599px) {
              .wim-profile-sidebar {
                flex-basis: 100%;
                border-right: none;
                border-bottom: 1px solid var(--wim-color-border-secondary);
              }
              .wim-profile-content {
                flex-basis: 100%;
              }
            }
          `}</style>
          <div className="wim-profile-layout">
            <div className="wim-profile-sidebar">
              <div style={{ padding: "var(--wim-spacing-xl)" }}>
                <Stack gap="sm" align="stretch">
                  <Sidebar.Item active>{t("profile.nav_general")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_security")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_notifications")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_billing")}</Sidebar.Item>
                </Stack>
              </div>
            </div>

            <div className="wim-profile-content" style={{ padding: "32px", overflowX: "hidden" }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <Stack gap="xl">
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
                        <Input
                          id="profile-first-name"
                          label={t("profile.first_name")}
                          defaultValue="John"
                          fullWidth
                        />
                        <Input
                          id="profile-last-name"
                          label={t("profile.last_name")}
                          defaultValue="Doe"
                          fullWidth
                        />
                      </div>
                      <Input
                        id="profile-email"
                        label={t("profile.email")}
                        type="email"
                        defaultValue="john.doe@example.com"
                        fullWidth
                      />
                      <Textarea
                        id="profile-bio"
                        label={t("profile.bio")}
                        placeholder={t("profile.bio_placeholder")}
                        rows={4}
                        fullWidth
                        defaultValue="I am a software engineer based in Tokyo."
                      />
                    </Stack>
                  </Stack>

                  <Divider />

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
                          {
                            label: "EST (Eastern Standard Time)",
                            value: "est",
                          },
                        ]}
                        defaultValue="jst"
                      />
                    </div>
                  </Stack>

                  <Divider />

                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.pref_title")}
                    </Title>
                    <Stack gap="lg">
                      <RadioGroup
                        name="visibility"
                        label={t("profile.visibility")}
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
                            label: t("profile.visibility_friends"),
                            value: "friends",
                          },
                        ]}
                      />
                      <Label label={t("profile.notif_label")}>
                        <Stack gap="sm">
                          <Switch defaultChecked>
                            {t("profile.notif_email")}
                          </Switch>
                          <Switch>{t("profile.notif_push")}</Switch>
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
          </div>
        </Card>
      </Center>
    );
  },
};
