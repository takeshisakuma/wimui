import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FocusTrap } from "@/components/FocusTrap/FocusTrap";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Stack } from "@/components/Stack/Stack";
import { Card } from "@/components/Card/Card";
import { Container } from "@/components/Container/Container";

const meta: Meta<typeof FocusTrap> = {
  title: "Components/Utilities/FocusTrap",
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

    return (
      <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} priority="primary">
            {active ? "Deactivate Focus Trap" : "Activate Focus Trap"}
          </Button>

          <Card variant="outline" style={{ width: "100%" }}>
            <Card.Header>
              <strong>Outside the trap</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>This area is not trapped. You can focus elements here freely when the trap is inactive.</p>
                <Button priority="secondary">Outside Button</Button>
              </Stack>
            </Card.Body>
          </Card>

          {active && (
            <FocusTrap {...args} active={active}>
              <Card
                variant="elevated"
                style={{
                  width: "100%",
                  border: "2px solid var(--wim-primary, #0070f3)",
                }}
              >
                <Card.Header>
                  <strong style={{ color: "var(--wim-primary, #0070f3)" }}>
                    Focus Trapped Area
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <p>
                      Try tabbing through these elements. Focus will not leave this
                      box.
                    </p>
                    <Input placeholder="First focusable" fullWidth />
                    <Input placeholder="Second focusable" fullWidth />
                    <Button onClick={() => setActive(false)} priority="primary">
                      Close Trap
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

    return (
      <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} priority="primary">
            {active ? "Deactivate" : "Activate with AutoFocus"}
          </Button>

          {active && (
            <FocusTrap {...args} active={active}>
              <Card
                variant="elevated"
                style={{
                  width: "100%",
                  border: "2px solid var(--wim-success, #28a745)",
                }}
              >
                <Card.Header>
                  <strong style={{ color: "var(--wim-success, #28a745)" }}>
                    AutoFocus enabled
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <Input placeholder="I get focus automatically" fullWidth />
                    <Button priority="secondary">Another element</Button>
                    <Button onClick={() => setActive(false)} priority="primary">
                      Close
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

