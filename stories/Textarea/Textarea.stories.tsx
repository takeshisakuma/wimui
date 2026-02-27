import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@/components/Textarea/Textarea";
import { Label } from "@/components/Label/Label";
import { FieldError } from "@/components/FieldError/FieldError";

const meta: Meta<typeof Textarea> = {
  title: "Components/Basic Inputs/Textarea",
  component: Textarea,
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "error", "disabled"],
    },
    variant: {
      control: { type: "select" },
      options: ["outline", "ghost"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    fieldSizing: {
      control: { type: "select" },
      options: ["fixed", "content"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: (args) => (
    <Label label="お問い合わせ内容">
      <Textarea {...args} />
    </Label>
  ),
  args: {
    placeholder: "ログインパスワードを忘れてしまったため、再発行の手順を教えてください。",
  },
};

export const Ghost: Story = {
  render: (args) => (
    <Label label="フィードバック">
      <Textarea {...args} />
    </Label>
  ),
  args: {
    variant: "ghost",
    placeholder: "最近のアップデート以降、アプリの動作が遅くなりました。改善をお願いします。",
  },
};

export const ErrorStatus: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Label label="詳細">
        <Textarea {...args} />
      </Label>
      <FieldError content="10文字以内で入力してください。" />
    </div>
  ),
  args: {
    state: "error",
    placeholder: "不明なエラーにより処理が中断されましたと表示されてしまい、使用できません。",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Label label="備考">
      <Textarea {...args} />
    </Label>
  ),
  args: {
    state: "disabled",
    placeholder: "なるべく早く回答をお願いします。",
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <Label label="メッセージ">
      <Textarea {...args} />
    </Label>
  ),
  args: {
    fullWidth: true,
    placeholder: "いつも施設を利用させていただき、ありがとうございます。",
  },
};

export const FieldSizingContent: Story = {
  render: (args) => (
    <Label label="備考">
      <Textarea {...args} />
    </Label>
  ),
  args: {
    fieldSizing: "content",
    placeholder: "施設の利用についての質問です。可能であれば、明日の15時までにご回答をお願いいたします。急ぎではありません。",
  },
};


export const FormPattern: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "500px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label htmlFor="description" required label="自己紹介" />
        <Textarea
          id="description"
          {...args}
          placeholder="フロントエンドエンジニアとして3年の経験があり、主にReactとTypeScriptを使用しています。"
          rows={3}
          fullWidth
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label htmlFor="notes" label="備考" showOptional />
        <Textarea
          id="notes"
          {...args}
          placeholder="平日の10:00〜19:00であれば電話連絡が可能です。"
          rows={2}
          fullWidth
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label htmlFor="motivation" required label="志望動機">
          <Textarea
            id="motivation"
            {...args}
            state="error"
            defaultValue="特になし"
            rows={3}
            fullWidth
          />
        </Label>
        <FieldError content="10文字以上で具体的に入力してください。" />
      </div>
    </div>
  ),
};
