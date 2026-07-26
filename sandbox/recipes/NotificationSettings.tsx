import { useId } from "react";
import type React from "react";
import { Stack, Group, Title, Text, Card, Divider, Select, Switch, Button } from "wimui";

// Dense label-left / control-right rows grouped in one card, separated by
// Divider. Density comes from token gaps, not hardcoded spacing.
export default function NotificationSettings() {
  return (
    <Stack gap="lg" style={{ maxWidth: 720 }}>
      <Stack gap="2xs">
        <Title tag="h1" size="lg">Notifications</Title>
        <Text color="secondary">Control what Larkfield emails you about. Changes apply immediately.</Text>
      </Stack>

      <Card padding="lg" variant="outline">
        <Stack gap="md">
          <SettingRow label="Deliverability alerts" hint="Bounce-rate spikes and blocklist hits.">
            {(ids) => <Switch defaultChecked {...ids} />}
          </SettingRow>
          <Divider />
          <SettingRow label="Weekly summary" hint="Every Monday, 09:00 in your timezone.">
            {(ids) => <Switch {...ids} />}
          </SettingRow>
          <Divider />
          <SettingRow label="Digest timezone">
            {(ids) => (
              <Select
                {...ids}
                value="jst"
                options={[
                  { label: "Asia/Tokyo (JST)", value: "jst" },
                  { label: "Europe/Berlin (CET)", value: "cet" },
                  { label: "UTC", value: "utc" },
                ]}
              />
            )}
          </SettingRow>
        </Stack>
      </Card>

      <Group justify="end" gap="sm">
        <Button variant="ghost">Reset</Button>
        <Button variant="solid">Save changes</Button>
      </Group>
    </Stack>
  );
}

// Local helper: label-left / control-right row. One protagonist per row = the
// control. The row *looks* labelled, but nothing associates the text with the
// control — so the row wires it up itself: the child is called with the ids to
// put on `aria-labelledby` / `aria-describedby`. Without this the switches are
// unlabelled to a screen reader (axe `label`, critical).
function SettingRow({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: (ids: { "aria-labelledby": string; "aria-describedby"?: string }) => React.ReactNode;
}) {
  const id = useId();
  const labelId = `${id}-label`;
  const hintId = `${id}-hint`;

  return (
    <Group justify="between" align="center" gap="md">
      <Stack gap="3xs">
        <Text id={labelId} weight="medium">{label}</Text>
        {hint ? <Text id={hintId} size="sm" color="secondary">{hint}</Text> : null}
      </Stack>
      {children({
        "aria-labelledby": labelId,
        "aria-describedby": hint ? hintId : undefined,
      })}
    </Group>
  );
}
