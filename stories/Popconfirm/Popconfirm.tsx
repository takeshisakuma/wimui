import React, { ReactNode } from "react";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "../Popover/Popover";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useTranslation } from "react-i18next";
import "./popconfirm.scss";

export type PopconfirmProps = {
    /**
     * The title of the confirmation box
     */
    title: ReactNode;
    /**
     * The description of the confirmation box
     */
    description?: ReactNode;
    /**
     * Callback when the user clicks the confirm button
     */
    onConfirm?: () => void;
    /**
     * Callback when the user clicks the cancel button
     */
    onCancel?: () => void;
    /**
     * Text of the confirm button
     */
    okText?: string;
    /**
     * Text of the cancel button
     */
    cancelText?: string;
    /**
     * Color role of the confirm button
     */
    okType?: "default" | "destructive" | "positive";
    /**
     * The target element which the Popconfirm will be attached to
     */
    children: ReactNode;
    /**
     * Customize the icon
     */
    icon?: ReactNode;
    /**
     * Whether to show the popconfirm
     */
    disabled?: boolean;
};

export const Popconfirm = ({
    title,
    description,
    onConfirm,
    onCancel,
    okText = "OK",
    cancelText = "Cancel",
    okType = "primary",
    children,
    icon,
    disabled = false,
}: PopconfirmProps) => {
    const { t } = useTranslation();

    if (disabled) {
        return <>{children}</>;
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="wim-popconfirm-content">
                <div className="wim-popconfirm-inner">
                    <div className="wim-popconfirm-message">
                        <span className="wim-popconfirm-icon">
                            {icon || <Icon name="CircleIcon" color="caution" size="small" />}
                        </span>
                        <div className="wim-popconfirm-title">{typeof title === "string" ? t(title) : title}</div>
                    </div>
                    {description && (
                        <div className="wim-popconfirm-description">
                            {typeof description === "string" ? t(description) : description}
                        </div>
                    )}
                    <div className="wim-popconfirm-actions">
                        <PopoverClose asChild>
                            <Button
                                size="small"
                                label={cancelText}
                                onClick={onCancel}
                                priority="tertiary"
                            />
                        </PopoverClose>
                        <PopoverClose asChild>
                            <Button
                                size="small"
                                label={okText}
                                onClick={onConfirm}
                                priority="primary"
                                role={okType as any}
                            />
                        </PopoverClose>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
