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
/**
 * 複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。
 */
export declare const QueryBuilder: ({ fields, query, defaultQuery, onChange, maxDepth, className, id: customId, labels, }: QueryBuilderProps) => import("react/jsx-runtime").JSX.Element;
