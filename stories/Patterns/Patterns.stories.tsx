import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Input } from "@/components/form/Input/Input";
import { Button } from "@/components/form/Button/Button";
import { Card } from "@/components/data-display/Card/Card";
import { Checkbox } from "@/components/form/Checkbox/Checkbox";
import { Link } from "@/components/navigation/Link/Link";
import { Heading } from "@/components/typography/Heading/Heading";
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
import { Paragraph } from "@/components/typography/Paragraph/Paragraph";
import { Alert } from "@/components/feedback/Alert/Alert";
import { Icon } from "@/components/media/Icon/Icon";
import { Label } from "@/components/typography/Label/Label";
import { Stats } from "@/components/data-display/Stats/Stats";
import { List, ListItem } from "@/components/data-display/List/List";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { Skeleton } from "@/components/feedback/Skeleton/Skeleton";
import { Group } from "@/components/layout/Group/Group";

const meta: Meta = {
  title: "Patterns/Recipes",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const LoginForm: StoryObj = {
  render: () => (
    <Center style={{ height: "100vh", backgroundColor: "var(--wim-color-surface)" }}>
      <Card
        style={{
          width: "400px",
          padding: "32px",
          border: "1px solid", borderColor: "var(--wim-color-border-secondary)",
        }}
      >
        <Stack gap="xl">
          <Stack align="center" gap="md">
            <Heading tag="h2" size="xl" style={{ lineHeight: 1 }}>
              Welcome back
            </Heading>
            <Paragraph
              content="Please enter your details to sign in"
              color="deepgray"
              size="sm"
            />
          </Stack>

          <form onSubmit={(e) => e.preventDefault()}>
            <Stack gap="lg">
              <Label label="Email" htmlFor="login-email">
                <Input
                  id="login-email"
                  placeholder="Enter your email"
                  fullWidth
                />
              </Label>

              <Label label="Password" htmlFor="login-password">
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  fullWidth
                />
              </Label>

              <Stack direction="row" justify="space-between" align="center">
                <label
                  htmlFor="remember-me"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    color: "var(--wim-color-text-secondary)",
                  }}
                >
                  <Checkbox id="remember-me" />
                  Remember me
                </label>
                <Link href="#" style={{ fontSize: "0.875rem" }}>
                  Forgot password?
                </Link>
              </Stack>

              <Stack gap="sm">
                <Button
                  variant="filled"
                  style={{ width: "100%" }}
                  label="Sign In"
                />

                <Button
                  variant="outlined"
                  style={{ width: "100%" }}
                  onClick={() => {}}
                  label="Sign in with Google"
                />
              </Stack>
            </Stack>
          </form>

          <Stack direction="row" justify="center" gap="2xs">
            <Paragraph
              content="Don't have an account?"
              size="sm"
              color="gray"
            />
            <Link href="#" style={{ fontSize: "0.875rem" }}>
              Sign up
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Center>
  ),
};

export const DashboardHeader: StoryObj = {
  render: () => (
    <div style={{ minHeight: "400px", backgroundColor: "var(--wim-color-surface)" }}>
      <style>{`
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                    .mobile-only { display: block !important; }
                    .header-search { width: 100% !important; max-width: 160px; }
                }
                @media (min-width: 769px) {
                    .mobile-only { display: none !important; }
                    .header-search { width: 240px; }
                }
            `}</style>
      <Header
        bordered
        sticky
        background="primary"
        style={{ padding: "0 24px" }}
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
              fontSize: "20px",
              cursor: "pointer",
              padding: "8px",
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
                width: "32px",
                height: "32px",
                backgroundColor: "var(--wim-color-primary)",
                borderRadius: "6px",
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
            style={{ marginLeft: "32px" }}
          >
            <Link
              href="#"
              priority="secondary"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              priority="secondary"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Projects
            </Link>
            <Link
              href="#"
              priority="secondary"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Team
            </Link>
            <Link
              href="#"
              priority="secondary"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Settings
            </Link>
          </Stack>
        </Header.Section>

        <Header.Section align="end" style={{ gap: "16px", flexShrink: 0 }}>
          <div className="header-search">
            <Input placeholder="Search..." fullWidth leftIcon="SearchIcon" />
          </div>

          <Divider orientation="vertical" style={{ height: "24px" }} />

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
                top: "-4px",
                right: "-4px",
                minWidth: "16px",
                height: "16px",
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
                Admin
              </span>
            </Stack>
          </Stack>
        </Header.Section>
      </Header>

      <Container style={{ padding: "32px" }}>
        <Stack gap="xl">
          <Heading tag="h2" size="xl">
            Dashboard Overview
          </Heading>
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
                  <Stats.Label>Total Revenue</Stats.Label>
                  <Badge status="neutral" content="+12.5%" size="sm" />
                </Stack>
                <Stats.Value>
                  <Heading tag="h3" size="xl" style={{ whiteSpace: "nowrap" }}>
                    $45,231.89
                  </Heading>
                </Stats.Value>
                <Stats.Description>Compared to last month</Stats.Description>
              </Stats>
            ))}
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
};

export const UserProfileForm: StoryObj = {
  render: () => (
    <Center style={{ backgroundColor: "var(--wim-color-surface)", padding: "20px" }}>
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
            padding: "24px",
            borderBottom: "1px solid var(--wim-color-border-secondary)",
          }}
        >
          <Heading tag="h2" size="lg">
            Edit Profile
          </Heading>
          <Paragraph
            content="Manage your public profile and settings"
            color="deepgray"
            style={{ marginTop: "4px" }}
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
            <div style={{ padding: "24px" }}>
              <Stack gap="sm" align="stretch">
                <Sidebar.Item active>General Info</Sidebar.Item>
                <Sidebar.Item>Account Security</Sidebar.Item>
                <Sidebar.Item>Notifications</Sidebar.Item>
                <Sidebar.Item>Billing</Sidebar.Item>
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
                    gap: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  <Avatar
                    size="lg"
                    style={{ width: "80px", height: "80px", fontSize: "2rem" }}
                  />
                  <Stack gap="xs">
                    <Heading tag="h3" size="sm">
                      Profile Picture
                    </Heading>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <Button
                        size="sm"
                        variant="outlined"
                        label="Change"
                      />
                      <Button size="sm" variant="ghost" label="Remove" />
                    </div>
                  </Stack>
                </div>

                <Divider />

                {/* Personal Information */}
                <Stack gap="2xl">
                  <Heading tag="h3" size="md">
                    Personal Information
                  </Heading>

                  <Stack gap="lg">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "24px",
                      }}
                    >
                      <Label label="First Name" htmlFor="profile-first-name">
                        <Input
                          id="profile-first-name"
                          defaultValue="John"
                          fullWidth
                        />
                      </Label>
                      <Label label="Last Name" htmlFor="profile-last-name">
                        <Input
                          id="profile-last-name"
                          defaultValue="Doe"
                          fullWidth
                        />
                      </Label>
                    </div>

                    <Label label="Email Address" htmlFor="profile-email">
                      <Input
                        id="profile-email"
                        type="email"
                        defaultValue="john.doe@example.com"
                        fullWidth
                      />
                    </Label>

                    <Label label="Bio" htmlFor="profile-bio">
                      <Textarea
                        id="profile-bio"
                        placeholder="Tell us a little about yourself"
                        rows={4}
                        fullWidth
                        defaultValue="I am a software engineer based in Tokyo."
                      />
                      <Paragraph
                        content="0 / 500 characters"
                        size="xs"
                        color="gray"
                        style={{ textAlign: "right" }}
                      />
                    </Label>
                  </Stack>
                </Stack>

                <Divider />

                {/* Regional Settings */}
                <Stack gap="2xl">
                  <Heading tag="h3" size="md">
                    Regional Settings
                  </Heading>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "24px",
                    }}
                  >
                    <Selectbox
                      label="Language"
                      options={[
                        { label: "English", value: "en" },
                        { label: "Japanese", value: "ja" },
                        { label: "Spanish", value: "es" },
                      ]}
                      defaultValue="en"
                    />
                    <Selectbox
                      label="Timezone"
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
                  <Heading tag="h3" size="md">
                    Preferences
                  </Heading>

                  <Stack gap="lg">
                    <Label label="Visibility">
                      <RadioGroup
                        name="visibility"
                        defaultValue="public"
                        options={[
                          {
                            label: "Public - Everyone can see your profile",
                            value: "public",
                          },
                          {
                            label: "Private - Only you can see your profile",
                            value: "private",
                          },
                          {
                            label:
                              "Friends - Only friends can see your profile",
                            value: "friends",
                          },
                        ]}
                      />
                    </Label>

                    <Label label="Notifications">
                      <Stack gap="sm">
                        <Switch label="Email Notifications" defaultChecked />
                        <Switch label="Push Notifications" />
                      </Stack>
                    </Label>
                  </Stack>
                </Stack>

                <Divider />
                <Group justify="end" gap="md">
                  <Button variant="ghost" label="Cancel" />
                  <Button variant="filled" label="Save Changes" />
                </Group>
              </Stack>
            </form>
          </div>
        </Grid>
      </Card>
    </Center>
  ),
};

export const PricingTable: StoryObj = {
  render: () => (
    <Container style={{ padding: "80px 24px", background: "#fff" }}>
      <Stack align="center" gap="lg" style={{ marginBottom: "64px" }}>
        <Badge status="primary" content="PRICING PLANS" />
        <Stack align="center" gap="3xl">
          <Heading tag="h2" size="xl" align="center">
            Choose the right plan for you
          </Heading>
          <Container size="sm">
            <Paragraph
              content="Simple, transparent pricing that grows with your team. No hidden fees."
              color="deepgray"
              style={{ textAlign: "center" }}
            />
          </Container>
        </Stack>
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
                  <Heading
                    tag="h3"
                    size="sm"
                    align="center"
                    style={{ margin: 0 }}
                  >
                    Starter
                  </Heading>
                </div>
                <Stack
                  direction="row"
                  align="baseline"
                  gap="none"
                  justify="center"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Heading tag="h4" size="2xl" style={{ whiteSpace: "nowrap" }}>
                    $0
                  </Heading>
                  <Paragraph
                    content="/month"
                    color="gray"
                    size="sm"
                    style={{ whiteSpace: "nowrap" }}
                  />
                </Stack>
              </Stack>
              <div
                style={{
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Paragraph
                  content="Perfect for individuals just getting started."
                  size="sm"
                  color="deepgray"
                  style={{ textAlign: "center", margin: 0 }}
                />
              </div>

              <List
                spacing="normal"
                style={{ marginTop: "24px", alignSelf: "stretch" }}
              >
                <ListItem iconName="CheckIcon">Core components</ListItem>
                <ListItem iconName="CheckIcon">Basic documentation</ListItem>
                <ListItem iconName="CheckIcon">Community support</ListItem>
                <ListItem
                  iconName="CheckIcon"
                  className="wim-color-gray"
                  style={{ opacity: 0.5 }}
                >
                  Advanced patterns
                </ListItem>
              </List>
            </Stack>

            <Button
              variant="outlined"
              label="Get Started"
              style={{ width: "100%" }}
            />
          </Stack>
        </Card>

        <Card
          style={{
            padding: "32px",
            border: "2px solid #3b82f6",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Badge status="primary" content="MOST POPULAR" size="sm" />
          </div>
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
                  <Heading
                    tag="h3"
                    size="sm"
                    align="center"
                    style={{ margin: 0 }}
                  >
                    Professional
                  </Heading>
                </div>
                <Stack
                  direction="row"
                  align="baseline"
                  gap="none"
                  justify="center"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Heading tag="h4" size="2xl" style={{ whiteSpace: "nowrap" }}>
                    $29
                  </Heading>
                  <Paragraph
                    content="/month"
                    color="gray"
                    size="sm"
                    style={{ whiteSpace: "nowrap" }}
                  />
                </Stack>
              </Stack>
              <div
                style={{
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Paragraph
                  content="Advanced features for growing teams."
                  size="sm"
                  color="deepgray"
                  style={{ textAlign: "center", margin: 0 }}
                />
              </div>

              <List
                spacing="normal"
                style={{ marginTop: "24px", alignSelf: "stretch" }}
              >
                <ListItem iconName="CheckIcon">Everything in Starter</ListItem>
                <ListItem iconName="CheckIcon">Advanced patterns</ListItem>
                <ListItem iconName="CheckIcon">Priority email support</ListItem>
                <ListItem iconName="CheckIcon">Custom themes</ListItem>
              </List>
            </Stack>

            <Button
              variant="filled"
              label="Upgrade to Pro"
              style={{ width: "100%" }}
            />
          </Stack>
        </Card>

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
                  <Heading
                    tag="h3"
                    size="sm"
                    align="center"
                    style={{ margin: 0 }}
                  >
                    Enterprise
                  </Heading>
                </div>
                <Stack
                  direction="row"
                  align="baseline"
                  gap="none"
                  justify="center"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Heading tag="h4" size="2xl" style={{ whiteSpace: "nowrap" }}>
                    $99
                  </Heading>
                  <Paragraph
                    content="/month"
                    color="gray"
                    size="sm"
                    style={{ whiteSpace: "nowrap" }}
                  />
                </Stack>
              </Stack>
              <div
                style={{
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Paragraph
                  content="Custom solutions for large organizations."
                  size="sm"
                  color="deepgray"
                  style={{ textAlign: "center", margin: 0 }}
                />
              </div>

              <List
                spacing="normal"
                style={{ marginTop: "24px", alignSelf: "stretch" }}
              >
                <ListItem iconName="CheckIcon">Custom infrastructure</ListItem>
                <ListItem iconName="CheckIcon">SSO & SAML</ListItem>
                <ListItem iconName="CheckIcon">
                  Dedicated account manager
                </ListItem>
              </List>
            </Stack>

            <Button
              variant="outlined"
              label="Contact Sales"
              style={{ width: "100%" }}
            />
          </Stack>
        </Card>
      </Grid>
    </Container>
  ),
};

export const HeroSection: StoryObj = {
  render: () => (
    <div
      style={{
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, var(--wim-color-primary-light, #f0f7ff) 0%, var(--wim-color-surface) 100%)",
        padding: "80px 24px",
      }}
    >
      <Container>
        <Grid cols={{ base: 1, md: "1fr 1fr" }} gap={48} align="center">
          <Stack gap="3xl">
            <Stack gap="3xl">
              <Badge
                status="primary"
                content="v2.0 is now available"
                style={{ width: "fit-content" }}
              />
              <Stack gap="2xl">
                <Heading
                  tag="h1"
                  size="2xl"
                  style={{ lineHeight: "1", fontWeight: "800" }}
                >
                  Build beautiful interfaces faster than ever.
                </Heading>
                <Paragraph
                  content="WIM UI provides a comprehensive set of premium components and tools to help you create stunning user experiences in Record time."
                  size="lg"
                  color="deepgray"
                />
              </Stack>
            </Stack>

            <Group gap="xl" wrap="wrap" justify="evenly">
              <Button
                variant="filled"
                size="md"
                label="Get Started For Free"
              />
              <Button
                variant="outlined"
                size="md"
                label="View Documentation"
              />
            </Group>

            <Stack direction="row" align="center" gap="md">
              <AvatarGroup size="sm">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} />
                ))}
              </AvatarGroup>
              <Paragraph
                content="Join 10,000+ developers"
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
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
              }}
            >
              <Stack gap="none">
                <Stack
                  direction="row"
                  gap="xs"
                  align="center"
                  style={{
                    height: "32px",
                    background: "#f3f4f6",
                    borderBottom: "1px solid #e5e7eb",
                    padding: "0 12px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ef4444",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#f59e0b",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#10b981",
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
  ),
};

export const ErrorPage: StoryObj = {
  render: () => (
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
            fontSize: "120px",
            fontWeight: "900",
            color: "var(--wim-color-border-secondary)",
            lineHeight: "1",
            margin: "0",
          }}
        >
          404
        </p>
        <Stack gap="2xl" align="center">
          <Heading tag="h1" size="xl" align="center">
            Something&apos;s missing.
          </Heading>
          <Paragraph
            content="The page you are looking for doesn't exist or has been moved. Check the URL or head back home."
            color="gray"
            style={{ textAlign: "center" }}
          />
        </Stack>

        <Alert status="info" title="Need help?" style={{ textAlign: "left" }}>
          Check our status page for any ongoing maintenance.
        </Alert>

        <Stack direction={{ base: "column", sm: "row" }} gap="xl">
          <Button variant="filled" label="Back to Homepage" />
          <Button variant="outlined" label="Contact Support" />
        </Stack>
      </Stack>
    </Center>
  ),
};
