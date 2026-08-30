import { default as React } from '../../../../node_modules/react';
export type QueryFieldType = "string" | "number" | "date" | "boolean";
export interface QueryField {
    name: string;
    label: React.ReactNode;
    type: QueryFieldType;
}
export interface QueryRule {
    id: string;
    field: string;
    operator: QueryOperator;
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
/**
 * 演算子の語彙。**利用者が `QueryRule.operator` に渡すのは `value`（記号）**で、
 * `key` は翻訳の引き当てにしか使わない。以前は `operator: string` だったため
 * `"greater_equal"` のような語を渡すと**空の Select が黙って描画された**（T124）。
 * 型はこの表から導くので、値を足せば型も追随する（T38 と同じ形）。
 */
declare const DEFAULT_OPERATORS: {
    readonly string: readonly [{
        readonly label: "Equals";
        readonly value: "=";
        readonly key: "equal";
    }, {
        readonly label: "Does not equal";
        readonly value: "!=";
        readonly key: "not_equal";
    }, {
        readonly label: "Contains";
        readonly value: "contains";
        readonly key: "contains";
    }, {
        readonly label: "Starts with";
        readonly value: "starts_with";
        readonly key: "starts_with";
    }, {
        readonly label: "Ends with";
        readonly value: "ends_with";
        readonly key: "ends_with";
    }, {
        readonly label: "Is null";
        readonly value: "is_null";
        readonly key: "is_null";
    }, {
        readonly label: "Is not null";
        readonly value: "is_not_null";
        readonly key: "is_not_null";
    }];
    readonly number: readonly [{
        readonly label: "Equals";
        readonly value: "=";
        readonly key: "equal";
    }, {
        readonly label: "Does not equal";
        readonly value: "!=";
        readonly key: "not_equal";
    }, {
        readonly label: "Greater than";
        readonly value: ">";
        readonly key: "greater_than";
    }, {
        readonly label: "Less than";
        readonly value: "<";
        readonly key: "less_than";
    }, {
        readonly label: "Greater than or equal";
        readonly value: ">=";
        readonly key: "greater_than_or_equal";
    }, {
        readonly label: "Less than or equal";
        readonly value: "<=";
        readonly key: "less_than_or_equal";
    }, {
        readonly label: "Is null";
        readonly value: "is_null";
        readonly key: "is_null";
    }, {
        readonly label: "Is not null";
        readonly value: "is_not_null";
        readonly key: "is_not_null";
    }];
    readonly date: readonly [{
        readonly label: "Equals";
        readonly value: "=";
        readonly key: "equal";
    }, {
        readonly label: "Does not equal";
        readonly value: "!=";
        readonly key: "not_equal";
    }, {
        readonly label: "After";
        readonly value: ">";
        readonly key: "after";
    }, {
        readonly label: "Before";
        readonly value: "<";
        readonly key: "before";
    }, {
        readonly label: "After or on";
        readonly value: ">=";
        readonly key: "after_or_on";
    }, {
        readonly label: "Before or on";
        readonly value: "<=";
        readonly key: "before_or_on";
    }, {
        readonly label: "Is null";
        readonly value: "is_null";
        readonly key: "is_null";
    }, {
        readonly label: "Is not null";
        readonly value: "is_not_null";
        readonly key: "is_not_null";
    }];
    readonly boolean: readonly [{
        readonly label: "Equals";
        readonly value: "=";
        readonly key: "equal";
    }, {
        readonly label: "Does not equal";
        readonly value: "!=";
        readonly key: "not_equal";
    }, {
        readonly label: "Is null";
        readonly value: "is_null";
        readonly key: "is_null";
    }, {
        readonly label: "Is not null";
        readonly value: "is_not_null";
        readonly key: "is_not_null";
    }];
};
/** `QueryRule.operator` に渡せる値（`DEFAULT_OPERATORS` の `value`）。 */
export type QueryOperator = (typeof DEFAULT_OPERATORS)[QueryFieldType][number]["value"];
/**
 * 複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。
 */
export declare const QueryBuilder: ({ fields, query, defaultQuery, onChange, maxDepth, className, id: customId, labels, }: QueryBuilderProps) => React.JSX.Element;
export {};
