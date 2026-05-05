import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  SwitchGroup,
  SegmentedControl,
  ToggleGroup,
  Slider,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/SelectionFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Box px="lg" py="md" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
    <Text size="lg" weight="bold">
      {children}
    </Text>
  </Box>
);

const ComparisonGrid = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box m="lg">
    <Text size="md" weight="bold" style={{ margin: "0 0 var(--wim-spacing-md) 0" }}>
      {title}
    </Text>
    <Box
      bg="bg-surface-subtle"
      radius="md"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "var(--wim-spacing-lg)",
        padding: "var(--wim-spacing-md)",
      }}
    >
      {children}
    </Box>
  </Box>
);

const ComponentGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Stack gap="var(--wim-spacing-xs)">
    <Box pb="xs" style={{ borderBottom: "1px dashed var(--wim-color-border-secondary)" }}>
      <Text size="xs" color="primary" weight="medium">
        {label}
      </Text>
    </Box>
    <Stack gap="var(--wim-spacing-md)" align="start">
      {children}
    </Stack>
  </Stack>
);

const InteractiveSegmentedControl = ({ onChange, ...props }: Omit<React.ComponentProps<typeof SegmentedControl>, "onChange"> & { onChange?: (value: string) => void }) => {
  const [value, setValue] = React.useState(props.value || "a");
  return <SegmentedControl {...props} value={value} onChange={onChange ?? setValue} />;
};

const InteractiveCheckboxGroup = (props: React.ComponentProps<typeof CheckboxGroup>) => {
  const [value, setValue] = React.useState<string[]>(props.defaultValue || []);
  return <CheckboxGroup {...props} value={value} onChange={setValue} />;
};

const InteractiveRadioGroup = (props: React.ComponentProps<typeof RadioGroup>) => {
  const [value, setValue] = React.useState<string>(props.defaultValue || "");
  return <RadioGroup {...props} value={value} onChange={setValue} />;
};

const InteractiveToggleGroup = (props: React.ComponentProps<typeof ToggleGroup>) => {
  const [value, setValue] = React.useState<string | string[]>(props.defaultValue || "");
  return <ToggleGroup {...props} value={value} onChange={setValue} />;
};

const InteractiveSwitchGroup = (props: React.ComponentProps<typeof SwitchGroup>) => {
  const [value, setValue] = React.useState<string[]>(props.defaultValue || []);
  return <SwitchGroup {...props} value={value} onChange={setValue} />;
};

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <Box bg="surface">
        <SectionTitle>{t("audit:selection_family_title")}</SectionTitle>

        {/* Alignment & Focus Check */}
        <ComparisonGrid title={t("audit:alignment_focus_check")}>
          <ComponentGroup label={t("audit:label_checkbox")}>
            <Checkbox>{t("audit:sample_long_text", { component: "Checkbox" })}</Checkbox>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radio")}>
            <Radio name="audit">{t("audit:sample_long_text", { component: "Radio" })}</Radio>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch")}>
            <Switch>{t("audit:sample_long_text", { component: "Switch" })}</Switch>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_segmented_control")}>
            <InteractiveSegmentedControl
              options={[
                { label: t("audit:label_option_a"), value: "a" },
                { label: t("audit:label_option_b"), value: "b" },
                { label: t("audit:label_option_c"), value: "c" },
              ]}
              value="a"
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_toggle_group")}>
            <InteractiveToggleGroup
              options={[
                { label: t("audit:label_option_a"), value: "a" },
                { label: t("audit:label_option_b"), value: "b" },
                { label: t("audit:label_option_c"), value: "c" },
              ]}
              defaultValue="a"
            />
            <InteractiveToggleGroup
              selectionMode="multiple"
              options={[
                { iconName: "CircleIcon", value: "1" },
                { iconName: "SquareIcon", value: "2" },
                { iconName: "LoadingIcon", value: "3" },
              ]}
              defaultValue={["1"]}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_checkbox_group")}>
            <InteractiveCheckboxGroup
              label={t("audit:label_checkbox_group_vertical")}
              options={[
                { label: t("audit:label_option_1"), value: "1" },
                { label: t("audit:label_option_2"), value: "2" },
                { label: t("audit:label_option_3"), value: "3" },
              ]}
              defaultValue={["1"]}
            />
            <InteractiveCheckboxGroup
              label={t("audit:label_checkbox_group_horizontal")}
              direction="horizontal"
              options={[
                { label: t("audit:label_option_1"), value: "1" },
                { label: t("audit:label_option_2"), value: "2" },
              ]}
              defaultValue={["1"]}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radio_group")}>
            <InteractiveRadioGroup
              label={t("audit:label_radio_group_vertical")}
              options={[
                { label: t("audit:label_option_a"), value: "a" },
                { label: t("audit:label_option_b"), value: "b" },
              ]}
              defaultValue="a"
            />
            <InteractiveRadioGroup
              label={t("audit:label_radio_group_horizontal")}
              direction="horizontal"
              options={[
                { label: t("audit:label_option_a"), value: "a" },
                { label: t("audit:label_option_b"), value: "b" },
                { label: t("audit:label_option_c"), value: "c" },
              ]}
              defaultValue="a"
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch_group")}>
            <InteractiveSwitchGroup
              label={t("audit:label_switch_group_vertical")}
              options={[
                { label: t("audit:label_toggle_1"), value: "1" },
                { label: t("audit:label_toggle_2"), value: "2" },
              ]}
              defaultValue={["1"]}
            />
            <InteractiveSwitchGroup
              label={t("audit:label_switch_group_horizontal")}
              direction="horizontal"
              options={[
                { label: t("audit:label_toggle_1"), value: "1" },
                { label: t("audit:label_toggle_2"), value: "2" },
              ]}
              defaultValue={["1"]}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          <ComponentGroup label={t("audit:label_intent_default")}>
            <Checkbox defaultChecked>{t("audit:label_intent_default")}</Checkbox>
            <Radio defaultChecked>{t("audit:label_intent_default")}</Radio>
            <Switch defaultChecked>{t("audit:label_intent_default")}</Switch>
            <Slider defaultValue={50} style={{ width: "200px" }} aria-label={t("audit:label_intent_default")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_intent_error")}>
            <Checkbox defaultChecked>{t("audit:label_intent_error")}</Checkbox>
            <Radio defaultChecked>{t("audit:label_intent_error")}</Radio>
            <Switch defaultChecked>{t("audit:label_intent_error")}</Switch>
            <InteractiveSegmentedControl
              options={[{ label: "A", value: "a" }, { label: "B", value: "b" }]}
              value="a"
              error={t("audit:label_error_message")}
            />
            <InteractiveToggleGroup
              options={[{ label: "A", value: "a" }, { label: "B", value: "b" }]}
              defaultValue="a"
              error={t("audit:label_error_message")}
            />
            <Slider defaultValue={40} style={{ width: "200px" }} aria-label={t("audit:label_intent_error")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* States Comparison */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")}>
            <Checkbox disabled defaultChecked>{t("audit:label_disabled")}</Checkbox>
            <Radio disabled defaultChecked>{t("audit:label_disabled")}</Radio>
            <Switch disabled defaultChecked>{t("audit:label_disabled")}</Switch>
            <Slider disabled defaultValue={30} style={{ width: "200px" }} aria-label={t("audit:label_disabled")} />
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
