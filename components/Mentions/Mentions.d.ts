import { default as React } from '../../../node_modules/react';
import { Textarea } from '../Textarea/Textarea';
type MentionOption = {
    id: string | number;
    display: string;
};
type MentionsProps = React.ComponentProps<typeof Textarea> & {
    options: MentionOption[];
    trigger?: string;
    onSelect?: (option: MentionOption) => void;
};
/**
 * テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。
 */
export declare const Mentions: ({ options, trigger, value, defaultValue, onChange, onSelect, ...props }: MentionsProps) => import("react/jsx-runtime").JSX.Element;
export {};
