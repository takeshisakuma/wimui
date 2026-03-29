import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Navbar> = {
  title: "Components/Application Shell/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    fixed: { control: "boolean" },
    sticky: { control: "boolean" },
    transparent: { control: "boolean" },
    glass: { control: "boolean" },
    bordered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Navbar {...args}>
        <Navbar.Brand>
          <span>{t("story.navbar_logo")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Navbar.Link href="#" active>
            {t("story.navbar_home")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_features")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_pricing")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_about")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Button priority="secondary" size="small">
            {t("story.navbar_login")}
          </Button>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem active>{t("story.navbar_home")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_features")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_pricing")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_about")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_login")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>
    );
  },
  args: {
    bordered: true,
  },
};

export const GlassEffect: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          height: "400px",
          background:
            "linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
          position: "relative",
        }}
      >
        <Navbar {...args} glass fixed style={{ position: "absolute" }}>
          <Navbar.Brand>
            <span>{t("story.navbar_glass_ui")}</span>
          </Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#">{t("story.navbar_design")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_components")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_docs")}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem>{t("story.navbar_design")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_components")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_docs")}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        <div style={{ paddingTop: "80px", paddingLeft: "24px", color: "white" }}>
          <h1>{t("story.navbar_glass_title")}</h1>
          <p>{t("story.navbar_glass_desc")}</p>
        </div>
      </div>
    );
  },
};

export const WithMobileMenu: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Navbar bordered>
        <Navbar.Brand>
          <span>{t("story.navbar_mobile_app")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Navbar.Link href="#">{t("story.navbar_overview")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_activity")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem>{t("story.navbar_overview")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_activity")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>
    );
  },
};

export const CenteredLinks: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Navbar {...args} bordered>
        <Navbar.Brand>
          <span>{t("story.navbar_center")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="center" hiddenOnMobile>
          <Navbar.Link href="#" active>
            {t("story.navbar_product")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_solutions")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_resources")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Button priority="tertiary" size="small">
            {t("story.navbar_signin")}
          </Button>
          <Button priority="primary" size="small">
            {t("story.navbar_signup")}
          </Button>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem active>{t("story.navbar_product")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_solutions")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_resources")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_signin")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_signup")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>
    );
  },
};

export const BuiltInResponsive: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          height: "400px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid #ccc",
        }}
      >
        <Navbar
          bordered
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        >
          <Navbar.Brand>
            <span>{t("story.navbar_responsive")}</span>
          </Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#">{t("story.navbar_dashboard")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_settings")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_profile")}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem>{t("story.navbar_dashboard")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_settings")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_profile")}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        <div style={{ padding: "80px 20px" }}>
          <p>{t("story.navbar_responsive_info")}</p>
          <p>{t("story.navbar_responsive_desc")}</p>
        </div>
      </div>
    );
  },
};
