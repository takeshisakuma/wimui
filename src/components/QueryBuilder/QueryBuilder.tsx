import React, { useState, useId, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button/Button";
import { Selectbox } from "../Selectbox/Selectbox";
import { Input } from "../Input/Input";
import { NumberInput } from "../NumberInput/NumberInput";
import { DatePicker } from "../DatePicker/DatePicker";
import { Switch } from "../Switch/Switch";
import { SegmentedControl } from "../SegmentedControl/SegmentedControl";
import "./querybuilder.scss";

export type QueryFieldType = "string" | "number" | "date" | "boolean";

export interface QueryField {
  name: string;
  label: string;
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
}

const generateId = () => Math.random().toString(36).substring(2, 11);

const OPERATORS_BY_TYPE: Record<QueryFieldType, { label: string; value: string }[]> = {
  string: [
    { label: "operators.equal", value: "=" },
    { label: "operators.not_equal", value: "!=" },
    { label: "operators.contains", value: "contains" },
    { label: "operators.starts_with", value: "starts_with" },
    { label: "operators.ends_with", value: "ends_with" },
    { label: "operators.is_null", value: "is_null" },
    { label: "operators.is_not_null", value: "is_not_null" },
  ],
  number: [
    { label: "operators.equal", value: "=" },
    { label: "operators.not_equal", value: "!=" },
    { label: "operators.greater_than", value: ">" },
    { label: "operators.less_than", value: "<" },
    { label: "operators.greater_than_or_equal", value: ">=" },
    { label: "operators.less_than_or_equal", value: "<=" },
    { label: "operators.is_null", value: "is_null" },
    { label: "operators.is_not_null", value: "is_not_null" },
  ],
  date: [
    { label: "operators.equal", value: "=" },
    { label: "operators.not_equal", value: "!=" },
    { label: "operators.after", value: ">" },
    { label: "operators.before", value: "<" },
    { label: "operators.after_or_on", value: ">=" },
    { label: "operators.before_or_on", value: "<=" },
    { label: "operators.is_null", value: "is_null" },
    { label: "operators.is_not_null", value: "is_not_null" },
  ],
  boolean: [
    { label: "operators.equal", value: "=" },
    { label: "operators.not_equal", value: "!=" },
    { label: "operators.is_null", value: "is_null" },
    { label: "operators.is_not_null", value: "is_not_null" },
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
}: QueryBuilderProps) => {
  const { t } = useTranslation("components");
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
    announce(t("query_builder.rule_added", "Rule added"));
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
    announce(t("query_builder.group_added", "Group added"));
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
    announce(t("query_builder.removed", "Removed"));
  };

  const renderRule = (rule: QueryRule, _isExcluded: boolean) => {
    const fieldDef = fields.find((f) => f.name === rule.field);
    const type = fieldDef?.type || "string";
    const operators = OPERATORS_BY_TYPE[type];

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
      <div key={rule.id} className="wim-query-rule" role="group" aria-label={t("query_builder.rule", "Rule")}>
        <div className="wim-query-rule__fields">
          <Selectbox
            className="wim-query-rule__field"
            options={fields.map((f) => ({ label: t(f.label), value: f.name }))}
            value={rule.field}
            onChange={handleFieldChange}
            aria-label={t("query_builder.field")}
            fullWidth
          />
          <Selectbox
            className="wim-query-rule__operator"
            options={operators.map((op) => ({ label: t(op.label), value: op.value }))}
            value={rule.operator}
            onChange={(val) => handleUpdate(rule.id, { operator: val })}
            aria-label={t("query_builder.operator")}
            fullWidth
          />
          {!isUnaryOperator && (
            <div className="wim-query-rule__value">
              {type === "number" ? (
                <NumberInput
                  value={typeof rule.value === "boolean" ? undefined : (rule.value ?? undefined)}
                  onChange={(e) => handleUpdate(rule.id, { value: e.target.value })}
                  aria-label={t("query_builder.value")}
                />
              ) : type === "date" ? (
                <DatePicker
                  value={typeof rule.value === "string" || typeof rule.value === "number" ? new Date(rule.value) : undefined}
                  onChange={(date) =>
                    handleUpdate(rule.id, { value: date ? date.toISOString() : "" })
                  }
                  aria-label={t("query_builder.value")}
                />
              ) : type === "boolean" ? (
                <Selectbox
                  options={[
                    { label: t("query_builder.true"), value: "true" },
                    { label: t("query_builder.false"), value: "false" },
                  ]}
                  value={String(rule.value)}
                  onChange={(val) => handleUpdate(rule.id, { value: val === "true" })}
                  aria-label={t("query_builder.value")}
                  fullWidth
                />
              ) : (
                <Input
                  value={typeof rule.value === "boolean" ? undefined : (rule.value ?? undefined)}
                  onChange={(e) => handleUpdate(rule.id, { value: e.target.value })}
                  aria-label={t("query_builder.value")}
                />
              )}
            </div>
          )}
          <IconButton
            iconName="TrashIcon"
            aria-label={t("query_builder.remove_rule")}
            priority="tertiary"
            size="medium"
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
              size="medium"
              options={[
                { label: "AND", value: "and" },
                { label: "OR", value: "or" },
              ]}
              value={group.combinator}
              onChange={(val) => handleUpdate(group.id, { combinator: val as "and" | "or" })}
              aria-label={t("query_builder.combinator", "Combinator")}
            />
            <Switch
              size="medium"
              label="NOT"
              checked={group.not}
              onChange={(e) => handleUpdate(group.id, { not: e.target.checked })}
            />
          </div>
          {depth > 0 && (
            <IconButton
              iconName="TrashIcon"
              aria-label={t("query_builder.remove_group")}
              priority="tertiary"
              size="medium"
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
              : renderRule(item, isExcluded),
          )}
        </div>
        <div className="wim-query-group__actions">
          <Button
            size="medium"
            priority="tertiary"
            iconName="PlusIcon"
            onClick={() => handleAddRule(group.id)}
          >
            {t("query_builder.add_rule")}
          </Button>
          {depth < maxDepth && (
            <Button
              size="medium"
              priority="tertiary"
              iconName="PlusIcon"
              onClick={() => handleAddGroup(group.id)}
            >
              {t("query_builder.add_group")}
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
      aria-label={t("query_builder.region_label", "Query Builder")}
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
