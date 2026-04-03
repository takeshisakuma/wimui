import React, { useState, useId, useCallback, useRef } from "react";
import classNames from "classnames";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../../form/Button/Button";
import { Selectbox } from "../../form/Selectbox/Selectbox";
import { Input } from "../../form/Input/Input";
import { NumberInput } from "../../form/NumberInput/NumberInput";
import { DatePicker } from "../../form/DatePicker/DatePicker";
import { Switch } from "../../form/Switch/Switch";
import { SegmentedControl } from "../../form/SegmentedControl/SegmentedControl";
import "./querybuilder.scss";

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

const generateId = () => Math.random().toString(36).substring(2, 11);

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
  const {
    ruleAdded = "Rule added",
    groupAdded = "Group added",
    removed = "Removed",
    ruleAriaLabel = "Rule",
    fieldAriaLabel = "Field",
    operatorAriaLabel = "Operator",
    valueAriaLabel = "Value",
    trueLabel = "True",
    falseLabel = "False",
    removeRuleAriaLabel = "Remove rule",
    removeGroupAriaLabel = "Remove group",
    addRuleLabel = "Add rule",
    addGroupLabel = "Add group",
    regionAriaLabel = "Query Builder",
    combinatorAriaLabel = "Combinator",
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
      <div key={rule.id} className="wim-query-rule" role="group" aria-label={ruleAriaLabel}>
        <div className="wim-query-rule__fields">
          <Selectbox
            className="wim-query-rule__field"
            options={fields.map((f) => ({ label: f.label, value: f.name }))}
            value={rule.field}
            onChange={handleFieldChange}
            aria-label={fieldAriaLabel}
            fullWidth
          />
          <Selectbox
            className="wim-query-rule__operator"
            options={operators.map((op) => ({ label: op.label, value: op.value }))}
            value={rule.operator}
            onChange={(val) => handleUpdate(rule.id, { operator: val })}
            aria-label={operatorAriaLabel}
            fullWidth
          />
          {!isUnaryOperator && (
            <div className="wim-query-rule__value">
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
                <Selectbox
                  options={[
                    { label: trueLabel, value: "true" },
                    { label: falseLabel, value: "false" },
                  ]}
                  value={String(rule.value)}
                  onChange={(val) => handleUpdate(rule.id, { value: val === "true" })}
                  aria-label={valueAriaLabel}
                  fullWidth
                />
              ) : (
                <Input
                  value={typeof rule.value === "boolean" ? undefined : (rule.value ?? undefined)}
                  onChange={(e) => handleUpdate(rule.id, { value: e.target.value })}
                  aria-label={valueAriaLabel}
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
            className="wim-query-rule__remove"
          />
        </div>
      </div>
    );
  };

  const renderGroup = (group: QueryGroup, depth: number, isParentExcluded = false) => {
    const isExcluded = group.not ? !isParentExcluded : isParentExcluded;
    const groupLabel = `${group.combinator.toUpperCase()}${group.not ? " NOT" : ""} group`;
    return (
      <div
        key={group.id}
        role="group"
        aria-label={groupLabel}
        className={classNames(
          "wim-query-group",
          depth > 0 && "wim-query-group--nested",
          isExcluded && "wim-query-group--excluded",
        )}
      >
        <div className="wim-query-group__header">
          <div className="wim-query-group__header-left">
            <SegmentedControl
              size="md"
              options={[
                { label: "AND", value: "and" },
                { label: "OR", value: "or" },
              ]}
              value={group.combinator}
              onChange={(val) => handleUpdate(group.id, { combinator: val as "and" | "or" })}
              aria-label={combinatorAriaLabel}
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
              className="wim-query-group__remove"
            />
          )}
        </div>
        <div className="wim-query-builder__rule-list">
          {group.rules.map((item) =>
            "rules" in item
              ? renderGroup(item, depth + 1, isExcluded)
              : renderRule(item),
          )}
        </div>
        <div className="wim-query-group__actions">
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

  return (
    <div
      id={id}
      role="region"
      aria-label={regionAriaLabel}
      className={classNames("wim-query-builder", className)}
    >
      {/* Screen reader live region for dynamic announcements */}
      <div
        ref={statusRef}
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      />
      {renderGroup(currentQuery, 0, false)}
    </div>
  );
};
