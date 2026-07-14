import React, { useState, useId, useCallback, useRef } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../../form/Button/Button";
import { Select } from "../../form/Select/Select";
import { Input } from "../../form/Input/Input";
import { NumberInput } from "../../form/NumberInput/NumberInput";
import { DatePicker } from "../../form/DatePicker/DatePicker";
import { Switch } from "../../form/Switch/Switch";
import { SegmentedControl } from "../../form/SegmentedControl/SegmentedControl";
import styles from "./querybuilder.module.scss";

export type QueryFieldType = "string" | "number" | "date" | "boolean";

export interface QueryField {
  name: string;
  label: React.ReactNode;
  type: QueryFieldType;
}

export interface QueryRule {
  id: string;
  field: string;
  operator: string;
  value: string | number | boolean | null;
}

export interface QueryGroup {
  id: string;
  combinator: "and" | "or";
  not: boolean;
  rules: (QueryRule | QueryGroup)[];
}

export interface QueryBuilderLabels {
  ruleAdded?: string;
  groupAdded?: string;
  removed?: string;
  ruleAriaLabel?: string;
  fieldAriaLabel?: string;
  operatorAriaLabel?: string;
  valueAriaLabel?: string;
  trueLabel?: string;
  falseLabel?: string;
  removeRuleAriaLabel?: string;
  removeGroupAriaLabel?: string;
  addRuleLabel?: string;
  addGroupLabel?: string;
  regionAriaLabel?: string;
  combinatorAriaLabel?: string;
  operators?: Record<string, string>;
}

export interface QueryBuilderProps {
  /**
   * Field definitions
   */
  fields: QueryField[];
  /**
   * Current query state (controlled)
   */
  query?: QueryGroup;
  /**
   * Default query state (uncontrolled)
   */
  defaultQuery?: QueryGroup;
  /**
   * Callback when query changes
   */
  onChange?: (query: QueryGroup) => void;
  /**
   * Maximum nesting depth
   */
  maxDepth?: number;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * Unique ID for the component
   */
  id?: string;
  /**
   * Labels for internationalization
   */
  labels?: QueryBuilderLabels;
}

// VRT 環境（vrt.spec.ts が window.__VRT__ を注入）ではスクリーンショットに
// 写る Generated JSON を安定させるため決定的な連番 ID を使う
let vrtIdCounter = 0;
const generateId = () => {
  if (typeof window !== "undefined" && (window as { __VRT__?: boolean }).__VRT__) {
    vrtIdCounter += 1;
    return `vrt-id-${vrtIdCounter}`;
  }
  return Math.random().toString(36).substring(2, 11);
};

const DEFAULT_OPERATORS: Record<QueryFieldType, { label: string; value: string; key: string }[]> = {
  string: [
    { label: "Equals", value: "=", key: "equal" },
    { label: "Does not equal", value: "!=", key: "not_equal" },
    { label: "Contains", value: "contains", key: "contains" },
    { label: "Starts with", value: "starts_with", key: "starts_with" },
    { label: "Ends with", value: "ends_with", key: "ends_with" },
    { label: "Is null", value: "is_null", key: "is_null" },
    { label: "Is not null", value: "is_not_null", key: "is_not_null" },
  ],
  number: [
    { label: "Equals", value: "=", key: "equal" },
    { label: "Does not equal", value: "!=", key: "not_equal" },
    { label: "Greater than", value: ">", key: "greater_than" },
    { label: "Less than", value: "<", key: "less_than" },
    { label: "Greater than or equal", value: ">=", key: "greater_than_or_equal" },
    { label: "Less than or equal", value: "<=", key: "less_than_or_equal" },
    { label: "Is null", value: "is_null", key: "is_null" },
    { label: "Is not null", value: "is_not_null", key: "is_not_null" },
  ],
  date: [
    { label: "Equals", value: "=", key: "equal" },
    { label: "Does not equal", value: "!=", key: "not_equal" },
    { label: "After", value: ">", key: "after" },
    { label: "Before", value: "<", key: "before" },
    { label: "After or on", value: ">=", key: "after_or_on" },
    { label: "Before or on", value: "<=", key: "before_or_on" },
    { label: "Is null", value: "is_null", key: "is_null" },
    { label: "Is not null", value: "is_not_null", key: "is_not_null" },
  ],
  boolean: [
    { label: "Equals", value: "=", key: "equal" },
    { label: "Does not equal", value: "!=", key: "not_equal" },
    { label: "Is null", value: "is_null", key: "is_null" },
    { label: "Is not null", value: "is_not_null", key: "is_not_null" },
  ],
};

/**
 * 複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。
 */
export const QueryBuilder = ({
  fields,
  query,
  defaultQuery,
  onChange,
  maxDepth = 3,
  className,
  id: customId,
  labels = {},
}: QueryBuilderProps) => {
  const { t } = useWimTranslation("components");
  const {
    ruleAdded = t("query.builder.rule_added"),
    groupAdded = t("query.builder.group_added"),
    removed = t("query.builder.removed"),
    ruleAriaLabel = t("query.builder.rule"),
    fieldAriaLabel = t("query.builder.field"),
    operatorAriaLabel = t("query.builder.operator"),
    valueAriaLabel = t("query.builder.value"),
    trueLabel = t("query.builder.true"),
    falseLabel = t("query.builder.false"),
    removeRuleAriaLabel = t("query.builder.remove_rule"),
    removeGroupAriaLabel = t("query.builder.remove_group"),
    addRuleLabel = t("query.builder.add_rule"),
    addGroupLabel = t("query.builder.add_group"),
    regionAriaLabel = t("query.builder.region_label"),
    combinatorAriaLabel = t("query.builder.combinator"),
    operators: operatorOverrides = {},
  } = labels;

  const generatedId = useId();
  const id = customId || `wim-qb-${generatedId}`;
  const statusRef = useRef<HTMLDivElement>(null);

  const [internalQuery, setInternalQuery] = useState<QueryGroup>(
    defaultQuery || {
      id: generateId(),
      combinator: "and",
      not: false,
      rules: [],
    },
  );

  const currentQuery = query !== undefined ? query : internalQuery;

  const announce = useCallback((message: string) => {
    if (statusRef.current) {
      statusRef.current.textContent = "";
      // Brief timeout ensures the DOM change fires a new announcement
      setTimeout(() => {
        if (statusRef.current) statusRef.current.textContent = message;
      }, 50);
    }
  }, []);

  const updateQuery = useCallback(
    (newQuery: QueryGroup) => {
      if (query === undefined) {
        setInternalQuery(newQuery);
      }
      onChange?.(newQuery);
    },
    [query, onChange],
  );

  // Helper to deep update a group or rule
  const handleUpdate = (targetId: string, updatedItem: Partial<QueryRule | QueryGroup>) => {
    const deepClone = (item: QueryGroup): QueryGroup => {
      if (item.id === targetId) {
        return { ...item, ...updatedItem } as QueryGroup;
      }
      return {
        ...item,
        rules: item.rules.map((rule) => {
          if (rule.id === targetId) {
            return { ...rule, ...updatedItem } as QueryRule;
          }
          if ("rules" in rule) {
            return deepClone(rule);
          }
          return rule;
        }),
      };
    };
    updateQuery(deepClone(currentQuery));
  };

  const handleAddRule = (parentId: string) => {
    const firstField = fields[0];
    const newRule: QueryRule = {
      id: generateId(),
      field: firstField?.name || "",
      operator: "=",
      value: firstField?.type === "boolean" ? false : "",
    };

    const deepAdd = (item: QueryGroup): QueryGroup => {
      if (item.id === parentId) {
        return { ...item, rules: [...item.rules, newRule] };
      }
      return {
        ...item,
        rules: item.rules.map((rule) => {
          if ("rules" in rule) return deepAdd(rule);
          return rule;
        }),
      };
    };
    updateQuery(deepAdd(currentQuery));
    announce(ruleAdded);
  };

  const handleAddGroup = (parentId: string) => {
    const newGroup: QueryGroup = {
      id: generateId(),
      combinator: "and",
      not: false,
      rules: [],
    };

    const deepAdd = (item: QueryGroup): QueryGroup => {
      if (item.id === parentId) {
        return { ...item, rules: [...item.rules, newGroup] };
      }
      return {
        ...item,
        rules: item.rules.map((rule) => {
          if ("rules" in rule) return deepAdd(rule);
          return rule;
        }),
      };
    };
    updateQuery(deepAdd(currentQuery));
    announce(groupAdded);
  };

  const handleRemove = (targetId: string) => {
    const deepRemove = (item: QueryGroup): QueryGroup => {
      return {
        ...item,
        rules: item.rules
          .filter((rule) => rule.id !== targetId)
          .map((rule) => {
            if ("rules" in rule) return deepRemove(rule);
            return rule;
          }),
      };
    };
    updateQuery(deepRemove(currentQuery));
    announce(removed);
  };

  const renderGroup = (group: QueryGroup, depth: number, isExcluded: boolean) => {
    const groupLabel = `${group.combinator.toUpperCase()} group`;
    return (
      <div
        key={group.id}
        role="group"
        aria-label={groupLabel}
        className={classNames(
          styles.group,
          depth > 0 && styles.nested,
          isExcluded && styles.excluded,
        )}
      >
        <div className={styles.groupHeader}>
          <div className={styles.groupHeaderLeft}>
            <SegmentedControl
              size="md"
              options={[
                { label: "AND", value: "and" },
                { label: "OR", value: "or" },
              ]}
              value={group.combinator}
              onChange={(val) => handleUpdate(group.id, { combinator: val as "and" | "or" })}
              aria-label={combinatorAriaLabel}
              styles={{
                root: styles.segmentedControl,
                item: styles.segmentedControlItem,
                slider: styles.segmentedControlSlider,
              }}
            />
            <Switch
              size="md"
              checked={group.not}
              onChange={(e) => handleUpdate(group.id, { not: e.target.checked })}
            >NOT</Switch>
          </div>
          {depth > 0 && (
            <IconButton
              iconName="TrashIcon"
              aria-label={removeGroupAriaLabel}
              variant="ghost"
              size="md"
              color="danger"
              onClick={() => handleRemove(group.id)}
              className={styles.removeGroup}
            />
          )}
        </div>
        <div className={styles.ruleList}>
          {group.rules.map((item) =>
            "rules" in item
              ? renderGroup(item, depth + 1, isExcluded)
              : renderRule(item),
          )}
        </div>
        <div className={styles.groupActions}>
          <Button
            size="md"
            variant="ghost"
            icon="PlusIcon"
            onClick={() => handleAddRule(group.id)}
          >
            {addRuleLabel}
          </Button>
          {depth < maxDepth && (
            <Button
              size="md"
              variant="ghost"
              icon="PlusIcon"
              onClick={() => handleAddGroup(group.id)}
            >
              {addGroupLabel}
            </Button>
          )}
        </div>
      </div>
    );
  };

  const renderRule = (rule: QueryRule) => {
    const fieldDef = fields.find((f) => f.name === rule.field);
    const type = fieldDef?.type || "string";
    const operators = DEFAULT_OPERATORS[type].map(op => ({
      ...op,
      label: operatorOverrides[op.key] || op.label
    }));

    const handleFieldChange = (val: string) => {
      const newFieldDef = fields.find((f) => f.name === val);
      handleUpdate(rule.id, {
        field: val,
        operator: "=",
        value: newFieldDef?.type === "boolean" ? false : "",
      });
    };

    const isUnaryOperator = rule.operator === "is_null" || rule.operator === "is_not_null";

    return (
      <div key={rule.id} className={styles.rule} role="group" aria-label={ruleAriaLabel}>
        <div className={styles.ruleFields}>
          <Select
            className={styles.field}
            options={fields.map((f) => ({ label: f.label, value: f.name }))}
            value={rule.field}
            onChange={handleFieldChange}
            aria-label={fieldAriaLabel}
            fullWidth
            styles={{
              root: styles.select,
              trigger: styles.selectTrigger,
              inputBase: {
                root: styles.inputBase,
              }
            }}
          />
          <Select
            className={styles.operator}
            options={operators.map((op) => ({ label: op.label, value: op.value }))}
            value={rule.operator}
            onChange={(val) => handleUpdate(rule.id, { operator: val })}
            aria-label={operatorAriaLabel}
            fullWidth
            styles={{
              root: styles.select,
              trigger: styles.selectTrigger,
              inputBase: {
                root: styles.inputBase,
              }
            }}
          />
          {!isUnaryOperator && (
            <div className={styles.value}>
              {type === "number" ? (
                <NumberInput
                  value={typeof rule.value === "boolean" ? undefined : (rule.value ?? undefined)}
                  onChange={(e) => handleUpdate(rule.id, { value: e.target.value })}
                  aria-label={valueAriaLabel}
                />
              ) : type === "date" ? (
                <DatePicker
                  value={typeof rule.value === "string" || typeof rule.value === "number" ? new Date(rule.value) : undefined}
                  onChange={(date) =>
                    handleUpdate(rule.id, { value: date ? date.toISOString() : "" })
                  }
                  aria-label={valueAriaLabel}
                />
              ) : type === "boolean" ? (
                <Select
                  options={[
                    { label: trueLabel, value: "true" },
                    { label: falseLabel, value: "false" },
                  ]}
                  value={String(rule.value)}
                  onChange={(val) => handleUpdate(rule.id, { value: val === "true" })}
                  aria-label={valueAriaLabel}
                  fullWidth
                  styles={{
                    root: styles.select,
                    trigger: styles.selectTrigger,
                    inputBase: {
                      root: styles.inputBase,
                    }
                  }}
                />
              ) : (
                <Input
                  value={typeof rule.value === "boolean" ? undefined : (rule.value ?? undefined)}
                  onChange={(e) => handleUpdate(rule.id, { value: e.target.value })}
                  aria-label={valueAriaLabel}
                  styles={{
                    root: styles.inputBase,
                  }}
                />
              )}
            </div>
          )}
          <IconButton
            iconName="TrashIcon"
            aria-label={removeRuleAriaLabel}
            variant="ghost"
            size="md"
            color="danger"
            onClick={() => handleRemove(rule.id)}
            className={styles.removeRule}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id={id}
      role="region"
      aria-label={regionAriaLabel}
      className={classNames("wim-query-builder", styles.root, className)}
    >
      <div
        ref={statusRef}
        aria-live="polite"
        aria-atomic="true"
        className={styles.srOnly}
      />
      {renderGroup(currentQuery, 0, false)}
    </div>
  );
};
