import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Box, SpeedDial, Text } from "wimui";
import styles from "./speed-dial-realistic.module.scss";

/**
 * 単体の Default は短いラベルを中央の箱に置いている。
 * 実際の置き場は画面の隅で、ラベルは文になり、削除は danger。
 */
const meta = {
  title: "Components/Navigation Utilities/SpeedDial",
  component: SpeedDial,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof SpeedDial>;

export const LongLabels: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div className={styles.page}>
        <Box p="xl">
          <Text>{t("story.speeddial_long_page")}</Text>
        </Box>
        <div className={styles.fabDock}>
          <SpeedDial
            open
            trigger="click"
            direction="up"
            aria-label={t("story.speeddial_long_aria")}
            actions={[
              {
                icon: "DownloadIcon",
                label: t("story.speeddial_long_print"),
                onClick: () => undefined,
              },
              {
                icon: "ShareIcon",
                label: t("story.speeddial_long_forward"),
                onClick: () => undefined,
              },
              {
                icon: "AlertTriangleIcon",
                label: t("story.speeddial_long_wrong"),
                intent: "danger",
                onClick: () => undefined,
              },
            ]}
          />
        </div>
      </div>
    );
  },
};
