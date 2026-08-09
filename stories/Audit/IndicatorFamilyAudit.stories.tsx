import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Badge,
  Chip,
  Tag,
  Text,
} from "../../src";
import type { IndicatorIntent, IndicatorVariant } from "../../src/types/tokens";

const meta: Meta = {
  title: "Audit/IndicatorFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const sizes = ["sm", "md", "lg"] as const;
    const variants = ["solid", "outline", "subtle"] as const;
    const intents = [
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "info",
      "neutral",
    ] as const;

    return (
      <AuditPage title={t("audit:indicator_family_title")}>
        {/* Variant × Intent の全組み合わせ。
            これ以前は intent 軸（7 intent × 既定 variant）と variant 軸
            （3 variant × primary）の 1 次元スライス 2 本で、21 セル中 9 セルしか
            埋まっておらず、しかも solid/primary が二重に出ていた。
            埋まっていなかったセルに実害がある: `check:contrast` を基準 4.75 まで
            上げて binding cell を出すと、最も厳しいのは dark の danger/subtle
            （4.62、AA まで +0.12）で、次が primary/subtle 4.66・warning/subtle 4.72。
            **primary は最も安全な列ではない**のに、variant 軸はそこしか描いていなかった。
            `IndicatorBase / Variants` に同じ 3 × 7 の表が既にあるが、あれは共有基底に
            `demoStyles` を渡したもので、Badge / Tag / Chip 自身の module.scss は通らない
            （Badge は font-weight normal・Tag / Chip は medium、Chip は縦パディング 0 と
            radius-full、Badge は min-width / iconOnly を持つ）。基底が緑でも 3 つが
            緑とは限らないことは T99（#301）の className 上書きバグで実際に起きている。
            flex ではなく grid で組むのは、**列を揃えないと variant 間の縦比較ができない**
            ため。同じ intent が 3 行で同じ列に来ることが、この表の唯一の目的。 */}
        <ComparisonGrid title={t("audit:variant_intent_matrix")} overflowX="auto">
          {(
            [
              [
                "badge",
                (i: IndicatorIntent, v: IndicatorVariant) => (
                  <Badge intent={i} variant={v}>{t("audit:label_badge")}</Badge>
                ),
              ],
              [
                "chip",
                (i: IndicatorIntent, v: IndicatorVariant) => (
                  <Chip intent={i} variant={v}>{t("audit:label_chip")}</Chip>
                ),
              ],
              [
                "tag",
                (i: IndicatorIntent, v: IndicatorVariant) => (
                  <Tag intent={i} variant={v}>{t("audit:label_tag")}</Tag>
                ),
              ],
            ] as const
          ).map(([key, render]) => (
            <ComponentGroup key={key} label={t(`audit:label_${key}`)} noStack>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `auto repeat(${intents.length}, max-content)`,
                  gap: "var(--wim-spacing-sm)",
                  alignItems: "center",
                  width: "max-content",
                }}
              >
                <span />
                {intents.map((intent) => (
                  <Text key={intent} size="xs" color="text-secondary">
                    {intent}
                  </Text>
                ))}
                {variants.map((variant) => (
                  <React.Fragment key={variant}>
                    <Text size="xs" color="text-secondary">
                      {variant}
                    </Text>
                    {intents.map((intent) => (
                      <span key={`${variant}-${intent}`}>{render(intent, variant)}</span>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })} direction="row" wrap>
              <Badge size={size}>{t("audit:label_badge")}</Badge>
              <Chip size={size}>{t("audit:label_chip")}</Chip>
              <Tag size={size}>{t("audit:label_tag")}</Tag>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* Special States */}
        <ComparisonGrid title={t("audit:label_special_states_interactions")}>
          <ComponentGroup label={t("audit:label_interactive_chips_tags")} direction="row" wrap>
            <Chip onClick={() => alert("Clicked")}>{t("audit:label_clickable_chip")}</Chip>
            <Chip onDelete={() => alert("Deleted")}>{t("audit:label_deletable_chip")}</Chip>
            <Tag onDelete={() => alert("Deleted")}>{t("audit:label_deletable_tag")}</Tag>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_badge_variations")} direction="row" wrap>
            <Badge content="99+" />
            <Badge variant="solid" intent="danger" /> {/* Dot badge */}
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
