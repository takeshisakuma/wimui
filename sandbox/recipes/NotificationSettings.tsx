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
            <Switch defaultChecked />
          </SettingRow>
          <Divider />
          <SettingRow label="Weekly summary" hint="Every Monday, 09:00 in your timezone.">
            <Switch />
          </SettingRow>
          <Divider />
          <SettingRow label="Digest timezone">
            <Select
              aria-label="Digest timezone"
              value="jst"
              options={[
                { label: "Asia/Tokyo (JST)", value: "jst" },
                { label: "Europe/Berlin (CET)", value: "cet" },
                { label: "UTC", value: "utc" },
              ]}
            />
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

// Local helper: label-left / control-right row. One protagonist per row = the control.
function SettingRow({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <Group justify="between" align="center" gap="md">
      <Stack gap="3xs">
        <Text weight="medium">{label}</Text>
        {hint ? <Text size="sm" color="secondary">{hint}</Text> : null}
      </Stack>
      {children}
    </Group>
  );
}
