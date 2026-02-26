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
  args: {
    placeholder: "ログインパスワードを忘れてしまったため、再発行の手順を教えてください。",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    placeholder: "最近のアップデート以降、アプリの動作が遅くなりました。改善をお願いします。",
  },
};

export const ErrorState: Story = {
  args: {
    state: "error",
    defaultValue: "エラーが発生しています",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
    defaultValue: "無効化された入力エリア",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: "いつもWimUIを利用させていただき、ありがとうございます。",
  },
};

export const FieldSizingContent: Story = {
  args: {
    fieldSizing: "content",
    placeholder: "1行目のテキスト\n2行目のテキスト\n3行目のテキスト",
  },
};

export const WithLabelAndError: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        maxWidth: "400px",
      }}
    >
      <Label htmlFor="comment" required label="コメント">
        <Textarea id="comment" {...args} />
      </Label>
      {args.state === "error" && (
        <FieldError content="入力内容をご確認ください。" />
      )}
    </div>
  ),
  args: {
    placeholder: "ダークモードの際、一部のテキストの色が背景と同化して読みづらいです。",
    rows: 4,
    fullWidth: true,
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

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Label htmlFor="feedback" required label="フィードバック">
          <Textarea
            id="feedback"
            {...args}
            state="error"
            defaultValue="短すぎます"
            rows={3}
            fullWidth
          />
        </Label>
        <FieldError content="10文字以上で入力してください。" />
      </div>
    </div>
  ),
};
