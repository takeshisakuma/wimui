import { fn } from "storybook/test";
import { Paragraph } from "./Paragraph";

export default {
  title: "Component/Paragraph",//左メニューの表示
  component: Paragraph,
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

export const ExLargeParagraph = {
  args: {
    size: 'ex-large',
    content: `ex-large_paragraph`,
    weight:`normal`,
    lineHeight: `normal-latn`,
    style: `normal`
  },
}

export const LargeParagraph = {
  args: {
    size: 'large',
    content: `large_paragraph`,
    weight:`normal`,
    lineHeight: `normal-latn`,
    style: `normal`
  },
}

export const MediumParagraph = {
  args: {
    size: 'medium',
    content: `medium_paragraph`,
    weight:`normal`,
    lineHeight: `normal-latn`,
    style: `normal`
  },
}

export const SmallParagrapht = {
  args: {
    size: "small",
    content: `small_paragraph`,
    weight:`normal`,
    lineHeight: `normal-latn`,
    style: `normal`
  },
};

export const ExSmallParagraph = {
  args: {
    size: "ex-small",
    content: `ex-small_paragraph`,
    weight:`normal`,
    lineHeight: `normal-latn`,
    style: `normal`
  },
};
