import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Transition } from "@/components/layout/Transition/Transition";
import { Button } from "@/components/form/Button/Button";
import { Stack } from "@/components/layout/Stack/Stack";
import { Card } from "@/components/data-display/Card/Card";
import { Container } from "@/components/layout/Container/Container";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof Transition> = {
  title: "Components/Internal/Transition",
  component: Transition,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Transition>;

export const Fade: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <Button
            animateWidth
            variant="filled"
            onClick={() => setShow(!show)}

          >{show ? t("story.transition_hide_content") : t("story.transition_show_content")}</Button>
          <Stack h={100} align="center" justify="center">
            <Transition
              show={show}
              enter="fade-enter"
              enterFrom="fade-enter-from"
              enterTo="fade-enter-to"
              leave="fade-leave"
              leaveFrom="fade-leave-from"
              leaveTo="fade-leave-to"
            >
              <Card
                variant="elevated"
                padding="lg"
                style={{
                  backgroundColor: "var(--wim-color-surface, #ffffff)",
                  border: "2px solid", borderColor: "var(--wim-color-primary, #3b82f6)",
                  color: "var(--wim-color-text-primary, #1e293b)",
                  fontWeight: "bold",
                  minWidth: "150px",
                  textAlign: "center",
                }}
              >
                {t("story.transition_fade_content")}
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>
    );
  },
};

export const Slide: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <style>{`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}</style>
          <Button
            animateWidth
            variant="filled"
            onClick={() => setShow(!show)}

          >{show ? t("story.transition_hide_slide") : t("story.transition_show_slide")}</Button>
          <Stack h={100} align="center" justify="center">
            <Transition
              show={show}
              enter="slide-enter"
              enterFrom="slide-enter-from"
              enterTo="slide-enter-to"
              leave="slide-leave"
              leaveFrom="slide-leave-from"
              leaveTo="slide-leave-to"
            >
              <Card variant="outline" padding="md">
                {t("story.transition_slide_content")}
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>
    );
  },
};
