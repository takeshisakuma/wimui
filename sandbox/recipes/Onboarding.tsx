import { useState } from "react";
import { Stack, Card, Stepper, Title, Text, Group, Button, Input } from "wimui";

const steps = [
  { title: "Account", description: "Your details" },
  { title: "Workspace", description: "Name & URL" },
  { title: "Invite", description: "Optional" },
];

// The Stepper shows where you are; the card is the single focused task for the
// current step. Starts mid-flow so it reads like a real session.
export default function Onboarding() {
  const [current, setCurrent] = useState(1); // mid-flow
  const back = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(steps.length - 1, c + 1));

  return (
    <Stack gap="lg" style={{ maxWidth: 640 }}>
      <Stepper steps={steps} current={current} onChange={setCurrent} />

      <Card padding="lg">
        <Stack gap="md">
          <Stack gap="2xs">
            <Title tag="h2" size="md">Name your workspace</Title>
            <Text color="secondary">You can change this later in Settings — existing links keep working.</Text>
          </Stack>
          <Input label="Workspace name" placeholder="Acme Inc." fullWidth />
        </Stack>
      </Card>

      <Group justify="between" align="center">
        <Button variant="ghost" onClick={back} disabled={current === 0}>Back</Button>
        <Button variant="solid" onClick={next}>Continue</Button>
      </Group>
    </Stack>
  );
}
