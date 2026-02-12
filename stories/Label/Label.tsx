import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Badge } from "../Badge/Badge";
import "./label.scss";

type LabelProps = React.ComponentPropsWithoutRef<"label"> & {
    label: string;
    required?: boolean;
    showOptional?: boolean;
    className?: string;
};

/**
 * フォーム項目のラベルを表示するコンポーネント。
 */
export const Label = ({
    label,
    required = false,
    showOptional = false,
    className,
    children,
    ...props
}: LabelProps) => {
    const { t } = useTranslation();

    return (
        <label
            className={classNames("wim-label", className)}
            {...props}
        >
            <div className="wim-label__header">
                <span className="wim-label__text">{t(label)}</span>
                {required ? (
                    <Badge
                        content="required"
                        color="error"
                        size="small"
                        className="wim-label__badge"
                        aria-hidden="true"
                    />
                ) : (
                    showOptional && (
                        <Badge
                            content="optional"
                            color="neutral"
                            size="small"
                            className="wim-label__badge"
                            aria-hidden="true"
                        />
                    )
                )}
            </div>
            {children}
        </label>
    );
};


