import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Card, Container, FocusTrap, Input, Stack } from "wimui";


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
          <Button onClick={() => setActive(!active)} variant="solid">
            {active ? t("story.focustrap_deactivate") : t("story.focustrap_activate")}
          </Button>

          <Card variant="outline" style={{ width: "100%" }}>
            <Card.Header>
              <strong>{t("story.focustrap_outside_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("story.focustrap_outside_desc")}</p>
                <Button variant="outline">{t("story.focustrap_outside_btn")}</Button>
              </Stack>
            </Card.Body>
          </Card>

          {active && (
            <FocusTrap {...args} active={active}>
              <Card
                variant="elevated"
                style={{
                  width: "100%",
                  border: "2px solid", borderColor: "var(--wim-color-primary)",
                }}
              >
                <Card.Header>
                  <strong style={{ color: "var(--wim-color-primary)" }}>
                    {t("story.focustrap_trapped_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <p>
                      {t("story.focustrap_trapped_desc")}
                    </p>
                    <Input defaultValue={t("story.focustrap_input_first")} fullWidth />
                    <Input defaultValue={t("story.focustrap_input_second")} fullWidth />
                    <Button onClick={() => setActive(false)} variant="solid">
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

export const InitialFocus: Story = {
  args: {
    initialFocus: true,
  },
  render: (args) => {
    const [active, setActive] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} variant="solid">
            {active ? t("story.focustrap_deactivate_short") : t("story.focustrap_activate_autofocus")}
          </Button>

          {active && (
            <FocusTrap {...args} active={active}>
              <Card
                variant="elevated"
                style={{
                  width: "100%",
                  border: "2px solid", borderColor: "var(--wim-color-success)",
                }}
              >
                <Card.Header>
                  <strong style={{ color: "var(--wim-color-success)" }}>
                    {t("story.focustrap_autofocus_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <Input defaultValue={t("story.focustrap_input_autofocus")} fullWidth />
                    <Button variant="outline">{t("story.focustrap_btn_another")}</Button>
                    <Button onClick={() => setActive(false)} variant="solid">
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

