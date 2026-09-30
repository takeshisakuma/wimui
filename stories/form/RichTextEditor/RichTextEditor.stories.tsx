import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { RichTextEditor } from "wimui/form/rich-text-editor";
// ?no-inline: Vite は小さな素材を data: URL に埋め込むが、エディタは data: の画像を許可しない（保存した HTML で使えない）
import sceneLandscape from "@/media/scene_landscape.svg?no-inline";

const meta: Meta<typeof RichTextEditor> = {
  title: "Components/Basic Inputs/RichTextEditor",
  component: RichTextEditor,
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "danger"],
    },
    variant: {
      control: "select",
      options: ["outline", "ghost"],
    },
    fullWidth: {
      control: "boolean",
    },
    width: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "100%", "200px", "10ch"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs_stories_common", "components"]);
    const labels = {
      bold: t("components:a11y.rte_bold"),
      italic: t("components:a11y.rte_italic"),
      underline: t("components:a11y.rte_underline"),
      strikethrough: t("components:a11y.rte_strikethrough"),
      h1: t("components:a11y.rte_h1"),
      h2: t("components:a11y.rte_h2"),
      h3: t("components:a11y.rte_h3"),
      ul: t("components:a11y.rte_ul"),
      ol: t("components:a11y.rte_ol"),
      link: t("components:a11y.rte_link"),
      unlink: t("components:a11y.rte_unlink"),
      removeFormat: t("components:a11y.rte_remove_format"),
      toolbar: t("components:a11y.rte_toolbar"),
      linkPrompt: t("components:a11y.rte_link_prompt"),
    };

    return (
      <RichTextEditor
        {...args}
        label={t("docs_stories_common:story.rte_label_content")}
        placeholder={t("docs_stories_common:story.rte_placeholder_default")}
        labels={labels}
      />
    );
  },
};

export const WithDefaultValue: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_label_article")}
        defaultValue={`<h2>${t("story.rte_default_heading")}</h2><p>${t("story.rte_default_body")}</p>`}
      />
    );
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = React.useState(`<p>${t("story.rte_controlled_initial")}</p>`);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RichTextEditor
          {...args}
          label={t("story.rte_label_content")}
          value={value}
          onChange={setValue}
        />
        <div>
          <strong>{t("story.rte_output_label")}</strong>
          <pre style={{ fontSize: "0.75rem", whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "8px", background: "var(--wim-color-surface-variant)", borderRadius: "4px" }}>
            {value}
          </pre>
        </div>
      </div>
    );
  },
};

export const Danger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_label_content")}
        intent="danger"
        error={t("story.rte_error_required")}
        placeholder={t("story.rte_placeholder_default")}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_label_content")}
        disabled
        defaultValue={`<p>${t("story.rte_disabled_content")}</p>`}
      />
    );
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_label_note")}
        variant="ghost"
        placeholder={t("story.rte_placeholder_default")}
      />
    );
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_label_article")}
        fullWidth
        placeholder={t("story.rte_placeholder_default")}
      />
    );
  },
};

export const MinimalToolbar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_label_comment")}
        toolbar={["bold", "italic", "underline", "separator", "link"]}
        placeholder={t("story.rte_placeholder_comment")}
      />
    );
  },
};

/**
 * 画像（T278）。ツールバーに `image` を足した形。`onImageUpload` を渡すと、ダイアログに「ファイルを選ぶ」が出て、
 * 画像ファイルの貼り付け・ドロップもアップロードして入る。部品はアップロード先を持たず、返ってきた URL だけを入れる。
 * ここでは実際には送らず、手元の素材の URL を返してアップロード済みの形を見せる。
 */
export const WithImages: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const uploadDemo = React.useCallback(async () => sceneLandscape, []);
    return (
      <RichTextEditor
        {...args}
        label={t("story.rte_image_label")}
        toolbar={["bold", "italic", "separator", "ul", "ol", "separator", "link", "image"]}
        defaultValue={`<p>${t("story.rte_image_body")}</p><img src="${sceneLandscape}" alt="${t("story.rte_image_alt")}">`}
        onImageUpload={uploadDemo}
      />
    );
  },
};

/**
 * Markdown（T278）。`format="markdown"` で value / onChange が Markdown になる。エディタそのものは同じで、
 * 出力に出るのはツールバーで作れるものだけ（下線は `<u>…</u>`）。
 */
export const MarkdownFormat: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = React.useState(
      `## ${t("story.rte_markdown_heading")}\n\n- ${t("story.rte_markdown_item1")}\n- **${t("story.rte_markdown_item2")}**`,
    );
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RichTextEditor
          {...args}
          format="markdown"
          label={t("story.rte_markdown_label")}
          value={value}
          onChange={setValue}
        />
        <div>
          <strong>{t("story.rte_markdown_output_label")}</strong>
          <pre style={{ fontSize: "0.75rem", whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "8px", background: "var(--wim-color-surface-variant)", borderRadius: "4px" }}>
            {value}
          </pre>
        </div>
      </div>
    );
  },
};
