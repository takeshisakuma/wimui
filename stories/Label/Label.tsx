import React from "react";
import PropTypes from "prop-types";
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
    className = "",
    children,
    ...props
}: LabelProps) => {
    const { t } = useTranslation();

    return (
        <label
            className={[`wim-label`, className].filter(Boolean).join(" ")}
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

Label.propTypes = {
    /**
     * 表示するラベルの翻訳キーまたはテキスト。
     */
    label: PropTypes.string.isRequired,
    /**
     * 必須項目かどうか。
     */
    required: PropTypes.bool,
    /**
     * 任意項目であることを表示するかどうか。
     */
    showOptional: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
    /**
     * ラベル内に表示する要素（Input等）。
     */
    children: PropTypes.node,
};
