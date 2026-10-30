import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Stack, Text, Title, type TitleProps } from "wimui";
import i18n from "../../.storybook/i18n";
import { ALL_NAMESPACES } from "../i18nConstants";

/*
 * 見出しの行高の比較（2026-10-30）。現在は段ごとに比率を固定している
 * （title.module.scss: xs〜lg は snug、xl〜 は tight）。案は「字の大きさ × 係数 ＋ 一定の空き」で、
 * 大きくなるほど比率が自動で下がる。Title の xl〜 は viewport で伸縮するため、段のトークンでは追えない。
 * 3 列目は、その式を段ごとに評価して丸めた単位のない比率（出荷するならこちら。式は長さになり子孫へ px で受け継がれる）。
 * 案はインラインの style で当てるだけで、トークンにもコンポーネントにも入れていない。
 */

type Args = {
  latinEm: number;
  latinGap: number;
  jaEm: number;
  jaGap: number;
};

const SIZES: NonNullable<TitleProps["size"]>[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
];

/* 各段の最大の font-size（rem）。title.module.scss の対応（xs → md 〜 4xl → 7xl）と
   tokens/typography.json の値の写し。xl〜 は viewport で縮むが、比率は最大の端で決める */
const MAX_REM: Record<NonNullable<TitleProps["size"]>, number> = {
  xs: 1,
  sm: 1.266,
  md: 1.602,
  lg: 2.027,
  xl: 2.566,
  "2xl": 3.247,
  "3xl": 4.11,
  "4xl": 5.202,
};

/** 式を段の最大の大きさで評価し、単位のない比率に丸める（出荷するならこの値をトークンにする） */
const stepRatio = (
  size: NonNullable<TitleProps["size"]>,
  em: number,
  gap: number,
) => (Math.round((em + gap / MAX_REM[size]) * 100) / 100).toString();

const meta: Meta<Args> = {
  title: "Token/Line Height",
  parameters: {
    layout: "padded",
  },
  // 和文の列は表示中のロケールに依らず日本語で描くため、ja を描画前に読み込んでおく
  // （VRT は locale:en で撮る。描画後に読み込むと撮影と競合する）
  loaders: [
    async () => {
      await i18n.loadLanguages(["en", "ja"]);
      return {};
    },
  ],
  argTypes: {
    latinEm: { control: "number" },
    latinGap: { control: "number" },
    jaEm: { control: "number" },
    jaGap: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<Args>;

function Measured({
  size,
  text,
  lineHeight,
}: {
  size: NonNullable<TitleProps["size"]>;
  text: string;
  lineHeight?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [metrics, setMetrics] = useState("");

  useLayoutEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const style = getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const lh = parseFloat(style.lineHeight);
      setMetrics(
        `${size} — ${fontSize.toFixed(1)}px / ${lh.toFixed(1)}px (${(lh / fontSize).toFixed(2)})`,
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [size, lineHeight]);

  return (
    <Stack gap="xs">
      <Text content={metrics} size="xs" color="text-secondary" />
      <Title
        ref={ref}
        tag="h2"
        size={size}
        // 折り返しを字の大きさに比例させ、どの段も 2〜3 行にする
        style={{ maxInlineSize: "12em", lineHeight }}
      >
        {text}
      </Title>
    </Stack>
  );
}

function Script({
  lang,
  heading,
  sample,
  em,
  gap,
}: {
  lang: "en" | "ja";
  heading: string;
  sample: string;
  em: number;
  gap: number;
}) {
  const lineHeight = `calc(${em}em + ${gap}rem)`;
  const { t } = useTranslation(ALL_NAMESPACES);
  const fontFamily =
    lang === "ja" ? "var(--wim-font-family-ja)" : "var(--wim-font-family-en)";

  return (
    <section
      lang={lang}
      style={{
        fontFamily,
        fontFeatureSettings: lang === "ja" ? '"palt"' : undefined,
      }}
    >
      <Stack gap="lg">
        <Title tag="h1" size="sm">
          {heading}
        </Title>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "var(--wim-spacing-xl)",
          }}
        >
          <Text content={t("story.line_height_current")} size="sm" weight="bold" />
          <Text content={`${t("story.line_height_proposed")}: ${lineHeight}`} size="sm" weight="bold" />
          <Text content={t("story.line_height_stepped")} size="sm" weight="bold" />
          {SIZES.map((size) => (
            <React.Fragment key={size}>
              <Measured size={size} text={sample} />
              <Measured size={size} text={sample} lineHeight={lineHeight} />
              <Measured
                size={size}
                text={sample}
                lineHeight={stepRatio(size, em, gap)}
              />
            </React.Fragment>
          ))}
        </div>
      </Stack>
    </section>
  );
}

export const Headings: Story = {
  args: {
    latinEm: 1.05,
    latinGap: 0.3,
    jaEm: 1.1,
    jaGap: 0.4,
  },
  render: ({ latinEm, latinGap, jaEm, jaGap }) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const tEn = i18n.getFixedT("en", ALL_NAMESPACES);
    const tJa = i18n.getFixedT("ja", ALL_NAMESPACES);

    return (
      <Stack gap="2xl">
        <Text content={t("story.line_height_note")} size="sm" color="text-secondary" />
        <Script
          lang="en"
          heading={t("story.line_height_latin")}
          sample={tEn("story.line_height_sample")}
          em={latinEm}
          gap={latinGap}
        />
        <Script
          lang="ja"
          heading={t("story.line_height_japanese")}
          sample={tJa("story.line_height_sample")}
          em={jaEm}
          gap={jaGap}
        />
      </Stack>
    );
  },
};
