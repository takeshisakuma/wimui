import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";
import { Label } from "../Label/Label";
import { FieldError } from "../FieldError/FieldError";

const meta: Meta<typeof Textarea> = {
    title: "Component/Form Inputs/Textarea",
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
        placeholder: "テキストを入力してください...",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        placeholder: "Ghost Variant...",
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
        placeholder: "幅いっぱいに広がります...",
    },
};

export const FieldSizingContent: Story = {
    args: {
        fieldSizing: "content",
        placeholder: "入力内容に合わせて高さが変わります...",
    },
};

export const WithLabelAndError: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", maxWidth: "400px" }}>
            <Label htmlFor="comment" required label="コメント">
                <Textarea id="comment" {...args} />
            </Label>
            {args.state === "error" && <FieldError content="入力内容をご確認ください。" />}
        </div>
    ),
    args: {
        placeholder: "ご意見・ご要望を入力してください",
        rows: 4,
        fullWidth: true,
    },
};

export const FormPattern: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "500px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Label htmlFor="description" required label="自己紹介" />
                <Textarea id="description" {...args} placeholder="詳細は..." rows={3} fullWidth />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Label htmlFor="notes" label="備考" showOptional />
                <Textarea id="notes" {...args} placeholder="その他連絡事項があれば..." rows={2} fullWidth />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Label htmlFor="feedback" required label="フィードバック">
                    <Textarea id="feedback" {...args} state="error" defaultValue="短すぎます" rows={3} fullWidth />
                </Label>
                <FieldError content="10文字以上で入力してください。" />
            </div>
        </div>
    ),
};

