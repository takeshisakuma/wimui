import { useTranslation } from "react-i18next";
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
import { ALL_NAMESPACES } from "../stories/i18nConstants";

// Each panel scopes a preset to its subtree via `data-wim-preset`, so the same
// sample UI renders under Default + every built-in preset side by side. Radius
// and accent cascade down as --wim-* custom properties.
//
// `label` / `description` live in tokens/presets/*.json because **users add
// their own presets there** (see "Adding your own" on the Presets page). So the
// JSON stays the owner, and this page only *prefers* a translation when one
// exists: built-in presets get `presets.desc_<name>`, and anything a user adds
// falls back to the description they wrote. Labels are left alone on purpose —
// "soft" / "bold" are the values typed into `preset="…"`, so translating them
// would name something that does not exist in the API.
const panels = [{ name: "none" }, ...WIM_PRESETS];

function Sample() {
  const { t } = useTranslation(ALL_NAMESPACES);

  return (
    <Stack gap="md">
      <Group gap="sm" wrap="wrap" align="center">
        <Button variant="solid">{t("presets.sample_primary")}</Button>
        <Button variant="outline">{t("presets.sample_secondary")}</Button>
        <Badge variant="solid" intent="primary">{t("presets.sample_badge")}</Badge>
      </Group>
      {/* i18n-ignore-next-line — "Acme Inc." is a placeholder company name */}
      <Input label={t("presets.sample_input_label")} placeholder="Acme Inc." fullWidth />
      <Group gap="sm" align="center" justify="between">
        <Text size="sm">
          <Link href="#" label={t("presets.sample_link")} />
        </Text>
        <Switch defaultChecked aria-label={t("presets.sample_switch")} />
      </Group>
    </Stack>
  );
}

export function PresetShowcase() {
  const { t } = useTranslation(ALL_NAMESPACES);

  const labelOf = (preset: { name: string; label?: string }) =>
    preset.name === "none" ? t("presets.showcase_label_default") : preset.label;

  const describe = (preset: { name: string; description?: string }) => {
    const key = `presets.desc_${preset.name}`;
    const translated = t(key);
    return translated === key ? preset.description : translated;
  };

  return (
    <Stack gap="xl" style={{ padding: "var(--wim-spacing-lg)" }}>
      <Stack gap="2xs">
        <Title tag="h2" size="lg">{t("presets.showcase_title")}</Title>
        <Text color="secondary">
          <code>data-wim-preset</code> — {t("presets.showcase_desc")}
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
                  <Title tag="h3" size="sm">{labelOf(p)}</Title>
                  <Text size="sm" color="secondary">{describe(p)}</Text>
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
