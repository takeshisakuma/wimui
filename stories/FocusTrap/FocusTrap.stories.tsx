import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FocusTrap } from "@/components/FocusTrap/FocusTrap";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Stack } from "@/components/Stack/Stack";
import { Card } from "@/components/Card/Card";
import { Container } from "@/components/Container/Container";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof FocusTrap> = {
  title: "Components/Internal/FocusTrap",
  component: FocusTrap,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FocusTrap>;

export const Default: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} priority="primary">
            {active ? t("story.focustrap_deactivate") : t("story.focustrap_activate")}
          </Button>

          <Card variant="outline" style={{ width: "100%" }}>
            <Card.Header>
              <strong>{t("story.focustrap_outside_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("story.focustrap_outside_desc")}</p>
                <Button priority="secondary">{t("story.focustrap_outside_btn")}</Button>
              </Stack>
            </Card.Body>
          </Card>

          {active && (
            <FocusTrap {...args} active={active}>
              <Card
                variant="elevated"
                style={{
                  width: "100%",
                  border: "2px solid", borderColor: "var(--wim-primary, #0070f3)",
                }}
              >
                <Card.Header>
                  <strong style={{ color: "var(--wim-primary, #0070f3)" }}>
                    {t("story.focustrap_trapped_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <p>
                      {t("story.focustrap_trapped_desc")}
                    </p>
                    <Input placeholder={t("story.focustrap_input_first")} fullWidth />
                    <Input placeholder={t("story.focustrap_input_second")} fullWidth />
                    <Button onClick={() => setActive(false)} priority="primary">
                      {t("story.focustrap_btn_close")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>
          )}
        </Stack>
      </Container>
    );
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
  },
  render: (args) => {
    const [active, setActive] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} priority="primary">
            {active ? t("story.focustrap_deactivate_short") : t("story.focustrap_activate_autofocus")}
          </Button>

          {active && (
            <FocusTrap {...args} active={active}>
              <Card
                variant="elevated"
                style={{
                  width: "100%",
                  border: "2px solid", borderColor: "var(--wim-success, #28a745)",
                }}
              >
                <Card.Header>
                  <strong style={{ color: "var(--wim-success, #28a745)" }}>
                    {t("story.focustrap_autofocus_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <Input placeholder={t("story.focustrap_input_autofocus")} fullWidth />
                    <Button priority="secondary">{t("story.focustrap_btn_another")}</Button>
                    <Button onClick={() => setActive(false)} priority="primary">
                      {t("story.focustrap_btn_close_short")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>
          )}
        </Stack>
      </Container>
    );
  },
};

