import React, { useState, useMemo } from "react";
import classNames from "classnames";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import "./transfer.scss";

export type TransferItem = {
    key: string;
    title: string;
    description?: string;
    disabled?: boolean;
};

export type TransferProps = {
    dataSource: TransferItem[];
    targetKeys?: string[];
    onChange?: (targetKeys: string[], direction: "toLeft" | "toRight", moveKeys: string[]) => void;
    titles?: [string, string];
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
};

/**
 * 2つのカラム間でアイテムを移動させて選択を行うためのコンポーネント。
 */
export const Transfer = ({
    dataSource = [],
    targetKeys,
    onChange,
    titles = ["Source", "Target"],
    className,
    style,
    disabled = false,
}: TransferProps) => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [internalTargetKeys, setInternalTargetKeys] = useState<string[]>(targetKeys || []);

    // Controlled vs Uncontrolled targetKeys
    const isControlled = typeof targetKeys !== "undefined" && !!onChange;
    const currentTargetKeys = isControlled ? (targetKeys as string[]) : internalTargetKeys;

    const sourceData = useMemo(() => dataSource.filter(item => !currentTargetKeys.includes(item.key)), [dataSource, currentTargetKeys]);
    const targetData = useMemo(() => dataSource.filter(item => currentTargetKeys.includes(item.key)), [dataSource, currentTargetKeys]);

    const handleSelect = (key: string) => {
        if (disabled) return;
        setSelectedKeys(prev =>
            prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
        );
    };

    const handleSelectAll = (keys: string[], listType: "source" | "target") => {
        if (disabled) return;
        const listKeys = keys;
        const allSelectedInList = listKeys.every(k => selectedKeys.includes(k));

        if (allSelectedInList) {
            setSelectedKeys(prev => prev.filter(k => !listKeys.includes(k)));
        } else {
            setSelectedKeys(prev => [...new Set([...prev, ...listKeys])]);
        }
    };

    const moveItems = (direction: "toLeft" | "toRight") => {
        if (disabled) return;
        const currentListKeys = direction === "toRight"
            ? sourceData.map(d => d.key)
            : targetData.map(d => d.key);

        const moveKeys = selectedKeys.filter(k => currentListKeys.includes(k));
        const nextTargetKeys = direction === "toRight"
            ? [...currentTargetKeys, ...moveKeys]
            : currentTargetKeys.filter(k => !moveKeys.includes(k));

        if (!isControlled) {
            setInternalTargetKeys(nextTargetKeys);
        }

        if (onChange) {
            onChange(nextTargetKeys, direction, moveKeys);
        }
        setSelectedKeys(prev => prev.filter(k => !moveKeys.includes(k)));
    };

    const renderList = (data: TransferItem[], title: string, type: "source" | "target") => {
        const listKeys = data.filter(d => !d.disabled).map(d => d.key);
        const listSelectedKeys = selectedKeys.filter(k => listKeys.includes(k));
        const isAllSelected = listKeys.length > 0 && listSelectedKeys.length === listKeys.length;
        const isIndeterminate = listSelectedKeys.length > 0 && listSelectedKeys.length < listKeys.length;

        return (
            <div className="wim-transfer__list">
                <div className="wim-transfer__header">
                    <Checkbox
                        checked={isAllSelected}
                        indeterminate={isIndeterminate}
                        onChange={() => handleSelectAll(listKeys, type)}
                        disabled={disabled || listKeys.length === 0}
                        label={title}
                    />
                    <span className="wim-transfer__header-count">
                        {listSelectedKeys.length}/{data.length}
                    </span>
                </div>
                <div className="wim-transfer__body">
                    {data.length === 0 ? (
                        <div className="wim-transfer__empty">No data</div>
                    ) : (
                        data.map(item => (
                            <div
                                key={item.key}
                                className={classNames(
                                    "wim-transfer__item",
                                    item.disabled && "wim-transfer__item--disabled"
                                )}
                                onClick={() => !item.disabled && handleSelect(item.key)}
                            >
                                <div className="wim-transfer__item-checkbox">
                                    <Checkbox
                                        checked={selectedKeys.includes(item.key)}
                                        disabled={disabled || item.disabled}
                                    />
                                </div>
                                <span className="wim-transfer__item-label">{item.title}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    };

    const moveRightDisabled = selectedKeys.filter(k => sourceData.some(d => d.key === k)).length === 0;
    const moveLeftDisabled = selectedKeys.filter(k => targetData.some(d => d.key === k)).length === 0;

    return (
        <div
            className={classNames(
                "wim-transfer",
                disabled && "wim-transfer--disabled",
                className
            )}
            style={style}
        >
            {renderList(sourceData, titles[0], "source")}

            <div className="wim-transfer__operation">
                <Button
                    priority="secondary"
                    size="small"
                    onClick={() => moveItems("toRight")}
                    disabled={disabled || moveRightDisabled}
                    iconName="ChevronRightIcon"
                />
                <Button
                    priority="secondary"
                    size="small"
                    onClick={() => moveItems("toLeft")}
                    disabled={disabled || moveLeftDisabled}
                    iconName="ChevronLeftIcon"
                />
            </div>

            {renderList(targetData, titles[1], "target")}
        </div>
    );
};
