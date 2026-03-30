import { default as React } from '../../../node_modules/react';
import { Button } from '../Button/Button';
type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> & Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick" | "type">;
/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 */
export declare const LinkButton: ({ className, size, variant, intent, backgroundColor, label, icon, iconPosition, "aria-label": ariaLabel, ...props }: LinkButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
