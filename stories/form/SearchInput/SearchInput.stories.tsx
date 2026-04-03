import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "@/components/form/SearchInput/SearchInput";
import { Label } from "@/components/typography/Label/Label";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof SearchInput> = {
  title: "Components/Basic Inputs/SearchInput",
  component: SearchInput,
  tags: [],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("doc.search")}>
        <SearchInput {...args} placeholder={t("story.searchinput_placeholder")} />
      </Label>
    );
  },
};

export const SmartSearchWithAI_Example: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [query, setQuery] = React.useState("");
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const [isSearching, setIsSearching] = React.useState(false);

    // Simulated AI semantic search
    const handleSearch = async (val: string) => {
      setQuery(val);
      if (!val.trim()) {
        setSuggestions([]);
        return;
      }
      setIsSearching(true);
      // Simulate API call to Google Generative AI or embeddings search
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuggestions([
        t("components:smart.search_result_1", { val }),
        t("components:smart.search_result_2", { val }),
        t("components:smart.search_match", { val }),
      ]);
      setIsSearching(false);
    };

    return (
      <div style={{ width: 400 }}>
        <Label label={t("components:smart.search_ai_title")}>
          <div style={{ position: "relative" }}>
            <SearchInput
              {...args}
              width={400}
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={t("components:smart.search_placeholder")}
            />
            {isSearching && (
              <div style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "var(--wim-color-text-secondary)" }}>
                {t("components:smart.search_thinking")}
              </div>
            )}
          </div>
        </Label>
        {suggestions.length > 0 && (
          <div style={{ marginTop: 8, padding: 12, border: "1px solid var(--wim-color-border)", borderRadius: 8, background: "var(--wim-color-surface-variant)" }}>
            <div style={{ fontSize: 12, fontWeight: "bold", marginBottom: 8, color: "var(--wim-color-primary)" }}>
              {t("components:smart.search_suggestions")}
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14 }}>
              {suggestions.map((s, i) => (
                <li key={i} style={{ padding: "4px 0" }}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};
