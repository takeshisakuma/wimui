import { default as React } from '../../../node_modules/react';
export type InlineDisclosureProps = {
    /** ボタンの中身（「…」のアイコン・「+3」の文字など） */
    trigger: React.ReactNode;
    /** ボタンの読み上げの名前。中身の文字で名前が足りるなら渡さない */
    label?: string;
    /** ボタンに足すクラス（見た目は部品ごとに決める。押せる大きさの下限はこちらで持つ） */
    triggerClassName?: string;
    /** 一覧の中身。`<li>` を並べる */
    children: React.ReactNode;
};
/**
 * 隠れた項目を開くボタンと、その隣に描く一覧（disclosure: `aria-expanded` / `aria-controls`）。
 * OverflowList の「+N」から、畳んだ項目へ届く道に使う（Breadcrumb・AvatarGroup）。
 *
 * Composition Contract:
 * - Managed by: 部品の内側（OverflowList の renderOverflow の中）
 * - Scroll lock: No
 * - 一覧はポータルへ出さず、引き金の隣に描く（位置は useInlineFloating。floating-ui を読まない）
 * - Escape・外側の押下・フォーカスが外へ出たときに閉じる。Escape ではボタンへフォーカスを戻す
 */
export declare const InlineDisclosure: ({ trigger, label, triggerClassName, children }: InlineDisclosureProps) => React.JSX.Element;
