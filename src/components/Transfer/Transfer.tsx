import React, { useState, useMemo, useId, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { BaseListItem } from "../_internal/BaseListItem";
import { FieldTemplate } from "../_internal/FieldTemplate/FieldTemplate";
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
  onChange?: (
    targetKeys: string[],
    direction: "toLeft" | "toRight",
    moveKeys: string[],
  ) => void;
  titles?: [string, string];
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
};

/**
 * 2つのカラム間でアイテムを移動させて選択を行うためのコンポーネント。
 */
export const Transfer = ({
  dataSource = [],
  targetKeys,
  onChange,
  titles = ["transfer_source", "transfer_target"],
  className,
  style,
  disabled = false,
  label,
  error,
  required,
  layout = "vertical",
}: TransferProps) => {
  const { t } = useTranslation("common");
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [internalTargetKeys, setInternalTargetKeys] = useState<string[]>(
    targetKeys || [],
  );
  const generatedId = useId();
  const id = `wim-transfer-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  // Controlled vs Uncontrolled targetKeys
  const isControlled = typeof targetKeys !== "undefined" && !!onChange;
  const currentTargetKeys = isControlled
    ? (targetKeys as string[])
    : internalTargetKeys;

  const sourceData = useMemo(
    () => dataSource.filter((item) => !currentTargetKeys.includes(item.key)),
    [dataSource, currentTargetKeys],
  );
  const targetData = useMemo(
    () => dataSource.filter((item) => currentTargetKeys.includes(item.key)),
    [dataSource, currentTargetKeys],
  );

  // aria-activedescendant: track focused option key per list
  const [focusedSourceKey, setFocusedSourceKey] = useState<string | null>(null);
  const [focusedTargetKey, setFocusedTargetKey] = useState<string | null>(null);

  // Reset focused key if it's no longer in the list (e.g. after move)
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (focusedSourceKey && !sourceData.some((d) => d.key === focusedSourceKey)) {
      setFocusedSourceKey(null);
    }
  }, [sourceData, focusedSourceKey]);

  useEffect(() => {
    if (focusedTargetKey && !targetData.some((d) => d.key === focusedTargetKey)) {
      setFocusedTargetKey(null);
    }
  }, [targetData, focusedTargetKey]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSelect = (key: string) => {
    if (disabled) return;
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const handleSelectAll = (keys: string[], _listType: "source" | "target") => {
    if (disabled) return;
    const listKeys = keys;
    const allSelectedInList = listKeys.every((k) => selectedKeys.includes(k));

    if (allSelectedInList) {
      setSelectedKeys((prev) => prev.filter((k) => !listKeys.includes(k)));
    } else {
      setSelectedKeys((prev) => [...new Set([...prev, ...listKeys])]);
    }
  };

  const moveItems = (direction: "toLeft" | "toRight") => {
    if (disabled) return;
    const currentListKeys =
      direction === "toRight"
        ? sourceData.map((d) => d.key)
        : targetData.map((d) => d.key);

    const moveKeys = selectedKeys.filter((k) => currentListKeys.includes(k));
    const nextTargetKeys =
      direction === "toRight"
        ? [...currentTargetKeys, ...moveKeys]
        : currentTargetKeys.filter((k) => !moveKeys.includes(k));

    if (!isControlled) {
      setInternalTargetKeys(nextTargetKeys);
    }

    if (onChange) {
      onChange(nextTargetKeys, direction, moveKeys);
    }
    setSelectedKeys((prev) => prev.filter((k) => !moveKeys.includes(k)));
  };

  const getAdjacentKey = (
    data: TransferItem[],
    currentKey: string | null,
    dir: 1 | -1,
  ): string | null => {
    const enabled = data.filter((item) => !item.disabled);
    if (enabled.length === 0) return null;
    if (currentKey === null) {
      return dir === 1 ? enabled[0].key : enabled[enabled.length - 1].key;
    }
    const idx = enabled.findIndex((item) => item.key === currentKey);
    if (idx === -1) return enabled[0].key;
    return enabled[(idx + dir + enabled.length) % enabled.length].key;
  };

  const handleListKeyDown = (
    e: React.KeyboardEvent,
    listType: "source" | "target",
    data: TransferItem[],
  ) => {
    if (disabled) return;
    const focusedKey = listType === "source" ? focusedSourceKey : focusedTargetKey;
    const setFocusedKey =
      listType === "source" ? setFocusedSourceKey : setFocusedTargetKey;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedKey(getAdjacentKey(data, focusedKey, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedKey(getAdjacentKey(data, focusedKey, -1));
    } else if (e.key === "Home") {
      e.preventDefault();
      const first = data.find((item) => !item.disabled);
      if (first) setFocusedKey(first.key);
    } else if (e.key === "End") {
      e.preventDefault();
      const last = [...data].reverse().find((item) => !item.disabled);
      if (last) setFocusedKey(last.key);
    } else if (e.key === " ") {
      e.preventDefault();
      const focusedItem = data.find((item) => item.key === focusedKey);
      if (focusedItem && !focusedItem.disabled) {
        handleSelect(focusedItem.key);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      moveItems(listType === "source" ? "toRight" : "toLeft");
    }
  };

  const renderList = (
    data: TransferItem[],
    title: string,
    _type: "source" | "target",
  ) => {
    const listKeys = data.filter((d) => !d.disabled).map((d) => d.key);
    const listSelectedKeys = selectedKeys.filter((k) => listKeys.includes(k));
    const isAllSelected =
      listKeys.length > 0 && listSelectedKeys.length === listKeys.length;
    const isIndeterminate =
      listSelectedKeys.length > 0 && listSelectedKeys.length < listKeys.length;
    const focusedKey = _type === "source" ? focusedSourceKey : focusedTargetKey;
    const setFocusedKey =
      _type === "source" ? setFocusedSourceKey : setFocusedTargetKey;
    const activeDescendantId =
      focusedKey && data.some((d) => d.key === focusedKey)
        ? `${id}-${_type}-option-${focusedKey}`
        : undefined;

    return (
      <div className="wim-transfer__list">
        <div className="wim-transfer__header">
          <Checkbox
            checked={isAllSelected}
            indeterminate={isIndeterminate}
            onChange={() => handleSelectAll(listKeys, _type)}
            disabled={disabled || listKeys.length === 0}
            label={t(title)}
          />
          <span className="wim-transfer__header-count">
            {listSelectedKeys.length}/{data.length}
          </span>
        </div>
        <div
          className="wim-transfer__body"
          role="listbox"
          aria-multiselectable="true"
          aria-label={t(title)}
          aria-activedescendant={activeDescendantId}
          tabIndex={disabled || data.length === 0 ? -1 : 0}
          onKeyDown={(e) => handleListKeyDown(e, _type, data)}
          onFocus={() => {
            // フォーカス時に未選択なら先頭の有効アイテムを初期フォーカスに設定
            if (!focusedKey) {
              const first = data.find((item) => !item.disabled);
              if (first) setFocusedKey(first.key);
            }
          }}
        >
          {data.length === 0 ? (
            <div className="wim-transfer__empty" aria-live="polite">
              {t("no_data")}
            </div>
          ) : (
            data.map((item) => (
              <BaseListItem
                key={item.key}
                id={`${id}-${_type}-option-${item.key}`}
                className="wim-transfer__item"
                disabled={disabled || item.disabled}
                active={focusedKey === item.key}
                onClick={() => {
                  if (!item.disabled) {
                    setFocusedKey(item.key);
                    handleSelect(item.key);
                  }
                }}
                role="option"
                aria-selected={selectedKeys.includes(item.key)}
                aria-disabled={disabled || item.disabled}
                icon={
                  <Checkbox
                    checked={selectedKeys.includes(item.key)}
                    disabled={disabled || item.disabled}
                    tabIndex={-1}
                    readOnly
                    aria-hidden={true}
                  />
                }
              >
                {t(item.title)}
              </BaseListItem>
            ))
          )}
        </div>
      </div>
    );
  };

  const moveRightDisabled =
    selectedKeys.filter((k) => sourceData.some((d) => d.key === k)).length ===
    0;
  const moveLeftDisabled =
    selectedKeys.filter((k) => targetData.some((d) => d.key === k)).length ===
    0;

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <div className="wim-transfer-container">
        <div
          className={classNames(
            "wim-transfer",
            disabled && "wim-transfer--disabled",
          )}
          style={style}
          role="group"
          aria-labelledby={label ? labelId : undefined}
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
      </div>
    </FieldTemplate>
  );
};
