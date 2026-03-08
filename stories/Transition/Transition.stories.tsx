import React, { useState, useRef, useLayoutEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Transition } from "@/components/Transition/Transition";
import { Button } from "@/components/Button/Button";
import { Stack } from "@/components/Stack/Stack";
import { Card } from "@/components/Card/Card";
import { Container } from "@/components/Container/Container";
import { Box } from "@/components/Box/Box";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Transition> = {
  title: "Components/Utilities/Transition",
  component: Transition,
  parameters: {
    layout: "centered",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Fade: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Container size="sm">
        <Stack align="center" gap="xl" py="xl">
          <Button
            animateWidth
            priority="primary"
            onClick={() => setShow(!show)}
            label={show ? t("story_transition_hide_content") : t("story_transition_show_content")}
          />
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
                  background: "var(--wim-color-surface, #ffffff)",
                  border: "2px solid var(--wim-color-primary, #3b82f6)",
                  color: "var(--wim-color-text-primary, #1e293b)",
                  fontWeight: "bold",
                  minWidth: "150px",
                  textAlign: "center",
                }}
              >
                Fade Content!
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
    const { t } = useTranslation(["docs", "common", "components"]);
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
            priority="primary"
            onClick={() => setShow(!show)}
            label={show ? t("story_transition_hide_slide") : t("story_transition_show_slide")}
          />
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
                Slide!
              </Card>
            </Transition>
          </Stack>
        </Stack>
      </Container>
    );
  },
};

