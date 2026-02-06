import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Fieldset } from "./Fieldset";
import { Legend } from "../Legend/Legend";
import { Label } from "../Label/Label";
import { Input } from "../Input/Input";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

const meta: Meta<typeof Fieldset> = {
    title: "Component/Forms/Fieldset",
    component: Fieldset,
    parameters: {
        layout: "padded",
    },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
    render: (args) => (
        <Fieldset {...args}>
            <Legend>基本情報</Legend>
            <Label label="名前">
                <Input placeholder="山田 太郎" />
            </Label>
            <Label label="メールアドレス">
                <Input type="email" placeholder="example@wim.ui" />
            </Label>
        </Fieldset>
    ),
};

export const WithCheckboxGroup: Story = {
    render: (args) => (
        <Fieldset {...args}>
            <Legend>通知設定</Legend>
            <CheckboxGroup
                options={[
                    { label: "メール通知", value: "email" },
                    { label: "プッシュ通知", value: "push" },
                    { label: "SMS通知", value: "sms" },
                ]}
                defaultValue={["email"]}
            />
        </Fieldset>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => (
        <Fieldset {...args}>
            <Legend>無効化されたセクション</Legend>
            <Label label="名前">
                <Input placeholder="入力できません" />
            </Label>
            <CheckboxGroup
                options={[
                    { label: "オプション1", value: "1" },
                    { label: "オプション2", value: "2" },
                ]}
            />
        </Fieldset>
    ),
};
