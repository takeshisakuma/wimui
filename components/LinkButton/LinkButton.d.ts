import { default as React } from '../../../node_modules/react';
import { Button } from '../Button/Button';
type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> & Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick" | "type">;
/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 */
export declare const LinkButton: ({ className, size, priority, role, backgroundColor, label, iconName, iconPosition, ...props }: LinkButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
