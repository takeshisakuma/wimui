import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

type IconButtonProps = Omit<React.ComponentProps<typeof Button>, "label" | "iconPosition"> & {
    iconName: React.ComponentProps<typeof Icon>["name"];
    "aria-label": string;
};

/**
 * アイコンのみのボタンコンポーネント。
 */
export const IconButton = ({ iconName, ...props }: IconButtonProps) => {
    return (
        <Button
            {...props}
            iconName={iconName}
            label="" // Clear label to ensure icon-only styling
        />
    );
};
