import {
  WIM_PRESETS,
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Input,
  Link,
  Stack,
  Switch,
  Text,
  Title,
} from "wimui";

// Each panel scopes a preset to its subtree via `data-wim-preset`, so the same
// sample UI renders under Default + every built-in preset side by side. Radius
// and accent cascade down as --wim-* custom properties.
const panels = [
  { name: "none", label: "Default", description: "The look shipped in styles.css." },
  ...WIM_PRESETS,
];

function Sample() {
  return (
    <Stack gap="md">
      <Group gap="sm" wrap="wrap" align="center">
        <Button variant="solid">Primary</Button>
        <Button variant="outline">Secondary</Button>
        <Badge variant="solid" intent="primary">New</Badge>
      </Group>
      <Input label="Workspace name" placeholder="Acme Inc." fullWidth />
      <Group gap="sm" align="center" justify="between">
        <Text size="sm">
          <Link href="#" label="Read the docs" />
        </Text>
        <Switch defaultChecked aria-label="Weekly digest" />
      </Group>
    </Stack>
  );
}

export function PresetShowcase() {
  return (
    <Stack gap="xl" style={{ padding: "var(--wim-spacing-lg)" }}>
      <Stack gap="2xs">
        <Title tag="h2" size="lg">Theme presets</Title>
        <Text color="secondary">
          One attribute (<code>data-wim-preset</code>) switches shape and accent. Presets compose
          with theme and density, and can scope to any subtree.
        </Text>
      </Stack>

      <div
        style={{
          display: "grid",
          gap: "var(--wim-spacing-lg)",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {panels.map((p) => (
          <div key={p.name} data-wim-preset={p.name === "none" ? undefined : p.name}>
            <Card padding="lg">
              <Stack gap="md">
                <Stack gap="3xs">
                  <Title tag="h3" size="sm">{p.label}</Title>
                  <Text size="sm" color="secondary">{p.description}</Text>
                </Stack>
                <Divider />
                <Sample />
              </Stack>
            </Card>
          </div>
        ))}
      </div>
    </Stack>
  );
}
