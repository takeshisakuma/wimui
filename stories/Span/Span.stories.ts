import { fn } from "storybook/test";
import { Span } from "./Span";

export default {
  title: "Component/Span",//左メニューの表示
  component: Span,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],//ドキュメント自動生成有効化
  argTypes: {
    backgroundColor: { control: "color" },//コンポーネントの背景色を自由に設定できるようにする
  },
  args: { onClick: fn() },//`fn` を使用して onClick 引数を監視(呼び出されるとアクションパネルに表示) 
};


//コンポーネントに渡す値

export const ExLargeSpan = {
  args: {
    size: 'ex-large',
    content: `ex-large_span`,
    weight: `normal`,
    color: `deepgray`
  },
}

export const LargeSpan = {
  args: {
    size: 'large',
    content: `large_span`,
    weight:`normal`,
    color: `deepgray`
  },
}

export const MediumSpan = {
  args: {
    size: 'medium',
    content: `medium_span`,
    weight:`normal`,
    color: `deepgray`
  },
}

export const SmallSpan = {
  args: {
    size: "small",
    content:  `small_span`,
    weight:`normal`,
    color: `deepgray`
  },
};

export const ExSmallSpan = {
  args: {
    size: "ex-small",
    content:  `ex-small_span`,
    weight:`normal`,
    color: `deepgray`
  },
};
