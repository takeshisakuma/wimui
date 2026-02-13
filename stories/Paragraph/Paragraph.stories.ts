import { fn } from "storybook/test";
import { Paragraph } from "@/components/Paragraph/Paragraph";

export default {
  title: "Component/Typography & Icons/Paragraph", //左メニューの表示
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: { onClick: fn() }, //`fn` を使用して onClick 引数を監視(呼び出されるとアクションパネルに表示)
};

//コンポーネントに渡す値

export const ExLargeParagraph = {
  args: {
    size: "ex-large",
    content: `ex-large_paragraph`,
    weight: `normal`,
    lineHeight: `normal-latn`,
    style: `normal`,
  },
};

export const LargeParagraph = {
  args: {
    size: "large",
    content: `large_paragraph`,
    weight: `normal`,
    lineHeight: `normal-latn`,
    style: `normal`,
  },
};

export const MediumParagraph = {
  args: {
    size: "medium",
    content: `medium_paragraph`,
    weight: `normal`,
    lineHeight: `normal-latn`,
    style: `normal`,
  },
};

export const SmallParagrapht = {
  args: {
    size: "small",
    content: `small_paragraph`,
    weight: `normal`,
    lineHeight: `normal-latn`,
    style: `normal`,
  },
};

export const ExSmallParagraph = {
  args: {
    size: "ex-small",
    content: `ex-small_paragraph`,
    weight: `normal`,
    lineHeight: `normal-latn`,
    style: `normal`,
  },
};

export const BoldParagraph = {
  args: {
    size: "medium",
    content: "Bold Paragraph",
    weight: "bold",
  },
};

export const StrikethroughParagraph = {
  args: {
    size: "medium",
    content: "Strikethrough Paragraph",
    decoration: "line-through",
  },
};

export const HighlightParagraph = {
  args: {
    size: "medium",
    content: "Highlight Paragraph",
    decoration: "highlight",
  },
};
