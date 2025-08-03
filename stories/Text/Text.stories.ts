import { fn } from "storybook/test";
import { Text } from "./Text";

export default {
  title: "Component/Text",//左メニューの表示
  component: Text,
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

export const ExLargeText = {
  args: {
    size: 'ex-large',
    content: `ex-large_text`,
  },
}

export const LargeText = {
  args: {
    size: 'large',
    content: `large_text`,
  },
}

export const MediumText = {
  args: {
    size: 'medium',
    content: `medium_text`,
  },
}

export const SmallText = {
  args: {
    size: "small",
    content:  `small_text`,
  },
};

export const ExSmallText = {
  args: {
    size: "ex-small",
    content:  `ex-small_text`,
  },
};
