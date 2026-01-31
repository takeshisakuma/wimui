import { fn } from "storybook/test";
import { Span } from "./Span";

export default {
  title: "Component/Typography & Action/Span", //左メニューの表示
  component: Span,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], //ドキュメント自動生成有効化
  argTypes: {},
  args: { onClick: fn() }, //`fn` を使用して onClick 引数を監視(呼び出されるとアクションパネルに表示)
};

//コンポーネントに渡す値

export const ExLargeSpan = {
  args: {
    size: "ex-large",
    content: `ex-large_span`,
    weight: `normal`,
    color: `deepgray`,
    style: `normal`,
  },
};

export const LargeSpan = {
  args: {
    size: "large",
    content: `large_span`,
    weight: `normal`,
    color: `deepgray`,
    style: `normal`,
  },
};

export const MediumSpan = {
  args: {
    size: "medium",
    content: `medium_span`,
    weight: `normal`,
    color: `deepgray`,
    style: `normal`,
  },
};

export const SmallSpan = {
  args: {
    size: "small",
    content: `small_span`,
    weight: `normal`,
    color: `deepgray`,
    style: `normal`,
  },
};

export const ExSmallSpan = {
  args: {
    size: "ex-small",
    content: `ex-small_span`,
    weight: `normal`,
    color: `deepgray`,
    style: `normal`,
  },
};

export const SmallSpanWithIcon = {
  args: {
    size: "small",
    content: `small_span`,
    weight: `normal`,
    color: `deepgray`,
    style: `normal`,
    iconName: "SquareIcon", //アイコン名を指定
    iconPosition: "left", //アイコンの位置を指定
  },
};

export const LargeSpanWithIconOnRight = {
  args: {
    size: "large",
    content: `large_span`,
    weight: "bold",
    color: "black",
    style: "italic",
    iconName: "CircleIcon",
    iconPosition: "right",
  },
};

export const IconOnlySpan = {
  args: {
    size: "medium",
    content: "", // テキストなし
    iconName: "CircleIcon",
  },
};
