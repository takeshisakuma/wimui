import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';

const meta: Meta<typeof List> = {
    title: 'Component/Data Display/List',
    component: List,
    argTypes: {
        as: {
            control: 'select',
            options: ['ul', 'ol'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        spacing: {
            control: 'select',
            options: ['tight', 'normal', 'loose'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Unordered: Story = {
    args: {
        as: 'ul',
        children: (
            <>
                <ListItem>アイテム1</ListItem>
                <ListItem>アイテム2</ListItem>
                <ListItem>アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)</ListItem>
            </>
        ),
    },
};

export const Ordered: Story = {
    args: {
        as: 'ol',
        children: (
            <>
                <ListItem>ステップ1</ListItem>
                <ListItem>ステップ2</ListItem>
                <ListItem>ステップ3</ListItem>
            </>
        ),
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: (
            <>
                <ListItem>小さいリストアイテム1</ListItem>
                <ListItem>小さいリストアイテム2</ListItem>
            </>
        ),
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: (
            <>
                <ListItem>大きいリストアイテム1</ListItem>
                <ListItem>大きいリストアイテム2</ListItem>
            </>
        ),
    },
};

export const LooseSpacing: Story = {
    args: {
        spacing: 'loose',
        children: (
            <>
                <ListItem>ゆったりした間隔1</ListItem>
                <ListItem>ゆったりした間隔2</ListItem>
            </>
        ),
    },
};

export const WithIcons: Story = {
    args: {
        children: (
            <>
                <ListItem iconName="CheckIcon">完了したタスク (左)</ListItem>
                <ListItem iconName="CheckIcon" iconPosition="right">完了したタスク (右)</ListItem>
                <ListItem iconName="CircleIcon">進行中のタスク</ListItem>
                <ListItem iconName="ExternalLinkIcon">外部リンク (左)</ListItem>
                <ListItem iconName="ExternalLinkIcon" iconPosition="right">
                    外部リンク (右)
                </ListItem>
                <ListItem iconName="UploadIcon">ファイルをアップロード</ListItem>
            </>
        ),
    },
};


