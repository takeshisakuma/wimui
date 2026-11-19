import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Persona } from "@/components/data-display/Persona/Persona";
import { Stack } from "@/components/layout/Stack/Stack";
import { Group } from "@/components/layout/Group/Group";

const meta: Meta<typeof Persona> = {
  title: "Components/Data Indicators/Persona",
  component: Persona,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    textPosition: { control: "radio", options: ["after", "below"] },
    presence: { control: "select", options: [undefined, "online", "away", "busy", "offline"] },
  },
};

export default meta;
type Story = StoryObj<typeof Persona>;

/** 名前と、変わらない補足（役職）。アバターはイニシャル。 */
export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Persona
        {...args}
        name={t("story.persona_name")}
        description={t("story.persona_role")}
        avatar={{ initials: "PR" }}
      />
    );
  },
};

/** 在席の状態と、変わる補足（最後の応答）を 2 行目に。読み上げは「名前、オンライン」の順。 */
export const WithPresence: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Persona
        name={t("story.persona_name")}
        description={t("story.persona_role")}
        secondaryDescription={t("story.persona_activity")}
        avatar={{ initials: "PR" }}
        presence="online"
      />
    );
  },
};

/** 大きさ 3 段。名前と補足の文字の大きさ・間隔は、アバターの大きさに合わせて部品が決める。 */
export const Sizes: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="lg">
        {(["sm", "md", "lg"] as const).map((size) => (
          <Persona
            key={size}
            size={size}
            name={t("story.persona_name")}
            description={t("story.persona_role")}
            secondaryDescription={t("story.persona_activity")}
            avatar={{ initials: "PR" }}
            presence="online"
          />
        ))}
      </Stack>
    );
  },
};

/** 文字を下に置く形（プロフィールのカードなど）。 */
export const TextBelow: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Group gap="xl" align="start">
        <Persona
          size="lg"
          textPosition="below"
          name={t("story.persona_name_2")}
          description={t("story.persona_role_2")}
          avatar={{ initials: "TO" }}
          presence="away"
        />
        <Persona
          size="lg"
          textPosition="below"
          name={t("story.persona_name_3")}
          description={t("story.persona_role_3")}
          secondaryDescription={t("story.persona_activity")}
          avatar={{ initials: "HS" }}
          presence="busy"
        />
      </Group>
    );
  },
};

/** 長い名前と補足は、省略せずに折り返す。 */
export const LongName: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ maxWidth: "var(--wim-width-md)" }}>
        <Persona
          name={t("story.persona_name_long")}
          description={t("story.persona_role_long")}
          avatar={{ initials: "MF" }}
          presence="offline"
        />
      </div>
    );
  },
};
