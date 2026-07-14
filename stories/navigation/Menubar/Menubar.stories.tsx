import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { Menubar } from "@/components/navigation/Menubar/Menubar";
import { Icon } from "@/components/media/Icon/Icon";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof Menubar> = {
  title: "Components/Navigation Elements/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menubar {...args} aria-label={t("story.menubar_application")}>
        <Menubar.Menu value="file">
          <Menubar.Trigger>{t("story.menubar_file")}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item icon={<Icon name="DocumentIcon" size="sm" />}>
              {t("story.menubar_new")}
            </Menubar.Item>
            <Menubar.Item icon={<Icon name="ProjectIcon" size="sm" />}>
              {t("story.menubar_open")}
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>{t("story.ks_save")}</Menubar.Item>
            <Menubar.Item disabled>{t("story.menubar_save_as")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="edit">
          <Menubar.Trigger>{t("story.dropdown_edit")}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>{t("story.ks_undo")}</Menubar.Item>
            <Menubar.Item>{t("story.ks_redo")}</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item icon={<Icon name="CopyIcon" size="sm" />}>
              {t("story.toolbar_copy")}
            </Menubar.Item>
            <Menubar.Item>{t("story.menubar_paste")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="view">
          <Menubar.Trigger>{t("story.toolbar_view")}</Menubar.Trigger>
          <Menubar.Content align="end">
            <Menubar.Item>{t("story.menubar_zoom_in")}</Menubar.Item>
            <Menubar.Item>{t("story.menubar_zoom_out")}</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>{t("story.menubar_fullscreen")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="help" disabled>
          <Menubar.Trigger disabled>{t("story.menubar_help")}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>{t("story.menubar_docs")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
  },
};
